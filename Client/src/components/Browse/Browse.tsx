import React from "react";
import Sidebar from "components/Layout/Sidebar";
import playIcon from "../../assets/img/playIcon.svg";
import ConcertBanner from "components/common/ConcertBanner";
import AlbumRecommended from "components/common/AlbumRecommended";
import ArtistList from "components/common/ArtistList";
import FilteredSongsList from "components/common/FilteredSongsList";

const tracks = [
  {
    id: 1,
    name: "Divided in unity",
    imageUrl:
      "https://res.cloudinary.com/drwwbw0ih/image/upload/v1718154267/Tracks/ETERNIDAD-SONORA/Img/1.Divided%20in%20unity.png",
  },
  {
    id: 2,
    name: "Capeless Heroine",
    imageUrl:
      "https://res.cloudinary.com/drwwbw0ih/image/upload/v1718154498/Tracks/ETERNIDAD-SONORA/Img/2.Capeless%20Heroine.png",
  },
  {
    id: 3,
    name: "A bard's uprise",
    imageUrl:
      "https://res.cloudinary.com/drwwbw0ih/image/upload/v1718154727/Tracks/ETERNIDAD-SONORA/Img/3.A%20bard%27s%20uprise.png",
  },
];

const Browse: React.FC = () => {
  return (
    <div className="sm:container relative mb-4">
      {/** Banner */}
      <ConcertBanner
        title="¡Vuelve la celebración musical!"
        description="Música en vivo y concierto en Lollapalooza, Argentina"
        imageUrl="https://res.cloudinary.com/drwwbw0ih/image/upload/v1718736532/Assets/Concierto.jpg"
        buttonText="Más información"
        onButtonClick="https://www.lollapaloozaar.com/informacion"
      />
      <div className="flex items-center justify-between h-full lg:gap-x-2 overflow-y-auto">
        <div className="lg:w-1/5 w-0 ">
          <Sidebar />
        </div>
        <div className="w-full lg:w-4/5 flex justify-between gap-4">
          {/* Lista de Artistas Populares */}
          <div className="lg:w-3/4 w-full bg-[#010508] rounded p-4">
            <h2 className="text-2xl font-medium text-white">Artista Popular</h2>
            <ArtistList />
            <FilteredSongsList />
          </div>
          {/* Album Recomendado */}
          <AlbumRecommended
            albumTitle="ETERNIDAD SONORA"
            artistName="te2w"
            albumCoverUrl="https://res.cloudinary.com/drwwbw0ih/image/upload/v1718154942/Tracks/ETERNIDAD-SONORA/Portada.jpg"
            tracks={tracks}
            playIconUrl={playIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
