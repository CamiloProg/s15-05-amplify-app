import React from "react";
import { RiPlayList2Fill } from "react-icons/ri";
import { AlbumRecommendedProps } from "./AlbumRecommended.types";

const AlbumRecommended: React.FC<AlbumRecommendedProps> = ({
  albumTitle,
  artistName,
  albumCoverUrl,
  tracks,
  playIconUrl,
}) => {
  return (
    <div className="max-h-screen w-1/4 bg-gray-700 text-white p-4 rounded hidden lg:flex flex-col">
      <h3 className="text-white font-medium text-xl mb-4 text-center">Álbum Recomendado</h3>
      <img src={albumCoverUrl} alt="album" className="w-full h-52 rounded-xl" />
      <div className="my-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="text-white text-base font-semibold">{albumTitle}</h4>
          <p className="text-gray-400 text-sm font-medium">{artistName}</p>
        </div>
        <RiPlayList2Fill size={"1.35em"} />
      </div>

      <div className="border-b border-gray-400 my-4"></div>

      <div className="w-full">
        <ul className="flex flex-col gap-4">
          {tracks.map((track) => (
            <li key={track.id} className="flex">
              <div className="w-full flex">
                <img src={track.imageUrl} alt={track.name} className="w-7 h-7 mr-2" />
                <p>{track.name}</p>
              </div>
              <img className="ml-1 w-3 cursor-pointer" src={playIconUrl} alt="Play icon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlbumRecommended;
