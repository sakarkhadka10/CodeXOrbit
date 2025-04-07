import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Learn to Code with
              <span className="text-amber-500"> UvaisCodes</span>
            </h1>
            <p className="text-lg text-gray-600">
              Master web development with our comprehensive tutorials on HTML,
              CSS, JavaScript, and more. Start your coding journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors text-center"
              >
                View Projects
              </Link>
              <Link
                href="#tutorials"
                className="px-8 py-3 border-2 border-amber-500 text-amber-500 rounded-lg font-medium hover:bg-amber-50 transition-colors text-center"
              >
                Browse Tutorials
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-black p-4 rounded-2xl shadow-2xl overflow-hidden ">
              <Image
                src="/img/hero-image.png"
                alt="UvaisCodes Logo"
                width={500}
                height={400}
                className="w-full h-56 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const HeroCard = () => {
  return (
    <main className="bg-black w-60 h-auto shadow-2xl">
      <div>
        <Image
          src={"/public/logo/UvaisCodes.png"}
          alt="hero image"
          width={280}
          height={200}
        />
      </div>
    </main>
  );
};
