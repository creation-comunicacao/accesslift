import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const utf8ContentTypePlugin = () => ({
  name: "accesslift-utf8-content-type",
  configureServer(server) {
    server.middlewares.use((_req, res, next) => {
      const setHeader = res.setHeader.bind(res);

      res.setHeader = (name, value) => {
        if (
          /^content-type$/i.test(name) &&
          typeof value === "string" &&
          /^(text\/html|text\/css|application\/javascript|application\/json)\b/i.test(value) &&
          !/charset=/i.test(value)
        ) {
          return setHeader(name, `${value}; charset=utf-8`);
        }

        return setHeader(name, value);
      };

      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((_req, res, next) => {
      const setHeader = res.setHeader.bind(res);

      res.setHeader = (name, value) => {
        if (
          /^content-type$/i.test(name) &&
          typeof value === "string" &&
          /^(text\/html|text\/css|application\/javascript|application\/json)\b/i.test(value) &&
          !/charset=/i.test(value)
        ) {
          return setHeader(name, `${value}; charset=utf-8`);
        }

        return setHeader(name, value);
      };

      next();
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [utf8ContentTypePlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify: file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
