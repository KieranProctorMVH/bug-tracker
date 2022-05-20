import { DefaultSeo } from "next-seo";
import Head from "next/head";
import React from "react";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <DefaultSeo
      titleTemplate={`%s | ${
        process.env.NEXT_PUBLIC_SITE_NAME ?? "NextJS Template"
      }`}
      defaultTitle={process.env.NEXT_PUBLIC_SITE_NAME ?? "NextJS Template"}
      description={
        process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
        "This is a template project for NextJS web apps."
      }
      openGraph={{
        type: "website",
        locale: "en_GB",
        url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
        site_name: process.env.NEXT_PUBLIC_SITE_NAME ?? "NextJS Template",
      }}
    />

    <Head>
      <link rel="manifest" href="/manifest.json" />
    </Head>

    <main>{children}</main>
  </>
);

export default Layout;
