import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
//import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
    ...nextVitals,
    //...nextTs,

    // Override default ignores of eslint-config-next.
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
        '.open-next/**',
        'node_modules/**',
    ]),
    /*{
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
        },
    },*/
])

export default eslintConfig
