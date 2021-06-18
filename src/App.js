import './App.css';
import {Navbar} from "./Components/Navbar";
import {Currency} from "./Components/Currency";
import {Footer} from "./Components/Footer";
import {Table} from "./Components/Table";
import {Sticky} from "./Components/Sticky";

function App() {

  return (
   <>
   <Navbar/>
   <Currency/>
   <img id="p1" src="/Images/logo.png" alt=""/>
   <Table/>
   <img id="p2" src="/Images/logo2.png" alt=""/>
   <Footer/>
    <Sticky/>

     </> 
  );
}

export default App;
