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

type candidateExperienceWithTags{
    tags:[String]
    companies:[candidateExperience]
}

input candidateExperienceInput{
    company_name: String!
    role:String!
}

input addCandidateExperienceInput{
    candidate_id: Int!
    tags:[String]
    companies:[candidateExperienceInput]
}

type Query {
    helloworld: String
    retrieveCandidateExperience(candidate_id:Int!):candidateExperienceWithTags
}
type Mutation{
    addCandidateExperience(input:addCandidateExperienceInput): Boolean
    deleteCandidateExperience(experienceId:Int!):Boolean
}

`;
