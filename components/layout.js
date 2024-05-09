import Header from "@/components/Header";
import Contact from "@/components/Contact";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Contact />
    </div>
  );
};

export default Layout;
