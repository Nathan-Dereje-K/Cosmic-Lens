import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="absolute bg-gray-500">
      <img
        className="h-screen w-screen relative"
        src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Earth from space picture"
      />
      <h2
        data-aos="fade-left "
        data-aos-duration="2000"
        className="text-5xl font-bold font-sans  mb-4 ml-3 mt-3  text-white"
      >
        Contact Us
      </h2>
      <form
        data-aos="fade-right "
        data-aos-duration="3000"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <div className="mb-4 text-white">
          <label htmlFor="name" className="block text-sm font-medium ">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4 text-white">
          <label htmlFor="email" className="block text-sm font-medium ">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4 text-white">
          <label htmlFor="message" className="block text-sm font-medium ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
