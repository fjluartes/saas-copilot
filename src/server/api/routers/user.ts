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

  // // Get user profile
  // getProfile: publicProcedure
  //   .query(async ({ ctx }) => {
  //     const user = await ctx.db.query.users.findFirst({
  //       where: eq(users.id, ctx.userId),
  //     });

  //     if (!user) {
  //       throw new TRPCError({
  //         code: 'NOT_FOUND',
  //         message: 'User not found',
  //       });
  //     }

  //     // Don't return password
  //     const { passwordHash: _, ...userWithoutPassword } = user;
  //     return userWithoutPassword;
  //   }),

  // // Update user profile
  // updateProfile: publicProcedure
  //   .input(z.object({
  //     name: z.string().min(2).optional(),
  //     email: z.string().email().optional(),
  //   }))
  //   .mutation(async ({ ctx, input }) => {
  //     return await ctx.db
  //       .update(users)
  //       .set(input)
  //       .where(eq(users.id, ctx.userId));
  //   }),

  // // Change password
  // changePassword: publicProcedure
  //   .input(z.object({
  //     currentPassword: z.string(),
  //     newPassword: z.string().min(8),
  //   }))
  //   .mutation(async ({ ctx, input }) => {
  //     const user = await ctx.db.query.users.findFirst({
  //       where: eq(users.id, ctx.userId),
  //     });

  //     if (!user) {
  //       throw new TRPCError({
  //         code: 'NOT_FOUND',
  //         message: 'User not found',
  //       });
  //     }

  //     // Verify current password
  //     const validPassword = await bcrypt.compare(input.currentPassword, user.passwordHash);
  //     if (!validPassword) {
  //       throw new TRPCError({
  //         code: 'UNAUTHORIZED',
  //         message: 'Current password is incorrect',
  //       });
  //     }

  //     // Hash new password
  //     const hashedPassword = await bcrypt.hash(input.newPassword, 10);

  //     // Update password
  //     return await ctx.db
  //       .update(users)
  //       .set({ passwordHash: hashedPassword })
  //       .where(eq(users.id, ctx.userId));
  //   }),
});
