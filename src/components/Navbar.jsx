import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-800 py-6">
      <h2 className="text-white text-3xl font-serif font ml-6">
        <Link to="/">Cosmic Lens</Link>
      </h2>
      <div>
        <ul className="flex justify-start gap-5 text-xl text-white font-mono mr-12 ">
          <li className="hover:text-cyan-400 hover:cursor-pointer ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-cyan-400  hover:cursor-pointer ">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-cyan-400 hover:cursor-pointer ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-cyan-400 hover:cursor-pointer ">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
