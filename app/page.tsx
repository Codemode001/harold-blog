import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Divider from "@mui/material/Divider";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <div style={{ margin: "5rem 0" }}>
        <Divider />
      </div>
    </>
  );
}
