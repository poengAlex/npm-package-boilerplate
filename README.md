# Intro

This is a boilerplate npm package that can be used in typescript projects, node.js and in the browser directly.

# Steps

- Install node
- Clone repo
- Rename folder to **PROJECT_NAME**
- Replace all **project_name** with **PROJECT_NAME** in `package.json`
- Replace **FRONTEND_PACKAGE_NAME** with **PROJECT_NAME_CAMELCASE**  in `rollup.config.json`
- replace all **author** with your *github name*
- Install node modules `npm i`


# Examples

## Before you start
- (*optional*) Replace **FRONTEND_PACKAGE_NAME** with **PROJECT_NAME_CAMELCASE** in `examples/browser.html`
- (*optional*) Replace all **project_name** with **PROJECT_NAME** in `examples/node_backend.js` and `examples/browser.html`
- (*optional*) Replace all **project_name** with **PROJECT_NAME** and **author** with your *github name* in `examples/typescript.ts`

## Browser

This is a simple vanilla JS use of the npm package. Just open the html file to test it out.

PS! When published on NPM you can serve it directly from unpkg.com:

Latest:
```html
<script src="https://unpkg.com/@author/project_name"></script>
```

Specific version:
```html
<script src="https://unpkg.com/@author/project_name@1.0.2"></script>
```

Latest of major
```html
<script src="https://unpkg.com/@author/project_name@1"></script>
```

## Node backend

This is example is how to use the commondJS version of the package in node.js. Run it: `node examples/node_backend.js`

PS! When published on NPM you can replace "../dist/project_name.cjs" with "@author/project_name" after you have run `npm i @author/project_name`in your project.

# Develop
`npm run dev`

# Release on NPM:

## First time

- Create a NPM account
- log in: `npm adduser`

## Every time

- Commit files to git
- Bump the version: `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]`
- Publish: `npm publish`
- Push files to git

# Use directly into other local projcts

Example if the package is in the same folder as the root project folder: `npm link ../PACKAGE_NAME`

NB! Linters can go crazy when linking locally. (untested) Add the path in .eslintignore. Example C:/path/to/your/linked/module
