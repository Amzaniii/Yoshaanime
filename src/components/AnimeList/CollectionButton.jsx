"use client"

import React, { useState } from 'react'

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, anime_image, anime_title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        if (response.ok && response.status !== 204) {
        const collection = await response.json()
        if (collection.isCreated) {
            setIsCreated(true)
        }
        return
    }
    }

    return (
        <>
            {
                isCreated 
                ? 
                <p className="text-amber-50">Berhasil Ditambahkan Ke Koleksi</p>
                :
                <button
                    onClick={handleCollection}
                    className="px-10 py-1 bg-amber-700 text-amber-50 rounded">
                    Add To Collection
                </button>
                }
        </>
    )
}

export default CollectionButton