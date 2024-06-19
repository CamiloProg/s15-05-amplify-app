import { ImageData } from "./CardSongs.types";

export default function CardSongs({ tags, public_id, url }: ImageData) {
  return (
    <div className="flex-grow max-w-[250px] min-w-[150px] w-[calc(20%-1rem)] m-1 hover:cursor-pointer">
      <div className="relative border-none ">
        <img className="" src={url} alt="" />
        <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full">
          <p className="text-sm">{tags}</p>
        </div>
      </div>
      <div>
        <p className="text-center text-white font-semibold text-base leading-4 capitalize">
          {public_id}
        </p>
        <p className="text-center text-gray-400 font-medium text-[0.8rem]">Fernando</p>
      </div>
    </div>
  );
}
