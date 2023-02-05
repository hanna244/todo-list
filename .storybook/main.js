/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const ROOT = process.cwd()

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },

  webpackFinal: async (config) => {
    // tsconfig와 동일하게 절대 경로 설정
    config.resolve.alias = {
      '@/': path.resolve(ROOT, './'),
    }

    return { ...config }
  },
}
