import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className=''>
      {/* Blue Header Section */}
      <div className="relative w-full">
        <div className="bg-customBlue h-[100px] w-full flex items-center justify-between px-8">
          {/* Logo */}
          <div className="absolute top-[50px] left-[325px] transform w-32 h-32">
            <img
              src="/logo.png" // Replace with your logo image path
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Spacer for Alignment */}
          <div className="w-1/5"></div>

          {/* Heading */}
          <h1 className="text-blue-200 text-2xl font-bold">Tuition Free Education Program on Latest Technologies</h1>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6 text-white mr-[325px]">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">Apply</Link></li>
              <li><Link href="/services" className="hover:underline">Jobs</Link></li>
              <li><Link href="/portfolio" className="hover:underline">result</Link></li>
              <li><Link href="/contact" className="hover:underline">Courses</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="">
        {/* Image with relative positioning */}
        <Image src="/heroImg.png" alt="" width={2560} height={680} className="object-cover" />

        {/* Text content over the image, aligned to the left */}
        <div className="absolute top-[400px] ml-[325px] transform -translate-y-1/2 px-8 w-[500px]">
          <h1 className="font-extrabold text-4xl text-customBlue">Governor Sindh</h1>
          <h1 className="font-medium text-2xl text-customBlue">Kamran Khan Tessori</h1>
          <h2 className="font-bold text-2xl text-cyan-400 mt-2">
            Certified Cloud Applied Generative AI Engineer (GenEng)
          </h2>
          <p className="font-bold text-customBlue mt-2">
            Earn up to $5,000 / month
          </p>
          <p className="font-bold text-customBlue mt-3">
            Now admissions are open in Hyderabad
          </p>
          <div className="flex gap-[100px] mt-10 mb-[0px]">
            <button className="w-[200px] h-[66px] bg-customBlue text-white border rounded-lg font-bold text-xl">
              Apply Now
            </button>
            <div className="flex flex-col items-center">
              <h1 className="text-customBlue font-bold text-4xl">562,143</h1>
              <p className="text-lg">Accepted Applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;