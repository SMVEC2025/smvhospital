import React, { useState, useEffect, useRef } from 'react';
import '../../styles/ChatBot.css'; // Make sure this path is correct

const Chatbot = ({ openLang }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [currentStep, setCurrentStep] = useState('mainMenu');
    const [userData, setUserData] = useState({ name: '', age: '', gender: '', phone: '', concern: '' });
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
            setMessages([{
                text: "Hello! How can I assist you today? Please choose an option:",
                user: false,
                options: [
                    { text: 'Health Packages', value: 'health package' },
                    { text: 'Book Appointment', value: 'book appointment' },
                    { text: 'Emergency Inquiry', value: 'emergency' },
                ],
            }]);
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
        if (trimmedInput === '') return;

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
                let botMessage;

                if (lowerInput === 'main menu') {
                    showMainMenu();
                    setBotTyping(false);
                    return;
                }

                switch (currentStep) {
                    case 'mainMenu':
                        if (lowerInput === 'health package') {
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
                            setCurrentStep('bookAppointment');
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
                        botMessage = { text: "Please provide your details to proceed. What is your name?", user: false };
                        setCurrentStep('collectDetails');
                        break;
                    case 'bookAppointment':
                    case 'collectDetails':
                        if (!userData.name) {
                            setUserData({ ...userData, name: input });
                            botMessage = { text: "What is your age?", user: false };
                        } else if (!userData.age) {
                            setUserData({ ...userData, age: input });
                            botMessage = {
                                text: "What is your gender?",
                                user: false,
                                options: [
                                    { text: 'Male', value: 'male' },
                                    { text: 'Female', value: 'female' },
                                    { text: 'Other', value: 'other' },
                                ],
                            };
                        } else if (!userData.gender) {
                            setUserData({ ...userData, gender: input });
                            botMessage = { text: "What is your phone number?", user: false };
                        } else if (!userData.phone) {
                            setUserData({ ...userData, phone: input });
                            botMessage = { text: "What is your concern?", user: false };
                        } else if (!userData.concern) {
                            setUserData({ ...userData, concern: input });
                            botMessage = { text: `Thank you, ${userData.name}! Your details have been saved.`, user: false, options: [{ text: 'Main Menu', value: 'main menu' }] };
                            setCurrentStep('mainMenu');
                            setUserData({ name: '', age: '', gender: '', phone: '', concern: '' }); // Reset
                        }
                        break;
                    default:
                        botMessage = { text: "Something went wrong.", user: false };
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

    const handleReset = () => {
        setMessages([]);
        setCurrentStep('mainMenu');
        setUserData({ name: '', age: '', gender: '', phone: '', concern: '' });
        setInput('');
        setError(null);
        showMainMenu();
    };

    const displayUserData = () => {
        alert(JSON.stringify(userData, null, 2));
    };

    return (
        <div className="chatbot-container">
            <div className={`chatbot-messages ${openLang}`}>
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
                        {message.text}
                        {message.options && (
                            <div className="chatbot-options">
                                {message.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        className="option-button"
                                        onClick={() => handleOptionClick(option.value)}
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
                {botTyping && <div className="message bot typing-animation"><span></span><span></span><span></span></div>}
                {error && <div className="message error">{error}</div>}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
               
            </div>
        </div>
    );
};

export default Chatbot;