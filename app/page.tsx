import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import MyBarChart from "@/components/MyBarChart";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
          <About />
          {/*  그래프를 보여줄 위치: 예를 들어 About 섹션 뒤에 추가합니다. */}
          <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
              <h2> 기술 스택 숙련도</h2>
              <div style={{ height: '400px', width: '100%' }}>
                  <MyBarChart />
              </div>
          </div>
          {/* ----------------------------------------------------- */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
