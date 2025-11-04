import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TeamMemberCard = ({ photo, name, affiliation, link, affiliationLink }) => (
  <div className="text-center p-4 rounded-lg bg-teal-50 shadow-md transition-all duration-300 hover:shadow-teal-400/50 hover:scale-105">
    {/* Profile Photo */}
    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-teal-100 shadow-sm">
      <img
        src={photo}
        alt={name}
        className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full object-cover shadow-sm transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Name (LinkedIn Profile) */}
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-base text-gray-800 leading-snug hover:text-teal-700 transition-colors duration-200 block"
      >
        {name}
      </a>
    ) : (
      <p className="font-bold text-base text-gray-800 leading-snug">{name}</p>
    )}

    {/* College/Company (LinkedIn link optional) */}
    {affiliationLink ? (
      <a
        href={affiliationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-teal-700 font-medium leading-none mt-1 hover:underline hover:text-teal-800 block"
      >
        ({affiliation})
      </a>
    ) : (
      <p className="text-sm text-teal-700 font-medium leading-none mt-1">
        ({affiliation})
      </p>
    )}
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-10 bg-gradient-to-r from-orange-50 to-orange-100 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-poppins font-extrabold text-gray-800 mb-3">
          The Next-Gen Career Revolution
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Driven by {" "}
          <a
            href="https://sunsysglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-2 transition-colors duration-200"
          >
            Sunsys Techsol Pvt. Ltd.
          </a>
          , we’re crafting an ecosystem that empowers students, elevates
          institutions, and connects organizations with future leaders.
        </p>
      </section>

      {/* Meet the Team Section ) */}
      <section className="py-10 md:py-12 bg-emerald-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-poppins font-bold text-center text-gray-700 mb-6">
            The Innovators
          </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
  <TeamMemberCard
    photo="/team-pic/dilseerat.png"
    name="Ms. Dilseerat Kaur"
    affiliation="Chandigarh Engineering College"
    link="https://www.linkedin.com/in/dilseerat-kaur-9502702b0/"
    affiliationLink="https://www.linkedin.com/in/cgclandran/"
  />
  <TeamMemberCard
    photo="/team-pic/abhirash.jpg"
    name="Mr. Abhirash Garg"
    affiliation="ABES Engineering College"
    link="https://www.linkedin.com/in/abhirashgarg/"
    affiliationLink="https://www.linkedin.com/school/abes-engineering-college/"
  />
  <TeamMemberCard
    photo="/team-pic/gautam.jpg"
    name="Mr. Gautam Tanwar"
    affiliation="IIT Bombay"
    link="https://www.linkedin.com/in/gautam-tanwar1/"
    affiliationLink="https://www.linkedin.com/school/sjmsomiitbombay/"
  />
  <TeamMemberCard
    photo="/team-pic/ashwani.jpg"
    name="Mr. Ashwani Garg"
    affiliation="CHRO, Sunsys Techsol Pvt. Ltd."
    link="https://www.linkedin.com/in/ashwanigarg-chro/"
    affiliationLink="https://www.linkedin.com/company/sunsystechsol-pvt-ltd/"
  />
</div>

        </div>
      </section>


{/* Core Mission Section */}
<section className="py-12 md:py-16 bg-orange-100 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-poppins font-bold text-center text-gray-800 mb-8">
      From Internship to Naukri
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      {/* InternSaathi Block */}
      <div className="flex flex-col justify-between p-6 bg-orange-50 rounded-xl shadow-lg border-t-4 border-orange-500 hover:shadow-orange-300/60 transition-all duration-300">
          <h3 className="text-xl font-poppins font-semibold text-teal-700 mb-3">
            InternSaathi — Where Growth Begins
          </h3>
           <p className="text-base text-gray-700 leading-relaxed mb-2">
          <a
            href="https://internsaathi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 font-semibold hover:underline"
          >
            InternSaathi
          </a>{" "}
          empowers students to take their first professional leap. It connects young talent to
          real-world internships that shape their skills, confidence, and career direction.
        </p>
        <p className="text-sm text-gray-600">
          💡 Learn. Apply. Grow. Every internship is a stepping stone toward a brighter, more
          employable future — and it all starts here.
        </p>
      </div>

      {/* NaukriSaathi Block */}
      <div className="flex flex-col justify-between p-6 bg-orange-50 rounded-xl shadow-lg border-t-4 border-orange-600 hover:shadow-orange-300/60 transition-all duration-300">
        <div>
          <h3 className="text-xl font-poppins font-semibold text-emerald-700 mb-3">
            NaukriSaathi — Your Career Launchpad
          </h3>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
          <a
            href="https://naukrisaathi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-semibold hover:underline"
          >
            NaukriSaathi
          </a>{" "}
          carries the journey forward by offering curated, verified job opportunities for
          emerging professionals. It bridges the gap between internship experience and
          full-time employment with a focus on smooth, assured transitions.
        </p>
        <p className="text-sm text-gray-600">
          🚀 Empowering young minds to move from “learning” to “earning” — helping them turn
          potential into lasting success.
        </p>
        </div>
          
    </div>
  </div>
  </div>
</section>

{/* Campus Ambassadors Section */}
<section className="py-12 bg-emerald-50 px-6 border-t border-gray-200">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl md:text-2xl font-poppins font-bold text-gray-800 mb-10">
      Meet Our Campus Ambassadors
    </h3>

    <div className="flex justify-center items-center gap-10 flex-wrap">
      {/* Ambassador 1 */}
      <a
        href="https://www.linkedin.com/in/hemanthkumarrottigawad"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative transform transition-all duration-300 hover:scale-105"
      >
        <img
          src="/logos/2.jpg"
          className="w-65 h-78 rounded-2xl object-cover shadow-lg border-1 border-emerald-200 group-hover:shadow-emerald-300/80 transition-all duration-300"
        />
      </a>

      {/* Ambassador 2 */}
      <a
        href="https://www.linkedin.com/in/anikasharmaiims/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative transform transition-all duration-300 hover:scale-105"
      >
        <img
          src="/logos/3.jpg"
          className="w-65 h-78 rounded-2xl object-cover shadow-lg border-2 border-emerald-200 group-hover:shadow-emerald-300/80 transition-all duration-300"
        />
      </a>
    </div>
  </div>
</section>




      {/* Values Section
      <section className="py-10 md:py-12 bg-gray-50 px-4 text-center">
        <h2 className="text-2xl font-poppins font-bold text-gray-700 mb-6">
          Our Core Values
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md border-b-4 border-pink-400">
            <p className="text-2xl mb-2">🤝</p>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Inclusivity</h4>
            <p className="text-gray-600 text-xs">
              Opportunities are limitless and talent is truly accessible to everyone, regardless of background.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md border-b-4 border-purple-400">
            <p className="text-2xl mb-2">💪</p>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Empowerment</h4>
            <p className="text-gray-600 text-xs">
              Championing women empowerment and equal access to career-shaping internships and jobs.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md border-b-4 border-blue-400">
            <p className="text-2xl mb-2">💡</p>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Transparency</h4>
            <p className="text-gray-600 text-xs">
              Operating a zero-cost model for students and ensuring clear, honest communication.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
