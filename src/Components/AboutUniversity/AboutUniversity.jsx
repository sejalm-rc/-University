import universityImg from "../../assets/aboutaditya.png";

export default function AboutUniversity() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

        {/* Left Content */}
        <div className="text-justify pl-14">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            About The University
          </h2>

          <p className="text-gray-700 leading-normal mb-4">
            <span className="font-bold">Aditya University</span> is a State
            Private University formed under the Andhra Pradesh Private
            Universities Act, 2016. It has evolved from the well-established
            <span className="font-bold">
              {" "}Aditya Engineering College in Surampalem
            </span>, Kakinada District, Andhra Pradesh.
            Aditya University is committed to provide quality higher education
            with global standards. Programs are well crafted to blend academic
            rigor with practical relevance, equipping students to effectively
            address both societal and industrial challenges.
          </p>

          <p className="text-gray-700 leading-normal">
            Experienced and learned teachers encourage intellectual curiosity,
            critical thinking, and cooperation among the diverse student
            community in an inclusive manner to realise their full potential
            and contribute to society. The memorandum of understanding with
            foreign universities usher a new era of international academic
            excellence.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={universityImg}
            alt="Aditya University"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}