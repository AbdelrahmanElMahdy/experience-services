import ErrorI from '../../utils/interfaces/ecxeptions.interface';
import { addCandidateExperienceI, CandidateExperienceWithTagI } from '../../utils/interfaces/experience.interface';
import ExperienceService from './experience.service';

const experienceService = new ExperienceService();

export default {
    helloworld: (): string => {
        return `hello world`;
    },
    retrieveCandidateExperience: async (input: {
        candidate_id: number;
    }): Promise<CandidateExperienceWithTagI> => {
        try {
            return await experienceService.getRetrieveCandidatesExperience(
                input.candidate_id
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    addCandidateExperience: async ({
        input,
    }: {
        input: addCandidateExperienceI;
    }): Promise<Boolean> => {
        try {
            return await experienceService.addCandidateExperience(input);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};
