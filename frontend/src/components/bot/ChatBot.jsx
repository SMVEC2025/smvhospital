import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios for API requests
import '../../styles/ChatBot.css';
import { toast } from 'react-toastify';

const Chatbot = ({handleplaysound}) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [currentStep, setCurrentStep] = useState('mainMenu');
    const messagesEndRef = useRef(null);
    const [botTyping, setBotTyping] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            handleplaysound() 
        }, 500);
        
    }, [messages])
    
    useEffect(() => {
        showMainMenu();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const showMainMenu = () => {
        setBotTyping(true);
        setTimeout(() => {
            setMessages([
                {
                    text: "Hello! How can I assist you today? Please choose an option:",
                    user: false,
                    options: [
                        { text: 'Make a call', value: 'call' },
                        { text: 'Contact details', value: 'contact details' },
                        { text: 'Emergency assistance', value: 'emergency assistance' },
                    ],
                }
            ]);
            setCurrentStep('mainMenu');
            setBotTyping(false);
        }, 500);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setError(null);
    };

    const handleSend = () => {
        const trimmedInput = input.trim();
        if (trimmedInput === '') {
            setError("Please enter a message.");
            return;
        }

        setMessages([...messages, { text: trimmedInput, user: true }]);
        handleBotResponse(trimmedInput);
        setInput('');
    };

    const handleOptionClick = (optionValue) => {
        setMessages([...messages, { text: optionValue, user: true }]);
        handleBotResponse(optionValue);
    };
    const handleCall = () => {
        window.location.href = `tel:+916382688488`;
      };
      const hospitalInfo = [
        
        "🕐  Timings\nEmergency Services: 24/7\nDiagnostic Lab & Pharmacy: Available 24/7\n",
      
        "📍  Address\nSri Manakula Vinayagar Hospital,\nKalitheerthalkuppam, Puducherry - 605107\n",
      
        "📞  Contact\nPhone: +91 98765 43210\nEmail: info@smvhospital.com"
      ];
      const emergencyInfo = [
        "🚨  Emergency Assistance\nIf you are facing a medical emergency, please act immediately.\n",
      
        "📞  Call 24/7 Emergency Helpline\n+91 98765 43211\nOur emergency team will respond right away.\n",
      
        "🚑  Emergency Location\nSMV Super Specialty Wing\nKalitheerthalkuppam, Puducherry - 605107\n(Use main gate → immediate left)\n",
      
        "💉  24/7 Emergency Services\n- Trauma & Accident Care\n- Cardiac Emergency\n- Stroke Response\n- ICU & Ventilator Support\n- Ambulance Services\n",
      
        "⏱️  Fast Response\nOur ambulance and trauma team are always ready to act within minutes."
      ];
    const handleBotResponse = (input) => {
        setBotTyping(true);
        setError(null);

        setTimeout(() => {
            try {
                const lowerInput = input.toLowerCase();
                let botMessage = { text: '', user: false }; // Default bot message
    
                if (lowerInput === 'main menu') {
                    showMainMenu();
                    setBotTyping(false);
                    return;
                }
            console.log(input.includes('call'))
            console.log("currentStep",currentStep)
                switch (currentStep) {
                    case 'mainMenu':
                        if (input.includes('call') || input.includes('phone') || input.includes('talk') || (input.includes('mobile') && input.includes('number'))) {
                            
                            botMessage = {
                                text: `Thank you for Contacting us, I'll Connect with us`,
                                user: false,
                                options: [{ text: 'Main Menu', value: 'main menu' }],

                            };
                            handleCall()

                            break;
                         } else if (input.includes('hi') || input.includes('hello') || input.includes('hey') || input.includes('helo')) {
                            botMessage = { text: `${input}, Im doing great, How can i assist you!`, user: false,
                            options: [
                                { text: 'Make a call', value: 'call' },
                                { text: 'Contact details', value: 'contact details' },
                                { text: 'Emergency assistance', value: 'emergency assistance' },
                            ],
                         };
                    }  else if (input.includes('bye') || input.includes('tata') || (input.includes('take') && input.includes('care'))) {
                        botMessage = { text: `Bye, Im here to assist you always!`, user: false,
                        
                     };
                } else if (input.includes('info') || input.includes('information') || input.includes('contact') || (input.includes('contact') && input.includes('detail'))) {
                                botMessage = { text: hospitalInfo, user: false,
                                options: [{ text: 'Main Menu', value: 'main menu' }],


                             };
                            } else if (input.includes('emergency') || input.includes('ambulance') || input.includes('urgent') || (input.includes('emergency') && input.includes('assistance')) || input.includes('accident')  || input.includes('trauma')) {
                                botMessage = {
                                text: emergencyInfo,
                                user: false,
                                options: [{ text: 'Main Menu', value: 'main menu' }],
                            };
                        } else {
                            botMessage = { text: "I didn't understand that. chat related to emergency,contact details or Please choose an option", user: false,  options: [
                                { text: 'Make a call', value: 'call' },
                                { text: 'Contact details', value: 'contact details' },
                                { text: 'Emergency assistance', value: 'emergency assistance' },
                            ], };
                        }
                        break;
                    default:
                        botMessage = { text: "Something went wrong.", user: false };
                }
    
                // Ensure botMessage is properly constructed
                if (!botMessage.text) { 
                    botMessage = { text: "Sorry, I didn't understand that.", user: false };
                }
    
                setMessages(prev => [...prev, botMessage]);
                setBotTyping(false);
            } catch (err) {
                
                console.error("Chatbot Error:", err);
                setError("An error occurred. Please try again later.");
                setBotTyping(false);
                setMessages(prev => [...prev, { text: "Sorry, an error occurred.", user: false }]);
            }
    
        }, 500);
        
    }

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                      <>
                      
                          <div key={index} className={`message ${message.user ? 'user' : 'bot'}`} style={{whiteSpace:"pre-line"}}>
                        {message.text}
                           
                    </div>
                    <>
                       {message.options && message.options.map((option, idx) => (
                        <button key={idx} className="option-button" onClick={() => handleOptionClick(option.value)}>
                            {option.text}
                        </button>
                    ))}
                    </>
                      </>
                    
                ))}
                {botTyping && <div className="message bot">Typing...</div>}
                <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input">
                <input type="text" value={input} onChange={handleInputChange} placeholder="Type your message..." />
                <button onClick={handleSend}>Send</button>
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Chatbot;