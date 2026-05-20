import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ServicePageLayoutProps {
  children: React.ReactNode;
}

export default function ServicePageLayout({ children }: ServicePageLayoutProps) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
