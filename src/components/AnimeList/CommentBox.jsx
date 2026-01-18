import prisma from '@/libs/prisma'
import React from 'react'

const CommentBox = async ({ anime_mal_id }) => {
    const comment = await prisma.comment.findMany({where: { anime_mal_id } })

    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            {comment.map(comment => {
                return (
                    <div key={comment.id} className="text-orange-100 bg-amber-700 p-4 rounded-2xl">
                        <p className="flex justify-center items-center text-black text-xl">{comment.username}</p>
                        <p className="flex justify-center items-center">{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox