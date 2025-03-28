import globals from 'globals'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'
import js from '@eslint/js'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  js.configs.recommended,
  reactRecommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/jsx': stylisticJsx,
      'react-hooks': reactHooks,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],

      '@stylistic/jsx/jsx-indent': ['error', 2],
      '@stylistic/jsx/jsx-indent-props': ['error', 2],
      '@/jsx-quotes': ['error', 'prefer-single'],

      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-console': 'off',

      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^[A-Z]'
      }],
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['dist/**', 'build/**'],
  },
]
