# Changelog

<details>
<summary>Update 0.0.1</summary>

- bump to latest (07/07/2022)
- add absolute import, run + build manual test OK
- notes:
  - failed to implement alias import: use eslint:import -> install eslint-resolver-import-ts -> keep getting the error `Resolve error: Cannot find module 'node:fs'`

</details>

<details>
<summary>Old Update</summary>

- 17/04/2022
  - update template, seems like CRA fixed the TS definitions for react and reactDOM
- 07/04/2022:
  - delete jsxBracketLine deprecated in Prettier
- 22/02/2022:
  - add react-icons
  - update ESLint rules allowExpressions, e.g this acceptable: `<NavLink style={({ propLogic }) => {...codeHere}>`
  - clean up the repo a bit
  - for cyclic object value, delete the `/routes` folder
- 14/02/2022:
  - bump ESLint manually `npm i -D eslint@7.28.0` to fix [this](https://github.com/prettier/eslint-plugin-prettier/blob/master/CHANGELOG.md#v400-2021-08-30)
  - add `eslint` in -D, may break, needs check
- 09/11/2021
  - updates React Router to v6
- 01/11/2021
  - add `react-router-dom`, `query-string`, `uuid` and their @types
  - fix some eslint rules
  - change replicate cmds to `eslint@7.11.0` to avoid ESLint 8 breaking changes

</details>

<details>
<summary>Potential bugs</summary>

- 14/02/2022
  - [Bugs with ESLint + Prettier](https://github.com/prettier/eslint-plugin-prettier/issues/434)
  - <https://github.com/Hongbo-Miao/hongbomiao.com/pull/3270>
- 13/10/2021
  - this template currently is having problems with `npm audit`, around 20 vulnerable? pckgs
    - [Issue](https://github.com/facebook/create-react-app/issues/11174)
    - brain-dead fix, move `"react-scripts": "4.0.3"` from dependencies -> devDependencies, then `npm audit --production` will OK (`npm audit --production` will have same warning as `npm audit` if not move `"react-scripts": "4.0.3"`)
  - ESLint recently updated to v8.0.0, breaking when using `react-scripts` atm
    - will need to update the template when CRA updates `react-scripts` to using ESLint v8.0

</details>
