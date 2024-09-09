import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

interface Article{
  id:number;
  title:string;
  excerpt:string;
  content:string;
}

const articles:Article[]=[
  {id:1,title:'Title#1',excerpt:'Excertp#1',content:'Content#1'},
  {id:2,title:'Title#2',excerpt:'Excertp#2',content:'Content#2'},
  {id:3,title:'Title#3',excerpt:'Excertp#3',content:'Content#3'},
  {id:4,title:'Title#4',excerpt:'Excertp#4',content:'Content#4'},
  {id:5,title:'Title#5',excerpt:'Excertp#5',content:'Content#5'},
]

// fontend => api.post.hello 
 // api.article.[list, byId,update,delete,add] สร้างชื่อตามที่ต้องการได้
//backend สร้างแล้วให้ fontend ไปใช้ชื่อเดียวกัน
export const articleRouter = createTRPCRouter({
  list:publicProcedure.query(()=>{  //procedure ใครจะเข้ามาอ่านก็ได้ 
      return articles
  })  
});
