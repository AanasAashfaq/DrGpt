// Import Image from next/image
import Image from 'next/image';

function Homme() {

  return (
    <div className=" text-white h-screen  bg-[#021B43] justify-between    text-center flex">
      <div className=' absolute top-[210px] left-[170px]  flex justify-start flex-col '>

        <h1 className=" text-left   pb-5    text-7xl text-white font-bold  ">
          Dr GPT
        </h1>
        <p className='text-left w-[400px] pb-5'>Since the first days of operation of Medify, our teaming has been focused on building a high-qualities medicals service by clinika.
        </p>
        <div class=" border-t-2 border-blue-500 mb-2 pb-4 w-44 mr-24"></div>
        <button className="w-fit bg-blue-500 hover:bg-blue-700 justify-start text-white font-bold py-2 px-4 rounded-full">
          Give Image
        </button>
      </div>

      <img src="/images/hero3.jpg" className='w-[100vw] pt-14' />


    </div>
  );

}
export default Homme;