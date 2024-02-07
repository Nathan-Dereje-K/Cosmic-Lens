const AstroCard = () => {
  return (
    // Card
    <div className=" relative h-auto w-full">
      {/* inner card */}
      <div className="absolute h-auto w-auto shadow-2xl">
        <img
          className="rounded-lg "
          src="https://images.pexels.com/photos/7169854/pexels-photo-7169854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={210}
          height={200}
          alt="Astronaut Card"
        />
        <div className="font-mono text-blue-950 text-1xl">
          <h3>Name: Nathan Dereje</h3>
          <p>Role: Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default AstroCard;
