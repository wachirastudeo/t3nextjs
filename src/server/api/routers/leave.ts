import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

interface Leave{
  id:number;
  reason:string;
  status:'PENDING'| 'APPROVED' | 'REJECTED';
  leaveDate:string;
 
}



const leave:Leave[]=[
  {id:1,reason:'reason  #1',status:'PENDING',leaveDate:new Date().toDateString()},
  {id:2,reason:'reason  #2',status:'APPROVED',leaveDate:new Date().toDateString()},
  {id:3,reason:'reason  #3',status:'REJECTED',leaveDate:new Date().toDateString()},

]

// fontend => api.post.hello 
 // api.article.[list, byId,update,delete,add] สร้างชื่อตามที่ต้องการได้
//backend สร้างแล้วให้ fontend ไปใช้ชื่อเดียวกัน
export const leaveRouter = createTRPCRouter({
  list:publicProcedure.query(()=>{  //procedure ใครจะเข้ามาอ่านก็ได้ 
      return leave
  }),
 
  

  
});
