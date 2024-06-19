import React from "react";

interface Artist {
  id: number;
  name: string;
  album: string;
  imageUrl: string;
}

interface ArtistRowProps {
  artist: Artist;
}

const ArtistRow: React.FC<ArtistRowProps> = ({ artist }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2 mb-4">
      <div className="w-40 h-40 rounded-xl overflow-hidden">
        <img src={artist.imageUrl} alt={artist.name} className="object-cover w-full h-full" />
      </div>
      <p className="text-center text-white font-semibold text-base leading-4">{artist.name}</p>
      <p className="text-center text-gray-400 font-medium text-[0.8rem]">{artist.album}</p>
    </div>
  );
};

export default ArtistRow;
