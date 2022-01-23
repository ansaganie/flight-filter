module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "quotes": [2, "single", { "avoidEscape": true }],
    'max-len': 'off',
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 9000,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    'func-names': ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    'no-multi-spaces': [
      'error',
      { exceptions: { VariableDeclarator: true, ImportDeclaration: true } },
    ],
    'no-new': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    'no-underscore-dangle': [
      'error',
      { enforceInMethodNames: false, allowAfterThis: true },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: 'if',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: 'import',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'import',
        next: 'import',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'export',
      },
    ],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
  },
};
