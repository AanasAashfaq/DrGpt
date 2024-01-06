function ChooseUs() {
  return (
    <div className="h-screen bg-white relative">
      <div className="text-white">Heading</div>
      <div className="my-16 mx-10 flex h-full justify-between">
        <div className="relative  w-[50%] h-[85%] border-green-400">
          <div className="absolute bottom-0 left-0 w-full rounded-3xl h-[300px] z-10 bg-blue-500"></div>
          <img className="object-contain w-full h-full relative z-20" src="/images/about-img.png" alt="About Image" />
        </div>
        <div className="pl-10 flex flex-col flex-wrap justify-evenly pb-32 pr-11   w-[50%] ">
          <p className="text-[#2668F5] font-medium text-3xl">Why Choose Us</p>
          <div class=" border-t-4 border-blue-500 mt-3 pb-4 w-32 "></div>

          <h1 className="text-4xl font-bold color ">
            Why You Come To Our DR GPT
          </h1>
          <p className="text-gray-700">A sealant is a liquid solution that is painted on to the biting surface of a clean tooth, and which sets as a durable plastic material It forms a physical barrier that stops food and other bacteria from collecting in the fissures liquid solution that is painted on to the biting.</p>
          <p className="text-gray-700">A sealant is atooth, and which sets as a durable plastic material It forms a physical barrier that stops food and other bacteria from collecting in the fissures liquid solution that is painted on to the biting.</p>
          <p className="text-gray-700">A sealant is  sets as a durable plastic material It forms a physical barrier that stops food and other bacteria from collecting in the fissures liquid solution that is painted on to the biting.</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
