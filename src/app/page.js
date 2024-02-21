import Link from "next/link";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}
