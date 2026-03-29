import { defineConfig } from 'oxlint';

import { nodeConfig } from './node';
import { perfectionistConfig } from './perfectionist';
import { reactConfig } from './react';
import { typescriptConfig } from './typescript';
import { unicornConfig } from './unicorn';

export const config = defineConfig({
  plugins: ['typescript', 'unicorn', 'react', 'node', 'import'],
  sortImports: {
    order: 'asc',
    type: 'natural'
  },
  jsPlugins: [
    'eslint-plugin-perfectionist',
    'eslint-plugin-react-dom',
    'eslint-plugin-no-only-tests',
    'eslint-plugin-unused-imports'
  ],
  categories: {
    correctness: 'off'
  },
  env: {
    builtin: true,
    es2024: true,
    browser: true,
    node: true
  },
  rules: {
    ...nodeConfig,
    ...perfectionistConfig,
    ...reactConfig,
    ...typescriptConfig,
    ...unicornConfig,
    'constructor-super': 'error',
    'for-direction': 'error',
    'no-async-promise-executor': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: false
      }
    ],
    'no-regex-spaces': 'error',
    'no-self-assign': 'error',
    'no-setter-return': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-unexpected-multiline': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-useless-backreference': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-with': 'error',
    'require-yield': 'error',
    'use-isnan': [
      'error',
      {
        enforceForIndexOf: true,
        enforceForSwitchCase: true
      }
    ],
    'valid-typeof': 'error',
    curly: 'error',
    'import/consistent-type-specifier-style': ['error', 'top-level'],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-only-tests/no-only-tests': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-warning-comments': [
      'error',
      {
        terms: ['@nocommit']
      }
    ],
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: true
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
      rules: {
        'constructor-super': 'off',
        'no-class-assign': 'off',
        'no-dupe-class-members': 'off',
        'no-func-assign': 'off',
        'no-import-assign': 'off',
        'no-new-native-nonconstructor': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-setter-return': 'off',
        'no-unsafe-negation': 'off',
        'no-with': 'off',
        'prefer-rest-params': 'error'
      }
    }
  ]
});
