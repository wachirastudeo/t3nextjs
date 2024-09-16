import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { slugify } from "~/features/shared/helpers/slugify";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

interface Announcement {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
}



const announcements: Announcement[] = [
  {
    id: 1, title: 'Title#1',
    excerpt: 'Excertp#1',
    content: 'Content#1',
    slug: 'Title-1'
  },
  {
    id: 2, title: 'Title#2',
    excerpt: 'Excertp#2', 
    content: 'Content#2', 
    slug: 'Title-2'
  },
  {
    id: 3,
     title: 'Title#3',
    excerpt: 'Excertp#3',
     content: 'Content#3',
      slug: 'Title-3'
  },
  {
    id: 4, 
    title: 'Title#4',
    excerpt: 'Excertp#4',
     content: 'Content#4', 
     slug: 'Title-4'
  },
  {
    id: 5, 
    title: 'Title#5',
    excerpt: 'Excertp#5', 
    content: 'Content#5', 
    slug: 'Title-5'
  },

]
// fontend => api.post.hello 
//backend สร้างแล้วให้ fontend ไปใช้ชื่อเดียวกัน
export const announcementRouter = createTRPCRouter({
  list: publicProcedure.query(() => {  //procedure ใครจะเข้ามาอ่านก็ได้ 
    return announcements
  }),
  byId: publicProcedure.input(z.number()).query(({ input }) => {
    return announcements.find((announcement) => announcement.id === input)
  }),
  bySlug: publicProcedure.input(z.string()).query(({ input }) => {
    return announcements.find((announcement) => announcement.slug === input)
  }),
  add: publicProcedure.input(z.object({
    title: z.string(),
    excerpt: z.string(),
    content: z.string(),


  })).mutation(({ input }) => {
    const announcement = { id: announcements.length + 1, ...input, slug: slugify(input.title) }
    announcements.push(announcement)
    return announcement

  }),

  update: publicProcedure.input(z.object({
    id: z.number(),
    data: z.object({
      title: z.string(),
      excerpt: z.string(),
      content: z.string(),


    }).partial(),
  })
  ).mutation(({ input }) => {

    const { id, data } = input
    const announcement = announcements.find(announcement => announcement.id === id)
    if (!announcement) throw new TRPCError({ code: 'NOT_FOUND' })

    if (data.title) {
      announcement.title = data.title;
      announcement.slug = slugify(announcement.title)

    }
    if (data.excerpt) announcement.excerpt = data.excerpt;
    if (data.content) announcement.content = data.content;

    return announcement
  }),
  remove: publicProcedure.input(z.number()).mutation(({ input }) => {
    const index = announcements.findIndex(announcement => announcement.id === input);
    announcements.splice(index, 1);

  }),


});
