// import Filler from "./components/Filler";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

// 9oxy8bhwnEXgbxhrTDXngfEo0b9AdFo1uMEqIggI

function App() {
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

      // Assuming the API response has an 'imageUrl' field
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
      <Navbar />
      {isLoading ? (
        <h3 className="text-blue-700 font-serif text-4xl py-10 px-10">
          Loading ...
        </h3>
      ) : (
        <Hero image={image} title={title} desc={desc} date={date} />
      )}
      <h2 className="md:text-4xl lg:text-5xl text-4xl font-serif font-bold mt-5">
        Discover
      </h2>
      <hr />
      <br />
      {/* <div className="flex gap-5">
        <Filler />
        <Filler />
        <Filler />
        <Filler />
      </div> */}
    </>
  );
}

export default App;
