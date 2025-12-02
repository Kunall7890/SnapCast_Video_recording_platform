import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";

export async function GET() {
  try {
    const users = await db.select().from(user).limit(1);
    return Response.json({ success: true, message: "Database connected", users: users.length });
  } catch (error) {
    return Response.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
