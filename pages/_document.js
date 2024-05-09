import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Découvrez Aromes De Paris, une véritable expérience de brasserie parisienne à Agadir. Profitez d'un cadre chic, de plats délicieux comprenant de la volaille, des burgers, du poisson et des pâtisseries, et d'un service professionnel."
        ></meta>
        <link type="image/x-icon" rel="icon" href="/favicon.svg" />
        <meta
          property="og:title"
          content="Aromes De Paris - Brasserie Parisienne Authentique à Agadir"
        />
        <meta
          property="og:description"
          content="Découvrez Aromes De Paris, une véritable expérience de brasserie parisienne à Agadir. Profitez d'un cadre chic, de plats délicieux comprenant de la volaille, des burgers, du poisson et des pâtisseries, et d'un service professionnel."
        />
        <meta property="og:url" content="https://aromes-de-paris.vercel.app" />
        <meta
          property="og:image"
          content="https://aromes-de-paris.vercel.app/og-image.jpg"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@votre_nom_twitter" />
        <meta
          name="twitter:title"
          content="Aromes De Paris - Brasserie Parisienne Authentique à Agadir"
        />
        <meta
          name="twitter:description"
          content="Découvrez Aromes De Paris, une véritable expérience de brasserie parisienne à Agadir. Profitez d'un cadre chic, de plats délicieux comprenant de la volaille, des burgers, du poisson et des pâtisseries, et d'un service professionnel."
        />
        <meta
          name="twitter:image"
          content="https://aromes-de-paris.vercel.app/twitter-image.jpg"
        />
        <meta name="twitter:url" content="https://aromes-de-paris.vercel.app" />
        <title>
          Arômes De Paris - Brasserie Parisienne Authentique à Agadir
        </title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
