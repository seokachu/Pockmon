import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import QueryProvider from "@/hooks/QueryProvider";

export default function Home() {
  return (
    <>
      <Header />
      <QueryProvider>
        <Main />
      </QueryProvider>
      <Footer />
    </>
  );
}
