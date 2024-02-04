import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" ">
      <div className="absolute ">
        <img
          className="h-screen w-screen"
          src="https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg"
          alt="Another space image"
        />
      </div>
      <div className="relative text-white flex-col justify-center items-center py-16 px-16">
        <h1 className="text-3xl font-bold mb-4">About Our Cosmic Adventure</h1>
        <div className="text-lg mt-4 font-mono">
          <p data-aos="fade-left " data-aos-duration="1000">
            Welcome to our cosmic playground! 🚀 Embark on a captivating journey
            with us as we delve deep into the vast repository of data provided
            by NASAs API. From awe-inspiring images capturing the essence of
            distant galaxies to riveting facts illuminating the intricacies of
            our own solar system, theres a cosmic marvel waiting for every
            visitor.
          </p>
          <p className="mt-4" data-aos="fade-left " data-aos-duration="2000">
            At the heart of our mission is the commitment to making space
            exploration both enjoyable and accessible. Whether youre a seasoned
            astronomer well-versed in the cosmos or a casual stargazer with a
            newfound interest, our website is meticulously designed to kindle
            your curiosity and ignite your sense of wonder about the mysteries
            of the universe.
          </p>
          <p className="mt-4" data-aos="fade-left " data-aos-duration="3000">
            Join us on this interstellar odyssey as we collectively unravel the
            enigmatic secrets of the cosmos. As we navigate through the
            celestial wonders together, brace yourself for a cosmic adventure
            that promises to be unlike any other. Get ready to be inspired,
            educated, and enthralled in ways that will forever deepen your
            connection with the vastness of space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
