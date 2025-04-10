import React, { useContext, useState } from 'react';
import '../../styles/BotWrapper.css';
import { FiMinus } from "react-icons/fi";
import { AppContext } from '../../context/AppContext';
import ChatBot from './ChatBot';
import { RiRadioButtonLine } from "react-icons/ri";
import smviconwhite from '../../assets/images/smviconwhite.png'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import BotInterface from './BotInterface';
import { FaArrowLeft } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { VscMute, VscUnmute } from "react-icons/vsc";
import chatsound from "/sounds/chatsound.mp3";
import ChatAppointment from './ChatAppointment';

function BotWrapper() {
  const [openWrap, setOpenWrap] = useState(null);
  const [openLang, setOpenLang] = useState(false);
  const [showOptions, setShowOptions] = useState(false)
  const [makeSound, setMakeSound] = useState(true)
  const { showWrapContent, setShowWrapContent } = useContext(AppContext)
  const audio = new Audio(chatsound);
  const handleplaysound = () => {
    if (makeSound) {
      audio.play();
      console.log('playingsound')
    } else {
      return
    }
  };
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

              <BotInterface />

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
                    <span >
                      <FaArrowLeft onClick={() => { setShowWrapContent('interface') }} />
                    </span>
                    <span className='chatoptions'>
                      <SlOptions onClick={() => { setShowOptions(!showOptions) }} />
                      {showOptions && (
                        <div className='chatoptiondetails'>
                          <div className={`chatoptiondetails1 ${makeSound}`} onClick={() => { setMakeSound(!makeSound) }}>
                            <div>
                              {makeSound ? (<VscUnmute />) : (<VscMute />)}
                            </div>
                            <div>
                              Sounds
                            </div>
                            <div className={`toggle ${makeSound}`}>

                            </div>
                          </div>

                        </div>
                      )}
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
                  <ChatBot handleplaysound={handleplaysound} />
                </div>
              </div>
            </div>
          )}




{showWrapContent == 'bookappointment' && (

<div className='bw_big'>
  <div className='bw_big_close' onClick={handleClose}>
    <FiMinus />
  </div>
  <div className='cba_container'>
  <ChatAppointment/>
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
            <IoChatbubbleEllipsesOutline />
          </span>
        </div>
      )}



    </div>
  )
}

export default BotWrapper