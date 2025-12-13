import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
// 두 컴포넌트를 모두 사용하기 위해 임포트
import MyBarChart from "@/components/MyBarChart";
import MyBarChart2 from "@/components/MyBarChart2"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />

            {/* ===================================================== */}
            {/* 💡 첫 번째 차트 위치: MyBarChart (About 섹션 뒤) */}
            <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}> 저의 강점입니다 (1)</h2>
                <div style={{ height: '400px', width: '100%' }}>
                    <MyBarChart />
                </div>
            </div>
            {/* ===================================================== */}

            

            {/* ===================================================== */}
            {/* 💡 두 번째 차트 위치: MyBarChart2 (Projects 섹션 뒤) */}
            <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}> 저의 강점입니다 (2)</h2>
                <div style={{ height: '400px', width: '100%', maxWidth: '800px' }} className="mx-auto">
                    <MyBarChart2 />
                </div>
            </div>
            {/* ===================================================== */}
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}