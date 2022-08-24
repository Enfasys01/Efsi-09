import {Outlet} from 'react-router-dom'

const Layout = () =>{
    return(
        <>
            <nav className="text-center py-5 text-3xl text-white bg-sky-600">
                <div>Clima React APP</div>
            </nav>
            <div className='container mx-auto px-2'>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;