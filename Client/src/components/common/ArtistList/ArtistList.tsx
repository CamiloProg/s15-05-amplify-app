import { useRef, useState, useEffect, JSX } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArtistRow from "../ArtistRow";

const artistsData = [
  {
    id: 1,
    name: "te2w",
    album: "ETERNIDAD SONORA",
    imageUrl: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 2,
    name: "Musashi Nakamura",
    album: "OHIYO!",
    imageUrl: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    id: 3,
    name: "charlie",
    album: "HORIZONTE INTERESTELAR",
    imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 4,
    name: "Oleg Zobachev",
    album: "Ti Prego",
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 5,
    name: "Gainn",
    album: "ECOS DEL INFINITO",
    imageUrl: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: 6,
    name: "Luna Nova",
    album: "IT WAS LOVE",
    imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
  },
];

const ArtistList = (): JSX.Element => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const updateScrollState = (): void => {
        setIsScrolled(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollWidth > container.clientWidth &&
            container.scrollLeft < container.scrollWidth - container.clientWidth,
        );
      };

      updateScrollState();

      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);

      return () => {
        container.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, []);

  const scrollLeft = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-4 mb-2">
      {isScrolled && (
        <button
          className="absolute w-12 h-12 left-0 top-1/2 transform -translate-y-1/2
           bg-[#071E32] text-white rounded-full z-10 flex items-center justify-center ml-1"
          onClick={scrollLeft}
        >
          <ArrowLeft />
        </button>
      )}
      <div
        className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide gap-3"
        ref={containerRef}
      >
        {artistsData.map((artist) => (
          <ArtistRow key={artist.name} artist={artist} />
        ))}
      </div>
      {canScrollRight && (
        <button
          className="absolute w-12 h-12 right-0 top-1/2 transform -translate-y-1/2
           bg-[#071E32] text-white rounded-full z-10 flex items-center justify-center mr-1"
          onClick={scrollRight}
        >
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default ArtistList;
