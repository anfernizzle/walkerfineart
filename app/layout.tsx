import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_KEYWORDS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio : ANTHONY CANNON WALKER",
  description: SITE_DESCRIPTION,
  authors: [{ name: "Anthony Cannon Walker" }],
  keywords: SITE_KEYWORDS,
  icons: {
    icon: "/img/favicon.png",
  },
};

const STYLESHEETS = [
  "/owl-carousel/owl.carousel.css",
  "/owl-carousel/owl.theme.css",
  "/css/foundation.css",
  "/css/webfonts.css",
  "/css/animation.css",
  "/css/site.css",
] as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        {STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-98267025-1', 'auto');
ga('send', 'pageview');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
