import AosConfig from "@/components/AosConfig";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import BottomImage from "@/components/BottomImage";
import data from '../app/blogs.json';
import BlogCard from "@/components/BlogCard";

export default function Home() {

  return (
    <>
      <AosConfig />
      <Hero />
      <main className="bg-white text-black pt-5 w-full">
        <Features />
        <Categories />
        <FeaturedProducts />
        <section data-aos='fade-up' className="px-pHSm lg:px-pHLg mt-10 mb-7 py-5 bg-lightSectionBg">
          <SectionHeading title="Might Be Helpful" />
          <div className="w-full h-full py-1 mt-10 mb-7 flex gap-7 justify-between overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth">
            {
              data.blogs.map((blog, index) => <BlogCard key={index} id={index} slug={blog.slug} title={blog.title} description={blog.content} />)
            }
          </div>
        </section>
      </main>
      <BottomImage />
    </>
  );
}