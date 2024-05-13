// environment.d.ts

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        ALGOLIA_APP_ID: string;
        ALGOLIA_API_KEY: string;
      }
    }
  }
  
  export {};
  