import bg from "../../assets/bg.jpg";
import logo1 from "../../assets/agec_icon.png";
import logo2 from "../../assets/aicteLogo.png";
import logo3 from "../../assets/agec_icon.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-[120vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center max-w-5xl px-6 mt-44">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Advanced and Global Engineering Challenges
        </h1>

        <h2 className="text-4xl font-bold mt-3">(AGEC-2K26)</h2>

        <h3 className="text-3xl font-semibold mt-4">
          Sponsored by AICTE
        </h3>

        <p className="mt-4 text-yellow-400 font-semibold">
          THEME : ENERGY EFFICIENCY, RENEWABLE AND SUSTAINABLE ENERGY
        </p>

        {/* Logos */}
        <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">

          <div className="bg-white rounded-lg p-4">
            <img src={logo1} className="h-16" />
          </div>

          <div className="bg-white rounded-lg p-4">
            <img src={logo2} className="h-16" />
          </div>

          <div className="bg-white rounded-lg p-4">
            <img src={logo3} className="h-16" />
          </div>

          <div className="bg-white rounded-lg p-4">
            <img src={logo2} className="h-16" />
          </div>

        </div>

        <p className="mt-6 text-lg">
          08th and 09th May, 2026
        </p>

        <p className="mt-6 text-lg">
          Organized by
        </p>

        <p className="text-yellow-400 font-semibold text-xl">
          Department of Electrical & Electronics Engineering, Aditya University
        </p>

        <p className="font-semibold mt-4">
          Surampalem, Andhra Pradesh, India
        </p>

        <p className="mt-4  font-semibold">
          Venue : ADITYA UNIVERSITY, Surampalem, ADB Road, Kakinada District, A. P. – 533437.
        </p>

      </div>
    </section>
  );
}