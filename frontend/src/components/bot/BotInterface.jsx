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
import {toast} from 'react-toastify'

function BotInterface() {
    const { showWrapContent, setShowWrapContent } = useContext(AppContext)
    function handleClick(val) {
        setShowWrapContent(val)
    }
    function handleCheck() {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const hours = now.getHours();
        const minutes = now.getMinutes();

        // Check if not Sunday and time between 9:30 AM and 5:00 PM
        if (
            day !== 0 && // not Sunday
            (
                (hours > 9 || (hours === 9 && minutes >= 30)) && // after 9:30 AM
                (hours < 17) // before 5:00 PM
            )
        ) {
            handleClick('connecttoagent')
        } else {
            toast.error('Live Chat Available between Mon-sat(9.30 AM - 5 PM)')
        }
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
            <div className='boti_wrapper2' onClick={handleCheck}>
                <div className='boti_wrapper21'>
                    {/* <img src={SMV_icon} alt="" /> */
                    }
                    <span>
                        <IoChatbubbleEllipsesOutline />

                    </span>
                    <h6>Let me know if you have any questions!</h6>
                </div>
                <button>
                    Live Chat
                </button>
            </div>
            {/* <div className='boti_wrapper3' onClick={() => { handleClick('language') }}>
                <span>
                    <IoLanguageOutline />
                </span>
                <span className='name'>
                    Change Language
                </span>
                <div>
                    <span>
                        <FaArrowRight />
                    </span>
                </div>

            </div> */}
            <div className='boti_wrapper3' onClick={() => { handleClick('bookappointment') }}>
                <span>
                    <RiMacbookLine />
                </span>
                <span className='name'>
                    Book Appointment
                </span>
                <div>
                    <span>
                        <FaArrowRight />
                    </span>
                </div>

            </div>
            <div className='boti_wrapper4'>
                <div className='boti_wrapper41'>
                    <span className='home'>
                        <GoHomeFill />
                    </span>
                    <span className='hometext'>
                        Home
                    </span>

                </div>
                <div className='boti_wrapper41' onClick={() => { handleClick('livechathuman') }}>
                    <span className='contact'>
                        <AiOutlineWechatWork />
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