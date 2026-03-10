import conferenceImg from "../../assets/Conference.png";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2  items-center">

        {/* Left Image */}
        <div className="b rounded-lg p-6 flex justify-center">
          <img
            src={conferenceImg}
            alt="International Conference"
            className="w-full max-w-md rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-justify pr-14">
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            About The Conference
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The <span className="font-semibold">2nd International Conference</span> on{" "}
            <span className="font-bold">
              Advanced and Global Engineering Challenges (AGEC) 2026
            </span>{" "}
            is going to be organized by Department of Electrical & Electronics
            Engineering, <span className="font-bold">Aditya University</span>,
            Surampalem on <span className="font-bold">08th and 09th May, 2026</span>{" "}
            in hybrid mode.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The conference is funded by AICTE and aligns with the theme of{" "}
            <span className="font-bold">
              Energy Efficiency, Renewable and Sustainable Energy
            </span>.
            AGEC-2026 invites high quality research papers in the areas of
            advanced Engineering, Science and Management. The primary goal of
            the conference is to share innovative ideas and encourage
            interaction between academia and industry to promote collaborative
            research involving scientists, engineers, professionals,
            researchers and students.
          </p>

          <p className="text-gray-700 leading-relaxed">
            All the accepted & presented papers will be available in the Scopus
            Indexed book series titled{" "}
            <span className="font-bold">
              “2nd International Conference on Advanced Global and Engineering
              Challenges - 2026”
            </span>{" "}
            published by NOVA Science publishers. Few Selected Papers will be
            published in International Journal of Vehicle Structures and
            Systems (IJVSS) Indexed by Scopus. The publication time required for
            IJVSS is one year (approx) with APC of Rs.16,000/-.
          </p>
        </div>

      </div>
    </section>
  );
}