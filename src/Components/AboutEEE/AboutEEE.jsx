import eeeImg from "../../assets/department.png";

export default function AboutEEE() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="flex pl-8 justify-center">
          <img
            src={eeeImg}
            alt="Electrical and Electronics Engineering"
            className="rounded-lg shadow-md w-full max-w-lg "
          />
        </div>

        {/* Right Content */}
        <div className="text-justify pr-14">
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            About EEE Department
          </h2>

          <p className="text-gray-700 leading-relaxed text-justify">
            The Department of Electrical and Electronics Engineering at Aditya
            university is committed to developing highly competent engineers
            equipped for the modern world. By integrating
            <span className="font-bold">
              {" "}advanced professional knowledge with entrepreneurial thinking
              and critical problem-solving
            </span>, we provide a rigorous education grounded in research and
            strong industrial partnerships. Our distinguished faculty bring a
            wealth of academic and industry experience, contributing to global
            innovation through frequent publications in prestigious
            international journals.
          </p>
        </div>

      </div>
    </section>
  );
}