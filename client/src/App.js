import Header from "../src/components/Header"
import About from "../src/components/About"
import Albums from "./components/Albums";
import Singles from "./components/Singles";
import Remixes from "./components/Remixes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gray-200">
      <Header/>
 
      <div className="flex justify-center flex-wrap bg-customGreen pt-24 pb-8 sm:pt-36">
        <img className=" w-auto max-h-[15vh] sm:max-h-[20vh] inline-block animate-slideLeft" src="/images/Xandr.png" alt="Xandr" />
        <img className=" w-auto max-h-[15vh] sm:max-h-[20vh] inline-block animate-slideRight ml-2" src="/images/Wolf.png" alt="Wolf" />
      </div>

      <About/>
      <Albums/>
      <Singles/>
      <Remixes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
