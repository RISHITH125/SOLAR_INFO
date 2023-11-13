import Profile from "./profilessss/Profile";
import { rahul, less } from '../assets'
import { Link } from "react-router-dom";
import { linksRahul } from "../../constants";

export default function About(props) {

  const gradientStyles = [
    {backgroundImage:`linear-gradient(to left, transparent, rgb(255 162 0)`}, 
    {backgroundImage:`linear-gradient(to right, transparent, #8B0000)`},
    {backgroundImage:`linear-gradient(to left, transparent, #0A1172)`},
  ];

  return (
    <div className='overflow-scroll overflow-x-hidden w-[100vw] h-[100vh] flex flex-col items-start ml-3 sm:ml-7 gap-6'>
      <div className="flex flex-row gap-2 items-center pt-5 p-3">
        <Link to="/" className='text-white'>
          <img src={less} className="w-[25px] h-fit"/>
        </Link>
        <div className={`text-white h-fit text-3xl`}>ABOUT</div>
      </div>
      <div className='text-white w-[90vw]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus quia animi eligendi natus, veritatis vitae dolor? Corporis ut nulla et, tenetur porro repellendus molestias animi tempore dolores error enim.
      </div>
      <div className='flex flex-col gap-6'>
        <Profile data-image="" alt="" data-content="" link1="" link2="" link3="" rotate="0" styles={gradientStyles[0]} links={[]} />
        
        <Profile data-image="" alt="" data-content="" link1="" link2="" link3="" rotate="1" styles={gradientStyles[1]} links={[]} />

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