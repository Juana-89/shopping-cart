import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <figure className="figure">
        <img src="https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </figure>
      <div className="heroDescrip">
        <h1 className="title">¿Qué es Lorem Ipsum?</h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It is a long established fact
        that a reader will be distracted by the readable content of a page when
        looking at its layout. <br /> <br />
        <Link
          activeClass="active"
          to="products"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          <span className="span">
            <button className="button">Ver ofertas</button>
          </span>
        </Link>
      </div>
    </section>
  );
};
