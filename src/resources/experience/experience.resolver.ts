import ErrorI from '../../utils/interfaces/ecxeptions.interface';
import {
    AddExperienceI,
    CandidateExperienceWithTagI,
} from '../../utils/interfaces/experience.interface';
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
    addCandidateExperience: async (
        {
            input,
        }: {
            input: AddExperienceI;
        },
        context: any
    ): Promise<Boolean> => {
        try {
            let current_candidate_id = context.candidate_id;

            console.log(current_candidate_id)
            return await experienceService.addCandidateExperience(
                input,
                current_candidate_id
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    deleteCandidateExperience: async (
        input: {
            experienceId: number;
        },
        context: any
    ): Promise<Boolean> => {
        try {
            let current_candidate_id: number = context.candidate_id;
            return await experienceService.deleteCandidateExperience(
                input.experienceId,
                current_candidate_id
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};
