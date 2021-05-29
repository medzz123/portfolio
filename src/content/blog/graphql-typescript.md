---
title: Generate types for Graphql Resolvers
description: In this article I explain how you can use the Graphql Codegen package to automatically generate types for your resolvers. 
date: 2020-07-28
keywords: Graphql, Apollo, Sequelize, Node Js, Graphql Codegen, Graphql Tools
image: /gt/graphql.png
---

Example repo: [Apollo Generated Typescript Resolvers](https://github.com/medzz123/article-graphql-generated-types)

Install these dependencies

```shell
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
```

Next, create a codegen.yml, in the root folder. Graphql Codegen will read this file for the config.

```shell
touch codegen.yml
```

### Schema

Directory or file where your graphql schema lives. You can use globe patterns as well or point to multiple files like this:

```yml
# codegen.yml
schema:
  - './src/schema/**.ts'
  - './somewhere/else.ts'
```
This will go through the files and pull all the schemas within the `gql` tags.

### Generates

This will decide where your generated file will be created. The path is relative from your yml file.

```yml
# codegen.yml
schema:
  - './src/schema.ts' 
generates:
  ./src/typings/generated.ts:
```

### Config

Now, add the config options, to map `context` and `models`. There are many other options, which are documented in [Graphql Codegen Website](https://graphql-code-generator.com/).

```yml
# codegen.yml
schema:
  - './src/schema.ts' 
generates:
  ./src/typings/generated.ts:
    config:
      contextType: ./types#Context 
      mappers:
        Customer: ./types#CustomerModel 
        Vehicle: ./types#VehicleModel
```

The paths are relative from the generated file.

**NOTE**: `#CustomerModel` &  `#VehicleModel` & `#Context` are not a comments, but the name of the types exported in `types`.

Finally, we add the plugins necessary for this to work, and create a script to run it.

```yml
# codegen.yml
schema:
  - './src/schema.ts'
generates:
  ./src/typings/generated.ts:
    config:
      contextType: ./types#Context 
      mappers: 
        Customer: ./types#CustomerModel 
        Vehicle: ./types#VehicleModel
    plugins: 
      - typescript
      - typescript-resolvers
```
<br/>

```json
// package.json
"generate": "graphql-codegen"
```

![Example](/gt/example.png)

And here you can see typescript in action

![Typescript in action](/gt/types.png)

**Full example repo with Sequelize as ORM**: [Apollo Generated Typescript Resolvers](https://github.com/medzz123/article-graphql-generated-types)