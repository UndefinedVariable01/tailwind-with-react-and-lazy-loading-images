import LazyImage from "./LazyImage"
import IntroFirst from "../media/intro-first.jpg"
import IntroSecond from "../media/intro-second.jpg"
import IntroThird from "../media/intro-third.jpg"
import IntroLast from "../media/intro-last.jpg"

export default function Intro() {
    return (
        <div>
            <div className="flex flex-wrap md:flex-nowrap mb-16 xl:mb-20">
                <h1 className="order-2 md:order-1 flex-shrink-0 w-full md:w-56 xl:w-72 text-3xl md:text-4xl xl:text-5xl font-bold leading-snug md:leading-snug xl:leading-snug mr-10 xl:mr-20">
                    Random Words In Front Of Other Random Words
                </h1>
                <div className="order-1 md:order-2 flex-grow h-intro-first border border-black border-opacity-50 mb-3 md:mb-0">
                    <LazyImage src={IntroFirst} alt="Introduction" stylingClasses="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap mb-12 md:mb-16 xl:mb-20">
                <div className="flex flex-col w-full md:w-1/2 pr-0 md:pr-8 xl:pr-10">
                    <div className="w-full h-intro-second border border-black border-opacity-50 mb-12 xl:mb-16 xl:mb-20">
                        <LazyImage src={IntroSecond} alt="Primary Description" stylingClasses="w-full h-full object-cover" />
                    </div>
                    <p className="w-full md:w-11/12 xl:w-10/12 text-xl xl:text-2xl leading-relaxed md:leading-normal xl:leading-normal mb-12 md:mb-0">
                        It Was At That Moment That He Learned There Are Certain Parts Of The Body That You Should Never Nair. The Tree Fell
                        Unexpectedly Short. The Fox In The Tophat Whispered Into The Ear Of The Rabbit.
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-1/2 pl-0 md:pl-8 xl:pl-10">
                    <div className="order-2 md:order-1 mt-10 xl:mt-16 md:mb-16 xl:mb-20">
                        <p className="w-full md:w-11/12 xl:w-10/12 text-xl xl:text-2xl leading-relaxed md:leading-normal xl:leading-normal mb-6 md:mb-8 xl:mb-12">
                            When Money Was Tight, He'd Get His Lunch Money From The Local Wishing Well. This Made Him Feel Like An Old-Style
                            Rootbeer Float Smells. With A Single Flip Of The Coin, His Life Changed Forever.
                        </p>
                        <p className="w-full md:w-11/12 xl:w-10/12 text-xl xl:text-2xl leading-relaxed md:leading-normal xl:leading-normal">
                            He Was So Preoccupied With Whether Or Not He Could That He Failed To Stop To Consider If He Should.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 w-full h-intro-third border border-black border-opacity-50">
                        <LazyImage src={IntroThird} alt="Secondary Description" stylingClasses="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="w-full h-intro-last border border-black border-opacity-50 mb-6 md:mb-10 xl:mb-20">
                <LazyImage src={IntroLast} alt="Finish Introduction" stylingClasses="w-full h-full object-cover" />
            </div>
        </div>
    )
}
