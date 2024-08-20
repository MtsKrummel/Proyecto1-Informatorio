import AlbumCard from "./components/Cards/AlbumCard";
import PlayMusicCard from "./components/Cards/PlayMusicCard";
import CategoryButton from "./components/CategoryButton";
import './index.css';

const listenAgain = {
  title: 'El ultimo Baile',
  artist: 'Trueno',
  img: '/elultimobaile-album.png'
}

const Songs = [
  { title: 'Por Mil Noches', artist: 'Airbag', img: '/pormilnoches-song.png' },
  { title: 'Blinding Lights', artist: 'The Weeknd', img: '/The_Weeknd-Blinding_Lights.png' },
  { title: 'Shape of You', artist: 'Ed Sheeran', img: '/Shape_of_You.png' },
  { title: 'Levitating', artist: 'Dua Lipa', img: '/Levitating.png' },
  { title: 'Creep', artist: 'Radiohead', img: '/creep.png' },
  { title: 'Bad Guy', artist: 'Billie Eilish', img: '/badguy.png' },
  { title: '505', artist: 'Arctic Monkeys', img: '/505.png' },
  { title: 'Watermelon Sugar', artist: 'Harry Styles', img: '/watermelonsugar.png' },
];

const Albums = [
  {
    title: 'El Último Tour Del Mundo',
    artist: 'Bad Bunny',
    img: '/El Último Tour Del Mundo.png'
  },
  {
    title: 'After Hours',
    artist: 'The Weeknd',
    img: '/After Hours.png'
  },
  {
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    img: '/Future Nostalgia.png'
  },
  {
    title: 'Fine Line',
    artist: 'Harry Styles',
    img: '/watermelonsugar.png'
  },
  {
    title: 'Blurryface',
    artist: 'Twenty One Pilots',
    img: '/Blurryface.png'
  },
];


export default function Main() {
  return (
    <div className="flex flex-col gap-[64px] h-full w-full max-w-full transition-all">
      {/* Lista de botones */}
      <div className="flex flex-wrap gap-3">
        <CategoryButton children='Rock' />
        <CategoryButton children='Pop' />
        <CategoryButton children='Metal' />
        <CategoryButton children='Trap' />
      </div>

      {/* Sección Listen Again */}
      <section className="flex flex-col">
        <h1 className="flex text-3xl font-semibold">Listen Again</h1>
        <div className="flex gap-4 mt-4">
          <AlbumCard 
            title={listenAgain.title}
            artist={listenAgain.artist}
            img={listenAgain.img}
          />
        </div>
      </section>

      {/* Sección Quick picks */}
      <section className="flex flex-col w-full">
        <h1 className="flex text-3xl font-semibold">Quick picks</h1>
        <div className="relative mt-8">
          <div className="quick-picks-container">
            {Songs.map((song, index) => (
              <div className="quick-pick-card" key={index}>
                <PlayMusicCard
                  title={song.title}
                  artist={song.artist}
                  img={song.img}
                />
              </div>
            ))}
          </div>

          {/* Scroll buttons */}
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white">
            &lt;
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white">
            &gt;
          </button>
        </div>
      </section>

      {/* Sección Recommended albums */}
      <section className="albums flex flex-col">
        <h1 className="flex text-3xl font-semibold">Recommended albums</h1>
        <div className="albums-container grid xl:grid-cols-5 xl:w-full w-full md:grid-cols-4 mt-8">
          {
            Albums.map((album, index) => (
              <div className="album-card" key={index}>
                <AlbumCard
                  title={album.title}
                  artist={album.artist}
                  img={album.img}
                />
              </div>
            ))
          }
        </div>
      </section>

      {/* Sección SIMILAR TO */}
      <section className="flex flex-col">
        <h1 className="flex text-3xl font-semibold">Similar to</h1>
      </section>
    </div>
  );
}