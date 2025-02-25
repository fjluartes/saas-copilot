/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { subscriptions } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const subscriptionsRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return await ctx.db.select().from(subscriptions);
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        price: z.number(),
        status: z.string(),
        nextBilling: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const subscription = await ctx.db.insert(subscriptions).values({
        name: input.name,
        price: input.price.toString(),
        status: input.status,
        nextBilling: new Date(input.nextBilling),
        userId: 1, // Hardcoded user ID for now
        expiresAt: new Date(input.nextBilling), // Set expiration date
      });
      
      return subscription;
    }),

  cancel: publicProcedure
    .input(z.object({ subscriptionId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db
        .update(subscriptions)
        .set({ status: 'Cancelled' })
        .where(eq(subscriptions.id, input.subscriptionId));
    }),

  pay: publicProcedure
    .input(z.object({ subscriptionId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db
        .update(subscriptions)
        .set({ status: 'Active' })
        .where(eq(subscriptions.id, input.subscriptionId));
    }),
});