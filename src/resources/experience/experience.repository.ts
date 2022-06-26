import {
    Model,
    Table,
    AutoIncrement,
    PrimaryKey,
    Column,
    AllowNull,
    NotEmpty,
    DataType,
} from 'sequelize-typescript';

import {
    ExperienceI,
    CandidateTagI,
} from '../../utils/interfaces/experience.interface';

@Table({
    tableName: 'candidate_experience',
    timestamps: false,
})
class ExperienceRepository extends Model implements ExperienceI {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id?: number;

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.INTEGER)
    candidate_id!: number;

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.TEXT)
    company_name!: string;

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.TEXT)
    role!: string;
}

@Table({
    tableName: 'candidate_tags',
    timestamps: false,
})
class TagRepository extends Model implements CandidateTagI {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id?: number;

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.INTEGER)
    candidate_id!: number;

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.TEXT)
    tag_name!: string;
}

export { ExperienceRepository, TagRepository };
