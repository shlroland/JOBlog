import { Client } from "@notionhq/client"

import { env } from "@roland/env"

export const notion = new Client({ auth: env.NOTION_KEY })
