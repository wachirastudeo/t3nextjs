import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";






 // api.article.[list, byId,update,delete,add] สร้างชื่อตามที่ต้องการได้
//backend สร้างแล้วให้ fontend ไปใช้ชื่อเดียวกัน
export const leaveRouter = createTRPCRouter({
  list:publicProcedure.query(async({ctx})=>{  //procedure ใครจะเข้ามาอ่านก็ได้ 
      const leave = await ctx.prisma.leave.findMany({
        select:{
          id:true,
          reason:true,
          leaveDate:true,
          status:true,
        },orderBy:{
          createAt:'desc'
        }
      });
      return leave
  }),
 
  

  
});
