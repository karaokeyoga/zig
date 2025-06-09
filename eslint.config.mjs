import { fixupPluginRules } from '@eslint/compat'
import eslintJs from '@eslint/js'
import eslintPluginNext from '@next/eslint-plugin-next'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import typescriptEslint from 'typescript-eslint'

export default [
  eslintJs.configs.recommended,
  eslintPluginPerfectionist.configs['recommended-natural'],
  eslintPluginReact.configs.flat.recommended,
  ...typescriptEslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        module: true,
        process: true,
        require: true
      }
    },
    plugins: {
      '@next/next': fixupPluginRules(eslintPluginNext),
      'react-hooks': fixupPluginRules(eslintPluginReactHooks)
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'perfectionist/sort-imports': ['error', { newlinesBetween: 'never' }],
      'prettier/prettier': ['error', { arrowParens: 'avoid', endOfLine: 'lf', printWidth: 160, semi: false, singleQuote: true, trailingComma: 'none' }],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'react/react-in-jsx-scope': 'off',
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['.next', 'util/answers.ts', 'util/boards.ts', 'util/puzzles.ts']
  }
]
