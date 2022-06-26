import ErrorI from '../../utils/interfaces/ecxeptions.interface';
import {
    AddExperienceI,
    ExperienceWithTagI,
} from '../../utils/interfaces/experience.interface';
import ExperienceService from './experience.service';

const experienceService = new ExperienceService();

export default {
    isAlive: (): string => {
        return `Alive`;
    },
    retrieveCandidateExperience: async (input: {
        candidate_id: number;
    }): Promise<ExperienceWithTagI> => {
        try {
            return await experienceService.retrieveExperience(
                input.candidate_id
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    addExperience: async (
        {
            input,
        }: {
            input: AddExperienceI;
        },
        context: any
    ): Promise<Boolean> => {
        try {
            let current_candidate_id = context.candidate_id;

            console.log(current_candidate_id);
            return await experienceService.addExperience(
                input,
                current_candidate_id
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    deleteExperience: async (
        input: {
            experienceId: number;
        },
        context: any
    ): Promise<Boolean> => {
        try {
            let current_candidate_id: number = context.candidate_id;
            return await experienceService.deleteExperience(
                input.experienceId,
                current_candidate_id
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};
