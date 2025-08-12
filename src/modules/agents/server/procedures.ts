import { db } from "@/db";
import { agents } from "@/db/schema";
import { agentsInsertSchema } from "@/modules/agents/schemas";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { eq, getTableColumns, sql } from "drizzle-orm";
import z from "zod";


export const agentsRouter = createTRPCRouter({
    //TODO: Change "getMany" and "getOne" to use "protectedProcedure" when auth is implemented
    getOne: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
        const [existingAgent] = await db
            .select({
                ...getTableColumns(agents),
                
                //TODO: Replace with actual meeting count
                meetingCount: sql<number>`5`
                
            })
            .from(agents)
            .where(eq(agents.id, input.id)) // Replace "id" with the actual ID value from input

            // await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a delay
            // throw new TRPCError({ code: "BAD_REQUEST"})
        return existingAgent;
    }),

    getMany: protectedProcedure.query(async () => {
        const data = await db
            .select()
            .from(agents)

            // await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a delay
            // throw new TRPCError({ code: "BAD_REQUEST"})
        return data;
    }),

    create: protectedProcedure
    .input(agentsInsertSchema)
    .mutation(async ({ input, ctx }) => {
        const [createdAgent] = await db
            .insert(agents)
            .values({
                ...input,
                userId: ctx.auth.user.id, // Assuming ctx.auth.user.id contains the authenticated user's ID
            })
            .returning();

        return createdAgent;
    }),

})