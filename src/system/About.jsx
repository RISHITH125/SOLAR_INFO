import Profile from "./profilessss/Profile";

export default function About() {
  const gradientStyles = [
    {backgroundImage:`linear-gradient(to left, transparent, rgb(255 162 0)`}, // For the second profile (sun color)
    {backgroundImage:`linear-gradient(to left, transparent, #8B0000)`}, // For the third profile (burgundy color)
    {backgroundImage:`linear-gradient(to left, transparent, #0A1172)`}, // For the fourth profile (neptune planet color)
  ];

  return (
    <div className='overflow-scroll overflow-x-hidden w-[100vw] h-[100vh] flex flex-col items-start ml-3 sm:ml-7 gap-6'>
      <div className={`text-white text-3xl mt-5`}>ABOUT</div>
      <div className='text-white w-[90vw]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus quia animi eligendi natus, veritatis vitae dolor? Corporis ut nulla et, tenetur porro repellendus molestias animi tempore dolores error enim.
      </div>
      <div className='flex flex-col gap-6'>
        <Profile data-image="" data-content="" link1="" link2="" link3="" rotate="0" styles={gradientStyles[0]} />
        <Profile data-image="" data-content="" link1="" link2="" link3="" rotate="1" styles={gradientStyles[1]} />
        <Profile data-image="" data-content="" link1="" link2="" link3="" rotate="0" styles={gradientStyles[2]} />
      </div>
    </div>
  );
}