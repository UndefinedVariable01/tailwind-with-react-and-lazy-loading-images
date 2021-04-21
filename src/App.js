import "./App.css"
import Header from "./components/Header"
import Posts from "./components/Posts"
import Cards from "./components/Cards"
import Intro from "./components/Intro"

export default function App() {
    return (
        <div className="font-serif text-gray-800 px-6 md:px-10 xl:px-20 max-w-screen-2xl mx-auto">
            <Header />
            <main>
                <Posts />

                <div className="text-center mb-36 md:mb-44 xl:mb-56">
                    <p className="text-4xl md:text-5xl xl:text-6xl leading-relaxed md:leading-relaxed xl:leading-relaxed font-bold uppercase">
                        She was too busy always talking about what she wanted to do to actually do any of it
                    </p>
                </div>

                <Cards />

                <div className="text-center mb-36 md:mb-44 xl:mb-56">
                    <p className="text-4xl md:text-5xl xl:text-6xl leading-relaxed md:leading-relaxed xl:leading-relaxed font-bold uppercase">
                        There were three sphered rocks congregating in a cubed room
                    </p>
                </div>

                <Intro />
            </main>
        </div>
    )
}
