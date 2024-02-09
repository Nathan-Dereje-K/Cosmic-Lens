// import Filler from "./components/Filler";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import AstroCard from "../components/AstroCard";

// 9oxy8bhwnEXgbxhrTDXngfEo0b9AdFo1uMEqIggI

function Home() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImage = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=9oxy8bhwnEXgbxhrTDXngfEo0b9AdFo1uMEqIggI"
      );
      const data = await response.json();

      setImage(data.url);
      setTitle(data.title);
      setDesc(data.explanation);
      setDate(data.date);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Hero image={image} title={title} desc={desc} date={date} />
          <h2 className="md:text-4xl text-[#101431] lg:text-5xl text-4xl font-serif font-bold mt-5">
            Discover
          </h2>
          <hr />
          <div className="w-full m-6 gap-5 flex justify-evenly">
            <AstroCard
              name={"Valentina Tereshkova"}
              country={"Soviet cosmonaut"}
              pic={
                "https://www.nmspacemuseum.org/wp-content/uploads/2019/03/valentina-tereshkova-768x1195.jpg"
              }
            />
            <AstroCard
              name={"Neil Armstrong"}
              country={"American cosmonaut"}
              pic={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/330px-Neil_Armstrong_pose.jpg"
              }
            />
            <AstroCard
              name={"Sally Ride"}
              country={"American cosmonaut"}
              pic={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sally_Ride_%281984%29.jpg/330px-Sally_Ride_%281984%29.jpg"
              }
            />
            <AstroCard
              name={"Mae Jemison"}
              country={"American cosmonaut"}
              pic={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mae_Carol_Jemison.jpg/330px-Mae_Carol_Jemison.jpg"
              }
            />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
