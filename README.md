# babel-preset-gatsby: Code-splitting issue when custom babel preset is used

This repo contains the default starter:

`npx gatsby new gatsby-starter-default https://github.com/gatsbyjs/gatsby-starter-default`

And these two files:

- .babelrc
- custom-babel-preset.js

To replicate, run:

1. `yarn clean && yarn build` and watch the report made by [gatsby-plugin-webpack-bundle-analyser-v2](https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2/).
2. No `component--src-...` files are generated and the app bundle is much larger.
3. Un-comment: `stage: "build-javascript"` inside `./custom-babel-preset.js` and run the first step again. Now it works.
