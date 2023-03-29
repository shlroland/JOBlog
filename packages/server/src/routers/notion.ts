import { env } from "@roland/env"

import { createTRPCRouter, publicProcedure } from "../trpc"

export const notionRouter = createTRPCRouter({
  queryDatabase: publicProcedure.query(({ ctx }) => {
    return ctx.notion.databases.query({
      database_id: env.NOTION_DATABASE,
      // filter_properties
      filter: {
        property: "Tags",
        multi_select: {
          contains: "富文本"
        },
      },
    })
  }),
})
