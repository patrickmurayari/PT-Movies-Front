import { SearchIcon } from '@heroicons/react/solid';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../redux/actions"
import { RxDot } from "react-icons/rx";
import Filters from './Filters';
import Cards from './Cards'
import Paginate from './Paginate';
import insta from '../img/insta.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import youtube from '../img/youtube.png'

import foto1 from "../img/img1.jpg"
import foto2 from "../img/img2.jpg"
import foto3 from "../img/img3.jpg"
import SearchBar from './SearchBar';

const slides = [

    {
        url: `${foto1}`,
    },
    {
        url: `${foto3}`,
    },
    {
        url: `${foto2}`,
    },
];

export default function Home() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const dispatch = useDispatch()
    const allMovies = useSelector((state) => state.Movies)
    const numPage = useSelector((state) => state.numPage);

    let desde = (numPage - 1) * 8;
    let hasta = numPage * 8;
    let cantPages = Math.floor(allMovies.length / 8);
    let viewMovies = allMovies.slice(desde, hasta)


    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Cambio automático de slide cada 5 segundos (ajusta el tiempo según tus necesidades)
    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Cambio cada 5 segundos

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="w-full py-0 md:px-1 relative group">
            <div className="bg-black w-full h-[400px] md:h-[600px]  overflow-hidden relative">
                {slides.map((slide, slideIndex) => (
                    <img
                        key={slideIndex}
                        src={slide.url}
                        alt={`Slide ${slideIndex}`}
                        className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 opacity-0  ${slideIndex === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

            </div>
            <div className=" flex top-4 justify-center">
                {slides.map((slide, slideIndex) => (
                    <div
                        id="productos"
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={` mt-0 text-3xl md:text-5xl cursor-pointer ${slideIndex === currentIndex ? "text-black" : "text-gray-400"
                            }`}
                    >
                        <RxDot />
                    </div>
                ))}
            </div>
            <SearchBar />
            <div>
                <Filters />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4  md:gap-2" >
                {
                    viewMovies && viewMovies.map((el, i) => {
                        return (<Cards
                            key={i}
                            id={el._id}
                            image={el.image}
                            title={el.title}
                            release_year={el.release_year}
                            type_title={el.type_title}
                        />)
                    })
                }
            </div>
            <div>
                <Paginate cantPages={cantPages} />
            </div>
            <div className="flex justify-center mt-16 gap-7">
                <a href="https://www.instagram.com/patrick_m_cc/" target="_blank" rel="noopener noreferrer">
                    <img className="h-5 mb-1 mr-3 md:h-7" src={insta} alt="" />
                </a>
                <a href="https://www.facebook.com/patrick.murayari.18/" target="_blank" rel="noopener noreferrer">
                    <img className="h-5 mb-1 mr-3 md:h-7 text-gray" src={facebook} alt="" />
                </a>
                <a href="https://twitter.com/midudev" target="_blank" rel="noopener noreferrer">
                    <img className="h-5 mb-1 mr-3 md:h-7 text-gray" src={twitter} alt="" />
                </a>
                <a href="https://www.youtube.com/@patrickmurayari" target="_blank" rel="noopener noreferrer">
                    <img className="h-5 mb-1 mr-3 md:h-7 text-gray" src={youtube} alt="" />
                </a>
            </div>

            <div className="text-center mt-12">
                <h3 className="font-bold inline-block mr-4 md:mr-20">Condition of Use</h3>
                <h3 className="font-bold inline-block mr-4 md:mr-20">Privacy & Policy</h3>
                <h3 className="font-bold inline-block">Press Room</h3>
            </div>

            <div className=" text-black text-center py-0.5 mt-9">
                <p>&copy; Movies By Pauin 2023</p>
            </div>

        </div >
    )
}

