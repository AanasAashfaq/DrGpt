import NavBar from '../components/NavBar';
import ChooseUs from '../components/choose-us';
import Features from '../components/features';
import Footer from '../components/footer';
import Homme from '../components/homeSection';
import OurTeam from '../components/our-team';
import Predict from '../components/predit';
import Homee from './home';

export default function Home() {
  return (
    <div>
      <NavBar />
      <section
        id="home"
        //className="text-white h-screen bg-gray-600    text-center flex"
        >
        {/* <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  "> */}
          <Homme />
        {/* </h1> */}
      </section>
      <section
        id="about"
        // className="text-white h-screen bg-black  text-center flex"
        >
        {/* <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">
          About
        </h1> */}
        <Predict />
      </section>
      <section id="blog" 
      // className=" text-white h-screen bg-purple-900 flex"
      >
        <ChooseUs />
        {/* <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Blog
        </h1> */}
      </section>
      <section
        id="contact"
        // className="text-white h-screen bg-black  text-center flex"
      >
        {/* <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{' '}
        </h1> */}
        <Features />  
      </section>
      <section
        id="projects">
        {/* className=" text-white h-screen bg-purple-900 flex" */}
            <OurTeam />
        {/* <h1 className="m-auto  text-7xl text-white font-bold">
          Our Team
        </h1> */}
      </section>
      <section
        id="footer">
        {/* className=" text-white h-screen bg-purple-900 flex" */}
            <Footer />
        {/* <h1 className="m-auto  text-7xl text-white font-bold">
          Our Team
        </h1> */}
      </section>
    </div>
  );
}
