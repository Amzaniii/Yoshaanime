import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import { ArrowSquareOutIcon, ChatCenteredTextIcon, TrayIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  console.log("🚀 ~ page ~ comments:", comments);

  return (
    <section className="mt-4 px-4 w-full max-w-5xl mx-auto">
    <Header title={"Riwayat Komentar"} />

      <div className="grid grid-cols-1 py-1 gap-6">
        {comments.length > 0 ? (
          comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="group relative flex flex-col gap-2 p-5 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 shadow-lg"
            >
               {/* Dekorasi Aksen Warna */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-600 rounded-l-2xl group-hover:bg-amber-400 transition-colors"></div>

              <div className="flex justify-between items-start pl-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-amber-500 font-bold text-lg group-hover:text-amber-400 transition-colors">
                    {comment.anime_title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ChatCenteredTextIcon size={14} />
                    <span>Telah dikomentari</span>
                  </div>
                </div>
                
                {/* Icon Indikator Link */}
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-all text-slate-400">
                  <ArrowSquareOutIcon size={20} />
                </div>
              </div>

              {/* Box Isi Komentar */}
              <div className="mt-2 p-4 bg-slate-900/50 rounded-xl border border-slate-700 group-hover:border-slate-600 transition-all">
                <p className="text-slate-200 italic leading-relaxed">
                  {comment.comment}
                </p>
              </div>

              {/* Efek Cahaya Saat Hover (Glow) */}
              <div className="absolute -z-10 inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"></div>
            </Link>
          );
        })
      ) : (
          /* Tampilan Empty State Kreatif */
          <div className="flex flex-col items-center justify-center py-20 bg-slate-800/20 rounded-3xl border-2 border-dashed border-slate-700">
            <div className="p-6 bg-slate-700/30 rounded-full mb-4 text-slate-500">
              <TrayIcon size={64} weight="thin" />
            </div>
            <h3 className="text-xl font-semibold text-slate-300">Belum ada jejak komentar</h3>
            <p className="text-slate-500 mb-6">Ayo mulai bagikan pendapatmu tentang anime favorit!</p>
            <Link 
              href="/" 
              className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-amber-900/20"
            >
              Jelajahi Anime
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;