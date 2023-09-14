import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Divider from "@mui/material/Divider";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <p style={{ fontSize: "0.7rem", paddingLeft: "2rem", margin: 0 }}>
        The page is{" "}
        <span style={{ borderBottom: "1px solid red" }}>not responsive</span>{" "}
        yet, view it only on <span style={{ color: "green" }}>1200</span>{" "}
        screens and above.
      </p>
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
