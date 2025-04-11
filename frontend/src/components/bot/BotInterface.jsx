import React, { useContext } from 'react'
import '../../styles/BotInterface.css'
import SMV_icon from '../../assets/images/SMV_icon.png';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { AiOutlineWechatWork } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiMacbookLine } from "react-icons/ri";
import { AppContext } from '../../context/AppContext';

function BotInterface() {
      const { showWrapContent, setShowWrapContent } = useContext(AppContext)
    function handleClick (val){
        setShowWrapContent(val)
    }
  return (
    <div className='boti_main'>
        <div className='boti_wrapper1'>
          <div className='boti_wrapper11'>
             <img src={SMV_icon} alt="" />
          </div>
          <div className='boti_wrapper12'>
            how can i help you today?
          </div>
        </div>
        <div className='boti_wrapper2'  onClick={()=>{handleClick('livechat')}}>
            <div className='boti_wrapper21'>
             {/* <img src={SMV_icon} alt="" /> */
             }
             <span>
             <IoChatbubbleEllipsesOutline/>

             </span>
             <h6>Let me know if you have any questions!</h6>
            </div>
            <button>
                Chat with us
            </button>
        </div>
        <div className='boti_wrapper3'  onClick={()=>{handleClick('language')}}>
            <span>
                <IoLanguageOutline/>
            </span>
            <span className='name'>
                Change Language
            </span>
            <div>
               <span>
                <FaArrowRight/>
               </span>
            </div>

    </div>
    <div className='boti_wrapper3' onClick={()=>{handleClick('bookappointment')}}>
            <span>
                <RiMacbookLine/>
            </span>
            <span className='name'>
                Book Appointment
            </span>
            <div>
               <span>
                <FaArrowRight/>
               </span>
            </div>

    </div>
    <div className='boti_wrapper4'>
        <div  className='boti_wrapper41'>
            <span className='home'>
                 <GoHomeFill/>
            </span>
            <span className='hometext'> 
                     Home
            </span>

        </div>
        <div  className='boti_wrapper41'>
            <span className='contact'>
                 <AiOutlineWechatWork/>
            </span>
            <span className='contacttext'> 
                     Contact
            </span>

        </div>
    </div>

    </div>
  )
}

export default BotInterface