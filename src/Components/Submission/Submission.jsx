import qrCode from "../../assets/qr.png";

export default function Submission() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* QR Code */}
        <div className="flex justify-center">
          <img
            src={qrCode}
            alt="Paper Submission QR Code"
            className="rounded-lg border-2 border-orange-500 w-full max-w-md p-6"
          />
        </div>

        {/* Content */}
        <div className="text-justify md:pr-10">
          <h2 className="text-center md:text-left text-2xl md:text-3xl font-bold text-orange-500 mb-6">
            Submission & Publication of Paper
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            <span className="font-semibold">AGEC-2026</span> is soliciting the
            submission of original research papers with significant
            contributions in the relevant fields.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            The <span className="font-semibold">Microsoft CMT service</span> is
            used for managing the peer-reviewing process for this conference.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            <span className="font-semibold">Author Guidelines:</span> Authors
            are requested to follow the conference paper format.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Submission Template:{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Download Template
            </span>
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Note:</span> Authors must have a
              Microsoft CMT account to submit papers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}