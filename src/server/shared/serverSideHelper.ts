import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter } from '../api/root';
import superjson from 'superjson';
import { prisma } from '~/server/db';

export const generateServerSideHelper = () => {
  return createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, session: null },
    transformer: superjson,
  });
};