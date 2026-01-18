import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  // console.log("🚀 ~ file: page.jsx:13 ~ Page ~ recommendedAnime:", recommendedAnime.length)
  // recommendedAnime = recommendedAnime.sort(() => Math.random() - 0.5)
  // recommendedAnime = { data: recommendedAnime.slice(0, 4) }
  // console.log("🚀 Rekomendasi Acak:", recommendedAnime.data.length)

  return (
    <>
    {/* anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      {/* anime Rekomendasi */}
      <section>
        <Header
          title="Rekomendasi"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
