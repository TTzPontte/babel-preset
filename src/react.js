const presetEnv = require('./env');

const preset = declare(({ assertVersion }, options) => {
  assertVersion('^7.0.0');

  const {
    modules = 'auto',
    targets = {},
    debug = false,
  } = options;

  const production = {
    plugins: [
      'babel-plugin-optimize-clsx',
      'babel-plugin-transform-react-remove-prop-types',
      '@babel/plugin-transform-react-constant-elements',
    ],
  };

  const config = {
    presets: [
      [
        presetEnv,
        {
          modules,
          targets,
          debug,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: ['babel-plugin-lodash'],
    env: {
      production,
    },
  };

  return config;
});

module.exports = preset;
