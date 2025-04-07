import Hero from "@/components/Home/Hero";
import Posts from "@/components/Home/Posts";
import SideBar from "@/components/Home/SideBar";

export default function Home() {
  return (
    <div className="h-[250vh] mx-16 bg-[#f8fafc]">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-12 place-items-start gap-4  pb-16 px-6 lg:px-20">
        <section className="lg:col-span-9 w-full">
          <Posts />
        </section>
        <section className="lg:col-span-3 w-full">
          <SideBar />
        </section>
      </div>
    </div>
  );
}
