import { articleRouter } from "~/server/api/routers/article";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { leaveRouter } from "./routers/leave";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import {  announcementRouter } from "./routers/announcement";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({   // สร้าง router เพิ่มตรงนี้
  article: articleRouter,  
  leave: leaveRouter,  
  announcement : announcementRouter,
});


// export type definition of API
export type AppRouter = typeof appRouter;
export type RouterInput = inferRouterInputs<AppRouter>;  // ตรวจสอบชนิดข้อมูล router 
export type RouterOutput = inferRouterOutputs<AppRouter>;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

