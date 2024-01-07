const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-800 py-6">
      <h2 className="text-white text-3xl font-serif font ml-6">Cosmic Lens</h2>
      <div>
        <ul className="flex justify-start gap-5 text-xl text-white font-mono mr-12 ">
          <li className="hover:text-cyan-400 hover:cursor-pointer ">Home</li>
          <li className="hover:text-cyan-400  hover:cursor-pointer ">
            Services
          </li>
          <li className="hover:text-cyan-400 hover:cursor-pointer ">Contact</li>
          <li className="hover:text-cyan-400 hover:cursor-pointer ">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
