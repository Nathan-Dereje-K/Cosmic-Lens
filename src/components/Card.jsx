// eslint-disable-next-line react/prop-types
const Card = ({ image, title, desc, date }) => {
  const dummy_URI = "https://placehold.co/600x400";
  return (
    <>
      <div className="lg:flex gap-3 py-3 ">
        {/* image */}
        <div className="md:shrink-0">
          <img
            data-aos="fade-up "
            data-aos-duration="2500"
            className="w-full ml-3 rounded-lg max-h-[500px] object-cover"
            src={image ? image : dummy_URI}
            alt="Image of the day"
          />
        </div>
        {/* paragraph */}
        <div className="md:py-6 py-6 ml-5 mt-5">
          <h3 className="text-2xl font-semibold text-indigo-700 leading-tight mt-4 ">
            {title}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            className="text-base text-gray-700 leading-relaxed py-4 mt-4"
          >
            {desc}
          </p>
          <div data-aos="fade-down" data-aos-duration="2000">
            <h4 className="text-lg font-medium text-gray-500 mt-2">{date}</h4>
            <h4 className="text-lg font-medium text-gray-500 mt-2">
              # Knowlage of the day
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
