import React from "react";
import { BookOpenText, Send, MonitorCheck, Users, Map, Heart } from "lucide-react";
import Navbar from "../components/Navbar";

// Simulated navigation (you can replace this with react-router's useNavigate)
const useNavigate = () => (path) => console.log(`Navigating back to: ${path}`);

// --- Color Mapping (fix for Tailwind dynamic classes) ---
const colorClasses = {
  teal: {
    border: "border-teal-500",
    bg: "bg-teal-100",
    text: "text-teal-600",
  },
  emerald: {
    border: "border-emerald-500",
    bg: "bg-emerald-100",
    text: "text-emerald-600",
  },
  blue: {
    border: "border-blue-500",
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  red: {
    border: "border-red-500",
    bg: "bg-red-100",
    text: "text-red-600",
  },
  pink: {
    border: "border-pink-500",
    bg: "bg-pink-100",
    text: "text-pink-600",
  },
};

// --- FEATURE CARD COMPONENT ---
const FeatureCard = ({ icon: Icon, title, description, color, delay }) => {
  const colorSet = colorClasses[color] || colorClasses.teal; // fallback to teal

  return (
    <div
      className={`bg-white p-8 rounded-3xl shadow-lg ${colorSet.border} text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col h-full animate-feature-in group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full ${colorSet.bg} ${colorSet.text} shadow-md transition-transform duration-300 group-hover:scale-105`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

// --- MAIN FEATURES PAGE COMPONENT ---
const FeaturesPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpenText,
      title: "Vast Internship Database",
      description:
        "Access thousands of vetted internships across multiple domains, constantly updated with new opportunities. Filter by stipend, duration, remote options, and pre-placement offers (PPOs).",
      color: "teal",
      delay: 200,
    },
    {
      icon: Send,
      title: "Zero-Friction Application",
      description:
        "Streamlined, one-click application process. Apply to your dream roles instantly. Our platform auto-generates context-aware cover letter drafts based on your profile.",
      color: "emerald",
      delay: 300,
    },
    {
      icon: MonitorCheck,
      title: "Smart Placement Dashboards",
      description:
        "Custom dashboards provide real-time tracking for students (applications), companies (talent pipeline), and colleges (placement metrics and reports). Full transparency at every stage.",
      color: "blue",
      delay: 400,
    },
    {
      icon: Users,
      title: "Guided Mentorship Programs",
      description:
        "Exclusive access to industry veterans and alumni. Receive personalized resume reviews, targeted interview preparation, and 1:1 career guidance to maximize your success rate.",
      color: "purple",
      delay: 500,
    },
    {
      icon: Map,
      title: "Personalized Career Path AI",
      description:
        "Our AI engine analyzes your skills, academic record, and application history to deliver highly accurate, AI-driven recommendations for the perfect next step in your career journey.",
      color: "red",
      delay: 600,
    },
    {
      icon: Heart,
      title: "Commitment to Inclusivity",
      description:
        "Our core mission champions women empowerment and equal opportunity. We actively promote and highlight roles from companies committed to building diverse and inclusive workplaces.",
      color: "pink",
      delay: 700,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter relative overflow-x-hidden">
      {/* Tailwind animation configuration */}
      <style>{`
        @keyframes featureIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-feature-in {
          animation: featureIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; 
          opacity: 0; 
        }
        @keyframes titleSlide {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-title-in {
          animation: titleSlide 0.7s ease-out forwards;
          opacity: 0;
          animation-delay: 100ms;
        }
      `}</style>

      <Navbar />

      {/* Features Section */}
      <section
        id="feature-details"
        className="py-16 md:py-24 px-4 bg-gradient-to-br from-white to-gray-50 min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Animated Title */}
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-center text-gray-800 mb-12 animate-title-in">
            InternSaathi <span className="text-teal-600">Powerhouse</span>
          </h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
