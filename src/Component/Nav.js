import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import light from '../img/brightness_3_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import dark from '../img/contrast_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

function Nav(){
      const { theme,setTheme }=useContext(ThemeContext);
      console.log(theme);

      let myStyle = {};
      if(theme === 'light'){
        myStyle = {
          background:'rgba(97, 190, 215, 1)',
          color:'#2897b6ff'
        }

      }
      else{
        myStyle = {
          background:'#e91e63',
          color:'#590c85ff'
        }
      }

      

    return(<>
    <header>
        {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> */}
          <nav className="navbar navbar-expand-sm " style={myStyle}>

            <div className="container-fluid">
                <a className="navbar-brand" href="#">logo</a>

    <ul className="nav nav-pills">
  <li className="nav-item">
    <Link className="nav-link active" to="/home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contactus</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/services">Services</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/product">products</Link>
  </li>
   <li>
    {
      theme === 'light'?
      (
        <img src={dark} onClick={()=>setTheme('dark')} />
      )
      :
      (
        <img src={light} onClick={()=>setTheme('light')} />
      )
    }
   </li>

  </ul>
</div>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>

    </>);
}
export default Nav;