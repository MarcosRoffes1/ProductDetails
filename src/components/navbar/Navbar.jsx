import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <img src="/assets/logo_nike_principal.jpg" alt="" className="navLogo"/>
      <ul className="navLists">
        <li className="navList">Hombres</li>
        <li className="navList">Mujeres</li>
        <li className="navList">Niños</li>
        <li className="navList">Customizar</li>
        <li className="navList">Ventas</li>
        <li className="navList">Regalos</li>
        <li className="navList">SNKRS</li>
      </ul>
      <div className="navIcons">
        <div className="navSearch">
          <SearchIcon className="navSearchIcon"/>
          <input placeholder="Buscar" className="navSearchInput"/>
        </div>
       <FavoriteBorderIcon className="navIcon"/>
       <div className="navCart">
        <ShoppingCartOutlinedIcon className="navIcon"/>
        <label className="navCartLabel">1</label>
       </div>
       <div className="menuIcon">
        <MenuIcon />
        </div>
      </div>
    </div>
  )
}
