import { useEffect } from "react";
import { Announcements } from "./components/Announcements/index";
import { Header } from "./components/Header/index";
import { Hero } from "./components/Hero/index";
import { Products } from "./components/Products/index";
import { Publisher } from "./components/Publisher/index";
import { Footer } from "./components/Footer/index";

function App() {
  useEffect(() => {
    document.title='Shopping cart - Women clothes'
  },[])

  return (
    <div className="App">
      <Announcements />
      <Header />
      <Hero />
      <Products />
      <Publisher />
      <Footer />
    </div>
  );
}

export default App;
