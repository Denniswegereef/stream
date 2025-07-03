import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin,
      perfectionist,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'writable',
      },
    },
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
    'react/button-has-type': 'error',
    'react/hook-use-state': ['error', { allowDestructuredState: true }],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: true,
      },
    ],
    'react/prefer-stateless-function': 'error',
    'perfectionist/sort-array-includes': ['warn'],
    'perfectionist/sort-exports': ['warn'],
    'perfectionist/sort-named-exports': ['warn'],
    'perfectionist/sort-named-imports': ['warn'],
    'perfectionist/sort-interfaces': ['warn', { newlinesBetween: 'never' }],
    'perfectionist/sort-jsx-props': 'off',
    'perfectionist/sort-object-types': ['warn', { newlinesBetween: 'never' }],
    'perfectionist/sort-union-types': ['warn', { newlinesBetween: 'never' }],
    settings: {
      perfectionist: {
        type: 'natural',
        partitionByComment: true,
      },
    },
  },
])
