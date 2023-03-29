declare module "@roland/env" {
  export const env: {
    NEXTAUTH_SECRET?: string | undefined
    DATABASE_URL: string
    NODE_ENV: "development" | "test" | "production"
    NEXTAUTH_URL: string
    DISCORD_CLIENT_ID: string
    DISCORD_CLIENT_SECRET: string
    NOTION_KEY: string
    NOTION_DATABASE: string
  }
}
