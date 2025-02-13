import lettuceicon from "../assets/lettuce-icon.svg";

const Navbar = () => {
  return (
    <nav className="bg-black w-[40vw] text-5xl text-white flex items-center justify-between p-4 rounded-full shadow-md">
      <div className="flex items-center">
        <img
          src={lettuceicon}
          alt="Lettuce logo"
          className="h-10 w-10 rounded-full"
        />
        <span className="ml-2 text-3xl tracking-wide" style={{ fontFamily: 'poppins-regular' }}>
          crisplettuce
        </span>
      </div>
      
    </nav>
  );
};

export default Navbar;
