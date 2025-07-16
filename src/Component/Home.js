import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Home(){

     const {theme:theme1 } = useContext(ThemeContext);
     console.log(theme1);

    return(<>
    <p>HOME PAGE</p>
    </>);
}
export default Home;