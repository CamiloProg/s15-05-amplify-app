import Sidebar from 'components/Layout/Sidebar';
import { PiListPlusBold } from "react-icons/pi";
import { MdMoreVert } from "react-icons/md";

function Playlists() {
  return (
    <div className="flex md:p-0 md:pr-2 p-2 md:gap-2">
      <div className="lg:w-1/5 w-0 pt-10">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5 flex">
        <div className='bg-[#27272A] w-[800px] h-[800px] ml-7 rounded-xl p-6'>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className='text-white text-5xl font-semibold'>Mis Playlists</h1>
              <span className='text-gray-400 pt-6'>Playlist by Fernando</span>
            </div>
            <PiListPlusBold className="text-white text-2xl" />
          </div>
          <div className="mt-10 space-y-4">
            <div className="bg-gray-700 p-4 rounded-md flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="https://res.cloudinary.com/drwwbw0ih/image/upload/v1718153741/Tracks/PUNK_MY_LIFE/PunkAlbum.jpg" alt="Playlist 1" className="w-16 h-16 rounded" />
                <div>
                  <h2 className="text-white text-xl font-semibold">Mi playlist n.º 1</h2>
                  <span className='text-gray-400'>Playlist · Fernando</span>
                </div>
              </div>
              <MdMoreVert className="text-gray-300 text-2xl" />
            </div>
            
            <div className="bg-gray-700 p-4 rounded-md flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="https://res.cloudinary.com/drwwbw0ih/image/upload/v1718169652/Tracks/IT-WAS-LOVE/Portada-Pop.png.png" alt="Playlist 2" className="w-16 h-16 rounded" />
                <div>
                  <h2 className="text-white text-xl font-semibold">Rock Playlist</h2>
                  <span className='text-gray-400'>Playlist · Vinicius Reis</span>
                </div>
              </div>
              <MdMoreVert className="text-gray-300 text-2xl" />
            </div>
          </div>
        </div>
        <div>
        <div className='bg-[#27272A] w-[300px] h-[800px] ml-7 rounded-xl p-6'>
          <div className='text-white'>
            <h2 className='text-xl font-semibold'>Acerca del artista</h2>
            <img src="https://res.cloudinary.com/drwwbw0ih/image/upload/v1718822751/banners/artista1.jpg" alt="James Arthur" className="w-full h-auto rounded mt-4" />
            <p className='mt-4 text-center'>James Arthur can look back on a decade-long career, including 4 studio albums to date, 16 billion sold units (audio/video streams/downloads), and...</p>
            <h3 className='text-lg text-center font-semibold mt-6'>Créditos</h3>
            <ul className='mt-2 text-center'>
              <li>James Arthur - Artista Principal, Composición, Letrista</li>
              <li>Steven Solomon - Composición, Letrista</li>
              <li>Neil Ormandy - Composición, Letrista</li>
            </ul>
            <h3 className='text-lg text-center font-semibold mt-6'>De gira</h3>
            <ul className='mt-2 text-center'>
              <li>Bristol - Jun 22</li>
              <li>Landgraaf - Jun 23</li>
            </ul>
          </div>
        </div>
        
        </div>
        
      </div>
    </div>
  );
}

export default Playlists;   