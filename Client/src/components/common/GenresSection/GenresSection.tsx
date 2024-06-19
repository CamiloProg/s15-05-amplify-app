import React from "react";
import { GenresSectionProps } from "./GenresSection.types";
import Badge from "../Badge";
import useStore from "../../../store/useStore";

const GenresSection: React.FC<GenresSectionProps> = ({ title, genres }) => {
  const { setSelectedGenre, selectedGenre } = useStore();

  const handleGenreChange = (genre: string): void => {
    setSelectedGenre(genre);
  };

  return (
    <div className="p-5 w-full">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre, index) => (
          <Badge
            key={genre.id}
            title={genre.title}
            href={genre.href}
            active={genre.title === selectedGenre}
            onClick={() => handleGenreChange(genre.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default GenresSection;
