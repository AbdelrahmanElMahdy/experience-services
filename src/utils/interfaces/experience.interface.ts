import { number } from 'joi';

interface ExperienceI {
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

interface ExperienceWithTagI {
    tags: string[];
    companies: ExperienceI[];
}

interface AddExperienceI {
    tags: string[];
    company: ExperienceI;
}
export { CandidateTagI, ExperienceI, ExperienceWithTagI, AddExperienceI };
