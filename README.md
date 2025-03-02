# JavaScript Algorithms & Data Structures

[![node][18]][19]
[![npm][20]][21]

[![Standard Style Guide][3]][4]

[![license MIT][1]][2]
[![build status][9]][10]

This is a living notebook, created to:
  * Practice:
    * JavaScript
    * Algorithms & data structures
    * Unit testing
    * JS static type check (with `jsdoc` and `tsc`)
    * Git
  * Solve programming challenges.
  * Compare the running time of different implementations.
  * Contain general notes about the solutions (explanations, very simple
    complexity analysis, optimizations, references, etc.).

To solve a project, write your solution and add it to the array inside
`<project>.repo.js`. This will include it in unit testing and execution time
measurements.

## Main Commands

```bash
npm test # Run unit tests for all projects (or from current location)
```

```bash
npm test <path to test.js file> # Run unit tests for one project
```

```bash
npm run full-test # Run unit tests and linter
```

```bash
# Run execution time measurement for one project
node <path to time.js file>

# Example
node src/project-euler/001-multiples-of-3-or-5/mults-of-3-or-5.time.js
```

## Installation

First make sure you have both the `node.js` runtime and the `npm` package
manager installed. You can install them using the [official page][60] or
[nvm][61].

Then:

```bash
git clone https://github.com/JCPedroza/algorithms-and-data-structures-js.git
cd algorithms-and-data-structures-js
npm install
```

## Usage

### Run Unit Tests

```bash
node --test # Verbose, human readable
```

```bash
node --test --test-reporter dot # Minimal verbosity
```

```bash
npm test # Npm script
```

You can include a path after any of the above to run unit tests for one
specific project.

### Measure Execution Time

```bash
node <path to time.js file>
```

### Run Linter

```bash
npx standard . # Run using npx
```

```bash
npm run lint-test # Run using npm script
```

### See Available `npm run` Scripts

```bash
npm run
```

## Contributing

Have a new interesting solution? Found a bug, mistake, typo, or similar? Pull
requests are very welcome!

[![contributors][25]][26] [![commit activity][27]][28] [![issues][29]][30]
[![issues closed][31]][32] [![issues pr][33]][34] [![issues pr closed][35]][36]

[1]: https://badgen.net/github/license/JCPedroza/algorithms-and-data-structures-ts
[2]: https://opensource.org/licenses/MIT
[3]: https://cdn.rawgit.com/standard/standard/master/badge.svg
[4]: https://github.com/standard/standard
[9]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fjcpedroza%2Falgorithms-and-data-structures-js%2Fbadge%3Fref%3Dmain&style=flat
[10]: https://actions-badge.atrox.dev/jcpedroza/algorithms-and-data-structures-js/goto?ref=main

[18]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[19]: https://github.com/nodejs/node
[20]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[21]: https://github.com/npm/cli

[25]: https://img.shields.io/github/contributors/JCPedroza/algorithms-and-data-structures-js
[26]: https://github.com/JCPedroza/algorithms-and-data-structures-js/graphs/contributors
[27]: https://img.shields.io/github/commit-activity/m/JCPedroza/algorithms-and-data-structures-js
[28]: https://github.com/JCPedroza/algorithms-and-data-structures-js/graphs/commit-activity
[29]: https://img.shields.io/github/issues-raw/JCPedroza/algorithms-and-data-structures-js
[30]: https://github.com/JCPedroza/algorithms-and-data-structures-js/issues
[31]: https://img.shields.io/github/issues-closed-raw/JCPedroza/algorithms-and-data-structures-js
[32]: https://github.com/JCPedroza/algorithms-and-data-structures-js/issues
[33]: https://img.shields.io/github/issues-pr-raw/JCPedroza/algorithms-and-data-structures-js
[34]: https://github.com/JCPedroza/algorithms-and-data-structures-js/pulls
[35]: https://img.shields.io/github/issues-pr-closed-raw/JCPedroza/algorithms-and-data-structures-js
[36]: https://github.com/JCPedroza/algorithms-and-data-structures-js/pulls

[60]: https://nodejs.org/en/download
[61]: https://github.com/nvm-sh/nvm
