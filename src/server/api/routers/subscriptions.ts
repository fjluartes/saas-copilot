import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const subscriptionsRouter = createTRPCRouter({
  cancel: publicProcedure
    .input(z.object({ subscriptionId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      console.log(ctx, input);
      // Add your subscription cancellation logic here
    }),
  pay: publicProcedure
    .input(z.object({ subscriptionId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      console.log(ctx, input);
      // Add your subscription payment logic here
    }),
});