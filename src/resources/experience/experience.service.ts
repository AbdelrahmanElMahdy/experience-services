import {
    CandidateExperienceRepository,
    CandidateTagRepository,
} from './experience.repository';
import {
    AddExperienceI,
    CandidateExperienceI,
    CandidateExperienceWithTagI,
    CandidateTagI,
} from '../../utils/interfaces/experience.interface';
class ExperienceService {
    private experienceRepo = CandidateExperienceRepository;
    private tagsRpo = CandidateTagRepository;
    /**
     * retrieve candidates with experiment
     */
    public async getRetrieveCandidatesExperience(
        candidate_id: number
    ): Promise<CandidateExperienceWithTagI> {
        try {
            let candidateExperience = await this.experienceRepo.findAll({
                where: { candidate_id },
            });
            let candidateTag = await this.tagsRpo.findAll({
                where: { candidate_id: candidate_id },
            });
            let tags: string[] = [];
            candidateTag.map((tag) => tags.push(tag.tag_name));

            return { tags: tags, companies: candidateExperience };
        } catch (error) {
            throw new Error('Unable to get retrieve candidate');
        }
    }
    public async deleteCandidateExperience(
        experienceId: number,
        current_candidate_id: number
    ): Promise<Boolean> {
        try {
            let experience = await this.experienceRepo.findOne({
                where: { id: experienceId },
            });
            if (!experience) throw new Error("can't find entity");
            if (experience.candidate_id !== current_candidate_id)
                throw new Error('Unauthorized');
            await this.experienceRepo.destroy({
                where: { id: experienceId },
            });

            return true;
        } catch (error) {
            throw error;
        }
    }
    public async addCandidateExperience(
        input: AddExperienceI,
        current_candidate_id: number
    ): Promise<boolean> {
        try {
            let db_experience: CandidateExperienceI = input.company;
            let db_tags: CandidateTagI[] = [];

            // preparing for the bulk create
            input.tags.map((tag) =>
                db_tags.push({
                    candidate_id: current_candidate_id,
                    tag_name: tag,
                })
            );

            await this.experienceRepo.create({
                candidate_id: current_candidate_id,
                company_name: db_experience.company_name,
                role: db_experience.role,
            });
            await this.tagsRpo.bulkCreate(db_tags as any);

            return true;
        } catch (error) {
            throw new Error('Unable to get retrieve candidate');
        }
    }
}

export default ExperienceService;
