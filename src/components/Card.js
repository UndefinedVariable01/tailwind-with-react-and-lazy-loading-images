import LazyImage from "./LazyImage"

export default function Card({ imgSrc, title }) {
    return (
        <a className="relative group" href="#">
            <div className="w-full h-card-img border border-black border-opacity-50 mb-2 md:mb-0">
                <LazyImage src={imgSrc} alt={title} stylingClasses="w-full h-full object-cover object-top" />
            </div>
            <div className="md:absolute inset-0 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                <div className="hidden md:block absolute w-full h-full bg-black opacity-50" />
                <h1 className="md:absolute md:bottom-1/2 w-full text-xl md:text-2xl xl:text-3xl font-bold md:font-semibold md:text-white md:text-opacity-70 md:text-center leading-normal md:px-4 xl:px-8">
                    {title}
                </h1>
                <div className="hidden md:block absolute bottom-0 w-full p-4 xl:p-8">
                    <div className="border-4 opacity-50">
                        <p className="text-xl xl:text-2xl text-white text-center p-2.5 xl:p-3.5">More Details</p>
                    </div>
                </div>
            </div>
        </a>
    )
}
