import { number } from 'joi';

interface CandidateExperienceI {
    id?: number;
    candidate_id?: number;
    company_name: string;
    role: string;
}

interface CandidateTagI {
    id?: number;
    candidate_id: number;
    tag_name: string;
}

interface CandidateExperienceWithTagI {
    tags: string[];
    companies: CandidateExperienceI[];
}
interface addCandidateExperienceI extends CandidateExperienceWithTagI {
    candidate_id: number;
}
export {
    CandidateTagI,
    CandidateExperienceI,
    CandidateExperienceWithTagI,
    addCandidateExperienceI,
};
