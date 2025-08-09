// Configuration and export of the database instance using drizzle-orm
import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
});
