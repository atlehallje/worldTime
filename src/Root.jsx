import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav className="flex justify-between p-8 bg-blue-400 items-center">
                <h1 className="text-4xl font-extrabold text-white">
                    <Link to="/">World Time</Link>
                </h1>

                <ul className="flex space-x-4">
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                </ul>
            </nav>
            <main className="p-8">
                <Outlet />
            </main>
        </>
    );
}