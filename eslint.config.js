import tsPlugin from '@typescript-eslint/eslint-plugin';
import checkFilePlugin from 'eslint-plugin-check-file';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import prettierPlugin from 'eslint-plugin-prettier';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  { ignores: ['node_modules', 'dist'] },
  {
    files: ['*.ts', '*.js'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'check-file': checkFilePlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description' },
      ],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-constructor',
            'constructor',
            'public-instance-method',
            'private-instance-method',
          ],
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          selector: 'class',
        },
        {
          format: ['camelCase'],
          selector: 'classMethod',
        },
        {
          custom: {
            match: false,
            regex: '^I[A-Z]',
          },
          format: ['PascalCase'],
          selector: 'interface',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        {
          format: ['camelCase'],
          modifiers: ['private'],
          selector: 'memberLike',
        },
        {
          format: ['PascalCase'],
          selector: 'typeAlias',
        },
        {
          format: ['PascalCase'],
          prefix: ['T'],
          selector: 'typeParameter',
        },
        {
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          selector: 'variable',
        },
      ],
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': [
        'warn',
        {
          fixToUnknown: true,
          ignoreRestArgs: true,
        },
      ],
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{jsx,tsx,ts,js}$': 'KEBAB_CASE',
        },
      ],
      'check-file/folder-naming-convention': ['error', { '*': 'KEBAB_CASE' }],
      complexity: ['error', 5],
      'import/order': [
        'error',
        {
          alphabetize: { caseInsensitive: true, order: 'asc' },
          groups: [['type'], ['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'jsdoc/check-alignment': 'warn',
      'jsdoc/check-indentation': 'warn',
      'jsdoc/newline-after-description': 'warn',
      'max-depth': ['error', 2],
      'no-console': 'warn',
      'no-empty': 'error',
      'no-restricted-syntax': [
        'error',
        {
          message: "Use 'import type { ... }' instead of 'import { type ... }'.",
          selector: "ImportSpecifier[importKind='type']",
        },
      ],
      'prettier/prettier': 'error',
    },
  },
];

export default config;
