const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Pet Hotel API',
      description: 'API used to easily update/view pet & owner info for pet hotels offering pet boarding services',
    },
    host: 'pet-hotel-api-cse341.herokuapp.com',
    schemes: ['https'],
  };

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);