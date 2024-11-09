import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OnePiece from '../assets/manga_paperbacks/one_piece_v100.jpg'
import Naruto from '../assets/manga_paperbacks/naruto_v72.jpg'
import AttackonTitan from '../assets/manga_paperbacks/attack_on_titans_vol34.jpg'
import DemonSlayer from '../assets/manga_paperbacks/demon_slayer_vol23.jpg'
import MyHeroAcademia from '../assets/manga_paperbacks/my_hero_academia_v30.jpg'
import JujutsuKaisen from '../assets/manga_paperbacks/jujutsu_kaisan_vol15.jfif'

const MangaCarousel = () => {
  const sliderRef = useRef(null);

  const mangaData = [
    {
      id: 1,
      title: "One Piece",
      author: "Eiichiro Oda",
      price: "$9.99",
      volume: "Vol. 100",
      imageUrl: OnePiece
    },
    {
      id: 2, 
      title: "Naruto",
      author: "Masashi Kishimoto",
      price: "$9.99",
      volume: "Vol. 72",
      imageUrl: Naruto
    },
    {
      id: 3,
      title: "Attack on Titan",
      author: "Hajime Isayama",
      price: "$10.99",
      volume: "Vol. 34",
      imageUrl: AttackonTitan
    },
    {
      id: 4,
      title: "Demon Slayer",
      author: "Koyoharu Gotouge",
      price: "$9.99",
      volume: "Vol. 23",
      imageUrl: DemonSlayer
    },
    {
      id: 5,
      title: "My Hero Academia",
      author: "Kohei Horikoshi",
      price: "$9.99",
      volume: "Vol. 30",
      imageUrl: MyHeroAcademia
    },
    {
      id: 6,
      title: "Jujutsu Kaisen",
      author: "Gege Akutami",
      price: "$9.99",
      volume: "Vol. 15",
      imageUrl: JujutsuKaisen
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="w-full px-4 py-8 overflow-hidden">
      <h2 className="text-3xl font-semibold mb-6">BestSellers</h2>
      <div className="relative px-8">
        <Slider ref={sliderRef} {...settings}>
          {mangaData.map((manga) => (
            <div key={manga.id} className="px-2">
              <div>
                <div className="relative aspect-[2/3] w-full">
                  <img
                    src={manga.imageUrl}
                    alt={manga.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {manga.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{manga.author}</p>
                  <p className="text-sm text-gray-500 mb-2">{manga.volume}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">
                      {manga.price}
                    </span>
                    <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <button
          onClick={previous}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default MangaCarousel;