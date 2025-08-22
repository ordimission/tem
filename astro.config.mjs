// @ts-check
import { defineConfig } from 'astro/config';

import basicAuth from './src/middleware/basic-auth';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  middleware: [basicAuth],
});

