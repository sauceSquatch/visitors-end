module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    // parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': ['warn', { vars: 'all' }],
    'space-before-function-paren': ['warn', 'never'],
    semi: ['warn', 'never'],
    'new-cap': ['warn', {
      properties: false,
    }],
    'no-multiple-empty-lines': ['warn', { max: 2 }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'vue/attribute-hyphenation': ['warn', 'never'],
    'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: ['transition', 'transition-group', 'nuxt', 'nuxt-link', 'router-link', 'router-view', 'client-only'],
    }],
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
  },
}
