import headerImg from "../media/header-img.jpg"

export default function Header() {
    return (
        <header className="w-full mb-32 md:mb-44 xl:mb-56">
            <nav className="flex justify-between items-center pt-5 pb-6 md:py-5 xl:py-7">
                <div className="md:hidden flex flex-col w-8">
                    <span className="inline-block w-full bg-gray-900 rounded-full mb-1 primary-line"></span>
                    <span className="inline-block w-2/3 bg-gray-900 rounded-full mb-1 primary-line"></span>
                    <span className="inline-block w-full bg-gray-900 rounded-full primary-line"></span>
                </div>

                <ul className="hidden md:flex text-base lg:text-lg">
                    <li className="mr-20 lg:mr-24">
                        <a href="#">Home</a>
                    </li>
                    <li className="mr-20 lg:mr-24 opacity-50 hover:opacity-100 transition-opacity">
                        <a href="#">Learn</a>
                    </li>
                    <li className="mr-20 lg:mr-24 opacity-50 hover:opacity-100 transition-opacity">
                        <a href="#">Explore</a>
                    </li>
                    <li className="mr-20 lg:mr-24 opacity-50 hover:opacity-100 transition-opacity">
                        <a href="#">Community</a>
                    </li>
                </ul>

                <a className="inline-block font-bold text-xl lg:text-2xl" href="#">
                    AReview
                </a>
            </nav>

            <div className="w-full h-longer border border-black border-opacity-50 mb-6 md:mb-7">
                <img className="w-full h-full object-cover" src={headerImg} alt="Shiro" />
            </div>

            <div className="font-bold text-center uppercase mb-11">
                <h1 className="main-title leading-responsive-lg mb-5">
                    The Champion of <span className="inline-block bg-gray-800 text-gray-100 px-3 md:px-5 ml-1 md:ml-3">Justice</span>
                </h1>
                <h2 className="sub-title text-center tracking-super-wide">Heart of The Blessed</h2>
            </div>
        </header>
    )
}
