"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

//   const fetchData = async () => {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
//     );
//     const data = await response.json();
//     setTopAnime(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [page]);

//  useEffect(() => {
//     const fetchData = async () => {
//       // Pastikan URL API benar
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
//       );
//       const data = await response.json();
//       setTopAnime(data);
//     };

//     fetchData();
//     // Scroll ke atas otomatis setiap ganti halaman (UX yang baik)
//     window.scrollTo({ behavior: "smooth", top: 0 });
//   }, [page]);


  useEffect(() => {
  const fetchData = async() => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(populerAnime)
  }

  fetchData()
    window.scrollTo({ behavior: "smooth", top: 0})
  }, [page])


  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
      <AnimeList api={topAnime} />
      {topAnime?.pagination?.last_visible_page ? (
      <Pagination page={page} lastPage={topAnime.pagination.last_visible_page} setPage={setPage}/>
      ) : (
        <div className="flex justify-center p-4 text-amber-50 hover:text-amber-500 transition-all cursor-pointer">Memuat navigasi...</div>
      )}
    </>
  );
};

export default Page;
