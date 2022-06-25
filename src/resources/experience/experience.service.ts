import {
    CandidateExperienceRepository,
    CandidateTagRepository,
} from './experience.repository';
import { CandidateExperienceWithTagI } from '../../utils/interfaces/experience.interface';
import ErrorI from '../../utils/interfaces/ecxeptions.interface';
import { notFound } from '../../utils/exceptions/http.exception';
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

    /**
     * get all Candidate
     */
}

export default ExperienceService;
