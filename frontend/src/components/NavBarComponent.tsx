import { Link } from '@tanstack/react-router'

function NavBar() {
    return (
        <div className="navbar shadow-sm bg-linear-to-b from-[#871433] to-[#21050C]">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><Link to="/brackets" activeProps={{ className: 'underline' }}>Brackets</Link></li>
                    <li><Link to="/matches" activeProps={{ className: 'underline' }}>Matches</Link></li>
                    <li><Link to="/teams" activeProps={{ className: 'underline' }}>Teams</Link></li>
                </ul>
                </div>
                <img src="/wideLogo.svg" alt="Logo Qatar" className="h-12 w-auto m-2" />
            </div>
            <div className="navbar-center justify-items-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><Link to="/brackets" className="active:bg-white active:rounded-lg active:text-white" activeProps={{ className: 'underline' }}>Brackets</Link></li>
                    <li><Link to="/matches" className="active:bg-white active:rounded-lg active:text-white" activeProps={{ className: 'underline' }}>Matches</Link></li>
                    <li><Link to="/teams" className="active:bg-white active:rounded-lg active:text-white" activeProps={{ className: 'underline' }}>Teams</Link></li>
                    <li><Link to="/stats" className="active:bg-white active:rounded-lg active:text-white" activeProps={{ className: 'underline' }}>Stats</Link></li>
                    
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}

export default NavBar;