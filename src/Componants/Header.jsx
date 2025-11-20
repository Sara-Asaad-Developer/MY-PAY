import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="w-full bg-emerald-300">
            <header className=" w-full flex items-center justify-between p-10">
                <div className=" container flex items-center justify-between">
                    <h1 className=" text-black ps-20 font-julia font-bold text-4xl ">MY PAY</h1>
                    <nav className=" flex gap-4 pe-20 text-black  cursor-pointer font-peto  text-[20px]  ">
                        <Link to='/src/Pages/HomePage.jsx' className=" hover:text-red-500">Home</Link>
                        <Link to='/' className=" hover:text-red-500">Login</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}
