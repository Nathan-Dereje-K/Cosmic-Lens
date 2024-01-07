import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
const Hero = ({ image, title, desc, date }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="relative">
        <img
          className="w-full relative"
          src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt="Milky way sky night picture"
        />

        <div>
          <h2
            className=" text-6xl font-semibold text-white leading-tight  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            data-aos="fade-left "
            data-aos-duration="2000"
          >
            Dive into the universe
          </h2>
        </div>
      </div>
      <div className="lg:flex gap-3 py-3 ">
        {/* image */}
        <div className="md:shrink-0">
          <img
            className="w-full max-h-[500px] object-cover"
            src={image}
            alt="Image of the day"
          />
        </div>
        {/* paragraph */}
        <div className="md:py-6 py-6 ml-5">
          <h3 className="text-2xl font-semibold text-indigo-700 leading-tight mt-4 ">
            {title}
          </h3>
          <p
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-base text-gray-700 leading-relaxed py-4 mt-4"
          >
            {desc}
          </p>
          <h4 className="text-lg font-medium text-gray-500 mt-2">{date}</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
