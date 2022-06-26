const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        hello: String

        getAllPets:[Pet]
        getPet(_id: Int!): Pet!
    }

    input NewPetInput {
        _id: Int
        name: String
        age: Int
        petType: String
        gender: String
        feedingPattern: String
        medicationPattern: String
        boardingDuration: Int
    }

    type Pet{
        _id: Int
        reg_time: String
        name: String
        age: Int
        petType: String
        gender: String
        feedingPattern: String
        medicationPattern: String
        boardingDuration: Int
  }

    type Mutation{
        newPet(petInput: NewPetInput): Pet!
    }
  
`

module.exports = typeDefs;