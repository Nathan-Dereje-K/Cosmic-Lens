// eslint-disable-next-line react/prop-types
const AstroCard = ({ name, country, pic }) => {
  return (
    // Card
    <div className=" relative h-auto w-full">
      {/* inner card */}
      <div className="absolute h-auto w-auto shadow-2xl">
        <img
          className="rounded-lg "
          src={pic}
          width={210}
          height={200}
          alt="Astronaut Card"
        />
        <div className="font-mono text-blue-950 text-1xl">
          <h3>Name: {name}</h3>
          <p>Role: {country}</p>
        </div>
      </div>
    </div>
  );
};

export default AstroCard;
