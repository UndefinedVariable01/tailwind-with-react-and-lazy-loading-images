import { useRef, useEffect } from "react"

export default function LazyImage({ src, alt, stylingClasses }) {
    const lazyImage = useRef()

    useEffect(() => {
        if ("loading" in HTMLImageElement.prototype) {
            lazyImage.current.setAttribute("loading", "lazy")
            const setImageSrc = setTimeout(() => {
                lazyImage.current.setAttribute("src", src)
                lazyImage.current.className = stylingClasses
                clearTimeout(setImageSrc)
            }, 0)
        } else if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        lazyImage.current.setAttribute("src", src)
                        lazyImage.current.className = stylingClasses
                    }
                })
            })
            lazyImageObserver.observe(lazyImage)
        } else {
            lazyImage.current.setAttribute("src", src)
            lazyImage.current.className = stylingClasses
        }
    }, [])

    // I could have also put classes here and then remove hidden from classList in js
    return <img className="hidden" ref={lazyImage} alt={alt} />
}
