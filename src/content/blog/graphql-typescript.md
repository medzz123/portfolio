---
title: Generate types for Graphql Resolvers
description: In this article I explain how you can use the Graphql Codegen package to automatically generate types for your resolvers from your models and schema. 
date: 2020-07-28
keywords: Graphql, Apollo, Sequelize, Node Js, Graphql Codegen, Graphql Tools
image: /graphql-typescript/graphql.png
---

Example repo: [Apollo Generated Typescript Resolvers](https://github.com/mahedihs1997/article-graphql-generated-types)

Lets install some dependencies

```shell
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
```

Next, we need to create a codegen.yml file in the root folder

```shell
touch codegen.yml
```

And populate it with

```yml
# codegen.yml
schema:
  - './src/schema.ts' # Where your schema lives
generates:
  ./src/typings/generated.ts: # Where your types will be generated to
    config:
      contextType: ./types#Context # Your context type
      mappers: # Your model mappings
        Customer: ./types#CustomerModel 
        Vehicle: ./types#VehicleModel
    plugins: # Plugins necessary for this to work
      - typescript
      - typescript-resolvers
```
<br/>
<br/>

## Schema

Directory or file where your schema lives. You can use globe patterns as well or point to multiple files like this:

```yml
schema:
  - './src/schema/**.ts'
  - './somewhere/else.ts'
```
This will go through the files and pull all the schemas within the `gql` tags.

If you have them all over the place, you can always point to the root directory, but it might take a while to go through all the files.

## Generates

The line below generates will decide where your generated file will be created. The path is relative from your yml file.

```yml
generates:
  ./src/typings/generated.ts:
```

After this we add the config options, where we can map our context and models. There are many other options, and you find them in the documentation of the package.

In my case I have a file called `types.ts` in the directory where my generated file will be created. The

```ts
// types.ts
import { CustomerModelStatic } from '../models/customer';
import { VehicleModelStatic } from '../models/vehicle';

export type Context = {
  secret: string;
  models: {
    // These are my Sequelize models
    Customer: CustomerModelStatic; 
    Vehicle: VehicleModelStatic;
  };
};
```

In this case I am writing `contextType: ./types#Context`. As you can observe I am pointing to the file as `./types`. Graphql codegen will read with relative imports from where the file is generated, and we can `#NameOfExport` to get the types.

This will pull the Context type and map it to our resolvers where we get the context.

```yml
generates:
  ./src/typings/generated.ts:
    config:
      contextType: ./types#Context
```

We can do the same the thing with our models. E.g we have a `Vehicle` type in our `schema` like this 

```ts
 type Vehicle {
    make: String!
    customer: Customer!
  }
```

In the database the `vehicle` model has more attributes than those that we expose, but if we don't map the models, `Graphql Codegen` will never know and add those properties when you are getting the parent like so:

```ts
export const resolvers = {
// ...queries
// ...mutations
  Vehicle: {
    customer: async (vehicle, _, context) => {
      const { models } = context;
      return await models.Customer.findOne({
        where: { customerId: vehicle.customerId },
      });
    },
  },
};
```

To get the types we simply, create a type for it and:

```tsx
export type Vehicle = {
  make: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerId: string;
}
```

map them to our schema types


```yml
config:
  contextType: ./types#Context
  mappers:
    Customer: ./types#CustomerModel
    Vehicle: ./types#VehicleModel
```

now we will be able access all the other properties such as `customerId`, `createdAt` etc.

Now lets add the script and connect it to our resolvers.

```json
// package.json
"generate": "graphql-codegen"
```

```ts
// resolver.ts
import { Resolvers } from '../typings/generated'; // Path to your types

const resolvers: Resolvers = {
  Query: {
    // ... your resolvers
  },
};

export default resolvers;
```

![Model Types](/graphql-typescript/model.png);

![Parent Types](/graphql-typescript/parent.png);