import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  if (!api || !api.data) return null;
  return (
    <main className="animate__animated animate__backInUp animate__delay-1s">
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api?.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={`${anime.mal_id}-${index}`}
            className="cursor-pointer group text-fuchsia-50 hover:text-amber-400 transition-all"
          >
            <div className="overflow-hidden rounded">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={350}
                height={350}
                className="w-full max-h-64 object-cover transition-all group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
    </main>
  );
};

export default AnimeList;
