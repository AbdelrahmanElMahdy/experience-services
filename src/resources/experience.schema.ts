export default `
type candidatesExperience{
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
type candidatesExperienceWithTags{
    tags:[String]
    companies:[candidatesExperience]

}

type Query {
    helloworld: String
    retrieveCandidateExperience(candidate_id:Int!):candidatesExperienceWithTags
}

`