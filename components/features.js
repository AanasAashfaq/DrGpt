function Features() {
    return (
        <div className="h-screen bg-gray-100 m-auto justify-center items-center text-center flex flex-col">
            <h1 className="text-[#3D404F]  font-bold text-5xl">Specialities available at Dr GPT</h1>
            <div class=" border-t-4 border-blue-500 mt-3 pb-4 w-32 "></div>
            <p className="w-[40%] text-gray-500 mx-auto p-5 ">Donec pulvinar, eros quis convallis vestibulum, neque turpis
                iaculis mi, in ultrices nisl magna ut leo.</p>
            <div className="flex mx-auto px-24 justify-evenly w-full">

                <div className="cursor-pointer hover:shadow-lg   h-48 text-[#2668F5] border-2 border-gray-00 rounded-s-xl w-full">
                    <img src="/images/medical-team.png" className="w-[35%] hover:scale-110 transition-transform ease-in-out m-auto pt-5" />
                    <p className="m-5">Cutting Edge Diesease Detection</p>
                </div>
                <div className="cursor-pointer hover:shadow-lg  h-48 border-2 text-[#2668F5] border-gray-00 w-full">
                    <img src="/images/x-ray.png" className="w-[35%] hover:scale-110 transition-transform ease-in-out m-auto pt-5" />
                    <p className="m-5">Real-time Radiology Insights</p>
                </div>
                <div className="cursor-pointer hover:shadow-lg  h-48 border-2 text-[#2668F5] border-gray- w-full">
                    <img src="/images/ai.png" className="w-[35%] hover:scale-110 transition-transform ease-in-out m-auto pt-5" />
                    <p className="m-5">Revolutionizing Healthcare Ai</p>
                </div>
                <div className="cursor-pointer hover:shadow-lg  h-48 border-2 text-[#2668F5] border-gray- rounded-e-xl w-full">
                    <img src="/images/methodology.png" className="w-[35%] hover:scale-110 transition-transform ease-in-out m-auto pt-5" />
                    <p className="m-5">Accessible, Accurate, Efficient</p>
                </div>
            </div>
        </div>
    );
}
export default Features;