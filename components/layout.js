import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Contact />
    </div>
  );
};

export default Layout;
