import { z } from "zod"

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

// import ar from './Youdao_Note_Markdown_Template.md'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    // return ctx.prisma.example.findMany();
    return ctx.prisma.account
  }),

  getArticle: publicProcedure.query(() => {
    return ""
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!"
  }),
})
