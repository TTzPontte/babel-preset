const { declare } = require('@babel/helper-plugin-utils');
const presetEnv = require('./env');

const preset = declare((api, options = {}) => {
  api.assertVersion('^7.0.0');

  const production = {
    plugins: [
      [
        'babel-plugin-transform-react-remove-prop-types', {
          mode: 'unsafe-wrap',
        },
      ],
      '@babel/plugin-transform-react-constant-elements',
    ],
  };

  const config = {
    presets: [
      [
        presetEnv,
        options,
      ],
      '@babel/preset-react',
    ],
    plugins: ['babel-plugin-optimize-clsx'],
    env: { production },
  };

  return config;
});

module.exports = preset;
