import Footer from "./Footer";
import Header from "./header/Header";
import Hero from "./Hero";

interface Props {
  children: React.ReactNode;
  showHero?: boolean;
}

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <main className="container mx-auto flex-1 py-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
