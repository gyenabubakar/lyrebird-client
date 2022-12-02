interface PostCSSConfig {
  [key: string]: Record<string, unknown>;
}

declare module '@lyrebird/configs' {
  import type { Config as TailwindConfig } from 'tailwindcss/types/config';

  const postcss: PostCSSConfig;
  const tailwind: TailwindConfig;

  export { postcss, tailwind, PostCSSConfig, TailwindConfig };
}
