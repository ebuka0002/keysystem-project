import { Phone } from 'lucide-react';


  export default function Home() {
    return (
      <>
        <header className="flex justify-between items-center p-6 bg-[#0f0c29] text-white">
          {/* Logo */}
          
          <div className="text-xl font-bold">KeySystem</div>
  
          {/* Navigation + Button in a row */}
          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Services</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </nav>
  
            {/* Call Now Button */}
            <a href="tel:+1234567890" className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition">
              <Phone className="w-4 h-4 mr-2" />
              +1234567890
            </a>
          </div>
        </header>








      <section className="text-center py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
  <div className="mb-4 text-sm text-blue-300">Welcome to KeySystem</div>

  <h1 className="text-4xl font-bold leading-tight mb-4">
    IT Consulting for <br /> Forward-thinking Businesses
  </h1>

  <p className="text-gray-300 mb-8">
    Driving Digital Transformation, One Solution at a Time
  </p>


  <div className="space-x-4">
    <button className="bg-blue-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
      Get Started
    </button>
    <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black">
      Learn More
    </button>
    {/* <--hero pic--> */}
    <div className=" flex justify-center py-10">
  <div className="w-[90%] md:w-[70%] max-w-3xl">
    <img
      src="/hero.png"
      alt="Consultant"
      className="rounded-md shadow-lg w-full"
    />
  </div>
</div>



{/* Client Logos */}
<div className="flex flex-wrap justify-center items-center gap-4 p-8 bg-black">
  {["Sterling", "CrusaderSterling", "NAFC", "NBF", "Military Pensions", "Stanbic Bank", "Zenith Bank"].map((client, index) => (
    <div
      key={index}
      className="bg-white rounded px-4 py-2 text-black text-sm font-semibold shadow"
    >
      {client}
    </div>
  ))}
</div>
{/* Trusted Consultant Section */}
<section className="text-center py-20 bg-gradient-to-b from-[#0f0c29] ">
  <h2 className="text-2xl md:text-3xl font-bold mb-2">Why we are your Trusted Consultant</h2>
  <p className="text-blue-300 mb-6">Empowering Businesses with Cutting-edge Technology</p>

  <p className="text-gray-300 max-w-2xl mx-auto mb-8">
    Excellence isn't a goal, it's our DNA; our relentless pursuit of excellence is the driving force behind our success.
    Excellence is our legacy, and we are proud to carry it forward.
  </p>

  <p className="text-sm text-gray-400 mb-4">
    Watch the video to see how we are innovating to keep businesses on top of their games.
  </p>

  
  <div className="flex justify-center">
    <img
      src="/hero2.png" 
      alt="Team working together"
      className="rounded-md w-full max-w-xl"
    />
  </div>
</section>

{/* Offerings Section */}
<section className="text-center py-16 bg-[#0f0c29] px-4">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Offerings</h2>
  <p className="text-gray-300 max-w-2xl mx-auto mb-6">
    Leverage KeySystem's cutting-edge expertise to transform your business.
    Our tailored software and cybersecurity solutions drive efficiency, security, and growth.
    We empower businesses to thrive in the digital age.
  </p>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
    Learn more
  </button>
</section>

{/* Service Categories Section */}
<section className="py-16 px-4 bg-[#0f0c29] text-center">
  <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
    {[
      "Core banking services",
      "Staff augmentation solutions",
      "Business Intelligence",
      "Digital Banking & financial inclusion",
      "Internal audit solutions",
      "KeySystem software testing",
      "Online/mobile lending solution",
      "Data Warehouse",
      "Cybersecurity Solutions",
    ].map((service, index) => (
      <div
        key={index}
        className="px-5 py-2 rounded-full border border-blue-500 text-blue-300 hover:bg-blue-600 hover:text-white transition cursor-pointer text-sm"
      >
        {service}
      </div>
    ))}
  </div>
</section>

{/* What We Represent Section */}
<section className="bg-[#1a1a2e] text-white py-16 px-4 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-2">What we Represent</h2>
  <p className="text-blue-300 mb-6">
    Our relentless pursuit of excellence is the driving force behind our success
  </p>
  <p className="text-gray-300 max-w-2xl mx-auto mb-12">
    Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is the driving force behind our success.
    Excellence is our legacy, and we are proud to carry it forward. Watch the video to see how we are innovating to keep
    businesses on top of their games.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {/* Vision Card */}
    <div className="bg-[#0f0c29] p-6 rounded-xl shadow-lg border border-gray-700 text-left">
      <img src="/our vision.png" alt="Vision Icon" className="w-12 mb-4 w-[60%] md:w-[70%] max-w-3xl" />
      <h3 className="text-xl font-bold mb-2">Our Vision</h3>
      <p className="text-gray-300">
        To be the trusted partner for businesses seeking to leverage technology to improve decision-making,
        boost operations, and achieve transformative growth.
      </p>
    </div>

    {/* Mission Card */}
    <div className="bg-[#0f0c29] p-6 rounded-xl shadow-lg border border-gray-700 text-left">
      <img src="/our mission.png" alt="Mission Icon" className="w-12 mb-4 w-[60%] md:w-[70%] max-w-3xl" />
      <h3 className="text-xl font-bold mb-2">Our Mission</h3>
      <p className="text-gray-300">
        We bridge the gap between technology and business, delivering customized ICT solutions that drive
        efficiency, growth, and competitive advantage.
      </p>
    </div>
  </div>
</section>

{/* Compliance Certifications Section */}
<section className="bg-[#0f0c29] py-16 px-4 text-white text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-2">
    Compliance Certifications/ <br /> Standards We Specialize In
  </h2>
  <p className="text-gray-300 mb-6">
    Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services
  </p>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full mb-10 transition">
    Contact Us
  </button>

  {/* Logo Grid */}
  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center max-w-6xl mx-auto">
    {[
      "logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png", "logo6.png",
      "coso.png", "iaasb.png", "seal.png", "iso9001.png", "sox.png", "cmmidev.png"
    ].map((logo, index) => (
      <img key={index} src={`/certs/${logo}`} alt={`Certification ${index}`} className="w-20 h-auto mx-auto" />
    ))}
  </div>
</section>

{/* They Trust Us Section */}
<section className="bg-[#0f0c29] py-16 px-4 text-white text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-2">They Trust Us</h2>
  <p className="text-gray-400 mb-10">And so can you</p>

  {/* Clients Logo Grid */}
  <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center max-w-6xl mx-auto">
    {[
      "logo.png", "npf.png", "sterling.png", "crusader.png", "nafc.png", "hbf.png",
      "military.png", "stanbic.png", "bankmuscat.png", "unity.png", "santander.png"
    ].map((logo, index) => (
      <img key={index} src={`/clients/${logo}`} alt={`Client ${index}`} className="w-24 h-auto mx-auto" />
    ))}
  </div>
</section>

{/* Our Process Section */}
<section className="bg-[#0f0c29] py-16 px-4 text-white text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Process</h2>
  <p className="text-gray-300 mb-10">
    At KeySystem, we leave you with a lasting impression
  </p>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
    {/* Strategic Consultation */}
    <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Strategic Consultation</h3>
      <p className="text-gray-400 mb-4">
        We kick off with a strategic consultation to understand your brand, goals, and audience
      </p>
      <img src="/process 1.png" alt="Strategy" className="w-full h-32 object-contain" />
    </div>

    {/* Collaboration */}
    <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Collaboration</h3>
      <p className="text-gray-400 mb-4">
        At KeySystem, we collaborate closely to ensure the end result meets your expectations and makes you happy
      </p>
      <img src="/process 2.png" alt="Collaboration" className="w-full h-32 object-contain" />
    </div>

    {/* Delivery */}
    <div className="bg-[#1a1a2e] p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Delivery</h3>
      <p className="text-gray-400 mb-4">
        Our delivery rate is 100%. Our clients deserve nothing less.
      </p>
      <img src="/process 3.png" alt="Delivery" className="w-full h-32 object-contain" />
    </div>
  </div>
</section>

{/* Our Partners Section */}
<section className="bg-[#0f0c29] py-12 px-4 text-white text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Partners</h2>
  <p className="text-gray-400 mb-8">Creating a synergy with global brands</p>

  <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
    {[
      "logo1.png", "cognizant.png", "temenos.png", "netinfo.png", "techmahindra.png"
    ].map((logo, index) => (
      <img key={index} src={`/partners/${logo}`} alt={`Partner ${index}`} className="h-12 md:h-14 object-contain" />
    ))}
  </div>
</section>

{/* CTA Section */}
<section className="bg-gradient-to-r from-[#0f0c29] to-[#302b63] text-white py-16 px-4">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
    <p className="text-gray-300 mb-2">Shoot us a mail</p>
    <p className="text-gray-400 mb-6">
      Join numerous corporations, organizations, and businesses as they scale their teams, tap into new market opportunities and build innovative products with KeySystem Technology.
    </p>
    <p className="text-gray-400 mb-6">
      Join thousands of students who are ready to learn new skills or take their career to the next level by enrolling in one of our training programs today.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full">
      Send Us a Mail Now
    </button>
  </div>
</section>

{/* Footer */}
<footer className="bg-[#0b0b26] text-white py-12 px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
    {/* Logo & Tagline */}
    <div>
      <img src="/logo-light.png" alt="KeySystem Logo" className="mb-4 h-8" />
      <p className="text-gray-400 text-sm">Let's reimagine the technology experience and beyond.</p>
    </div>

    {/* Services */}
    <div>
      <h4 className="font-bold mb-4">SERVICES</h4>
      <ul className="text-gray-400 text-sm space-y-1">
        <li>Core refresh</li>
        <li>Application management</li>
        <li>Evaluation & enhancement</li>
        <li>Solution Assurance</li>
        <li>Digital Banking & Financial</li>
        <li>Online/mobile banking</li>
        <li>Staff augmentation</li>
        <li>Risk management</li>
        <li>Data Warehouse & BI</li>
        <li>KeySystem training</li>
        <li>Cybersecurity</li>
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="font-bold mb-4">QUICK LINKS</h4>
      <ul className="text-gray-400 text-sm space-y-1">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Sitemap</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="font-bold mb-4">CONTACT</h4>
      <p className="text-sm text-gray-300 mb-2">
        <strong>Nigeria:</strong><br />
        556 Adesiba Omotola Close, Off Samuel Adedoyin St, Victoria Island
      </p>
      <p className="text-sm text-gray-300 mb-2"><strong>UK:</strong> 39 Kenyon Lane, Manchester</p>
      <p className="text-sm text-gray-300 mb-2"><strong>UAE:</strong> +971 50 623 8817</p>
      <p className="text-sm text-gray-300 mb-2"><strong>Canada:</strong> +1 647 977 1435</p>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
    <div className="flex items-center gap-4 mb-4 md:mb-0">
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
    </div>
    <div>
      <p>Nigeria: +234 818 444 1404 | Email: <a className="underline" href="mailto:enquiries@keysystemtc">enquiries@keysystemtc</a></p>
    </div>
  </div>
</footer>




  </div>
</section>







    </>
    

    );
  }


 /* export default function Home() {
    return (
      <header className="flex justify-between items-center p-6 bg-[#0f0c29] text-white">
        <div className="text-xl font-bold">KeySystem</div>
        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Services</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          +234 806 644 1664
        </button>
      </header>
  
  
    );}*/