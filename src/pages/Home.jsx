// import Filler from "./components/Filler";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

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
      console.error("Error fetching image!", error);
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
        <Hero image={image} title={title} desc={desc} date={date} />
      )}
      {isLoading ? (
        ""
      ) : (
        <h2 className="md:text-4xl lg:text-5xl text-4xl font-serif font-bold mt-5">
          Discover
        </h2>
      )}
      <hr />
    </>
  );
}

export default Home;
