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
    CandidateExperienceI,
    CandidateTagI,
} from '../../utils/interfaces/experience.interface';

@Table({
    tableName: 'candidate_experience',
    timestamps: false,
})
class CandidateExperienceRepository
    extends Model
    implements CandidateExperienceI
{
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
class CandidateTagRepository extends Model implements CandidateTagI {
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

export { CandidateExperienceRepository, CandidateTagRepository };
