import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/hero.scss";
import { FavourProvider } from "@/utils/Favourite";
import { StoreProvider } from "@/utils/Store";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout2 from "@/components/layout2";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <StoreProvider>
          <FavourProvider>
            <Layout2>
              <Layout>
                {Component.auth ? (
                  <Auth adminOnly={Component.auth.adminOnly}>
                    <Component {...pageProps} />
                  </Auth>
                ) : (
                  <Component {...pageProps} />
                )}
              </Layout>
            </Layout2>
          </FavourProvider>
        </StoreProvider>
      </SessionProvider>
    </>
  );
}
function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required");
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}
