"use client"

import { FileSearchIcon } from "@phosphor-icons/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearchIcon size={40} className="bg-amber-700"/>
                <h3 className="text-gray-50 text-4xl font-bold">NOT FOUND</h3>
                <Link href="/" className="text-gray-50 hover:text-amber-700 transition-all underline">Back Home</Link>
                <button onClick={() => router.back()} className="text-gray-50 hover:text-amber-700 transition-all underline">Kembali</button>
            </div>
        </div>
    )
}

export default NotFound