const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ericdzyk:Irvaer0808@cluster0.7mbnhsc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
