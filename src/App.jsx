import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Model from "./components/Model";
import HypeOnSocial from "./components/HypeOnSocial";
import Shades from "./components/Shades";

const App = () => {
  return (
    <main className="bg-white">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <Shades />
      <Model />
      <HypeOnSocial />
    </main>
  );
};

export default App;
