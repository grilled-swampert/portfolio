import { LineShadowText } from "../ui/line-shadow-text";

const Landing = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1
        className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
        style={{ fontFamily: "poppins-bold" }}
      >
        crisp
        <LineShadowText className="italic" shadowColor="black">
          lettuce
        </LineShadowText>
      </h1>
    </div>
  );
};

export default Landing;
