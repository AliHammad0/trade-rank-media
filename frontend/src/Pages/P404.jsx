import React from "react";
import { Link } from "react-router-dom";

const P404 = () => {
return ( <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20">

```
  <div className="max-w-3xl w-full text-center">

    {/* 404 */}
    <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter text-black">
      404
    </h1>

    {/* Blue Line */}
    <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-2" />

    {/* Heading */}
    <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-black text-black">
      Page Not Found
    </h2>

    {/* Description */}
    <p className="mt-5 max-w-xl mx-auto text-lg leading-8 text-black">
      Sorry, the page you are looking for does not exist or may have been
      moved. Don't worry, you can go back to our home page.
    </p>

    {/* Buttons */}
    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">

      <Link
        to="/"
        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black text-white font-bold transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 shadow-lg"
      >
        Go Home →
      </Link>

      <Link
        to="/contact"
        className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-black bg-white text-black font-bold transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>


);
};

export default P404;
