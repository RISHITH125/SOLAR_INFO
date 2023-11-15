import Profile from "./profilessss/Profile";
import { rahul, less, Rishith, Prathik } from '../assets'
import { Link } from "react-router-dom";
import { linksPrathik, linksRahul , linksRishith } from "../../constants";

export default function About(props) {

  const gradientStyles = [
    {backgroundImage:`linear-gradient(to left, transparent, rgb(255 162 0)`}, 
    {backgroundImage:`linear-gradient(to right, transparent, #8B0000)`},
    {backgroundImage:`linear-gradient(to left, transparent, #0A1172)`},
  ];

  return (
    <div className='overflow-scroll overflow-x-hidden w-[100vw] h-[99vh] flex flex-col items-start ml-3 sm:ml-7 gap-6'>
      <div className="flex flex-col gap-10 items-left pt-5 p-3">
        <Link to="/" className='text-white'>
          <img src={less} className="w-[20px] h-fit mt-2"/>
        </Link>
        <div className={`text-white h-fit text-5xl font-extrabold ml-10 hover:cursor-default hover:text-orange-600 transition-colors hover:decoration-slice; decoration-orange-950`}>ABOUT</div>
      </div>
      <div className='w-[90vw] mb-8'>
        <h1 className={`text-white text-2xl`}>
        Welcome to our celestial odyssey through the captivating realm of the solar system! Embark on an extraordinary journey where the enigmatic dance of celestial bodies unfolds before your eyes. Astronomy, the gateway to understanding the cosmos, beckons you to traverse the realms of space and time, unveiling the cosmic wonders that inhabit our solar neighborhood.
        <br/>
        <br/>
        Our website serves as a celestial portal, inviting you to delve into the intricacies of the solar system. With stunning visual representations, insightful articles, and interactive experiences, we aim to unravel the mysteries of the cosmos and foster a deeper appreciation for the beauty and complexity of our galactic neighborhood.
        </h1>
      </div>
      <div className='flex flex-col gap-6'>
        <Profile data="Hello fellas , this is Rishith P , Computer-Science student & I love to crank my imagination  to build new stuff , as a reason I love Software Development especially Frontend , But my passion towards becomming a fullstack developer ignites my intrests and motivates me to get better at Backend and cloud computing. My skills include React,Tailwind CSS. And am currently working on Backend .. I aspire to learn more about system engineering & AIML.." 
        url={Rishith}  
        rotate="0" 
        styles={gradientStyles[0]}
        links={linksRishith}
        />
        
        <Profile data="a deep-diver and passionate, I am an explorer of worlds. I love the world of Hacking, Programming and creating stuff. Love to do cool stuff and music stays in my veins, my hands just don't spare the guitar! Have drawn a few marvelling pieces that surprise me! I am Prathik S Hanji, CSE student at PES University." 
        url={Prathik}  
        rotate="1" 
        styles={gradientStyles[1]}
        links={linksPrathik}
        />

        <Profile data=" I am Rahul Baradol, a 2nd year Computer Science student who loves building projects and have fun with existing web technologies! I also love solving problems on Leetcode. Yup.....you read it right I love Leetcode! My tech stack includes React, NextJS, Bootstrap, Tailwind CSS, Node JS, Express JS..so on and I am currently exploring stuff related to Cloud and Devops like Docker, Kubernetes,....etc. I also love participating in short contests of algorithms. I got a second place in Alcoding Practice Placement Test series hosted by my university and I am top 5% (personal highest) on Leetcode!!" 
        url={rahul}  
        rotate="0" 
        styles={gradientStyles[2]}
        links={linksRahul}
        />
      </div>
    </div>
  );
}