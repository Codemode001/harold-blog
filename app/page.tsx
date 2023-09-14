import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Divider from "@mui/material/Divider";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <div style={{ margin: "3rem 0" }}>
        <Divider />
      </div>
      <BlogList />
      <div style={{ margin: "3rem 0 0 0" }}>
        <Divider />
      </div>
      <Footer />
    </>
  );
}
