import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
const queryClient = new QueryClient();
type NextPageWithLayout< P = object,IP=object> = NextPage<P,IP> &{
  getLayout?:(Prop:{children:ReactNode})=>ReactElement
}
interface AppPropsWithLayout extends AppProps<{session:Session | null}>{
  Component:NextPageWithLayout
}
const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}:AppPropsWithLayout) => {


  const Layout = Component.getLayout ?? (({children})=><>{children}</>);

  
  return (
    <SessionProvider session={session}>
      
      <div className={GeistSans.className}>
        <Layout>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false}/>
        </Layout>

      </div>

    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
