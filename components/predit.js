import { useState } from "react";

function Predict() {
    const [file, setfile] = useState()
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(file)
        const data = new FormData();
        data.set('file',file);
        const result = await fetch("/api/upload/route",{
            method:"POST",
            body:data
        });
        console.log(result)
    }
    return (
        <div className=" h-screen bg-gray-300  text-center flex">
            <div className="h-[500px] w-[340px] rounded-2xl bg-[#242626] m-auto  border-2 border-black ">
                <h1 className="font-medium p-5 text-3xl text-[#41B6E6]">Upload Image</h1>
                <div className="  flex justify-center items-center">

                <form onSubmit={onSubmit} className="">
                    <input
                        type="file"
                        name="file"
                        className=" text-white"
                        onChange={(e) => setfile(e.target.files?.[0])}
                        />
                    <button type="submit" className="p-2 rounded-md bg-[#41B6E6] m-4 ">Predict</button>
                    <button type="submit" className="p-2 rounded-md bg- m-4 bg-green-500 ">Re-Predict</button>
                    <button type="submit" className="p-2 rounded-md bg- m-4 bg-red-600">Refresh</button>
                </form>
                        </div>
                <p className="h-[60%] bg-gray-700 rounded-md mx-3 text-white mt-3  ">Report</p>
            </div>
        </div>
    );
}
export default Predict;