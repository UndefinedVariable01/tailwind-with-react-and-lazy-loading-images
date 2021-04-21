import LazyImage from "./LazyImage"

export default function Post({ imgSrc, title }) {
    return (
        <a href="#">
            <div className="w-full h-post-img border border-black border-opacity-50 mb-2">
                <LazyImage src={imgSrc} alt={title} stylingClasses="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl xl:text-2xl font-bold pr-8">{title}</h1>
        </a>
    )
}
