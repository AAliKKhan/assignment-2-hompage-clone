import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* First Row: Core Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Core Courses */}
          <div>
            <h3 className="font-bold text-xl mb-2">Core Courses</h3>
            <ul>
              <li className="flex items-center">
               
                Programming Fundamentals
              </li>
              <li className="flex items-center">
               
                Web2 Using NextJS
              </li>
              <li className="flex items-center">
           
                Earn as You Learn
              </li>
            </ul>
          </div>

          {/* Advanced Courses */}
          <div>
            <h3 className="font-bold text-xl mb-2 ">Advanced Courses</h3>
            <ul className='gap-4'>
              <li className="flex items-center">
  
                Web 3 and Metaverse
              </li>
              <li className="flex items-center">
        
                Cloud-Native Computing
              </li>
              <li className="flex items-center">
  
                Artificial Intelligence (AI) and Deep Learning
              </li>
              <li className="flex items-center">
          
                Ambient Computing and IoT
              </li>
              <li className="flex items-center">
           
                Genomics and Bioinformatics
              </li>
              <li className="flex items-center">
             
                Network Programmability and Automation
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-xl mb-2">Social Links</h3>
            <ul className="flex space-x-4">
            <li>
                <a href="#">
                  <Image src="/Facebook.png" alt="Facebook" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/YT.png" alt="Facebook" width={24} height={24} />
                </a>
              </li>
              
              <li>
                <a href="#">
                  <Image src="/Twitter.png" alt="LinkedIn" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/tiktok.png" alt="Instagram" width={24} height={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
