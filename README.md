## Background Context

In this project, you will create an application using a query language, designed to make APIs fast, flexible and developer-friendly. In the first part, you will create the back-end part using ExpressJs and set up GraphQl with all the parts (schema, root query and resolve function). In second part, you will connect your back-end to mongoDB and test your queries to GraphQL server using Graphiql.In the last part, you will create the front-end part using ReactJS and the GraphQL Client Apollo.

## Resources

**Read or watch**:

- [GraphQL](https://intranet.atlasschool.com/rltoken/FJgUd5EOz5SFuIuRLdvwUw)
- [GraphQL: Schemas and Types](https://intranet.atlasschool.com/rltoken/F97hGO0ahG1QAuGSDgOVkA)
- [GraphQL: Queries and Mutations](https://intranet.atlasschool.com/rltoken/nGwteBVGvpZ1z9klAz0DhQ)
- [Mongoose](https://intranet.atlasschool.com/rltoken/4PJr2zAAi9xoqI30vB_dIw)
- [Apollo-boost](https://intranet.atlasschool.com/rltoken/BljVKJza-hTi3tJuZ-8xcQ)
- [Apollo Client (React)](https://intranet.atlasschool.com/rltoken/uRzsfusrBGysli5nH1bcLw)

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.atlasschool.com/rltoken/iDQXbhrFbLNwYHLI2brw1w), **without the help of Google**:

- What GraphQL means
- What is Graphiql
- How to test queries using Graphiql
- What is Apollo
- How to connect to mongoDB
- How to make queries from React
- How to make GraphQL server accept request from another server

## What is GraphQL?

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

### Key Features of GraphQL

1. **Single Endpoint**: GraphQL typically uses a single endpoint to handle all requests, unlike REST, which uses multiple endpoints for different resources.
2. **Client-Specified Queries**: Clients can specify exactly what data they need, reducing over-fetching and under-fetching of data. This leads to more efficient network usage.
3. **Hierarchical Structure**: Queries in GraphQL are structured hierarchically, mirroring the shape of the JSON data returned. This makes it easier to understand the data being fetched.
4. **Strongly Typed Schema**: GraphQL APIs are defined by a schema that specifies the types and relationships in the API. This schema is strongly typed, which helps in validating queries and providing better tooling support.
5. **Introspection**: GraphQL APIs are self-documenting. Clients can query the schema itself to understand what queries are possible and what data structures are available.
6. **Field-Level Selection**: Clients can request specific fields within a resource, reducing the amount of data sent over the network compared to REST APIs that often return entire resources.
7. **Nested and Related Data**: GraphQL queries can include nested and related data in a single request, which reduces the number of requests needed compared to REST APIs where you might need multiple requests to gather related data.
8. **Real-Time Data with Subscriptions**: GraphQL supports real-time updates through subscriptions, allowing clients to receive updates when data changes on the server.

### Example

Here’s a simple example of a GraphQL query:

```graphql
{
  user(id: "1") {
    name
    email
    posts {
      title
      content
    }
  }
}
```

In this example, the client is requesting the name and email of a user with a specific ID, as well as the titles and contents of their posts. The response will be structured according to the query:

```json
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "posts": [
        {
          "title": "GraphQL Basics",
          "content": "An introduction to GraphQL..."
        },
        {
          "title": "Advanced GraphQL",
          "content": "Deep dive into GraphQL features..."
        }
      ]
    }
  }
}
```

### Advantages of GraphQL

- **Efficiency**: Reduces the number of requests and the amount of data transferred.
- **Flexibility**: Clients have more control over the data they receive.
- **Strong Typing**: The schema ensures that queries are validated and helps in generating precise error messages.
- **Tooling**: Strong ecosystem with tools for schema generation, validation, and introspection.

### Disadvantages of GraphQL

- **Complexity**: Can introduce complexity in terms of implementation and understanding for new developers.
- **Caching**: REST’s straightforward URL-based caching is not as simple with GraphQL.
- **Over-fetching**: If not managed well, clients can still request more data than necessary.

## How to test queries using GraphiQL

GraphiQL is an in-browser integrated development environment (IDE) for exploring GraphQL queries. It provides a convenient way to interact with a GraphQL API, test queries, and view results in real time. Here's a step-by-step guide on how to use GraphiQL to test GraphQL queries:

### Step-by-Step Guide

1. **Accessing GraphiQL**
    - **Hosted by the Server**: Many GraphQL servers host GraphiQL at a specific endpoint, often `/graphiql` or `/graphql`. You can access it via a web browser.
    - **Standalone Applications**: You can also use standalone GraphiQL applications, such as desktop apps or browser extensions.
2. **Opening GraphiQL**
    - Navigate to the GraphiQL endpoint in your web browser. For example: `http://localhost:4000/graphiql`.
3. **Understanding the GraphiQL Interface**
    - **Query Editor**: This is where you write your GraphQL queries.
    - **Variables Panel**: This is where you define any variables used in your query.
    - **Documentation Explorer**: This provides detailed documentation of the schema, including types, queries, mutations, and subscriptions available in the API.
    - **Result Panel**: This is where the results of your queries are displayed.
4. **Writing a Query**

In the Query Editor, write your GraphQL query. For example:

```graphql
{
  user(id: "1") {
    name
    email
    posts {
      title
      content
    }
  }
}
```

1. **Executing the Query**
    - Click the "Play" button (▶️) to execute the query. The results will be displayed in the Result Panel.
2. **Using Variables**
    - If your query uses variables, define them in the Variables Panel. For example:
    
    ```graphql
    query getUser($userId: ID!) {
      user(id: $userId) {
        name
        email
        posts {
          title
          content
        }
      }
    } # this is almost like writing a function, defining parameters at top
    ```
    
    - In the Variables Panel, define the variable:
    
    ```json
    {
      "userId": "1"
    }
    ```
    

## What is Apollo?

Apollo is a popular open-source platform for building and managing GraphQL APIs. It provides a suite of tools and libraries that facilitate the development, implementation, and operation of GraphQL servers and clients. Apollo is widely adopted in the GraphQL community due to its comprehensive feature set and ease of use.

### Key Components of Apollo

1. **Apollo Client**:
    - A powerful, flexible, and fully-featured GraphQL client for JavaScript.
    - Supports integration with various front-end frameworks like React, Angular, and Vue.
    - Handles fetching, caching, and managing application data.
    - Provides tools like Apollo Provider and hooks (e.g., `useQuery`, `useMutation`) for interacting with GraphQL queries and mutations.
2. **Apollo Server**:
    - A production-ready, self-documenting GraphQL server.
    - Can be integrated with various Node.js frameworks like Express, Koa, and Hapi.
    - Supports schema stitching, allowing you to combine multiple GraphQL schemas into a single unified schema.
    - Offers features like data source integrations, caching, and subscriptions for real-time data.
3. **Apollo Studio**:
    - A cloud-based tool for managing and monitoring your GraphQL APIs.
    - Provides schema management, query analytics, performance monitoring, and error tracking.
    - Facilitates collaboration between developers by providing a shared interface for API management.

### Advantages of Using Apollo

1. **Ease of Use**: Apollo provides comprehensive documentation, tutorials, and a robust developer community, making it easier for developers to get started with GraphQL.
2. **Flexibility**: Apollo can be used with various front-end and back-end technologies, providing flexibility in how you build and deploy your GraphQL applications.
3. **Performance**: Apollo includes built-in caching and optimization features to improve the performance of your GraphQL queries.
4. **Real-Time Data**: With support for subscriptions, Apollo enables real-time data updates, which is essential for building dynamic applications.
5. **Developer Experience**: Tools like Apollo Studio enhance the developer experience by providing insights into query performance, error tracking, and schema management.

## How to connect to mongoDB

```jsx
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Database Name
const dbName = 'myDatabase';

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to MongoDB server');

    // Select the database
    const db = client.db(dbName);

    // Perform operations
    const collection = db.collection('myCollection');
    const documents = await collection.find({}).toArray();
    console.log('Documents:', documents);
  } catch (err) {
    console.error('An error occurred while connecting to MongoDB:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);
```

## How to make queries from React

To make queries from a React application, you can use the Apollo Client, which is a popular library for managing GraphQL queries in React. Here’s a step-by-step guide on how to set up and use Apollo Client to make queries from React:

### 1. Install Apollo Client and GraphQL

First, you need to install the necessary packages:
`npm install @apollo/client graphql`

### 2. Set Up Apollo Client

Create an Apollo Client instance and wrap your React application with the `ApolloProvider` to provide the client instance to your components.

```jsx
// src/apollo-client.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'https://example.com/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache()
});

export default client;
```

### 3. Wrap Your Application with ApolloProvider

Wrap your root component with the `ApolloProvider` to make the Apollo Client available throughout your React component tree.

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import client from './apollo-client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
```

### 4. Define a GraphQL Query

Define your GraphQL query using the `gql` template literal tag.

```jsx
// src/queries.js
import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      email
    }
  }
`;
```

### 5. Use the Query in a React Component

Use the `useQuery` hook provided by Apollo Client to execute the query in your React component.

```jsx
// src/User.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from './queries';

const User = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.user.name}</h1>
      <p>{data.user.email}</p>
    </div>
  );
};

export default User;
```

### 6. Using the Component in Your App

Now you can use the `User` component in your application and pass the `userId` as a prop.

```jsx
// src/App.js
import React from 'react';
import User from './User';

const App = () => {
  return (
    <div>
      <h1>GraphQL User Info</h1>
      <User userId="1" />
    </div>
  );
};

export default App;
```

### Summary

1. **Install Apollo Client and GraphQL**: Install the necessary packages.
2. **Set Up Apollo Client**: Create an Apollo Client instance and wrap your application with `ApolloProvider`.
3. **Define a GraphQL Query**: Use the `gql` template literal to define your query.
4. **Use the Query in a Component**: Use the `useQuery` hook to execute the query and handle loading, error, and data states.
5. **Integrate the Component**: Use your query component in your application.

This setup will allow you to efficiently make GraphQL queries from your React application using Apollo Client.

## How to make GraphQL server accept request from another server

To make your GraphQL server accept requests from another server, you need to configure Cross-Origin Resource Sharing (CORS). CORS is a security feature implemented by browsers to prevent cross-origin requests from unknown sources. By configuring CORS, you can allow your GraphQL server to accept requests from specific origins.

Here’s how you can configure CORS in your GraphQL server using Apollo Server and Express:

### Step-by-Step Guide

1. **Install Required Packages**
    
    You need to install Apollo Server, Express, and the CORS middleware:
    `npm install apollo-server-express express cors`
    
2. **Set Up Your GraphQL Server with CORS**
    
    Create a file (e.g., `server.js`) and configure your Apollo Server with Express and CORS middleware:
    
    ```jsx
    const express = require('express');
    const { ApolloServer, gql } = require('apollo-server-express');
    const cors = require('cors');
    
    // Define your GraphQL schema
    const typeDefs = gql`
      type Query {
        hello: String
      }
    `;
    
    // Define your GraphQL resolvers
    const resolvers = {
      Query: {
        hello: () => 'Hello, world!',
      },
    };
    
    // Create an Apollo Server instance
    const server = new ApolloServer({ typeDefs, resolvers });
    
    // Initialize an Express application
    const app = express();
    
    // Configure CORS options
    const corsOptions = {
      origin: 'http://another-server.com', // Replace with your client's URL
      credentials: true,
    };
    
    // Apply CORS middleware
    app.use(cors(corsOptions));
    
    // Apply the Apollo GraphQL middleware and set the path to /graphql
    server.applyMiddleware({ app, path: '/graphql' });
    
    // Start the server
    app.listen({ port: 4000 }, () => {
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });
    ```
    
3. **Run Your GraphQL Server**
    
    Start your server by running: `node server.js`
    

### Configuring CORS Options

The `corsOptions` object allows you to specify several settings:

- `origin`: Specifies which origins are allowed to access the server. You can specify a single origin, an array of origins, or a function to dynamically set the allowed origins.
- `credentials`: Indicates whether or not the response to the request can be exposed when the credentials flag is true. Setting this to `true` allows cookies and other credentials to be included in cross-origin requests.
