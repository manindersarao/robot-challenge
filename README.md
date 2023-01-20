#  robot-challenge

Problem statement: https://github.com/ioof-holdings/recruitment/wiki/Robot-Challenge

### Install dependencies

Run `npm install` to install dependencies

### Run tests

Run `npm run test` to run the tests. The test would run in watch mode.

### Run linter

Run `npm run linter` to check for linter errors and warnings.

### How to run program

#### Mode A - Manual input
Usage: `npm start` and input commands on prompt 
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
example:
PLACE 0,0,NORTH 
LEFT
REPORT

#### Mode B - Automated input
`npm run start .\automation\inputs.txt `


####Understanding application structure
- [index.ts](src/index.ts) is root of the application.
- [enums](src/enums/) defines enums for commands and robot movements.
- [interfaces](src/interfaces/) defines blueprint for robots movement and postion on board.
- [movements](src/movements) handler for robot movements and commands on board.
- [robotPlayer](src/robotPlayer/) defines robot player and control movement on board.
- [simulator](src.simulator) defines all the rules for simulation.
- [table](src/table/) initialises table top with defined values.
- [constraints](src/constraints/) set position boundaries.

The following resources detail how the configurations in this repo were determined:

### Configs

- [.eslintrc.json](./.eslintrc.json)

  - https://typescript-eslint.io/docs/#step-2-configuration
  - https://github.com/prettier/eslint-plugin-prettier#recommended-configuration

- [jest.config.js](./jest.config.js)

  - https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file

- [tsconfig.json](./tsconfig.json)

  - https://www.bayanbennett.com/posts/stop-messing-with-tsconfig

### Actions

- [.github/dependabot.yml](./.github/dependabot.yml)

  - https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file

- [.github/workflows/codeql-analysis.yml](./.github/workflows/codeql-analysis.yml)

  - https://github.com/github/codeql-action

- [.github/workflows/node.js.yml](./.github/workflows/node.js.yml)

  - https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml


ToDo:
- Support multiple robots.
- Board columns and rows can be set with user input.
- Graphical user interface