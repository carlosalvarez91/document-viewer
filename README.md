
# Document viewer

A document viewer built in `React` generated by `CRA`, consuming a `GraphQL` API and styled with `StyledComponents`

## Install and run

Install dependencies and run the project

```bash
  $ npm install 
  $ npm start
```

## Scaffoling

    The project scaffold is divided into Screens and Components

    Note: some components should be separated but for the time being and because of those components are not being reused I have decided to place them together in the same file, an example of this would be: ArtBoardHeader.js

    - src
        - assets/
        - components/
            - ArboardList
            - header/
                - ArtboardHeader
                - DocumentHeader
                - HeaderWrapper
            - Separator
            - StyledLink
            - Thumbnail
        - graphql/queries.js
        - screens/
            - ArtboardScreen
            - DocumentScreen
            - MainScreen
        - router/
             - index.js
             - routes.js
        - styles/
             - global.css
        - index.js
    
### Context API
    There are two types of header: Document and Artboard header.
    I am using the context API to programmatically set the header depending on which screen we are

### Routing
  `/` points to MainScreen view

  `/document/:documentId`  points to DocumentScreen view

   `/document/:docuementId/arboard/:artboardIndex` points to ArboardScreen view

## TO DO
  - Add Jest & React testing library tests
  - Return <Spinner/> until all files are rendered
  - Move some "atoms" components inside /components folder, especially the ones that are going to be reused
