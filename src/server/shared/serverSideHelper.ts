import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter } from '../api/root';
import { prisma } from '~/server/db';
import superjson from 'superjson';

export const generateServerSideHelper = () => {
  return createServerSideHelpers({ // corrected "createServerSideHelper" to "createServerSideHelpers"
    router: appRouter,
    ctx: { prisma, session: null },
    transformer: superjson,
  });
};
