import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-amber-800">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-8 bounce">
                <Link href="/" className="font-bold text-white text-2xl">YOSHA_ANIME</Link>
                <InputSearch />
                <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar