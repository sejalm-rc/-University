import campusImg from "../../assets/bg.jpg";

export default function Contact() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${campusImg})` }}
    >
      <div className="max-w-7xl mx-auto px-20 flex justify-end">

        {/* Contact Card */}
        <div className="bg-white backdrop-blur-sm p-10 rounded-xl shadow-lg max-w-md w-full">

          <h2 className="text-2xl font-semibold text-orange-500 mb-6">
            Aditya University
          </h2>

          <div className="space-y-4 text-black">

            <p>
              Email:{" "}
              <a
                href="mailto:ic@adityauniversity.in"
                className="text-blue-600 hover:underline"
              >
                ic@adityauniversity.in
              </a>
            </p>

            <p>
              Dr. V. Srinivasa Rao,{" "}
              <a
                href="mailto:hod_eee@adityauniversity.in"
                className="text-black"
              >
                hod_eee@adityauniversity.in
              </a>
            </p>

            <p>
              Dr. KVSR Murthy,{" "}
              <a
                href="mailto:murthy.kvs@adityauniversity.in"
                className="text-black"
              >
                murthy.kvs@adityauniversity.in
              </a>
            </p>

            <p>
              Dr. KK Pavan Kumar,{" "}
              <br />
              <a
                href="mailto:kpavankumark@adityauniversity.in"
                className="text-black"
              >
                kpavankumark@adityauniversity.in
              </a>
            </p>

            <p>
              Dr. Vijay Muniyandi,{" "}
              <a
                href="mailto:vijaym@adityauniversity.in"
                className="text-black "
              >
                vijaym@adityauniversity.in
              </a>
            </p>

            <p>
              Website:{" "}
              <a
                href="https://adityauniversity.in/"
                target="_blank"
                className="text-orange-500 hover:underline"
              >
                adityauniversity.in/
              </a>
            </p>

            <div>
              <p className="font-semibold mt-6 mb-2">Address:</p>
              <p className="text-gray-600">
                Aditya Nagar, ADB Road, Surampalem, <br />
                Pin: 533437 Kakinada District, <br />
                Andhra Pradesh, India
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}