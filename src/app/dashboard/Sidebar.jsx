import Link from "next/link"

const Navlinks = [
    {
        path:'/dashboard',
        title:'Dashboard'
    },
    {
        path:'/dashboard/add-product',
        title:'Add Product'
    },
    {
        path:'/dashboard/manage-products',
        title:'Manage Products'
    },
    {
        path:'/',
        title:'Home'
    },
]

const Sidebar = () => {
  return (
    <aside className="my-10">
        <h1 className="text-3xl font-semibold">Dashboard page</h1>

        <ul className="">
            {
                Navlinks.map(({path,title}) => 
                <li key={path} className="my-2">
                    <Link href={path}>{title}</Link>
                </li>
                )
            }
        </ul>
    </aside>
  )
}

export default Sidebar