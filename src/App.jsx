import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

// 9oxy8bhwnEXgbxhrTDXngfEo0b9AdFo1uMEqIggI

function App() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(null);

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
      <Hero image={image} title={title} desc={desc} date={date} />
    </>
  );
}

export default App;
