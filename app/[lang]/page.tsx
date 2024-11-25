import Footer from "@/components/home/footer";
import Main from "@/components/home/main/main";
import Navbar from "@/components/home/navbar/navbar";

export default async function Home() {
  return (
    <div className="rtl:font-bahij relative flex min-h-screen flex-col items-center justify-items-center gap-12 overflow-x-clip scroll-smooth bg-secondary p-4 font-sans dark:bg-background md:gap-20">
      <div className="fixed top-0 z-50 mx-auto h-16 w-full max-w-screen-lg rounded-b-[40px] bg-background/10 backdrop-blur-sm"></div>
      <div className="absolute -start-12 -top-8 hidden size-1/3 rounded-full bg-background blur-3xl dark:block dark:bg-secondary/40" />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
