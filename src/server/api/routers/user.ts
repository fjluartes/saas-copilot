/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
// import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export const userRouter = createTRPCRouter({
  // Create new user (signup)
  create: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(8),
      name: z.string().min(2),
    }))
    .mutation(async ({ ctx, input }) => {
      // Check if user already exists
      const existingUser = await ctx.db.query.users.findFirst({
        where: eq(users.email, input.email),
      });

      if (existingUser) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'User already exists',
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(input.password, 10);

      // Create user
      return await ctx.db.insert(users).values({
        email: input.email,
        name: input.name,
        passwordHash: hashedPassword,
      });
    }),

  // Sign in user
  signin: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Find user by email
      const user = await ctx.db.query.users.findFirst({
        where: eq(users.email, input.email),
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Invalid email or password',
        });
      }

      // Verify password
      const validPassword = await bcrypt.compare(input.password, user.passwordHash);
      if (!validPassword) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid email or password',
        });
      }

      // Don't return password hash
      const { passwordHash: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }),

  getCurrent: publicProcedure
    .query(async ({ ctx }) => {
      // Add your session/auth check here
      // This is a placeholder - you should get the user ID from your session
      const userId = 1; // Replace with actual session user ID

      const user = await ctx.db.query.users.findFirst({
        where: eq(users.id, userId),
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      }

      // Don't return password hash
      const { passwordHash: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }),
});