import { useState, useEffect } from "react";

export const Publisher = () => {
  const [close, setClose] = useState(true);

  return (
    <section className="containerPublisher" style={{ display: close ? "block" : "none" }}>
 <div className="content">
<svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="closeButton bi bi-x"
        viewBox="0 0 16 16"
        onClick={()=>setClose(!close)}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
      <h2>Sign up to get </h2><br/>
    <h3>10% off + free smoothie guide </h3><br/>
   
    <input placeholder="First name"></input><br/>
    <input placeholder="Email address"></input><br/>
    <button className="button">Sign up</button>
    </div>
    </section>
  )
}
