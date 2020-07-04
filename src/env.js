const { declare } = require('@babel/helper-plugin-utils');

const preset = declare(({ assertVersion }, options) => {
  assertVersion('^7.0.0');

  const {
    modules = 'auto',
    targets = {},
    debug = false,
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
        '@babel/preset-env',
        {
          modules,
          targets,
          debug,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-template-literals',
      '@babel/plugin-transform-property-mutators',
      '@babel/plugin-transform-member-expression-literals',
      '@babel/plugin-transform-property-literals',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-catch-binding',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-runtime',
    ],
    env: { test },
  };

  return config;
});

module.exports = preset;
