import { useState, useEffect } from "react";

export const Publisher = () => {
  const [close, setClose] = useState(true);
 
  return (
    <section
      className="containerPublisher"
      style={{ display: close ? "block" : "none" }}
    >
      <div className="shadow" onClick={() => setClose(!close)}></div>
      <form className="content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="closeButton bi bi-x"
          viewBox="0 0 16 16"
          onClick={() => setClose(!close)}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <h2 className="form__title">Sign up to get </h2>
        <h3 className="form__subtitle">10% off + free smoothie guide </h3>
        <div className="form__group">
          <input type="text" className="form__input" placeholder=" "></input>
          <label htmlFor="name" className="form__label">First name</label>
        </div>
        <div className="form__group">
          <input type="text" className="form__input" placeholder=" "></input>
          <label htmlFor="email" className="form__label">Email address</label>
        </div>
        <button type="submit" className="form__button">
          Sign up{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-door-open"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
          </svg>
        </button>
      </form>
    </section>
  );
};
