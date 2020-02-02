module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    'plugin:react/recommended',
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "react-hooks"
  ],

  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'prefer-const': 'off',
    'react/button-has-type': 'off',
    'no-param-reassign': 'off',
    'prefer-template': 'off',
    'react/jsx-fragments': 'off',
    'react/no-unknown-property': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'spaced-comment': 'off',
    'prefer-destructuring': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-undef': 'off',
    'import/extensions': 'off',
    'object-shorthand': 'off',
    'func-names': 'off',
    'no-restricted-globals': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'react/destructuring-assignment': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/interface-name-prefix': [true, "never-prefix"],
  },
  "overrides": [
    {
      "semi": true,
      "overrides": [
        {
          "files": "*.test.js",
          "options": {
            "semi": true
          }
        },
        {
          "files": ["*.html", "legacy/**/*.js"],
          "options": {
            "tabWidth": 4
          }
        }
      ]
    },
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"],
        '@typescript-eslint/interface-name-prefix': [true, "never-prefix"]
      }
    }
  ],
}
