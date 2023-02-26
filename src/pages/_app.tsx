import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "modern-css-reset";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Applayout } from "./components/layouts/Applayput";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Applayout>
        <Component {...pageProps} />
      </Applayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
