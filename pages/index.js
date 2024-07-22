import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Sub } from "@/components/Sub";
import { Skills } from "../components/Skills";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";




export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Sub />
      <Skills />
      <Experience />
      <Work/>
    </main>
  );
}
