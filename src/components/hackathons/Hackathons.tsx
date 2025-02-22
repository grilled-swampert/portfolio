import TimeVideo from "../../assets/timeAnimation.mp4"

const Hackathons = () => {
  return (
    <div className="bg-black w-full h-[100vh] flex flex-col items-center justify-center" id="hackathons">
      <p
        className="text-6xl font-bold text-white"
        style={{ fontFamily: "afacad-bold" }}
      >
        HACKATHONS
      </p>
      {/* <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={TimeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default Hackathons;
