import { useState } from "react";
import { Announcements } from "./components/Announcements/index";
import { Header } from "./components/Header/index";
import { Hero } from "./components/Hero/index";
import { Products } from "./components/Products/index";
//import data from './data/data'

function App() {
  // const [count, setCount] = useState(0)
  // const { products } = data

  return (
    <div className="App">
      <Announcements />
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
