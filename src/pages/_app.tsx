import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { api } from "~/utils/api";

import "~/styles/globals.css";
const queryClient = new QueryClient();
const MyApp: AppType<{ session: Session | null }> = ({
  
  Component,
  pageProps: { session, ...pageProps },
}) => {

  return (
    <SessionProvider session={session}>
      
      <div className={GeistSans.className}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false}/>

      </div>

    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
