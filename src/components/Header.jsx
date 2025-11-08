import React, { useState, useEffect, useRef } from 'react';
import Logo from '../picture/Logo.png';
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { PiShootingStarFill } from "react-icons/pi";
import NavPicture from "../picture/NavPicture.png";
import { BsArrowRight } from "react-icons/bs";
import  {motion} from "framer-motion";
import { BsCloudArrowDown } from "react-icons/bs";
import NavPicture1 from "../picture/NavPicture1.jpg"
import NavPicture2 from "../picture/NavPicture2.png"
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import SlidePicFeatuer from "../picture/SlidePicFeatuer.jpg"
import slidepictureSolutions from "../picture/slidepictureSolutions.jpg"


export default function Header() {

  const [scrolled, setScrolled] = useState(false);
const scrollRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.scrollTop > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollElement = scrollRef.current;
  if (scrollElement) {
    scrollElement.addEventListener('scroll', handleScroll);
  }

  return () => {
    if (scrollElement) {
      scrollElement.removeEventListener('scroll', handleScroll);
    }
  };
}, []);


  const [scrolled1, setScrolled1] = useState(false);
  const scrollRef1= useRef(null);

useEffect(() => {
  const handleScroll1 = () => {
    if (scrollRef1.current && scrollRef1.current.scrollTop > 1) {
      setScrolled1(true);
    } else {
      setScrolled1(false);
    }
  };

  const scrollElement1 = scrollRef1.current;
  if (scrollElement1) {
    scrollElement1.addEventListener('scroll', handleScroll1);
  }

  return () => {
    if (scrollElement1) {
      scrollElement1.removeEventListener('scroll', handleScroll1);
    }
  };
}, []);
 



  const [scrolled2, setScrolled2] = useState(false);
  const scrollRef2= useRef(null);

useEffect(() => {
  const handleScroll2 = () => {
    if (scrollRef2.current && scrollRef2.current.scrollTop > 1) {
      setScrolled2(true);
    } else {
      setScrolled2(false);
    }
  };

  const scrollElement2 = scrollRef2.current;
  if (scrollElement2) {
    scrollElement2.addEventListener('scroll', handleScroll2);
  }

  return () => {
    if (scrollElement2) {
      scrollElement2.removeEventListener('scroll', handleScroll2);
    }
  };
}, []);

// const [scrolled3, setScrolled3] = useState(false);
//   const scrollRef3= useRef(null);

// useEffect(() => {
//   const handleScroll3 = () => {
//     if (scrollRef3.current && scrollRef3.current.scrollTop > 1) {
//       setScrolled3(true);
//     } else {
//       setScrolled3(false);
//     }
//   };

//   const scrollElement3 = scrollRef3.current;
//   if (scrollElement3) {
//     scrollElement3.addEventListener('scroll', handleScroll3);
//   }

//   return () => {
//     if (scrollElement3) {
//       scrollElement3.removeEventListener('scroll', handleScroll3);
//     }
//   };
// }, []);
  const [scrolled3, setScrolled3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled3(true);
      } else {
        setScrolled3(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  let useClickeOutside = (handler) => {
    let domNode = useRef();
 
  useEffect(() =>{
    let mybeHandler = (event) => {
      if(!domNode.current.contains(event.target)){
        handler();
      }
    }
  document.addEventListener("mousedown", mybeHandler);
   
  return () => {
    document.removeEventListener("mousedown", mybeHandler);
  }
  });

  return domNode;
  };

    let domNode = useClickeOutside(() => {
      setFlyoutMenusopen(false);
    });
    
  

    
  const [open, setopen] = useState(false)
  const handelNav = () => {
    setopen(!open)
  }
  const [seacrhOpen, setsearchOpen] = useState(false)
  const handelSearch = () => {
    setsearchOpen(!seacrhOpen)
  }
  const [FlyoutMenus, setFlyoutMenusopen] = useState(false)
  const handelFlyoutMenus = () => {
    setFlyoutMenusopen(!FlyoutMenus)
  }
  const [FlyoutMenus1, setFlyoutMenusopen1] = useState(false)
  const handelFlyoutMenus1 = () => {
    setFlyoutMenusopen1(!FlyoutMenus1)
  }
  const [FlyoutMenus2, setFlyoutMenusopen2] = useState(false)
  const handelFlyoutMenus2 = () => {
    setFlyoutMenusopen2(!FlyoutMenus2)
  }
  const [FlyoutMenus3, setFlyoutMenusopen3 ]= useState(false)
  const handelFlyoutMenus3 = () => {
    setFlyoutMenusopen3(!FlyoutMenus3)
  }
  const [FlyoutMenus4, setFlyoutMenusopen4 ]= useState(false)
  const handelFlyoutMenus4 = () => {
    setFlyoutMenusopen4(!FlyoutMenus4)
  }
  const [FlyoutMenus5, setFlyoutMenusopen5 ]= useState(false)
  const handelFlyoutMenus5 = () => {
    setFlyoutMenusopen5(!FlyoutMenus5)
  }
  // const [open1, setopen1] = useState(false)
  // const handelNav1 = () => {
  //   setopen1(!open1)
  // }
  // const [FlyoutMenus6, setFlyoutMenusopen6]= useState(false)
  // const handelFlyoutMenus6 = () => {
  //   setFlyoutMenusopen6(!FlyoutMenus6)
  // }


  let useClickeOutside1 = (handler) => {
    let domNode1 = useRef();
    useEffect(() =>{
      let mybeHandler1 =(event1) => {
        if(!domNode1.current.contains(event1.target)){
          handler()
        }
      }
      document.addEventListener("mousedown", mybeHandler1);

      return() => {
        document.removeEventListener("mousedown", mybeHandler1);
      }
    });
    return domNode1;
  };
  
  let domNode1 = useClickeOutside1(() => {
    setFlyoutMenusopen1(false);
  });



  const [hovered, setHovered] = useState(false)
  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)
  const [hovered4, setHovered4] = useState(false)
  const [hovered5, setHovered5] = useState(false)
  const [hovered6, setHovered6] = useState(false)
  const [hovered7, setHovered7] = useState(false)
  const [hovered8, setHovered8] = useState(false)
  const [hovered9, setHovered9] = useState(false)
  const [hovered10, setHovered10] = useState(false)
  const [hovered11, setHovered11] = useState(false)
  const [hovered12, setHovered12] = useState(false)
  const [hovered13, setHovered13] = useState(false)
  const [hovered14, setHovered14] = useState(false)
  const [hovered15, setHovered15] = useState(false)
  const [hovered16, setHovered16] = useState(false)
  const [hovered17, setHovered17] = useState(false)
  const [hovered18, setHovered18] = useState(false)
  const [hovered19, setHovered19] = useState(false)
  const [hovered20, setHovered20] = useState(false)


  let useClickeOutside2 = (handler) => {
    let domNode2 = useRef();
    useEffect(() =>{
      let mybeHandler2 =(event1) => {
        if(!domNode2.current.contains(event1.target)){
          handler()
        }
      }
      document.addEventListener("mousedown", mybeHandler2);

      return() => {
        document.removeEventListener("mousedown", mybeHandler2);
      }
    });
    return domNode2;
  };
  
  let domNode2 = useClickeOutside2(() => {
    setFlyoutMenusopen2(false);
  });
  

  return (
    <div  className={` flex justify-center fixed w-full h-auto  select-none 
    z-50 `}>
      
      <div className={`   mx-auto  overflow-y-scroll  flex items-center
      justify-between p-5  px-16  max-md:px-4 ${scrolled3 ? 'bg-white rounded-full shadow-lg w-[95%] mt-2 max-lg:rounded-none max-lg:w-full max-lg:mt-0 ':'bg-white w-full'} transition-all duration-200 `}>

        <span className='flex items-center justify-between w-24 h-auto gap-10 cursor-pointer '>
          <img src={Logo} alt="This is Logo from slack.com" className={`${seacrhOpen ? 'hidden' : ''}`} />

          <ul className='items-center justify-between hidden gap-5 lg:flex '>
            <span onClick={handelFlyoutMenus} className='flex items-center '>
              <li className={`cursor-pointer text-sm  ${seacrhOpen ? 'hidden' : ''} `}>Features</li>
              {FlyoutMenus ? < FaAngleUp className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} /> : < FaAngleDown className={`text-sm ${seacrhOpen ? 'hidden' : ''}`}/>}
            </span>
            <span onClick={handelFlyoutMenus1} className='flex items-center'>
              <li className={`cursor-pointer text-sm ${seacrhOpen ? 'hidden' : ''}`}>Solutions</li>
              {FlyoutMenus1 ? < FaAngleUp className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} /> : < FaAngleDown className={`text-sm ${seacrhOpen ? 'hidden' : ''}`}/>}
            </span>
            <li className={`cursor-pointer text-sm hover:underline ${seacrhOpen ? 'hidden' : ''}`}>Enterprise</li>
            <span onClick={handelFlyoutMenus2} className='flex items-center '>
              <li className={`cursor-pointer text-sm ${seacrhOpen ? 'hidden' : ''}`}>Resources</li>
              {FlyoutMenus2 ? < FaAngleUp className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} /> : < FaAngleDown className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} />}
            </span>
            <li className={`cursor-pointer text-sm hover:underline ${seacrhOpen ? 'hidden' : ''}`}>Pricing</li>
          </ul>
        </span>
        <div ref={domNode} className={`w-[64.8rem] max-lg:hidden h-[40rem] max-xl:left-[6rem] max-xl:w-[58rem] bg-white rounded-lg shadow-xl  transition-all duration-200 ease-in
         ${FlyoutMenus ? '' : 'hidden'}  fixed top-[4.5rem] left-[12.5rem] border-2 border-gray-200 flex flex-row justify-between `}>
          <span className='flex flex-col items-start w-1/4 gap-4 p-4 '>
            <div className='text-lg cursor-text'>COLLABORATION</div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-[2px] cursor-pointer' onHoverStart={() => setHovered1(true)} onHoverEnd={() => setHovered1(false)}>
              <div  >Channels</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl  ${hovered1 ? 'w-[3.8rem]':'w-0'}`}></div>
              <div className='font-extralight'>Origaize teams and work</div>
            </motion.div>
            <motion.div  className={` hover:text-[#1264a3] text-sm flex flex-col gap-[2px] cursor-pointer`}
            onHoverStart={() => setHovered2(true)} onHoverEnd={() => setHovered2(false)}>
              <div >Slack Connect</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered2 ? 'w-[5.9rem]':'w-0'}`}></div>
              <div className='font-extralight'>Work with external partners</div>
            </motion.div>
            <motion.div className='hover:text-[#1264a3] text-sm flex flex-col gap-1 cursor-pointer' 
            onHoverStart={() => setHovered3(true)} onHoverEnd={() => setHovered3(false)}>
              <div >Messaging</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered3 ? 'w-[4.4rem]':'w-0'}`}></div>
              <div className='font-extralight'>Chat with your team</div>
            </motion.div>
            <motion.div className='hover:text-[#1264a3] text-sm flex flex-col gap-1 cursor-pointer'
            onHoverStart={() => setHovered4(true)} onHoverEnd={() => setHovered4(false)}>
              <div >Huddles</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered4 ? 'w-[3.4rem]':'w-0'}`}></div>
              <div className='font-extralight '>Meet with audio and video</div>
            </motion.div>
            <motion.div className='hover:text-[#1264a3] text-sm flex flex-col gap-1 cursor-pointer'
            onHoverStart={() => setHovered5(true)} onHoverEnd={() => setHovered5(false)}>
              <div >Clips</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered5 ? 'w-[2rem]':'w-0'}`}></div>
              <div className='font-extralight'>Record and share updates</div>
            </motion.div>
          </span>
          <span className='flex flex-col items-start w-1/4 gap-4 pt-4 '>
            <div className='text-lg cursor-text'>PROJECT MANAGEMENT</div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
            onHoverStart={() => setHovered6(true)} onHoverEnd={() => setHovered6(false)}>
              <div >Templates</div>
              <div className={`absolute mt-4  border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered6 ? 'w-[4.2rem]':'w-0'}`}></div>
              <div className='font-extralight'>Start any task, fast</div>
            </motion.div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
            onHoverStart={() => setHovered7(true)} onHoverEnd={() => setHovered7(false)}>
              <div >Canvas</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered7 ? 'w-[3rem]':'w-0'}`}></div>
              <div className='font-extralight'>Create rich, flexible doce</div>
            </motion.div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
            onHoverStart={() => setHovered8(true)} onHoverEnd={() => setHovered8(false)}>
              <div >Lists</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered8 ? 'w-[2rem]':'w-0'}`}></div>
              <div className='font-extralight'>Organize, track and manage projects</div>
            </motion.div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
            onHoverStart={() => setHovered9(true)} onHoverEnd={() => setHovered9(false)}>
              <div >Search</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered9 ? 'w-[2.9rem]':'w-0'}`}></div>
              <div className='font-extralight'>Seek shared knowledge</div>
            </motion.div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
             onHoverStart={() => setHovered10(true)} onHoverEnd={() => setHovered10(false)}>
              <div >File Sharing</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered10 ? 'w-[4.8rem]':'w-0'}`}></div>
              <div className=' font-extralight'>Bring files to the flow of work</div>
            </motion.div>
            <div className='text-lg cursor-text'>INTEGRATIONS</div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
             onHoverStart={() => setHovered11(true)} onHoverEnd={() => setHovered11(false)}>
              <div >Workflow Bulider</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered11 ? 'w-[6.8rem]':'w-0'}`}></div>
              <div className=' font-extralight'>Automate everyday tasks</div>
            </motion.div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
             onHoverStart={() => setHovered12(true)} onHoverEnd={() => setHovered12(false)}>
              <div >Apps & Integrations</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered12 ? 'w-[8rem]':'w-0'}`}></div>
              <div className=' font-extralight'>Connect your tools with slack</div>
            </motion.div>
            <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
             onHoverStart={() => setHovered13(true)} onHoverEnd={() => setHovered13(false)}>
              <div >Slack and Salesforce</div>
              <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered13 ? 'w-[8.4rem]':'w-0'}`}></div>
              <div className='font-extralight'>Bring CRM insights into slack</div>
            </motion.div>
          </span>
          <span className='flex flex-col items-start w-1/4 gap-4 pt-4 '>
            <div className='text-lg cursor-text'>INTELLIGENCE</div>
              <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1'
              onHoverStart={() => setHovered18(true)} onHoverEnd={() => setHovered18(false)} >
                <div className='flex flex-row gap-1'>
               <PiShootingStarFill className='text-lg'/>
                  <div >Slack AI</div>
                  <div className={`absolute mt-4 border-t-[1px] ms-[1.4rem]  border-[#1264a3] rounded-xl 
               ${hovered18 ? 'w-[3.3rem]':'w-0'}`}></div>
               </div>
                <div className=' font-extralight'>Save time and work smarter with powerfully smiple AI</div>
              </motion.div>              
              <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
              onHoverStart={() => setHovered14(true)} onHoverEnd={() => setHovered14(false)}>
                <div >Agentforce</div>
                <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered14 ? 'w-[4.5rem]':'w-0'}`}></div>
                <div className=' font-extralight'>Empower your whole team with AI-powered agents in Slack</div>
              </motion.div>
              <div className='text-lg cursor-text'>ENTERPRISE PLATFORM</div>
              <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
               onHoverStart={() => setHovered15(true)} onHoverEnd={() => setHovered15(false)}>
                <div className='hover:underline'>Security</div>
                <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered15 ? 'w-[3.3rem]':'w-0'}`}></div>
                <div className=' font-extralight'>Protect date, ensure compliance</div>
              </motion.div>
              <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
              onHoverStart={() => setHovered16(true)} onHoverEnd={() => setHovered16(false)}>
                <div>Enterprice Key Managemnet</div>
                <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered16 ? 'w-[11.5rem]':'w-0'}`}></div>
                <div className=' font-extralight'>Monitor and revoke access</div>
              </motion.div>
              <motion.div className='text-sm hover:text-[#1264a3] flex flex-col gap-1 cursor-pointer'
              onHoverStart={() => setHovered17(true)} onHoverEnd={() => setHovered17(false)}>
                <div className='hover:underline'>Slack Atlas</div>
                <div className={`absolute mt-4 border-t-[1px]  border-[#1264a3] rounded-xl 
               ${hovered17 ? 'w-[4.5rem]':'w-0'}`}></div>
                <div className='font-extralight'>Discover rich profiles and org charts</div>
              </motion.div>
            </span>
          <div className='bg-[#f4ede4] flex flex-col items-start w-1/4 gap-4 p-4  '>
            <div className='text-lg cursor-text'>FEATURED</div>

            <div className='flex flex-col gap-12 cursor-pointer '>
              <motion.div className='flex flex-col gap-5' onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}>
              <img src={NavPicture} alt="this pictue from SLACK.com" className='w-auto h-34' />
              <div className='text-sm font-light'>Take a quick interactive tour of Slack.</div>
              <div  className='items-start gap-1 flex flex-col  text-[#1264a3]' >
                <div className='flex flex-row gap-1 '>Start the tour
                 <BsArrowRight className='mt-1 text-xl'/>
                </div>   
                <div className={`border-t-[2px] border-[#1264a3] rounded-xl transition-all duration-300 ease-in-out 
                ${hovered ? 'w-[7.5rem]':'w-0'}`}></div>
              </div>
              </motion.div>
              <div className='flex justify-center w-full h-[0.1rem] bg-gray-400'></div>
              <div className='flex flex-col gap-3 text-sm font-light '>
                <div className='hover:underline hover:text-[#1264a3]'>What is Slack?</div>
                <div className='hover:underline hover:text-[#1264a3]'>Slack vs. Email</div>
                <div className='hover:underline hover:text-[#1264a3]'>Accessibility</div>
              </div>
            </div>
          </div>
          <div className='absolute flex flex-row gap-2 mt-[37rem] ms-4 text-[#1264a3] items-center max-xl:text-xs'>
            <span className='hover:underline'>Watch demo</span>
            <span className='text-lg text-gray-300'>|</span>
            <span className='flex flex-row items-center gap-1'>
              <span className='hover:underline'>Download Slack</span>
              <BsCloudArrowDown className='text-xl'/>
            </span>
          </div>
        </div>

        <div ref={domNode1} className={`w-[58.5rem] max-lg:hidden h-[32rem] max-xl:left-[8rem] max-xl:w-[50rem] bg-white rounded-lg shadow-xl  transition-all duration-200 ease-in
         ${FlyoutMenus1 ? '' : 'hidden'}  fixed top-[4.5rem] left-[19rem] border-2 border-gray-200 flex flex-row justify-between`}>
          <div className='flex flex-col w-1/4 gap-5 p-4 text-sm'>
            <span className='text-lg cursor-text'>BY DEPARTMENT</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Engineering</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>IT</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Customer Service</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Sales</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Project Management</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Marketing</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Human Resour</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Security</span>
          </div>
          <div className='flex flex-col w-1/4 gap-5 pt-4 text-sm'>
            <span className='text-lg cursor-text'>BY INDUSTRY</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Manufacture, Auto & Energy</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Technology</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Media</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Small Business</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Financial Services</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Retail</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Eduation</span>
            <span className='font-light cursor-pointer hover:underline hover:text-[#1264a3]'>Health & Life Sciences</span>
          </div>
          <div className='flex flex-col justify-end w-1/4 pb-4 text-base text-right text-gray-500 pe-4'>
            <span className='hover:underline hover:text-[#1264a3]'>See all Solutions</span>
          </div>
          <div>
          </div>
          <div className='flex flex-col w-1/4 text-sm bg-[#f4ede4] p-4 gap-3'>
            <span className='text-lg cursor-pointer'>TEMPLATE GALLERY</span>
          
            <motion.div className='flex flex-col gap-5' onHoverStart={() => setHovered19(true)}
            onHoverEnd={() => setHovered19(false)}>
               <img src={NavPicture1} alt="this pictue from SLACK.com" className="w-auto h-34"></img>
              <div className='text-base font-light'>Start work faster with pre-made templates for every task.</div>
              <div  className='items-start gap-1 flex flex-col  text-[#1264a3]' >
                <div className='flex flex-row gap-1 text-base'>See all templates
                 <BsArrowRight className='mt-1 text-xl'/>
                </div>   
                <div className={`border-t-[2px] border-[#1264a3]  rounded-xl transition-all duration-300 ease-in-out 
                ${hovered19 ? 'w-[9.1rem]':'w-0'}`}></div>
              </div>
              </motion.div>
            <span className='flex justify-center w-full h-[0.1rem] bg-gray-400 mt-6 '></span>
            <div className='flex flex-col gap-4 pt-3'>
            <span className='hover:underline hover:text-[#1264a3]'>Task Management</span>
            <span className='hover:underline hover:text-[#1264a3]'>Scale</span>
            <span className='hover:underline hover:text-[#1264a3]'>Engagment</span>
            <span className='hover:underline hover:text-[#1264a3]'>Trust</span>
            </div>
          </div>
          <div className='absolute flex flex-row gap-2 mt-[29.5rem] ms-4 text-[#1264a3] items-center max-xl:text-xs'>
            <span className='text-sm hover:underline'>Watch demo</span>
            <span className='text-lg text-gray-300'>|</span>
            <span className='flex flex-row items-center gap-1'>
              <span className='text-sm hover:underline' >Download Slack</span>
              <BsCloudArrowDown className='text-xl'/>
            </span>
          </div>
        </div>
        <div ref={domNode2} className={`w-[54rem] max-lg:hidden h-[25rem] max-xl:left-[15rem] max-xl:w-[45rem]  bg-white rounded-lg shadow-xl  transition-all duration-200 ease-in
         ${FlyoutMenus2 ? '' : 'hidden'}  fixed top-[4.5rem] left-[19rem] border-2 border-gray-200 flex flex-row justify-between`}>
          <div className='flex flex-col w-1/4 gap-5 pt-4 pl-4 font-extralight '>
            <span className='hover:underline hover:text-[#1264a3]'>Resources Library</span>
            <span className='hover:underline hover:text-[#1264a3]'>Events</span>
            <span className='hover:underline hover:text-[#1264a3]'>Customer Stories</span>
            <span className='hover:underline hover:text-[#1264a3]'>Blog</span>
          </div>
          <div className='flex flex-col w-1/4 gap-5 pt-4 font-extralight'>
            <span className='hover:underline hover:text-[#1264a3]'>Whats New</span>
            <span className='hover:underline hover:text-[#1264a3]'>Developers</span>
            <span className='hover:underline hover:text-[#1264a3]'>Community</span>
            <span className='hover:underline hover:text-[#1264a3]'>Slack Marketplace</span>
          </div>
          <div className='flex flex-col w-1/4 gap-5 pt-4 font-extralight'>
            <span className='hover:underline hover:text-[#1264a3]'>Product Tour</span>
            <span className='hover:underline hover:text-[#1264a3]'>Partners</span>
            <span className='hover:underline hover:text-[#1264a3]'>Slack Certified</span>
          </div>
          <div className='flex flex-col bg-[#f4ede4] p-4 w-1/4'>
            <span className='cursor-text'>FEATURED</span>
          <motion.div className='flex flex-col gap-5' onHoverStart={() => setHovered20(true)}
            onHoverEnd={() => setHovered20(false)}>
               <img src={NavPicture2} alt="this pictue from SLACK.com" className="w-auto h-34"></img>
              <div className='text-base font-light'>Tips and tricks on getting started with Slack</div>
              <div  className='items-start gap-1 flex flex-col  text-[#1264a3]' >
                <div className='flex flex-row gap-1 text-base'>Get started
                 <BsArrowRight className='mt-1 text-xl'/>
                </div>   
                <div className={`border-t-[2px] border-[#1264a3] rounded-xl transition-all duration-300 ease-in-out 
                ${hovered20 ? 'w-[6.6rem]':'w-0'}`}></div>
              </div>
              </motion.div>
              <span className='flex justify-center w-full h-[0.1rem] bg-gray-400 mt-6 '></span>
              <div className='flex flex-col gap-3 pt-6 font-light'>
              <span className='hover:underline hover:text-[#1264a3] max-xl:text-sm'>Help Center</span>
              <span className='hover:underline hover:text-[#1264a3] max-xl:text-sm'>Customer Support</span>
              </div>
              </div>
              <div className='absolute flex flex-row gap-2 mt-[22.5rem] ms-4 text-[#1264a3] items-center max-xl:text-xs'>
            <span className='text-sm hover:underline'>Watch demo</span>
            <span className='text-lg text-gray-300'>|</span>
            <span className='flex flex-row items-center gap-1'>
              <span className='text-sm hover:underline' >Download Slack</span>
              <BsCloudArrowDown className='text-xl'/>
            </span>
          </div>
        </div>
        <span className='flex items-center justify-between gap-3 cursor-pointer '>
          <span onClick={handelSearch} className={`text-2xl active:border-dotted max-sm:hidden
           active:border-fuchsia-900 border pb-1 pt-1 border-white ${seacrhOpen ? 'hidden' : ''}`}>
            {seacrhOpen ? <IoMdClose /> : <IoIosSearch />}
          </span>
          <ul className={`flex items-center justify-between gap-5 ${seacrhOpen ? 'hidden' : ''} `}>
            <li className='hidden text-sm cursor-pointer lg:flex hover:underline'>Sign in</li>
            <li className=' hidden xl:flex cursor-pointer text-sm rounded-md w-auto p-3 h-12 items-center text-fuchsia-900 border-[1px] border-fuchsia-800
             hover:border-fuchsia-950 hover:border-[2px] transition-all duration-100 ease-in '>REQUEST A DEMO</li>
            <li className=' text-center bg-fuchsia-900 rounded-md w-auto h-12 items-center p-3 text-white hover:bg-fuchsia-950
            cursor-pointer text-sm transtion-all duration-100 ease-in max-[400px]:hidden max-sm:text-xs max-sm:w-26 max-sm:h-10 '>GET STARTED</li>
          </ul>
          <div onClick={handelNav} className={`text-2xl cursor-pointer lg:hidden ${seacrhOpen ? 'hidden' : ''}`}>
            {open ? <MdMenu /> : <MdMenu />}
          </div>
        </span>
        <div className={`fixed top-0 left-0 flex flex-col text-left bg-white w-[100%] h-[100%]  p-10 ${open ? '' : 'left-[2000px]'} 
        lg:hidden gap-4 transition-all duration-500
         max-md:p-4 `}>
          <span className='flex justify-between '>
            <img src={Logo} alt="This is Logo from slack.com" className='w-24 h-auto ' />
            <div onClick={handelNav} className='text-xl cursor-pointer '>
              {open ? <IoMdClose /> : ''}
            </div>
          </span>
          <span onClick={handelFlyoutMenus3}  className='flex flex-row justify-between'>
          <li  className='text-lg list-none cursor-pointer '>Features</li>
          {FlyoutMenus3 ? < FaAngleLeft  className={`text-sm  ${seacrhOpen ? 'hidden' : ''}`} /> :
           <FaAngleRight className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} />}
            </span>
          <div ref={scrollRef} className={`fixed top-0 left-0  flex flex-col overflow-scroll text-left bg-white w-[100%] 
          h-[100%] ${FlyoutMenus3 ? '' : 'left-[2000px]'} lg:hidden gap-4 transition-all duration-500 `}>
          <div className={`flex flex-row justify-between w-[100%] max-lg:p-3 max-md:p-4 h-[5rem] 
               transition-shadow duration-300 top-0 items-center  fixed ${scrolled ? 'shadow-lg bg-white' : ''}`}>
            <span onClick={handelFlyoutMenus3} className="flex flex-row justify-between gap-1 text-lg text-[#1264a3]">
            <FaArrowLeftLong className="mt-1" />
              Back
            </span>
             {/* you should complete this  */}
              {/* <IoMdClose  className='mx-4 text-lg'/>  */}
          </div>
          <div className='p-5 '>
            {/* you shoudl add hover for all text here like desgin */}
            <div className='flex max-lg:flex-row max-md:flex-col'>
            <div className='w-[100%] mt-16 max-md:p-3 '>
            <span className='ml-1 text-xl font-bold '>Features</span>
            <div className='grid gap-10 mt-5 ml-4 max-sm:ml-1 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1'>
            <div className='flex flex-col gap-4 '>
            <span className='text-lg font-bold '>COLLABORATION</span>
            <span className='hover:text-[#1264a3]'>
              <p className='text-lg '>Channels</p>
              <p className='text-lg font-extralight'>Organize teams and work</p>
              </span>
              <span className='hover:text-[#1264a3]'>
                <p className='text-lg '>Slack Connect</p>
                <p className='text-lg font-extralight'>Work with external partners</p>
              </span>
              <span className='hover:text-[#1264a3]'>
                <p className='text-lg'>Messaging</p>
                <p className='text-lg font-extralight'>Chat with your team</p>
              </span>
              <span className='hover:text-[#1264a3]'>
                <p className='text-lg'>Huddles</p>
                <p className='text-lg font-extralight'>Meet with audio and video</p>
              </span>
              <span className='hover:text-[#1264a3]'>
                <p className='text-lg'>Clips</p>
                <p className='text-lg font-extralight'>Record adn share update</p>
              </span>
              </div>
              <div className='flex flex-col gap-4 '>
                <span className='text-lg font-bold '>PROJECT MANAGEMENT</span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Template</p>
                  <p className='font-extralight'>Start any task, fast</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]' >
                  <p>Canvas</p>
                  <p className='font-extralight'>Create rich, flexible docs</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Lists</p>
                  <p className='font-extralight'>Organiz, track and manage projects</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>File Sharing</p>
                  <p className='font-extralight'>Bring files to the flow of work</p>
                </span>
              </div>
              <div className='flex flex-col gap-4 '>
                <span className='text-lg font-bold'>INTEGRATIONS</span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Workflow Builder</p>
                  <p className='font-extralight'>Automate everyday tasks</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Apps & Integrations</p>
                  <p className='font-extralight'>Connect your tools with Slack</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Slack And Salesforce</p>
                  <p className='font-extralight'>Bring CRM insights into Slack</p>
                </span>
              </div>
              <div className='flex flex-col gap-4 '>
                <span className='text-lg font-bold'>INTELLIGENCE</span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <span className='flex flex-row '>
                  <BsStars/>
                  <p>AI in Slack</p>
                  </span>
                  <p className='font-extralight '>Save time and work smarter with powerfully simple AI</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p >Agentforce</p>
                  <p className='font-extralight '>Empower your whole team with AI-powered agents in Slack</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Enterprise Search</p>
                  <p className='font-extralight '>Find anything, all from a single search bar</p>
                </span>
              </div>
              <div className='flex flex-col gap-4 '>
                <span className='text-lg font-bold'>ENTERPRISE PLATFORM</span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Security</p>
                  <p className='font-extralight '>Protect data, ensure compliance</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Enterprise Key Management</p>
                  <p className='font-extralight'>Enterprise Key Management</p>
                </span>
                <span className='text-lg hover:text-[#1264a3]'>
                  <p>Slack Atlas</p>
                  <p className='font-extralight'>Discover rich profiles and org charts</p>
                </span>
              </div>
              </div>
              </div>
              <div className='w-[20rem] max-sm:w-[100%] max-sm:h-[30%]  bg-[#f4ede4]  rounded-md mt-16 p-5  flex flex-col gap-7 max-lg:h-[61.5rem] max-md:h-[36rem] max-sm:ml-0 max-md:ml-5'>
                <span className='flex flex-col gap-4 '>
                <p className='text-lg font-bold '>FEATURED</p>
                <img src={SlidePicFeatuer} alt="" />
                </span>
                <span className='text-lg'>
                  <p className='w-[15rem]'>
                Search everything. Find anything. Say hello to enterprise search.
                </p>
                </span>
                <span className='flex flex-col gap-16'>
                <span className='text-[#1264a3] flex flex-row gap-1 '>
                  <p className='font-bold'>Learn more</p>
                  <BsArrowRight className='mt-1 text-xl'/>
                </span>
                <span className='w-full  justify-center h-[0.1rem] flex bg-gray-300'></span>
                </span>
                <span className='flex flex-col gap-1 text-lg'>
                  <p className='hover:text-[#1264a3]'>What is Slack?</p>
                  <p className='hover:text-[#1264a3]'>Slack vs. Email</p>
                  <p className='hover:text-[#1264a3]'>Accessibility</p>
                </span>
              </div>
              </div>
            </div>
            <span className='grid gap-3 p-4 mt-5 sm:grid-cols-2 max-sm:w-svw max-md:w-svw'>
            <li className=' cursor-pointer text-sm list-none  rounded-md  text-center  
            p-3 items-center text-fuchsia-900 border-[2px] border-fuchsia-800
             hover:border-fuchsia-950 hover:border-[3px] transition-all duration-100 ease-in
             '>TALK To SALES</li>
            <li className='items-center p-3 text-sm text-center text-white list-none duration-100 ease-in rounded-md cursor-pointer transtion-all bg-fuchsia-900 hover:bg-fuchsia-950 '>DOWNLOAD SLACK</li>
          </span>
            </div>
          <span onClick={handelFlyoutMenus4} className='flex flex-row justify-between'>
          <li className='text-lg list-none cursor-pointer'>Solutions</li>
          {FlyoutMenus4 ? < FaAngleLeft  className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} /> :
           <FaAngleRight className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} />}
          </span>
          <div ref={scrollRef1} className={`bg-white ${FlyoutMenus4 ? '':'left-[2000px]'} text-left w-full h-full fixed overflow-scroll  top-0 left-0
          transtion-all duration-500`}>
            <div className={`flex flex-row justify-between w-[100%] max-lg:p-3 max-md:p-4 h-[5rem] 
               transition-shadow duration-100 top-0 items-center  fixed ${scrolled1 ? 'shadow-lg bg-white' : ''}`}>
                <span onClick={handelFlyoutMenus4} className="flex flex-row gap-1 ml-6 text-lg text-[#1264a3]">
                <FaArrowLeftLong className="mt-1" />
                  Back
                </span>
                {/* you should fix that  */}
                {/* <IoMdClose  className='mx-4 text-lg'/>  */}
               </div>
              <div>
                <div className='grid gap-8 p-10 mt-8 max-lg:grid-cols-3 max-md:grid-cols-1'>
                <span className='flex flex-col gap-8 text-lg font-light'>
                  <span className='font-bold'>BY DEPARTMENT</span>
                  <span className='hover:text-[#1264a3]'>Engineering</span>
                  <span className='hover:text-[#1264a3]'>Customer Service</span>
                  <span className='hover:text-[#1264a3]'>Sales</span>
                  <span className='hover:text-[#1264a3]'>Project Management</span>
                  <span className='hover:text-[#1264a3]'>Marketing</span>
                  <span className='hover:text-[#1264a3]'>Human Resources</span>
                  <span className='hover:text-[#1264a3]'>Security</span>
                </span>
                <span className='flex flex-col gap-8 text-lg font-light'>
                  <span className='font-bold'>BY INDUSTRY</span>
                  <span className='hover:text-[#1264a3]'>Manufacturing, Auto & Energy</span>
                  <span className='hover:text-[#1264a3]'>Technology</span>
                  <span className='hover:text-[#1264a3]'>Media</span>
                  <span className='hover:text-[#1264a3]'>Small Business</span>
                  <span className='hover:text-[#1264a3]'>Financial Services</span>
                  <span className='hover:text-[#1264a3]'>Retail</span>
                  <span className='hover:text-[#1264a3]'>Education</span>
                  <span className='hover:text-[#1264a3]'>Health & Life Sciences</span>
                </span>
                <span className='text-lg max-md:not-sr-only max-sm:not-sr-only max-lg:sr-only hover:text-[#1264a3]'>See all solutions</span>   

                 <div className='flex flex-col text-lg bg-[#f4ece4] rounded-md w-[100%] h-[100%] p-5 gap-4 max-md:w-[50%] max-sm:w-[100%]'>
                <span className='flex flex-col gap-2'>
                  <p className='text-sm font-bold'>TEMPLATE GALLERY</p>
                  <img src={slidepictureSolutions} alt="" />
                </span>
                <span className='font-light'>Start work faster with pre-made templates for every task.</span>
                <span className='text-[#1264a3] flex flex-row gap-1 '>
                  <p className='font-bold'>See all templates</p>
                  <BsArrowRight className='mt-1 text-xl'/>
                </span>
                <span className='w-full  justify-center h-[0.1rem] flex bg-gray-300 mt-10'></span>
                <span className='flex flex-col gap-1 font-light'>
                  <p className='hover:text-[#1264a3]'>Task Management</p>
                  <p className='hover:text-[#1264a3]'>Scale</p>
                  <p className='hover:text-[#1264a3]'>Engagement</p>
                  <p className='hover:text-[#1264a3]'>Trust</p>
                </span>
                </div>  
                <span className='text-lg max-md:hidden max-sm:hidden hover:text-[#1264a3]'>See all solutions</span>           
                </div>
                 <span className='grid gap-3 p-4 mt-5 sm:grid-cols-2 max-sm:w-svw max-md:w-svw'>
            <li className=' cursor-pointer text-sm list-none  rounded-md  text-center  
            p-3 items-center text-fuchsia-900 border-[2px] border-fuchsia-800
             hover:border-fuchsia-950 hover:border-[3px] transition-all duration-100 ease-in
             '>TALK To SALES</li>
            <li className='items-center p-3 text-sm text-center text-white list-none duration-100 ease-in rounded-md cursor-pointer transtion-all bg-fuchsia-900 hover:bg-fuchsia-950 '>DOWNLOAD SLACK</li>
          </span>
              </div>
            </div>
          <li className='text-lg list-none cursor-pointer hover:underline'>Enterprise</li>
          <span  onClick={handelFlyoutMenus5} className='flex flex-row justify-between ' >
          <li className='text-lg list-none cursor-pointer'>Resources</li>
          {FlyoutMenus5 ? < FaAngleLeft  className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} /> :
           <FaAngleRight className={`text-sm ${seacrhOpen ? 'hidden' : ''}`} />}
          </span>
         <div ref={scrollRef2} className={`fixed top-0 left-0  flex flex-col overflow-scroll text-left bg-white w-[100%] 
          h-[100%] ${FlyoutMenus5 ? '' : 'left-[2000px]'} lg:hidden gap-4 transition-all duration-500`}>
          <div className={`flex flex-row justify-between w-[100%] max-lg:p-3 max-md:p-4 h-[5rem] 
               transition-all duration-100 top-0 items-center  fixed ${scrolled2 ? 'shadow-lg bg-white' : ''}`}>
            <span onClick={handelFlyoutMenus5} className="flex flex-row ml-6 justify-between gap-1 text-lg text-[#1264a3]">
            <FaArrowLeftLong className="mt-1" />
              Back
            </span>
             {/* you should complete this  */}
              {/* <IoMdClose  className='mx-4 text-lg'/>  */}
          </div>
               <div className='flex justify-center p-4 mt-16 text-lg max-sm:gap-5 max-lg:flex-row max-sm:flex-col'>
                <div >
                <span className='font-bold'>Resources</span>
                  <span className='grid gap-4 p-2 font-light max-md:grid-cols-2 max-lg:grid-cols-3' >
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-1 max-lg:col-start-1 hover:text-[#1264a3]'>Resources Library</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-2 max-lg:col-start-2 hover:text-[#1264a3]'>Whats New</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-1 max-lg:col-start-3 hover:text-[#1264a3]'>Product Tour</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-2 max-lg:col-start-1 hover:text-[#1264a3]'>Events</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-1 max-lg:col-start-2 hover:text-[#1264a3]'>Developers</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-2 max-lg:col-start-3 hover:text-[#1264a3]'>Partners</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-1 max-lg:col-start-1 hover:text-[#1264a3]'>Customer Stories</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-2 max-lg:col-start-2 hover:text-[#1264a3]'>Community</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-1 max-lg:col-start-3 hover:text-[#1264a3]'>Slack Certified</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-2 max-lg:col-start-1 hover:text-[#1264a3]'>Blog</span>
                    <span className='col-span-1 max-sm:col-start-1 max-md:col-start-1 max-lg:col-start-2 hover:text-[#1264a3]'>Slack Marketplace</span>
                  </span>
                  </div>
                   <span className='flex flex-col text-lg  bg-[#f4ece4] rounded-md max-sm:w-[100%] max-lg:w-[30%] max-md:w-[40%] justify-center h-[100%] p-5 gap-4 '>
                    <span className='flex flex-col gap-2'>
                      <p>FEATURED</p>
                      <img src={NavPicture2} alt="" />
                    </span>
                    <span className='font-light'>Tips and tricks on getting started with Slack</span>
                   <span className='text-[#1264a3] flex flex-row gap-1 '>
                  <p className='font-bold'>Get started</p>
                  <BsArrowRight className='mt-1 text-xl'/>
                </span>
                 <span className='w-full  justify-center h-[0.1rem] flex bg-gray-300 mt-10'></span>
                <span className='font-light '>
                  <p className='hover:text-[#1264a3]'>Help Center</p>
                  <p className='hover:text-[#1264a3]'>Customer Support</p>
                </span>
                  </span>
               </div>
                   <span className='grid gap-3 p-4 mt-5 sm:grid-cols-2 max-sm:w-svw max-md:w-svw'>
            <li className=' cursor-pointer text-sm list-none  rounded-md  text-center  
            p-3 items-center text-fuchsia-900 border-[2px] border-fuchsia-800
             hover:border-fuchsia-950 hover:border-[3px] transition-all duration-100 ease-in
             '>TALK To SALES</li>
            <li className='items-center p-3 text-sm text-center text-white list-none duration-100 ease-in rounded-md cursor-pointer transtion-all bg-fuchsia-900 hover:bg-fuchsia-950 '>DOWNLOAD SLACK</li>
          </span>
          </div>
          <li className='text-lg list-none cursor-pointer hover:underline'>Pricing</li>
          <li className='text-lg list-none cursor-pointer text-[#1264a3] hover:underline '><a href="/">Watch demo</a></li>
          <li className='text-lg list-none cursor-pointer'>Sign in</li>


          <span className='gap-3  grid sm:grid-cols-2  
              max-sm:mt-[10rem] max-md:mt-[15rem] max-lg:mt-[14rem]
              max-sm:w-svw max-md:w-svw max-sm:pr-8 max-md:pr-8 
            '>

            <li className=' cursor-pointer text-sm list-none  rounded-md  text-center  
            p-3 items-center text-fuchsia-900 border-[2px] border-fuchsia-800
             hover:border-fuchsia-950 hover:border-[3px] transition-all duration-100 ease-in
             '>TALK To SALES</li>
            <li className='items-center p-3 text-sm text-center text-white list-none duration-100 ease-in rounded-md cursor-pointer transtion-all bg-fuchsia-900 hover:bg-fuchsia-950 '>DOWNLOAD SLACK</li>
          </span>
        </div>
        <div className={` w-[100%] flex justify-center flex-row pr-12  overflow-hidden transition-all duration-1000
        ${seacrhOpen ? '' : 'hidden'}`}>
          <div className='flex items-center realtive 
          justify-between  gap-10  w-full
          h-18 top-2 border-full shadow-2xl  '>
            <img src={Logo} alt="This is Logo from slack.com" className='w-auto h-10 cursor-pointer max-sm:hidden' />
            <span className='pt-1 pb-1 text-2xl border border-white cursor-pointer active:border-dotted active:border-fuchsia-900 ' >
              <IoIosSearch />
            </span>
            <input type="search" placeholder='Search slack.com' className='bg-white w-svw h-12
          cursor-pointer outline-none focus:border-gray-400 focus:border-[0.5px] focus:shadow-lg 
          focus:rounded focus:p-4 focus:cursor-text transition-all ease-in duration-150 md:hidden 
          '/>
            <input type="search" placeholder='Find anything (ie. channels, emoji, or reset password)' className=' bg-white w-svw h-12  
             cursor-pointer outline-none  focus:border-gray-400 focus:border-[0.5px] focus:shadow-lg focus:rounded focus:p-4
          focus:cursor-text   transition-all ease-in duration-150 active:shadow-lg max-md:hidden'/>
            <span onClick={handelSearch} className='text-2xl cursor-pointer '>
              {seacrhOpen ? <IoMdClose />: ''}
            </span>
            <span>
              <li className='list-none bg-fuchsia-900 rounded h-[2.7rem] p-3 w-28 text-xs  text-center text-white
             transition-all duration-100 hover:bg-fuchsia-950 cursor-pointer lg:hidden max-sm:hidden'>GET STARTED</li>
              <li className='list-none border border-fuchsia-900 rounded h-[2.7rem] p-3 w-28  text-sm  text-center text-fuchsia-900
          transition-all duration-100 hover:border-fuchsia-950 hover:border-2 cursor-pointer
          max-sm:hidden max-md:hidden max-lg:hidden'>SEARCH</li>
            </span>
          </div>
        </div>
      </div>
      </div>
    
  )
}
