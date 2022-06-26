import 'dotenv/config';
import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import helmet from 'helmet';
import { Sequelize } from 'sequelize-typescript';
import {
    ExperienceRepository,
    TagRepository,
} from './resources/experience/experience.repository';
import authenticatedMiddleware from './middleware/authenticate.middleware';
import { buildSchema, GraphQLError } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import experienceSchema from './resources/experience/experience.schema';
import experienceResolver from './resources/experience/experience.resolver';

import { v4 } from 'uuid';
class App {
    public express: Application;
    public port: number = 5000;

    constructor(port: number) {
        this.express = express();
        this.port = port;

        this.initializeMiddleware();
        this.initializeControllers();
        this.initializeDateBase();
    }
    private initializeMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
        this.express.use(authenticatedMiddleware);
    }
    private initializeControllers(): void {
        this.express.use(
            '/graphql',
            graphqlHTTP((request: any, response: any, graphqlParams: any) => ({
                schema: buildSchema(experienceSchema),
                rootValue: experienceResolver,
                graphiql: true,
                context: { candidate_id: request.candidate_id },
                customFormatErrorFn: (error: GraphQLError): any => {
                    let error_uuid: any = v4();
                    console.log({ error: error.message, error_uuid });
                    return {
                        status: 'error',
                        message: error.message,
                        error_uuid,
                    };
                },
            }))
        );
    }
    private async initializeDateBase(): Promise<void> {
        const sequelize = new Sequelize({
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: 'postgres',
            port: Number(process.env.DB_PORT),
            models: [ExperienceRepository, TagRepository],
            logging: false,
        });
        try {
            await sequelize.authenticate();
            await sequelize.sync({ alter: true });
            console.log('database connected');
        } catch (error: any) {
            console.log(error.message);
        }
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
export default App;
