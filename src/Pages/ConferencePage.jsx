import { useParams } from "react-router-dom";
import { conferences } from "../data/conferences";
import { Monitor } from "lucide-react";

export default function ConferencePage() {

const { slug } = useParams();

const conference = conferences.find(c => c.slug === slug);

if (!conference) {
return (
<div className="py-32 text-center">
<h2 className="text-2xl font-semibold text-gray-700">
Conference not found
</h2>
</div>
);
}

return (

<div className="bg-white">

{/* HERO */}
<section className="py-24 bg-orange-50">

<div className="max-w-5xl mx-auto px-6 text-center">

<p className="text-orange-500 font-semibold mb-3">
SIARE Conference Series
</p>

<h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
{conference.title}
</h1>

<p className="text-gray-500 mt-4">
{conference.month}
</p>

</div>

</section>

{/* ABOUT SIARE */}

{conference.aboutSiare && (

<section className="py-20">

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-3xl font-semibold text-orange-500 mb-6">
About SIARE
</h2>

<p className="text-gray-600 leading-relaxed whitespace-pre-line">
{conference.aboutSiare}
</p>

</div>

</section>

)}

{/* ABOUT CONFERENCE */}

<section className="py-20 bg-gray-50">

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-3xl font-semibold text-orange-500 mb-6">
About the Conference
</h2>

<p className="text-gray-600 leading-relaxed whitespace-pre-line">
{conference.aboutConference}
</p>

</div>

</section>

{/* OBJECTIVES */}

{conference.objectives && (

<section className="py-20">

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-3xl font-semibold text-orange-500 mb-10 text-center">
Conference Objectives
</h2>

<ul className="space-y-4">

{conference.objectives.map((obj, index) => (

<li key={index} className="flex text-gray-600">

<span className="text-orange-500 mr-3">→</span>

{obj}

</li>

))}

</ul>

</div>

</section>

)}

{/* TRACKS */}

{conference.tracks && (

<section className="py-20 bg-gray-50">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-semibold text-orange-500 text-center mb-14">
Conference Tracks
</h2>

<div className="grid md:grid-cols-2 gap-10">

{conference.tracks.map((track, index) => (

<div
key={index}
className="border border-orange-200 rounded-xl p-8 bg-white hover:shadow-lg transition"
>

<div className="flex items-start gap-4 mb-5">

<div className="bg-orange-100 p-3 rounded-full">
<Monitor className="text-orange-500" size={20} />
</div>

<div>

<h3 className="text-xl font-semibold text-gray-800">
{track.title}
</h3>

</div>

</div>

<ul className="space-y-2">

{track.topics.map((topic, i) => (

<li
key={i}
className="flex text-gray-600"
>

<span className="text-orange-500 mr-2">→</span>

{topic}

</li>

))}

</ul>

</div>

))}

</div>

</div>

</section>

)}

{/* SUBMISSION GUIDELINES */}

{conference.submissionGuidelines && (

<section className="py-20">

<div className="max-w-4xl mx-auto px-6">

<h2 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
Paper Submission Guidelines
</h2>

<div className="bg-gray-50 p-8 rounded-xl">

<ul className="space-y-4 text-gray-600">

<li>
<b>Pages:</b> {conference.submissionGuidelines.pages}
</li>

<li>
<b>Format:</b> {conference.submissionGuidelines.format}
</li>

<li>
<b>Font:</b> {conference.submissionGuidelines.font}
</li>

<li>
<b>Font Size:</b> {conference.submissionGuidelines.fontSize}
</li>

<li>
<b>Line Spacing:</b> {conference.submissionGuidelines.spacing}
</li>

<li>
<b>Citation Style:</b> {conference.submissionGuidelines.citation}
</li>

</ul>

</div>

</div>

</section>

)}

{/* REGISTRATION */}

{conference.registration && (

<section className="py-20 bg-gray-50">

<div className="max-w-4xl mx-auto px-6">

<h2 className="text-3xl font-semibold text-orange-500 text-center mb-10">
Registration Fees
</h2>

<div className="overflow-x-auto">

<table className="w-full border border-orange-200">

<thead className="bg-orange-100">

<tr>

<th className="p-4 text-left">Category</th>

<th className="p-4 text-left">Fee</th>

</tr>

</thead>

<tbody>

{conference.registration.map((reg, index) => (

<tr key={index} className="border-t">

<td className="p-4">{reg.category}</td>

<td className="p-4">{reg.fee}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</section>

)}

{/* IMPORTANT DATES */}

{conference.importantDates && (

<section className="py-20">

<div className="max-w-4xl mx-auto px-6">

<h2 className="text-3xl font-semibold text-orange-500 text-center mb-10">
Important Dates
</h2>

<div className="overflow-x-auto">

<table className="w-full border border-orange-200">

<thead className="bg-orange-100">

<tr>

<th className="p-4 text-left">Activity</th>

<th className="p-4 text-left">Date</th>

</tr>

</thead>

<tbody>

{conference.importantDates.map((date, index) => (

<tr key={index} className="border-t">

<td className="p-4">{date.activity}</td>

<td className="p-4">{date.date}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</section>

)}

</div>

);

}