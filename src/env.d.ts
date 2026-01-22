/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly WORDPRESS_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
