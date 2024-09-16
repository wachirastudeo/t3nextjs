import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { slugify } from "~/features/shared/helpers/slugify";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

interface Article {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  slug: string;
}



const articles: Article[] = [
  {
    id: 1, title: 'Title#1',
    image: '/uploads/pic1.jpg',
    excerpt: 'Excertp#1',
    content: 'Content#1',
    slug: 'Title-1'
  },
  {
    id: 2, title: 'Title#2',
    image: '/uploads/pic1.jpg',
    excerpt: 'Excertp#2', 
    content: 'Content#2', 
    slug: 'Title-2'
  },
  {
    id: 3,
     title: 'Title#3',
    image: '/uploads/pic1.jpg',
    excerpt: 'Excertp#3',
     content: 'Content#3',
      slug: 'Title-3'
  },
  {
    id: 4, 
    title: 'Title#4',
    image: '/uploads/pic1.jpg',
    excerpt: 'Excertp#4',
     content: 'Content#4', 
     slug: 'Title-4'
  },
  {
    id: 5, 
    title: 'Title#5',
    image: '/uploads/pic1.jpg',
    excerpt: 'Excertp#5', 
    content: 'Content#5', 
    slug: 'Title-5'
  },

]
// fontend => api.post.hello 
// api.article.[list, byId,update,delete,add] สร้างชื่อตามที่ต้องการได้
//backend สร้างแล้วให้ fontend ไปใช้ชื่อเดียวกัน
export const articleRouter = createTRPCRouter({
  list: publicProcedure.query(() => {  //procedure ใครจะเข้ามาอ่านก็ได้ 
    return articles
  }),
  byId: publicProcedure.input(z.number()).query(({ input }) => {
    return articles.find((article) => article.id === input)
  }),
  bySlug: publicProcedure.input(z.string()).query(({ input }) => {
    return articles.find((article) => article.slug === input)
  }),
  add: publicProcedure.input(z.object({
    title: z.string(),
    image:z.string(),
    excerpt: z.string(),
    content: z.string(),


  })).mutation(({ input }) => {
    const article = { id: articles.length + 1, ...input, slug: slugify(input.title) }
    articles.push(article)
    return article

  }),

  update: publicProcedure.input(z.object({
    id: z.number(),
    data: z.object({
      title: z.string(),
      image:z.string(),
      excerpt: z.string(),
      content: z.string(),


    }).partial(),
  })
  ).mutation(({ input }) => {

    const { id, data } = input
    const article = articles.find(article => article.id === id)
    if (!article) throw new TRPCError({ code: 'NOT_FOUND' })

    if (data.title) {
      article.title = data.title;
      article.slug = slugify(article.title)

    }
    if (data.excerpt) article.excerpt = data.excerpt;
    if (data.content) article.content = data.content;

    return article
  }),
  remove: publicProcedure.input(z.number()).mutation(({ input }) => {
    const index = articles.findIndex(article => article.id === input);
    articles.splice(index, 1);

  }),


});
