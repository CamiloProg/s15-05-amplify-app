import { JSX } from "react";
import { ITrack } from "./Player.types";
import { RiPlayListFill } from "react-icons/ri";

// handler might be removed to use context

function Tracks({
  tracks = [],
  handler,
}: {
  tracks: ITrack[];
  handler: (index: number) => void;
}): JSX.Element | null {
  if (tracks?.length < 2) {
    return null;
  }

  return (
    <div className="group relative max-md:px-2.5 max-md:order-2">
      <button aria-label="Lista de canciones">
        <RiPlayListFill size={"1.35em"} />
      </button>
      <div
        className="hidden group-hover:flex h-80 overflow-y-scroll 
      flex-col absolute transition-all duration-200 bottom-0 right-0 bg-black w-60"
      >
        {tracks.map((e, index) => (
          <button key={e.title} onClick={() => handler(index)} className="hover:bg-white/20 p-2">
            {e.artist} - {e.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tracks;
