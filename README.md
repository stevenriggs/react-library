[![Publish npm Package](https://github.com/stevenriggs/react-library/actions/workflows/package-release.yml/badge.svg)](https://github.com/stevenriggs/react-library/actions/workflows/package-release.yml)

# react-library

A library of React components used for ReactJS applications.

## Build

- Make sure to set the version in `package.json`.
- When a new GitHub release is created, a GitHub workflow will launch to build a package for that release.

## Installation

- Reference: https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages

You have to EITHER login before you can install a package.

```
npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: YOUR-GITHUB-TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

OR use a .npmrc file

- Create a `.npmrc` file at the root of your project with this contents

```
registry=https://npm.pkg.github.com/ukhc
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_AUTH_TOKEN
```

Then install the package

```
npm install @stevenriggs/react-library
```

Install bootstrap

```
npm install boostrap
```

The following line should be included in your src/index.js or App.js file

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Reference

- https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b
