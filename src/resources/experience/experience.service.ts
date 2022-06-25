import {
    CandidateExperienceRepository,
    CandidateTagRepository,
} from './experience.repository';
import {
    addCandidateExperienceI,
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
        experienceId: number
    ): Promise<Boolean> {
        try {
            let experience = await this.experienceRepo.findOne({where:{ id: experienceId }})
            if (! experience) throw new Error("can't find entity")
            await this.experienceRepo.destroy({
                where: { id: experienceId },
            });
            
            return true;
        } catch (error) {
            throw error;
        }
    }
    public async addCandidateExperience(
        input: addCandidateExperienceI
    ): Promise<boolean> {
        try {
            let candidate_id: number = input.candidate_id;
            let db_experience: CandidateExperienceI[] = [];
            let db_tags: CandidateTagI[] = [];

            // preparing for the bulk create
            input.companies.map((company) =>
                db_experience.push({
                    candidate_id: candidate_id,
                    company_name: company.company_name,
                    role: company.role,
                })
            );
            input.tags.map((tag) =>
                db_tags.push({ candidate_id: candidate_id, tag_name: tag })
            );

            await this.experienceRepo.bulkCreate(db_experience as any);
            await this.tagsRpo.bulkCreate(db_tags as any);

            return true;
        } catch (error) {
            throw new Error('Unable to get retrieve candidate');
        }
    }
    /**
     * get all Candidate
     */
}

export default ExperienceService;
