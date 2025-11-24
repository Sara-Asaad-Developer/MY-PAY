import { Link } from 'react-router-dom'

export default function Header() {
    return (

        <div className= "bg-[#4b0d40] ">
            < div className=" w-full h-[15dvh] bg-[url('https://assets.nicepagecdn.com/d2cc3eaa/2882063/images/Untitled-2-min.png')]
             bg-no-repeat bg-cover bg-top rounded-[20px]">
                <header className=" w-full flex items-center justify-between pt-8">
                    <div className=" container flex items-center justify-between">
                        <h1 className=" text-[#12023e] ps-20 font-julia font-bold text-4xl ">MY PAY</h1>
                        <nav className=" flex gap-4 pe-20  text-white  cursor-pointer font-peto  text-[20px]  ">
                            <Link to='home' className=" hover:text-red-500">Home</Link>
                            <Link to='/' className=" hover:text-red-500">Login</Link>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    )
}
