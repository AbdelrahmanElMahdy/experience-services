interface ExperienceI {
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

export {CandidateTagI, ExperienceI}