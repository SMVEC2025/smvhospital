import React, { useContext, useState } from 'react';
import '../../styles/BotWrapper.css';
import logotopleft from '../../assets/images/logotopleft.png';
import logotopright from '../../assets/images/logotopright.png';
import logobottomleft from '../../assets/images/logobottomleft.png';
import logobottomright from '../../assets/images/logobottomright.png';
import { FiMinus } from "react-icons/fi";
import { AppContext } from '../../context/AppContext';
import LanguageSwitcher from './LanguageSwitcher';
import ChatBot from './ChatBot';
import { HiMiniLanguage } from "react-icons/hi2";
import { RiRadioButtonLine } from "react-icons/ri";
import smviconwhite from '../../assets/images/smviconwhite.png'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import BotInterface from './BotInterface';
import { FaArrowLeft } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";

function BotWrapper() {
  const [openWrap, setOpenWrap] = useState(null);
  const [openLang, setOpenLang] = useState(false)
  const { showWrapContent, setShowWrapContent } = useContext(AppContext)
  function handleOpen() {
    setOpenWrap(true)
    setTimeout(() => {
      setShowWrapContent('interface')
    }, 200);
  }
  function handleClose() {

    setShowWrapContent('null')
    setTimeout(() => {
      setOpenWrap(false)

    }, 0);
   
  } 

  return (
    <div className={`bw_main ${openWrap}`}>
      {openWrap ? (
        <div className='bw_big_container'>
        {showWrapContent == 'interface' && (
          <div className='bw_big'>
          <div className='bw_big_close' onClick={handleClose}>
            <FiMinus />
          </div>
          {/* <div className={`bw_big_translator ${openLang}`} >
            <span onClick={() => setOpenLang(!openLang)}>Language Transalator <span><HiMiniLanguage /></span></span>
            <LanguageSwitcher />

          </div> */}
         
          <BotInterface/>

        </div>
        )}

{showWrapContent == 'livechat' && (
  
<div className='bw_big'>
          <div className='bw_big_close' onClick={handleClose}>
            <FiMinus />
          </div>
          {/* <div className={`bw_big_translator ${openLang}`} >
            <span onClick={() => setOpenLang(!openLang)}>Language Transalator <span><HiMiniLanguage /></span></span>
            <LanguageSwitcher />

          </div> */}
         
  <div className={`bw_big_chatbot ${openLang}`}>
            <div className='bw_big_chatbot1'>
              <div className='bw_big_chatbot11'>
                <span>
                  <FaArrowLeft/>
                </span>
                <span>
                  <SlOptions/>
                </span>
                
              </div>
              <div className='bw_big_chatbot12'>
                <h2>SMV hospital</h2>
                <span className='bw_big_chatbot12_2'>
                  <span><RiRadioButtonLine /></span>
                  <p>Online</p>
                </span>
              </div>

            </div>
            <div className={`chatbotcontainer`}>
              <ChatBot  />
            </div>
          </div>
        </div>
)}

       
        </div>
      ) : (
        <div className='bw_small' onClick={handleOpen}>
          {/* <div className='bw_small_div1'>
            <img src={logotopleft} alt="" />
          </div>
          <div className='bw_small_div2'>
            <img src={logotopright} alt="" />
          </div>
          <div className='bw_small_div3'>
            <img src={logobottomleft} alt="" />
          </div>
          <div className='bw_small_div4'>
            <img src={logobottomright} alt="" />
          </div> */}
          <span>
            <IoChatbubbleEllipsesOutline/>
          </span>
        </div>
      )}
      


    </div>
  )
}

export default BotWrapper