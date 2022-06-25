import {
    CandidateExperienceRepository,
    CandidateTagRepository,
} from './experience.repository';
import {
    CandidateExperienceWithTagI,
} from '../utils/interfaces/experience.interface';

class ExperienceService {
    private experienceRepo = CandidateExperienceRepository;
    private tagsRpo = CandidateTagRepository;
    /**
     * retrieve candidates with experiment
     */
    public async getRetrieveCandidatesExperience(
        candidate_id: number
    ): Promise<CandidateExperienceWithTagI | void> {
        try {
            let candidateExperience = await this.experienceRepo.findAll({
                where: { candidate_id },
            });
            let candidateTag = await this.tagsRpo.findAll({
                where: { candidate_id: candidate_id },
            })
            
            let tags:string[] = []
            candidateTag.map(tag => tags.push(tag.tag_name))

            return { tags:tags, companies: candidateExperience };
        } catch (error) {
            throw new Error('Unable to create Candidate');
        }
    }

    /**
     * get all Candidate
     */
}

export default ExperienceService;
