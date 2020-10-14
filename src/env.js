const { declare } = require('@babel/helper-plugin-utils');

const preset = declare((api, options) => {
  api.assertVersion('^7.0.0');

  const useESModules = api.env([
    'legacy',
    'modern',
    'stable',
  ]);

  const shippedProposals = api.env('modern');

  const {
    modules = useESModules ? false : 'commonjs',
    loose = true,
    ...defaultProps
  } = options;

  const test = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };

  const config = {
    presets: [
      [
        '@babel/preset-env', {
          ...defaultProps,
          modules,
          shippedProposals,
          loose,
        },
      ],
    ],
    plugins: [
      'babel-plugin-lodash',
      '@babel/plugin-transform-template-literals',
      '@babel/plugin-transform-property-mutators',
      '@babel/plugin-transform-member-expression-literals',
      '@babel/plugin-transform-property-literals',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-catch-binding',
      '@babel/plugin-proposal-optional-chaining',
      [
        '@babel/plugin-transform-runtime',
        {
          useESModules,
          version: '^7.0.0',
        },
      ],
    ],
    env: { test },
  };

  return config;
});

module.exports = preset;
