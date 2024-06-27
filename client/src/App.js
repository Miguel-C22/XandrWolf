import Header from "../src/components/Header"
import About from "../src/components/About"
import Albums from "./components/Albums";
import Singles from "./components/Singles";
import Remixes from "./components/Remixes";

function App() {
  return (
    <div className="App">
      <Header/>
 
      <div className="flex justify-center flex-wrap bg-customGreen p-4 sm:p-8">
        <img className=" w-auto max-h-[20vh] inline-block animate-slideLeft" src="/images/Xandr.png" alt="Xandr" />
        <img className=" w-auto max-h-[20vh] inline-block animate-slideRight ml-2" src="/images/Wolf.png" alt="Wolf" />
      </div>

      <About/>
      <Albums/>
      <Singles/>
      <Remixes />

    </div>
  );
}

export default App;
