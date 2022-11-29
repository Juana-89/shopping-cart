import React from "react";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <figure className="figure">
        <img src="https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </figure>
      <div className="heroDescrip">
        <h2 className="title">¿Qué es Lorem Ipsum?</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </section>
  );
};
