import React from "react";
import { TracksData, Song } from "./FilteredSongsList.types";
import sampleSongs from "../../../data/amplifyDataBack.json";
import useStore from "../../../store/useStore";

const FilteredSongsList: React.FC = () => {
  const filterSongsByGenre = (tracksData: TracksData, genre: string): Song[] => {
    if (genre.toLowerCase() === "todos los géneros") {
      return tracksData.tracks.flatMap((track) => track.songs);
    }

    const filteredSongs: Song[] = [];
    tracksData.tracks.forEach((track) => {
      const songs = track.songs.filter((song) => song.gender.toLowerCase() === genre.toLowerCase());
      filteredSongs.push(...songs);
    });
    return filteredSongs;
  };

  const { selectedGenre } = useStore();

  const filteredSongs = filterSongsByGenre(sampleSongs, selectedGenre);

  return (
    <div className="text-white rounded-lg shadow-md max-h-64 overflow-y-auto custom-scrollbar">
      <h2 className="text-2xl font-medium">
        Resultados de la Búsqueda para <span className="font-bold">{selectedGenre}</span>
      </h2>
      <ul className="py-4 grid grid-cols-12 gap-3">
        {filteredSongs.map((song) => (
          <li
            key={song.title}
            className="relative w-40 h-40 cursor-pointer p-2 rounded-xl 
            overflow-hidden bg-black/50 shadow-lg md:col-span-3 sm:col-span-4 col-span-6"
          >
            <img
              src={song.cover_image}
              alt={song.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-black/50 flex flex-col
            justify-between items-start p-4"
            >
              <h3 className="text-lg font-semibold text-white">{song.title}</h3>
              <p className="text-sm text-gray-200 font-medium">{song.gender}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredSongsList;
