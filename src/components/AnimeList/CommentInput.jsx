"use client";

import { CircleNotchIcon, PaperPlaneRightIcon, WarningCircleIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    if (comment.trim().length < 3) {
      alert("Komental minimal harus 3 karakter!")
      return
    }

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok && response.status !== 204) {
      const postComment = await response.json();
      if (postComment.isCreated) {
        setIsCreated(true);
        setComment("")
        setIsLoading(false)
        router.refresh()
      }
      return;
    }
  };

  return (
    <div className="flex flex-col gap-3 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-xl">
      <div className="flex justify-between items-center">
        <label className="text-amber-400 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
          Bagikan Pendapatmu
        </label>
        <span className={`text-xs ${comment.length < 3 ? 'text-slate-400' : 'text-green-400'}`}>
          {comment.length} karakter
        </span>
      </div>
      <textarea
        onChange={handleInput}
        value={comment}
        placeholder="Tulis Keseruan/Keresahan Tentang Anime Ini..."
        className="w-full h-32 text-xl p-4 bg-gray-700 text-amber-50"
      />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="min-h-24px">
          {comment.length > 0 && comment.length < 3 && (
            <p className="text-red-400 text-sm flex items-center gap-1 animate-bounce">
              <WarningCircleIcon size={18} /> Minimal 3 huruf ya!
            </p>
          )}
          {isCreated && (
            <p className="text-green-400 text-sm flex items-center gap-1 italic">
              ✨ Komentar berhasil meluncur!
            </p>
          )}
        </div>

        <button
          onClick={handlePosting}
          disabled={comment.length < 3 || isLoading}
          className="group relative w-full sm:w-52 px-6 py-3 bg-amber-600 disabled:bg-slate-700 text-white font-bold rounded-full overflow-hidden transition-all duration-300 active:scale-95 shadow-lg shadow-amber-900/20"
        >
          <div className="relative z-10 flex items-center justify-center gap-2">
            {isLoading ? (
              <CircleNotchIcon size={22} className="animate-spin" />
            ) : (
              <>
                <span>Kirim</span>
                <PaperPlaneRightIcon size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
