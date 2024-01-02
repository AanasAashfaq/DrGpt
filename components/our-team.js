function OurTeam() {
    const teamMembers = [
        {
            image: '/images/anaspic.jpg',
            name: 'Anas Ashfaq',
            role: 'Software Engineer',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            image: '/images/anaspic.jpg',
            name: 'Ali Ashfaq',
            role: 'Data Engineer',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            image: '/images/anaspic.jpg',
            name: 'Musa Ali',
            role: 'Data Engineer',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
    ];

    return (
        <div>
            <div>
                <img src="/images/phonendoscope.png" className="absolute opacity-[0.09]  right-0"/>
            </div>
            <h1 className="mt-12 flex text-[#343F52] flex-col items-center font-bold text-5xl">Our Team
            <div class=" border-t-4 border-blue-500 mt-3 pb-4 w-32 "></div>
            </h1>
            <div className=" h-screen px-32 py-32 mt-[-84px] flex justify-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white relative group transform transition-transform hover:scale-105 duration-700 ease-in-out card p-3 m-3 flex flex-col justify-center items-center border-2 shadow-sm hoverr-blue-500">
                        <div className="flex flex-col items-center"><img src={member.image} className="w-[40%]" /></div>
                        <h1 className="pt-5 text-[#343F52] text-xl font-bold">{member.name}</h1>
                        <p className="text-[#2668F5] text-base">{member.role}</p>
                        <p className="text-[#60697B] text-center pt-4 px-4 leading-[26px]" >{member.description}</p>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
