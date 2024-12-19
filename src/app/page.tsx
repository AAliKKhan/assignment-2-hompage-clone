import Image from "next/image";
import Hero from "./Components/hero";
import Card from "./Components/card";

export default function Home() {
  return (
  
  <div className="wrapper">
  <Hero></Hero>
  <h1 className="text-3xl font-bold text   text-customBlue mt-[100px] mb-[50px]">Core Courses Sequences</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    <Card imageSrc="/img4.png" title="Programming Fundamentals" />
    <Card imageSrc="/img5.png" title="Web 2 Using NextJs" />
    <Card imageSrc="/img6.png" title="Earn as you learn" />
  </div>

  <h1 className="text-3xl font-bold text mt-[100px] mb-[50px] text-customBlue">Advanced Courses</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    <Card imageSrc="/img7.png" title="Artificial Intelligence" />
    <Card imageSrc="/img8.png" title="Web 3 and Metaverse" />
    <Card imageSrc="/img9.png" title="Cloud-Native Computing" />
    <Card imageSrc="/img10.png" title="Ambient Computing LoT" />
    <Card imageSrc="/img11.png" title="Genomics and Bioinformatics" />
    <Card imageSrc="/img12.png" title="Network Programmability and Automation" />
  </div>
</div>

  );
}