import Link from "next/link"

const NavLinks = [
    {
        path:'/',
        title:'Home',
    },
    {
        path:'/about',
        title:'About',
    },
    {
        path:'/profile',
        title:'Profile',
    },
    {
        path:'/blogs',
        title:'Blogs',
    },
    {
        path:'/dashboard',
        title:'Dashboard',
    }




]
const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-semibold">NextHero</h1>
        <ul className="flex items-center justify-center">
            {
                NavLinks.map(({path,title}) => (
                    <li key={path} className="mx-2">
                        <Link href={path}>{title}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar