import React, { useState, useEffect, } from 'react'
import videoBg from '../assets/videoBg.mp4'
import { FaArrowRightLong } from "react-icons/fa6";
import logoGmSmall from '../picture/logoGmSmall.png'
import logoOpenaiSmall from '../picture/logoOpenaiSmall.png'
import logoTargetSmall from '../picture/logoTargetSmall.png'
import logoParmountSmall from '../picture/logoParamountSmall.png'
import logoScripeSmall from '../picture/logoSripeSmall.png'
import logoIbmSmall from '../picture/logoIbmSmall.png'
import videoBo from '../assets/videoBo.mp4'
import { FaHandSparkles } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoFlashOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import backgroundForSlackCom from '../picture/backgroundForSlackCom.png'
import videoBody1 from '../assets/videoBody1.mp4'
import videoBody2 from '../assets/videoBody2.mp4'
import videoBody3 from '../assets/videoBody3.mp4'
import videoBody4 from '../assets/videoBody4.mp4'
import { VscOctoface } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import videoBodyAfterActionScroll from "../assets/videoBodyAfterActionScroll.mp4"
import videoAccordion1 from '../assets/videoAccordion1.mp4'
import videoAccordion2 from '../assets/videoAccordion2.mp4'
import videoAccordion3 from '../assets/videoAccordion3.mp4'
import videoAccordion4 from '../assets/videoAccordion4.mp4'
export default function Main() {
    
    
     const [colorClass, setColorClass] = useState('bg-green-500');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 3100) {
    setColorClass('bg-[#9503c7]');
    } else if (scrollY >= 2500) {
    setColorClass('bg-blue-400');
    } else if (scrollY >= 1800) {
     setColorClass('bg-yellow-500');
    } else {
    setColorClass('bg-green-500');
    }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    

   const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 3100) {
        setVideoIndex(3);
      } else if (scrollY >= 2500) {
        setVideoIndex(2);
      } else if (scrollY >= 1800) {
        setVideoIndex(1);
      } else {
        setVideoIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videos = [
    videoBody1,
    videoBody2,
    videoBody3,
    videoBody4,
  ];


  
  return (
         
        <div className='flex flex-col items-center gap-10 max-md:overflow-hidden text-left '>
            <div className='flex flex-col items-center justify-center w-full mt-28'>
            <video src={videoBg} autoPlay  muted className='w-full max-w-screen-md mx-auto'/>
            <div className='p-5'>
            <span className='flex flex-col gap-4 text-lg cursor-pointer '>
                 <p className='flex font-light text-center'>Share it. Discuss it. Get it done. Side-by-side with AI agents.</p>
                 <span className='flex flex-row items-center justify-center gap-2 text-lg max-md:flex-col'>
                    <span className='text-white bg-[#701a75] hover:bg-[#540d59] max-md:w-[15rem] rounded-md w-[11rem] h-[4rem]  items-center flex justify-center'>GET STARTED</span>
                    <span className='flex flex-row items-center gap-2 border-[0.1rem] border-[#701a75] rounded-md w-[15rem] h-[4rem] justify-center 
                    text-[#701a75] hover:border-[#540d59] hover:border-[0.2rem]'>
                        <p>FIND YOUR PLAN </p>
                        <FaArrowRightLong/>
                    </span>
                 </span>
                 </span>
                 </div>
                 <div className='flex flex-row flex-wrap items-center justify-center w-full h-auto gap-16 p-4'>
                    <img src={logoGmSmall} alt="" />
                    <img src={logoOpenaiSmall} alt="" />
                    <img src={logoTargetSmall} alt="" />
                    <img src={logoParmountSmall} alt="" />
                    <img src={logoScripeSmall} alt="" />
                    <img src={logoIbmSmall} alt="" />
                 </div>
             </div>

                <div className='flex items-center justify-center mt-6'>
                    <video src={videoBo} autoPlay loop  muted className='w-[70%] max-lg:w-[90%] rounded-xl'/>
                </div>
                <div className='relative flex flex-col items-center justify-center w-full gap-10 '>
                     <img src={backgroundForSlackCom} alt="" className=' w-full overflow-hidden h-[280%] mb-10 absolute -z-10 text-[#ede1f7] ' />
                    <div className='absolute max-w-full overflow-hidden  w-screen h-screen bg-gradient-to-t from-white  to-[#f9f1ff] top-[129%] -z-10'></div>
                    <span className='text-4xl font-bold text-center max-xl:w-[90%] w-[40%] max-lg:w-[90%] max-lg:text-3xl '>Bring your people, projects, apps, and AI agents together.</span>
                    <span className='flex flex-row gap-10 text-lg max-lg:hidden'>
                        <span className='flex flex-row items-center gap-1'>
                            <FaHandSparkles/>
                            <p>Collaboration</p>
                        </span>
                        <span className='flex items-center gap-1'>
                            <GrNotes/>
                            <p>Knowledge</p>
                        </span>
                        <span className='flex flex-row items-center gap-1'>
                            <IoFlashOutline/>    
                            <p>integrations</p>
                        </span>
                        <span className='flex flex-row items-center gap-1'>
                            <BsStars/>
                            <p>Slack AI</p>
                        </span>
                        <span className='flex flex-row items-center gap-1'>
                            <VscOctoface/>
                            <p>AGENTS</p>
                            
                        </span>
                    </span>
                 
                </div>
                <div className='grid grid-cols-2 gap-10 max-lg:grid-cols-1'>
                   <div className='flex flex-col gap-52 max-lg:gap-10  '>
                    <div className='flex flex-col gap-10 w-[100%] p-28 max-lg:p-14 max-md:p-6 max-xl:w-[41rem] max-lg:w-full'>
                        <span className='flex flex-col justify-start gap-4 '>
                            <span className='flex flex-row items-center gap-3 '>
                             <FaHandSparkles/>
                            <p>Collaboration</p>
                            </span>
                            <p className='text-3xl'>Communicate in countless ways from one place.</p>
                            <p>Slack is built for bringing people and information together.
                                 Type things out. Talk things out. Invite external organizations into the conversation.</p>
                        </span>
                         <span className='flex flex-row gap-4 w-[100%] max-md:w-[90%] items-center'>
                                    <span className='text-5xl font-bold text-[#9503c7]'>80%</span>
                                    <p>of the Fortune 100 use Slack Connect to work with partners and customers</p>
                                </span>
                    </div>


                    <div className=' relative flex justify-end items-center w-[100%] h-[100%]  max-sm:not-sr-only max-md:not-sr-only max-lg:not-sr-only max-sm:justify-center
                    max-xl:sr-only max-s2xl:sr-only max-s3xl:sr-only max-s4xl:sr-only max-s5xl:sr-only max-s6xl:sr-only max-s7xl:sr-only'>
                        <video src={videoBody1} autoPlay muted loop className='absolute max-md:relative max-md:w-[100%] max-sm:w-[90%] mr-32  z-10 w-[31.3rem] h-[21.5rem]  max-md:mr-0 rounded-lg'/>
                        <div className='  w-[25rem]  h-[25rem] max-md:hidden  rounded-full bg-green-500 '></div>
                    </div>



                           <div className='flex flex-col gap-10 w-[100%] max-xl:w-[41rem] max-lg:p-14 p-28 max-md:p-6 max-lg:w-full '>
                        <span className='flex flex-col justify-start gap-4'>
                            <span className='flex flex-row items-center gap-3 text-lg'>
                            <GrNotes/>
                            <p>Knowledge</p>
                            </span>
                            <p className='text-3xl'>Manage projects and move work forward faster.</p>
                            <p>Prioritize tasks, share ideas, and stay aligned. Slack brings 
                                every piece of your project together from start to finish.</p>
                        </span>
                         <span className='flex flex-row gap-4 w-[90%] items-center'>
                                    <span className='text-5xl font-bold text-[#9503c7]'>47%</span>
                                    <p>increase in productivity for teams using Slack</p>
                                </span> 
                    </div>
                    <div className=' relative flex justify-end items-center w-[100%] h-[100%]   max-sm:not-sr-only max-md:not-sr-only max-lg:not-sr-only max-sm:justify-center
                    max-xl:sr-only max-s2xl:sr-only max-s3xl:sr-only max-s4xl:sr-only max-s5xl:sr-only max-s6xl:sr-only max-s7xl:sr-only'>
                        <video src={videoBody2} autoPlay muted loop className='absolute max-md:relative max-md:w-[100%] max-sm:w-[90%] mr-32  z-10 w-[31.3rem] h-[21.5rem]  max-md:mr-0 rounded-lg'/>
                        <div className='  w-[25rem]  h-[25rem] max-md:hidden  rounded-full bg-yellow-500 '></div>
                    </div>
                       <div className='flex flex-col gap-10 w-[100%] p-28 max-md:p-6 max-lg:p-14  max-xl:w-[41rem] max-lg:w-full'>
                        <span className='flex flex-col justify-start gap-4'>
                            <span className='flex flex-row items-center gap-3'>
                            <IoFlashOutline/>    
                            <p>integrations</p>
                            </span>
                            <p className='text-3xl'>Tap into the tools you already use.</p>
                            <p>Over 2,600 apps are ready to connect in Slack so you can automate everyday
                                 tasks in the flow of work, and save your team precious time.</p>
                        </span>
                         <span className='flex flex-row gap-4 w-[100%] items-center'>
                                    <span className='text-5xl font-bold text-[#9503c7]'>35%</span>
                                    <p>increase in time saved due to automation for Slack users</p>
                                </span>
                    </div>
                    <div className=' relative flex justify-end items-center w-[100%] h-[100%]  max-sm:not-sr-only max-md:not-sr-only max-lg:not-sr-only max-sm:justify-center
                    max-xl:sr-only max-s2xl:sr-only  max-s3xl:sr-only max-s4xl:sr-only max-s5xl:sr-only max-s6xl:sr-only max-s7xl:sr-only'>
                        <video src={videoBody3} autoPlay muted loop className='absolute max-md:relative max-md:w-[100%] max-sm:w-[90%] mr-32  z-10 w-[31.3rem] h-[21.5rem]  max-md:mr-0 rounded-lg'/>
                        <div className='  w-[25rem]  h-[25rem] max-md:hidden  rounded-full  bg-blue-400 '></div>
                    </div>
                        <div className='flex flex-col gap-10 w-[100%] p-28 max-md:p-6  max-lg:p-14 max-xl:w-[41rem] max-lg:w-full'>
                        <span className='flex flex-col justify-start gap-4'>
                            <span className='flex flex-row items-center gap-3'>
                            <BsStars/>
                            <p>Slack AI</p>
                            </span>
                            <p className='text-3xl'>Do more with AI that works where you do.</p>
                            <p>Search your entire company history for answers, instantly catch up on 
                                conversations, and get daily recaps of messages missed.</p>
                        </span>
                         <span className='flex flex-row gap-3 w-[100%] items-center '>
                                    <span className='flex flex-row gap-4'>
                                    <p className='text-5xl font-bold text-[#9503c7] w-[30%] '>97</p>
                                    <p className='text-5xl font-bold text-[#9503c7] w-[30%] '>min</p>
                                    </span>
                                    <p>average time users can save weekly with Slack AI</p>
                                </span>
                    </div>
                    <div className=' relative flex justify-end items-center w-[100%] h-[100%]  max-sm:not-sr-only max-md:not-sr-only max-lg:not-sr-only max-sm:justify-center
                    max-xl:sr-only max-s2xl:sr-only max-s3xl:sr-only max-s4xl:sr-only max-s5xl:sr-only max-s6xl:sr-only max-s7xl:sr-only'>
                        <video src={videoBody4} autoPlay muted loop className='absolute max-md:relative  max-md:w-[100%] max-sm:w-[90%] mr-32  z-10 w-[31.3rem] h-[21.5rem]  max-md:mr-0 rounded-lg'/>
                        <div className='  w-[25rem]  h-[25rem] max-md:hidden  rounded-full bg-[#9503c7] '></div>
                    </div>
                    </div>
                    <div className=' relative w-[100%] h-[90%] object-cover   max-lg:hidden max-xl '>
                        <div className='sticky flex items-center justify-end mt-[16rem] top-96'>
                     <div className="absolute w-[31.3rem] h-[21.5rem]  max-xl:w-[23.3rem] max-xl:h-[16rem] max-xl:mx-[6rem] mx-[7rem] rounded-sm z-10 transition-all duration-700" >
                       {videos.map((src, index) => (
                            <video
                                key={index}
                                src={src}
                                autoPlay
                                muted
                                loop
                                className={`absolute  w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${
                                videoIndex === index ? 'opacity-100 z-10 ' : 'opacity-0 scale-0 z-0'
                                }`}/>
                        ))}
                    </div>
                    <div   className={` absolute w-[25rem]  h-[25rem] max-xl:w-[17rem] max-xl:h-[17rem] -z-10 rounded-full transition-all duration-700  ${colorClass}`}></div> 
                  </div>
                    </div>
                    </div>                   
              <div className='flex flex-row max-xl:flex-col w-[85%] max-xl:w-[90%] text-lg items-center gap-5 max-xl:gap-10 
               bg-gradient-to-t from-white via-[#FBF5FF] to-[#d7effe]  
              shadow-lg p-10 rounded-2xl justify-center'>
                  <div className='flex flex-col gap-4 w-[50%] max-xl:w-full '>
                    <span className='flex flex-col gap-1'>
                    <span className='flex-row flex items-center gap-2 '>
                      <VscOctoface className='text-xl'/>
                      <p>Agents</p>
                    </span>
                      <p className='font-bold text-3xl'>Pick the perfect AI agent for the job.</p>
                    </span>
                    <span>Use Agentforce, Claude, Google Agent Space, and Vercel 
                      v0 to collaboratively create copy, code, and strategy right inside your Slack channels.</span>
                    <span className='flex flex-row text-[#1264a3] items-center gap-3'>
                      <p>Learn more</p>
                      <BsArrowRight className='text-2xl'/>
                      </span>
                  </div> 
                <div className='max-xl:w-[70%] w-[50%] max-md:hidden'>
                    <video src={videoBodyAfterActionScroll} autoPlay muted loop  className='max-xl:rounded-3xl max-xl:p-2 rounded-xl'/>
                  </div>  
              </div>
              <div className='w-[100%] mt-14 flex flex-col justify-center items-center gap-10 object-covers '>
                <span className='text-5xl font-bold text-center w-[60%]'> The most innovative companies run their business in Slack.</span>
                <span className='flex flex-row w-full justify-center items-center gap-5 overflow-y-scroll' >
                  <video src={videoAccordion1}  muted autoPlay className=' transition-all duration-200 before::w-[10%] rounded-lg  ' />
                  <video src={videoAccordion2} muted autoPlay className='w-[20%] rounded-lg' />
                  <video src={videoAccordion3} muted autoPlay className='w-[20%] rounded-lg' />
                  <video src={videoAccordion4} muted autoPlay className='w-[20%] rounded-lg' />                 
                </span>
              </div>
              <div className='w-full h-[100rem]'></div>
    </div>
    
  )
}
