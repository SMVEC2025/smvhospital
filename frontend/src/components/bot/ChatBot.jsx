import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios for API requests
import '../../styles/ChatBot.css';
import { toast } from 'react-toastify';

const Chatbot = ({ openLang }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [currentStep, setCurrentStep] = useState('mainMenu');
    const [userData, setUserData] = useState({ name: '', age: '', gender: '', phone: '', concern: '', packageType: '', package: '' });
    const messagesEndRef = useRef(null);
    const [botTyping, setBotTyping] = useState(false);
    const [error, setError] = useState(null);

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
                        { text: 'Health Packages', value: 'health package' },
                        { text: 'Book Appointment', value: 'book appointment' },
                        { text: 'Emergency Inquiry', value: 'emergency' },
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
    
                switch (currentStep) {
                    case 'mainMenu':
                        if (lowerInput === 'health package') {
                            setUserData({ ...userData, packageType: 'Health Packages' });
                            setCurrentStep('healthPackage');
                            botMessage = {
                                text: "Please select a health package:",
                                user: false,
                                options: [
                                    { text: 'Basic Health Checkup', value: 'basic' },
                                    { text: 'Comprehensive Health Checkup', value: 'comprehensive' },
                                    { text: 'Cardiac Health Checkup', value: 'cardiac' },
                                    { text: 'Diabetes Health Checkup', value: 'diabetes' },
                                ],
                            };
                        } else if (lowerInput === 'book appointment') {
                            setUserData({ ...userData, package: 'Appointment Booking' });
                            setCurrentStep('collectDetails');
                            botMessage = { text: "What is your name?", user: false };
                        } else if (lowerInput === 'emergency inquiry' || lowerInput === 'emergency') {
                            botMessage = {
                                text: "For emergency services, please call our emergency hotline at 123-456-7890 or visit the nearest hospital immediately.",
                                user: false,
                                options: [{ text: 'Main Menu', value: 'main menu' }],
                            };
                        } else {
                            botMessage = { text: "I didn't understand that. Please choose an option.", user: false, options: [{ text: 'Main Menu', value: 'main menu' }] };
                        }
                        break;
    
                    case 'healthPackage':
                        setUserData({ ...userData, package: input });
                        setCurrentStep('collectDetails');
                        botMessage = { text: "What is your name?", user: false };
                        break;
    
                        case 'collectDetails':
                            if (!userData.name) {
                                setUserData(prevData => ({ ...prevData, name: input }));
                                botMessage = { text: "What is your age?", user: false };
                            } else if (!userData.age) {
                                if (isNaN(input) || input <= 0) {
                                    botMessage = { text: "Please enter a valid age (must be a number greater than 0).", user: false };
                                } else {
                                    setUserData(prevData => ({ ...prevData, age: input }));
                                    botMessage = {
                                        text: "What is your gender?",
                                        user: false,
                                        options: [
                                            { text: 'Male', value: 'male' },
                                            { text: 'Female', value: 'female' },
                                            { text: 'Other', value: 'other' },
                                        ],
                                    };
                                }
                            } else if (!userData.gender) {
                                setUserData(prevData => ({ ...prevData, gender: input }));
                                botMessage = { text: "What is your phone number?", user: false };
                            } else if (!userData.phone) {
                                if (!/^\d{10}$/.test(input)) {
                                    botMessage = { text: "Please enter a valid 10-digit phone number.", user: false };
                                } else {
                                    setUserData(prevData => ({ ...prevData, phone: input }));
                                    botMessage = { text: "What is your concern?", user: false };
                                }
                            } else if (!userData.concern) {
                                const updatedData = { ...userData, concern: input };

                                
                                setUserData(updatedData);
                                postUserData(updatedData); 
                        
                                botMessage = {
                                    text: `Thank you, ${updatedData.name}! Your details have been saved.`,
                                    user: false,
                                    options: [{ text: 'Main Menu', value: 'main menu' }]
                                };
                        
                                setCurrentStep('mainMenu');
                                setUserData({ name: '', age: '', gender: '', phone: '', concern: '', packageType: '', package: '' }); // ✅ Reset only after posting
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
        
    };
    const postUserData = async (data) => {
        const googleFormURL ="https://docs.google.com/forms/u/0/d/e/1FAIpQLScOCZvXCksjUJEQwutB3skeHEZjH4VS8ihtQLwYwd781MkAfw/formResponse"; 
      
        const formPayload = new FormData();
        formPayload.append("entry.1334534231", data.name); 
        formPayload.append("entry.1617454534", data.package); 
        formPayload.append("entry.617143351", data.packageType);
        formPayload.append("entry.410812961", data.age);
        formPayload.append("entry.876016914", data.gender);
        formPayload.append("entry.1306757982", data.concern);
        formPayload.append("entry.1305942355", data.phone);

        try {

            fetch(googleFormURL, {
              method: "POST",
              body: formPayload,
              mode: "no-cors", // Required for Google Forms submission
            })
              .then(() => toast.success("Appointment Sent"))
              .catch((error) =>  toast.error("Network error"));
  
        } catch (error) {
            console.error('Error posting user data:', error);
            setError("Failed to submit details. Please try again.");
            toast.error('Network error')
        }

    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
                        {message.text}
                        {message.options && message.options.map((option, idx) => (
                            <button key={idx} className="option-button" onClick={() => handleOptionClick(option.value)}>
                                {option.text}
                            </button>
                        ))}
                    </div>
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