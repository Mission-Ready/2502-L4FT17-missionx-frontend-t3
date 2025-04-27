import Header from "./components/Header";
import Banner from "./components/Banner";
import Button from "@mui/material/Button";
import Body from "./components/Body";
import KerrysFooter from "./components/KerrysFooter";

export default function Home(){
  return(
  <div>
    
    <header>
      <Header></Header>
      <Banner></Banner>
    </header>

    <div>
      <Body></Body>
    </div>
    

      <footer>
        <KerrysFooter></KerrysFooter>
 
    </footer>
    </div>
  )
}