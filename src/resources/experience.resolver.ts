import { CandidateExperienceWithTagI } from '../utils/interfaces/experience.interface';
import ExperienceService from './experience.service';

const experienceService = new ExperienceService();

export default {
    helloworld: (): string => {
        return `hello world`;
    },
    retrieveCandidateExperience: async (input: {
        candidate_id: number;
    }): Promise<CandidateExperienceWithTagI | void> => {
        try {
            return await experienceService.getRetrieveCandidatesExperience(
                input.candidate_id
            );
        } catch (error) {
            console.log(error);
        }
    },
};
