export default `
type candidateExperience{
    id: Int!
    candidate_id: Int!
    company_name: String!
    role:String!
}


type CandidateTags{
    id: Int!
    candidate_id: Int!
    tag_name:String!
}

type experienceWithTags{
    tags:[String]
    companies:[candidateExperience]
}

input experienceInput{
    company_name: String!
    role:String!
}

input addExperienceInput{
    tags:[String]
    company:experienceInput
}

type Query {
    isAlive: String
    retrieveCandidateExperience(candidate_id:Int!):experienceWithTags
}
type Mutation{
    addExperience(input:addExperienceInput): Boolean
    deleteExperience(experienceId:Int!):Boolean
}

`;
