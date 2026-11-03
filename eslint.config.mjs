import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // eslint-plugin-react (bundled by eslint-config-next) auto-detects the React version through an API
    // removed in ESLint 10. An explicit version avoids that code path.
    settings: { react: { version: '19.0' } },
  },
  globalIgnores(['.next/**', 'out/**', 'next-env.d.ts']),
]);
