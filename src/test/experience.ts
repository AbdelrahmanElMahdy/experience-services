import { expect } from 'chai';
import request from 'supertest';
import app from '../index';
var CURRENT_TOKEN: string = '';

describe('EXPERIENCE', () => {
    it('unauthorized request', async () => {
        try {
            let query: string = `
                query{
                    retrieveCandidateExperience(candidate_id:55){
                        companies{
                            role
                            id
                            company_name
                        }
                        tags
                    }
                }
            `;
            let response: any = await request(app.express).get('/graphql');
            expect(response.status).to.equal(403);
            expect(response.body.message).to.equal('unauthorized');
        } catch (error) {
            throw error;
        }
    });
    it('Alive server', async () => {
        try {
            let response: any = await request(app.express)
                .get('/graphql')
                .set({
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsImlhdCI6MTY1NjE4MzM4NiwiZXhwIjoxNjU2MjY5Nzg2fQ.JuIe4nbTopd__fk7DydS9M7Qlbtl_ZZGM5QjUV1NZKE',
                })
                .send({ query: '{isAlive}' });
            expect(response.status).to.equal(200);
            expect(response.body).to.haveOwnProperty('data');
        } catch (error) {
            throw error;
        }
    });
    it('unauthorized request', async () => {
        try {
            let query: any = {
                query: `{retrieveCandidateExperience(candidate_id:55){companies{role}tags}}`,
            };
            let response: any = await request(app.express)
                .get('/graphql')
                .set({
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsImlhdCI6MTY1NjE4MzM4NiwiZXhwIjoxNjU2MjY5Nzg2fQ.JuIe4nbTopd__fk7DydS9M7Qlbtl_ZZGM5QjUV1NZKE',
                })
                .send({ ...query });
            expect(response.status).to.equal(200);
            expect(response.body).to.haveOwnProperty('data');
        } catch (error) {
            throw error;
        }
    });
});
