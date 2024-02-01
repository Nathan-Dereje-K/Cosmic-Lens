import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
const Hero = ({ image, title, desc, date }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="relative b">
        <img
          className="w-full relative"
          src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg"
          alt="Milky-way sky night picture"
        />
        <div>
          <h2
            className="lg:text-6xl md:text-5xl font-mono text-white leading-tight  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            data-aos="fade-left "
            data-aos-duration="2000"
          >
            Explore the universe 🚀
          </h2>
        </div>
      </div>
      <Card image={image} title={title} desc={desc} date={date} />
    </>
  );
};

export default Hero;
