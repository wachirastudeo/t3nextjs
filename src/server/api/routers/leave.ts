import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";






 // api.article.[list, byId,update,delete,add] สร้างชื่อตามที่ต้องการได้
//backend สร้างแล้วให้ fontend ไปใช้ชื่อเดียวกัน
export const leaveRouter = createTRPCRouter({
  list:publicProcedure.query(({ctx})=>{  //procedure ใครจะเข้ามาอ่านก็ได้ 
      const leave = ctx.prisma.leave.findMany();
      return leave
  }),
 
  

  
});
