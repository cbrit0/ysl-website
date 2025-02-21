import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import HypeOnSocial from "./components/HypeOnSocial";

const App = () => {
  return (
    <main className="bg-white">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <Highlights />
      <Model />
      <HypeOnSocial />
    </main>
  );
};

export default App;
