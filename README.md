# Isomorphic website setup

## Goals
- setup to create & deploy mature website
- Typescript
- easily extendable
- both static react pages as pages served from a CMS

## Stack
- typescript
- webpack
- jest
- swagger
- mongoose & mongDB

## TODO
1. Implement swagger documentation 
2. Add services & controller to architecture -> https://dev.to/eetukudo_/understanding-mvc-pattern-in-nodejs-2bdn
3. Finish webpack-setup
   - make build succeed
   - watch entry files & run server while watching the dist folder
4. Actually serve & hydrate sections
5. add website-sections package to the dependencies
6. Test controllers & services
7. Replace webpack by turbopack
8. Replace tsc by swc
9. Pipeline
   - installing dependencies
   - testing
   - linting
   - typecheck
   - building
   - version++ by conventional commits + update CHANGELOG.md
   - running