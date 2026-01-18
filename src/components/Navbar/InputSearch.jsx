"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value

    // if(!keyword) return
    if(!keyword || keyword.trim() == "") return

    if(event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`)

      // const keyword = searchRef.current.value.trim();

      // if(!keyword) {
      //   return
      // }

      // router.push(`/search/${keyword}`, undefined, { shallow: true });
      // console.log("Mencari:", keyword)
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      <input
        placeholder="cari anime..."
        className="w-full p-2 rounded bg-amber-50"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute top-1/2 -translate-y-1/2 right-2 text-black-500 hover:text-black z-10 p-1"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
