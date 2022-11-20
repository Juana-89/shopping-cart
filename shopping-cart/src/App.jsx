import { useState } from "react";
import { Header } from "./components/Header/index";
import { Products } from "./components/Products/index";
//import data from './data/data'

function App() {
  // const [count, setCount] = useState(0)
  // const { products } = data

  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
