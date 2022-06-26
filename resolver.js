const Pet = require('./models/Pet')

const resolvers = {
    Query: {
      hello: () => {
        return 'Hello World';
      },
      getAllPets: async () => {
        return await Pet.find({})
      },
      getPet: async (_, {_id}) =>{
        return await Pet.findById(_id)
      }
    },
    Mutation:{
        newPet: async(_, {petInput: {_id, name, age, petType, gender, feedingPattern, medicationPattern, boardingDuration}})=>{
            const registerPet = await Pet.create({
                _id: _id,
                reg_time: new Date().toISOString(),
                name: name,
                age: age,
                petType: petType,
                gender: gender,
                feedingPattern: feedingPattern,
                boardingDuration: boardingDuration
            });
            return registerPet;
        }
    }
  };


module.exports = resolvers;