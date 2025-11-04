import React, { useState , useRef, useEffect} from "react"; 
// Using Lucide icons for social media
import { Linkedin, Instagram, Twitter } from "lucide-react"; 

// --- MINIMAL MOCK DEFINITIONS FOR RUNNABILITY ---
const useNavigate = () => (path) => console.log(`Navigating to: ${path}`);
const useAuth = () => ({ user: null }); // Mock user to test both login/dashboard states
// Keeping Navbar as a minimal function so the <Navbar /> tag compiles
const Navbar = () => <nav className="h-1 bg-white shadow-md"></nav>; 
// --------------------------------------------------


// --- STATIC DATA --- 
const companyLogos = [ 
  "/logos/tech-solution.png",  
  "/logos/sunsys.jpg",
  "/logos/medilink.png",  
  "/logos/tcs.png",  
  "/logos/infosys.png",  
  "/logos/google.png", 
  "/logos/creo-vibe.png",  
  "/logos/wipro.png", 
  "/logos/hackerrank.png", 
  "/logos/microsoft.png",
  "/logos/ibm.png",
  "/logos/amazon.png",
  "/logos/facebook.png",
]; 

const campusAmbassadors = [
    // Placeholder photos for Campus Ambassadors (Circular, slightly smaller)
   // "logos/1.jpg",
"logos/2.jpg",

   // "https://placehold.co/120x120/E8D1FF/333333?text=Amb+B",
   // "https://placehold.co/120x120/D1FFF4/333333?text=Amb+C",
   // "https://placehold.co/120x120/FFE3D1/333333?text=Amb+D",
    //"https://placehold.co/120x120/D1E8FF/333333?text=Amb+E",
    //"https://placehold.co/120x120/FDD1FF/333333?text=Amb+F",
    //"https://placehold.co/120x120/E8D1FF/333333?text=Amb+G",
];

const collegeLogos = [
    "/logos/a.png", 
    "/logos/b.png",
    "/logos/c.png",
    "/logos/d.png",
    "/logos/e.png",
    "/logos/f.jpg",
    "/logos/g.jpg",
    "/logos/h.png",
    "/logos/i.png",
    "/logos/j.png",
    "/logos/k.jpg",
    "/logos/l.png",
    "/logos/m.jpg",
    "/logos/n.png",
    "/logos/o.jpg",
    "/logos/p.png",
    "/logos/q.png",
    "/logos/r.png",
    "/logos/s.png",
    "/logos/t.png",
    "/logos/u.jpg",
];
// ------------------------ 

// Define the static keyframe for scrolling to ensure it's always available.
const staticKeyframe = `
    @keyframes scroll-x-infinite {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
`;

// --- NEW HORIZONTAL CAROUSEL COMPONENT ---// --- UNIVERSAL HORIZONTAL CAROUSEL (Perfect for All Sliders) ---
const HorizontalCarousel = ({ items, itemRenderer, speed = 40, className = "" }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;
    if (!container || !scrollContent) return;

    // Check if we need scroll-based or transform-based movement
    const contentWider = scrollContent.scrollWidth > container.clientWidth;

    if (contentWider) {
      // --- Continuous transform animation for company/college logos ---
      const totalWidth = scrollContent.scrollWidth;
      let position = 0;
      const step = 0.5; // Adjust for speed
      const animate = () => {
        position -= step;
        if (Math.abs(position) >= totalWidth / 2) position = 0;
        scrollContent.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };
      const anim = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(anim);
    } else {
      // --- scrollLeft-based movement (for small number of items like ambassadors) ---
      let scrollPosition = 0;
      const scrollStep = 0.5;
      const animateScroll = () => {
        scrollPosition += scrollStep;
        if (scrollPosition >= scrollContent.scrollWidth - container.clientWidth) {
          scrollPosition = 0;
        }
        scrollContent.scrollLeft = scrollPosition;
        requestAnimationFrame(animateScroll);
      };
      const anim = requestAnimationFrame(animateScroll);
      return () => cancelAnimationFrame(anim);
    }
  }, [items]);

  // Duplicate for transform animation only (to enable infinite motion)
  const doubledItems = [...items, ...items]; //const doubledItems = [...items, ...items];

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      <div
        ref={scrollRef}
        className="flex items-center h-full will-change-transform transition-transform ease-linear"
        style={{ width: "max-content" }}
      >
        {doubledItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            {itemRenderer(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};



// --- MAIN PAGE ---
const LandingPage = () => { 
  const navigate = useNavigate(); 
  const { user } = useAuth(); 

  // Keeping these handlers minimal for code completeness
  const handleLoginClick = () => { navigate("/login"); }; 
  const handleRegisterClick = () => { navigate("/register"); }; 
  const handleExploreInternshipsClick = () => { navigate("/internships"); }; 
  const handleDashboardClick = () => { navigate("/dashboard"); }; 

  // Renderer for Company Logos (simple image)
  const renderCompanyLogo = (logo, index) => (
      <img
          src={logo}
          alt={`Company ${index}`}
          // Full color and vibrancy maintained
className="h-14 md:h-16 w-auto object-contain opacity-100 transition-opacity duration-300"

          // Added robust onError fallback to prevent broken images if local paths don't work
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/150x60/F87171/ffffff?text=LOGO+${index + 1}`;
          }}
      />
  );
  
  // Renderer for Campus Ambassadors (circular image with name)
  const renderAmbassador = (photo, index) => (
      <div className="flex flex-col items-center">
          <img
              src={photo}
              alt={`Ambassador ${index}`}
              className="w-32 h-32 md:w-42 md:h-58 object-cover border-1 border-teal-100 shadow-l rounded-xl"
          />
          
      </div>
  );
  
  // Renderer for College Logos (simple image, handles mixed aspect ratios via object-contain)
  const renderCollegeLogo = (logo, index) => (
      <img
          src={logo}
          alt={`College ${index}`}
          // Fixed height, auto width, and object-contain ensures all shapes (square/rect) fit perfectly
          className="h-23 md:h-26 w-auto object-contain opacity-100 transition-opacity duration-300"

          // Updated fallback text to match the file name (e.g., A, B, C...)
          onError={(e) => {
            e.target.onerror = null;
            const letter = String.fromCharCode(97 + index).toUpperCase(); // 'a' is 97
            e.target.src = `https://placehold.co/150x60/F87171/ffffff?text=College+${letter}`;
          }}
      />
  );


  return ( 
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 font-inter relative overflow-x-hidden"> 
       
      <Navbar /> 

      {/* 1. HORIZONTAL SLIDER: Company Logos (Top Peak) */}
      <div className="py-4 border-b border-gray-200 bg-white backdrop-blur-sm">
          <HorizontalCarousel 
              items={companyLogos} 
              itemRenderer={renderCompanyLogo} 
              speed={2} // Faster scroll
              className="h-14" 
          />
      </div>

      {/* Hero Section (Main Content) - REDUCED PADDING */} 
<section className="relative pt-10 pb-4 md:pt-10 md:pb-4 flex items-center justify-center text-center px-4">

        <div className="max-w-4xl mx-auto animate-fade-in"> 
          <h1 className="text-5xl md:text-6xl font-poppins font-extrabold text-gray-800 leading-tight mb-6"> 
            <span className="inline-block">Your Gateway to</span> <br />{" "} 
            <span className="text-teal-600 inline-block"> 
              Dream Internships 
            </span> 
            <div className="h-6"></div> {/* Added spacer */}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"> 
            Internsaathi connects ambitious students with top companies, 
            offering a seamless platform for internship discovery, application, 
            and talent acquisition. 
          </p> 
        </div> 
      </section>

      {/* 2. STATIC Campus Ambassador Images (Two Photos, Same Styling) 
<section className="py-7  bg-white/70 backdrop-blur-sm border-t border-b border-gray-200">
  <h3 className="text-xl font-poppins font-bold text-center text-gray-700 mb-4">
    Meet Our Campus Ambassadors
  </h3>
  <div className="flex justify-center items-center gap-8 h-50 md:h-58">
    {campusAmbassadors.slice(0, 2).map((photo, index) => (
      <div key={index} className="flex flex-col items-center">
        <img
          src={photo}
          alt={`Ambassador ${index + 1}`}
          className="w-40 h-39 md:w-50 md:h-66 object-cover border-1 border-teal-100 shadow-l rounded-xl"
        />
      </div>
    ))}
  </div>
</section>
*/}

{/* 3. TESTIMONIALS SECTION */}
<section className="py-10 bg-gradient-to-r from-emerald-50 to-teal-100 border-t border-gray-200">
  <h3 className="text-2xl md:text-3xl font-poppins font-bold text-center text-gray-800 mb-8">
    Voices That Inspire
  </h3>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    {/* Testimonial 1 - Two Friends */}
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/31Ip3STqkeo"
          title="Journey Beyond Limits"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-t-2xl"
        ></iframe>
      </div>
      <div className="p-4 text-center">
        <h4 className="font-semibold text-gray-800">Journey Beyond Limits</h4>
        <p className="text-sm text-gray-600 mt-1">
          Every big dream begins with small steps. Hear how ambition, guidance, and the right platform can change everything.
        </p>
      </div>
    </div>

    {/* Testimonial 2 - HR Explains */}
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/R-Ha7OwBJkk"
          title="Shaping Future Careers"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-t-2xl"
        ></iframe>
      </div>
      <div className="p-4 text-center">
        <h4 className="font-semibold text-gray-800">Shaping Future Careers</h4>
        <p className="text-sm text-gray-600 mt-1">
          When opportunity meets mentorship, transformation happens. Discover a fresh outlook on student career growth.
        </p>
      </div>
    </div>

    {/* Testimonial 3 - Mentor Leader */}
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/JpCDJmvy81c"
          title="Guiding the Future"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-t-2xl"
        ></iframe>
      </div>
      <div className="p-4 text-center">
        <h4 className="font-semibold text-gray-800">Guiding the Future</h4>
        <p className="text-sm text-gray-600 mt-1">
          A mentor’s perspective on building meaningful pathways from learning to leadership, and from internships to impact.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* 3. HORIZONTAL SLIDER: College Logos (Bottom) */}
      <div className="py-4  bg-white backdrop-blur-sm">
          <h3 className="text-2xl font-poppins font-bold text-center text-gray-700 mb-4">
              Our Partner Colleges
          </h3>
          <HorizontalCarousel 
              items={collegeLogos} 
              itemRenderer={renderCollegeLogo} 
              speed={2} // Increased number of items means faster speed (2 seconds per logo) for a nice pace
              className="h-26"
          />
      </div>

      {/* Footer Section (Kept the same as requested) */} 
      <footer className="bg-white text-gray-800 py-4 text-center "> 
        <div className="max-w-7xl mx-auto px-4"> 
          
          {/* Powered by Section - Logo path updated */} 
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-2"> 
            <span className="text-gray-600 text-sm">Powered by</span> 
            <a 
              href="https://www.sunsysglobal.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
            > 
              <img 
                    src="/logo2.jpg" 
                    alt="Sunsys Logo" 
                    className="h-12 w-16 inline-block" 
                    onError={(e) => { e.target.src = "https://placehold.co/60x48/10B981/ffffff?text=Sunsys"; }}
                /> 
            </a> 
            {/* Sunsys LinkedIn (size 18) */} 
            <a 
              href="https://www.linkedin.com/company/sunsystechsol-pvt-ltd/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-blue-700 transition-colors duration-300" 
            > 
              <Linkedin size={18} /> 
            </a> 
          </div> 

          {/* Social Media Links - Size 20 confirmed */} 
          <div className="mt-3"> 
            <p className="text-gray-600 font-medium text-sm mb-1">Follow us on</p> 
            <div className="flex justify-center items-center space-x-4"> 
              <a 
                href="https://www.linkedin.com/company/internsaathi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300" 
              > 
                <Linkedin size={20} /> 
              </a> 
              <a 
                href="https://www.instagram.com/intern.saathi?igsh=MTNzaXE0eHFtOXNyZw%3D%3D&utm_source=ig_contact_invite" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-pink-400 transition-colors duration-300" 
              > 
                <Instagram size={20} /> 
              </a> 
              <a 
                href="https://x.com/InternSaathi?t=p1eTe0LJEppzSsF_mxMmjg&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-sky-500 transition-colors duration-300" 
              > 
                <Twitter size={20} /> 
              </a> 
            </div> 
          </div> 
        </div> 
      </footer> 


    </div> 
  ); 
}; 

export default LandingPage;
