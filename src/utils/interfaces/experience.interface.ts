interface CandidateExperienceI {
    id?: number;
    candidate_id: number;
    company_name: string;
    role: string;
}

interface CandidateTagI {
    id?: number;
    candidate_id: number;
    tag_name: string;
}

interface CandidateExperienceWithTagI{
    tags: string[]
    companies: CandidateExperienceI[]
}
export { CandidateTagI, CandidateExperienceI, CandidateExperienceWithTagI};
