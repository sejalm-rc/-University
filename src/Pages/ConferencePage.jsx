import { useParams } from "react-router-dom";

export default function ConferencePage() {

  const { slug } = useParams();

  return (

    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-6">
        Conference Details
      </h1>

      <p className="text-gray-600 mb-8">
        Conference ID: {slug}
      </p>

      <div className="space-y-4">

        <p>
          This page will show detailed information about the selected
          conference.
        </p>

        <p>
          You can add sections like:
        </p>

        <ul className="list-disc pl-6 space-y-2">

          <li>About SIARE</li>

          <li>About the Conference</li>

          <li>Conference Tracks</li>

          <li>Paper Submission Guidelines</li>

          <li>Registration Information</li>

          <li>Important Dates</li>

        </ul>

      </div>

    </div>

  );
}