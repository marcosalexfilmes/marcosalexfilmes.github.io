import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import backgroundImage from "@/assets/background-pattern.png";

interface LayoutProps {
  children: ReactNode;
  hasHero?: boolean;
}

const Layout = ({ children, hasHero = false }: LayoutProps) => {
  return (
    <>
      {/* Fixed background layer */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      {/* Content layer */}
      <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden">
        <Header />
        <main className={`flex-1 w-full overflow-x-hidden ${hasHero ? "" : "pt-16"}`}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
