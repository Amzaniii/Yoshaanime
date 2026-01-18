import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession()
    // console.log(user.email)

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2">
            {
                user ? <Link href="/user/dashboard" className="text-amber-50 py-1">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-black text-amber-50 py-0.5 px-12 inline-block">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton