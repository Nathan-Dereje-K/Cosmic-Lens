const Hero = ({ image, title, desc, date }) => {
  return (
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
        <p className="text-base text-gray-700 leading-relaxed py-4 ">{desc}</p>
        <h4 className="text-lg font-medium text-gray-500 mt-2">{date}</h4>
      </div>
    </div>
  );
};

export default Hero;
