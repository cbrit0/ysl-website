import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Model from "./components/Model";
import HypeOnSocial from "./components/HypeOnSocial";
import Shades from "./components/Shades";
import QuickLinks from "./components/QuickLinks";
import Discover from "./components/Discover";

const App = () => {
  return (
    <main className="bg-white">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <Shades />
      <QuickLinks />
      <Model />
      <HypeOnSocial />
      <Discover />
    </main>
  );
};

export default App;
