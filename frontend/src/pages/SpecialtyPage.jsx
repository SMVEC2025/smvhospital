import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/SpecialtyPage.css'
import Hero6 from '../components/Hero6'
import { LuMoveRight } from "react-icons/lu";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import MobileSideBar from '../components/navbar/MobileSideBar';
import ScrollToTop from '../components/ScrollToTop';
import MobileHero6 from '../components/MobileHero6';
import { useLocation } from 'react-router-dom';

function SpecialtyPage() {
  const [specialty,setSpecialty] = useState([]) 
  const [loading,setLoading]=useState(true)
  const { setAnimCase,setShowSideBar,isMobile } = useContext(AppContext)
     const sectionRef = useRef(null);
  
    const heroData = {
        bgImg: '/images/medicalservices.jpg',
        page:"Medical Services",
        title: ['ENT', 'Plastic Surgery', 'Cardiology', 'Dental', 'Neurology'],
      };
      const location = useLocation();
      const newIndex = location.state?.newIndex; 
    //   useEffect(() => {
    //     const fetchSpecialties = async () => {
    //       try {
    //         const response = await axios.get("https://cms.smvhospital.com/wp-json/wp/v2/specialties?_fields=acf");
    //         setSpecialty(response.data);
    //         setShowSpecialty(response.data[0]?.acf);
    //       } catch (error) {
    //         console.error("Error fetching doctors:", error);
    //       } finally{
    //         setLoading(false)
    //       }
    //     };
      
    //     fetchSpecialties();
    //   }, []);
      
    // useEffect(() => {
    //       setAnimCase('allset')
    //       setShowSideBar(false)

    //      }, [])

   useEffect(() => {
      setAnimCase('allset');
      setShowSideBar(false)
     }, []) 


    useEffect(() => {
      if(newIndex){
        setShowSpecialty(medicalServices[newIndex])
      }else{
        setShowSpecialty(medicalServices[0])
      }
      setLoading(false)
    }, [])
    
  
  const [showSpecialty,setShowSpecialty]=useState([])
  const [faqContainer,setFaqConatiner]=useState(0)
  const medicalServices = [
    {
      title: "Trauma Care",
      description: "At SMV Super Specialty Hospital, our Trauma Care Unit operates 24/7, providing immediate and comprehensive care for patients suffering from severe injuries due to accidents, falls, or other emergencies. Our multidisciplinary team of trauma surgeons, emergency physicians, and critical care specialists work in unison to stabilize and treat life-threatening conditions. Equipped with state-of-the-art facilities and rapid response protocols, we ensure timely interventions that can make the difference between life and death. Our trauma center is designed to handle complex cases with efficiency and compassion. We prioritize rapid assessment, advanced imaging, and surgical interventions when necessary. Our commitment to excellence in trauma care has made us a trusted center for emergency services. We also focus on rehabilitation and follow-up care to ensure complete recovery. Patient safety and comfort are at the forefront of our services. At SMV, we stand ready to provide critical care when it matters most.",
      child: ["Trauma Care", "Neuro Sciences", "Neuro Sciences"],
      image: 'https://img.freepik.com/free-photo/female-doctor-examining-sick-patient-with-stethoscope-while-male-doctor-analyzing-reports-hospital_662251-3015.jpg',
      faq: [
        { question: "What is trauma care?", answer: "Trauma care is the medical treatment provided to patients who have sustained serious injuries. It focuses on emergency care to stabilize vital functions." },
        { question: "How is trauma care different from regular medical care?", answer: "Trauma care is focused on life-threatening injuries and is time-sensitive, aiming to stabilize the patient quickly and prevent further complications." },
        { question: "When should I seek trauma care?", answer: "If you or someone else has experienced serious injury or trauma, such as in a car accident or a fall, trauma care should be sought immediately." }
      ]
    },
    {
      title: "Neuro Sciences",
      description: "SMV Super Specialty Hospital's Neuro Sciences department is dedicated to diagnosing and treating disorders of the brain, spinal cord, and nervous system. Our team comprises experienced neurologists, neurosurgeons, and specialized nurses who collaborate to provide comprehensive care. Utilizing advanced neuroimaging and diagnostic tools, we accurately identify conditions such as stroke, epilepsy, and neurodegenerative diseases. Our surgical suites are equipped for complex neurosurgical procedures, ensuring precision and safety. We emphasize a multidisciplinary approach, integrating rehabilitation and support services for holistic recovery. Our commitment to research and continuous learning keeps us at the forefront of neurological care. Patient education and involvement are integral to our treatment plans. We strive to improve quality of life through personalized care strategies. At SMV, we are dedicated to advancing neuro health with compassion and expertise.",
      child: [
        "Craniotomy",
        "Endoscopic Endonasal Surgery",
        "Neuro endoscopy",
        "Biopsy",
        "Stereotactic Brain Surgery",
        "Anterior Cervical Discectomy",
        "Epilepsy Neurosurgery",
        "Chiari decompression"
      ],
      image: 'https://img.freepik.com/free-photo/doctor-his-cabinet-looking-braind-trying-put-diagnosis-doctor-giving-his-expertise_482257-34601.jpg',
      faq: [
        { question: "What is neuro science?", answer: "Neuro science involves the study and treatment of the brain and nervous system, including disorders like epilepsy, stroke, and neurodegenerative diseases." },
        { question: "What conditions are treated under neuro sciences?", answer: "Conditions such as brain tumors, epilepsy, Parkinson's disease, strokes, and spinal cord injuries are all treated under neuro sciences." },
        { question: "Is brain surgery safe?", answer: "Brain surgery is generally safe when performed by a skilled neurosurgeon, but like any surgery, it carries risks that need to be carefully managed." }
      ]
    },
    {
      title: "Cardiac Sciences",
      description: "SMV Super Specialty Hospital's Organ Transplantation program is renowned for its multidisciplinary approach and high success rates. We offer kidney, liver, and heart transplants, performed by experienced surgical teams using advanced techniques. Our comprehensive evaluation process ensures suitable donor-recipient matching and optimal outcomes. Pre-transplant counseling and post-transplant care are integral parts of our program. We have a dedicated transplant ICU equipped with the latest monitoring systems. Our immunology lab provides precise testing to prevent rejection and complications. Patient education focuses on medication adherence and lifestyle modifications for long-term success. We also offer psychological support to patients and families throughout the transplant journey. Our ethical practices and transparent processes have earned us trust and recognition. At SMV, we are committed to giving patients a new lease on life through successful organ transplantation.",
      child: [
        "Thoracic and Cardiovascular Surgery",
        "Interventional Cardiology",
        "Coronary artery bypass Grafting (CABG)",
        "Heart Valve repair / replacement",
        "Arrhythmia Correction",
        "Heart transplants",
        "Aortic Aneurysm and Dissections",
        "TAVI / TAVR",
        "Angioplasty / Stenting"
      ],
      image: 'https://img.freepik.com/free-photo/woman-nurse-showing-cardiology-image-digital-tablet-letting-doctor-explain-cardiovascular-diagnosis-child-parent-assistant-holding-modern-device-with-heart-anatomy-picture_482257-41831.jpg?',
      faq: [
        { question: "What is a heart transplant?", answer: "A heart transplant is a surgical procedure where a damaged or failing heart is replaced with a healthy donor heart." },
        { question: "What is angioplasty?", answer: "Angioplasty is a procedure to open blocked or narrowed coronary arteries to improve blood flow to the heart." },
        { question: "What causes arrhythmias?", answer: "Arrhythmias are caused by electrical disturbances in the heart that affect its normal rhythm, leading to either too fast, too slow, or irregular heartbeats." }
      ]
    },
    {
      title: "Organ Transplantation",
      description: "Organ transplantation involves replacing a patient's diseased or damaged organ with a healthy one from a donor. It can be performed for a variety of organs including the heart, kidney, liver, and lungs.",
      child: [],
      image: 'https://img.freepik.com/free-photo/team-surgeons-is-fighting-life-real-operation-real-emotions-intensive-care-team-is-fighting-life-patient-saving-life-struggle-life_657921-783.jpg',
      faq: [
        { question: "What is organ transplantation?", answer: "Organ transplantation is the surgical process of transferring an organ from a donor to a recipient whose organ has failed or is damaged." },
        { question: "How long does an organ transplant last?", answer: "The lifespan of an organ transplant depends on various factors such as the type of organ, the health of the recipient, and how well the recipient follows post-transplant care." },
        { question: "What are the risks of organ transplantation?", answer: "Risks include organ rejection, infections, and complications from immunosuppressive medications that prevent rejection." }
      ]
    },
    {
      title: "Plastic Surgery",
      description: "The Plastic Surgery department at SMV Super Specialty Hospital offers both reconstructive and aesthetic procedures tailored to individual needs. Our skilled surgeons perform complex reconstructions following trauma, burns, or cancer surgeries. We also offer cosmetic enhancements like rhinoplasty, liposuction, and facelifts with a focus on natural results. Utilizing advanced techniques and technologies, we ensure patient safety and satisfaction. Pre-operative consultations involve detailed discussions to understand patient goals and expectations. Post-operative care includes monitoring and support for optimal healing. Our multidisciplinary team collaborates with other specialties for comprehensive care. We prioritize patient confidentiality and comfort throughout the treatment process. Continuous training and research keep our team updated with global advancements. At SMV, we combine artistry and medical expertise to enhance form and function.",
      child: [],
      image: 'https://images.pexels.com/photos/9157201/pexels-photo-9157201.jpeg',
      faq: [
        { question: "What is cosmetic surgery?", answer: "Cosmetic surgery is a type of plastic surgery that focuses on improving the appearance of a person, such as facelifts, rhinoplasty, or breast augmentation." },
        { question: "Is plastic surgery only for cosmetic purposes?", answer: "No, plastic surgery also includes reconstructive surgery to repair injuries, birth defects, or conditions like cleft palates." },
        { question: "What is the recovery time for plastic surgery?", answer: "Recovery time depends on the type of surgery performed, but most people can return to normal activities in a few weeks, with full recovery taking several months." }
      ]
    },
    {
      title: "Vascular Surgery",
      description: "SMV Super Specialty Hospital's Vascular Surgery department specializes in the diagnosis and treatment of diseases affecting the vascular system. Our surgeons are adept at managing conditions like aneurysms, peripheral artery disease, and varicose veins. We employ both open surgical and minimally invasive endovascular techniques for optimal outcomes. Advanced imaging tools aid in accurate diagnosis and treatment planning. Our team collaborates with cardiologists and radiologists for comprehensive vascular care. Post-operative rehabilitation focuses on restoring mobility and preventing complications. Patient education on lifestyle modifications is integral to our approach. Emergency services are available for acute vascular conditions. We are committed to providing compassionate care with a focus on patient safety. At SMV, we strive to improve vascular health through excellence in surgical care.",
      child: [],
      image: 'https://images.pexels.com/photos/8376285/pexels-photo-8376285.jpeg',
      faq: [
        { question: "What conditions are treated with vascular surgery?", answer: "Vascular surgery is used to treat conditions like aneurysms, varicose veins, blood clots, and peripheral artery disease." },
        { question: "What is an aneurysm?", answer: "An aneurysm is a bulging or ballooning in the wall of a blood vessel, often in the aorta or brain, which can rupture and be life-threatening." },
        { question: "What are varicose veins?", answer: "Varicose veins are swollen, twisted veins that can be seen just under the skin, often caused by weak or damaged valves in the veins." }
      ]
    },
    {
      title: "Cosmetology",
      description: "At SMV Super Specialty Hospital, our Cosmetology department offers a range of non-invasive and minimally invasive procedures to enhance appearance and boost confidence. Services include skin rejuvenation, laser treatments, Botox, fillers, and hair restoration therapies. Our team of dermatologists and cosmetologists tailor treatments to individual skin types and concerns. We utilize FDA-approved products and state-of-the-art equipment to ensure safety and efficacy. Pre-treatment consultations involve thorough assessments and discussions of patient goals. Post-treatment care is provided to maintain results and ensure satisfaction. We emphasize natural-looking outcomes and patient comfort. Hygiene and safety protocols are strictly followed in all procedures. Continuous training keeps our team updated with the latest trends and techniques. At SMV, we combine science and aesthetics to help you look and feel your best.",
      child: [],
      image: 'https://img.freepik.com/free-photo/rejuvenating-facial-treatment_158595-4601.jpg',
      faq: [
        { question: "What is cosmetology?", answer: "Cosmetology is the study and application of beauty treatments, such as skincare, hair removal, and cosmetic dermatology." },
        { question: "What treatments are offered in cosmetology?", answer: "Common treatments include facials, chemical peels, hair removal, and anti-aging procedures like Botox and dermal fillers." },
        { question: "Is cosmetology only for cosmetic reasons?", answer: "While many cosmetology treatments are for cosmetic reasons, they can also help with medical skin conditions like acne, eczema, and hyperpigmentation." }
      ]
    },
    {
      title: "Urology",
      description: "The Urology department at SMV Super Specialty Hospital provides comprehensive care for urinary tract and male reproductive system disorders. Our services include treatment for kidney stones, urinary incontinence, prostate issues, and urologic cancers. We offer advanced diagnostic tools like urodynamic studies and imaging for accurate assessments. Minimally invasive surgical options, including laparoscopy and laser therapies, are available for various conditions. Our team collaborates with nephrologists and oncologists for multidisciplinary care. Patient education on preventive measures and lifestyle modifications is emphasized. We provide personalized treatment plans tailored to individual needs. Emergency urological services are available round-the-clock. Our commitment to patient comfort and privacy is paramount. At SMV, we aim to restore urological health with compassion and expertise.",
      child: [],
      image: 'https://img.freepik.com/free-photo/side-view-man-dealing-with-std_23-2149485523.jpg',
      faq: [
        { question: "What is urology?", answer: "Urology is the medical field that deals with diseases of the urinary tract and male reproductive organs." },
        { question: "What are common conditions treated by urologists?", answer: "Common conditions include kidney stones, urinary tract infections (UTIs), bladder issues, and prostate problems." },
        { question: "What treatments are available for urinary incontinence?", answer: "Treatment options for urinary incontinence include lifestyle changes, medications, physical therapy, and in some cases, surgery." }
      ]
    },  
    {
      title: "Orthopaedics",
      child: [
        "Joint Replacement and Reunion Surgery",
        "Knee and Hip Replacement",
        "Spine Surgery",
        "Trauma Care",
        "Crush Injuries",
        "Sports Medicine",
        "Paediatric Orthopaedics"
      ],
      image: "https://img.freepik.com/free-photo/healthcare-concept-clinic_23-2151117902.jpg",
      description: "SMV Super Specialty Hospital's Orthopaedics department offers advanced care for musculoskeletal conditions, including joint replacements, spine surgeries, and fracture management. Our team of orthopedic surgeons, physiotherapists, and rehabilitation specialists work collaboratively for optimal patient outcomes. We utilize cutting-edge technology for accurate diagnosis and minimally invasive procedures. Personalized rehabilitation programs are designed to restore mobility and function. Our services also include sports medicine and pediatric orthopaedics. Patient education on injury prevention and bone health is integral to our approach. We prioritize pain management and early mobilization post-surgery. Our facilities include state-of-the-art operation theaters and physiotherapy units. Continuous research and training keep our team at the forefront of orthopedic care.",
      faq: [
        {
          "question": "What is the recovery time after a joint replacement?",
          "answer": "Recovery typically takes 6 to 12 weeks depending on the type of joint and the patient's overall health."
        },
        {
          "question": "Do I need surgery for a minor fracture?",
          "answer": "Not always. Minor fractures can often heal with immobilization and physical therapy, but a consultation is necessary."
        },
        {
          "question": "Can children receive orthopaedic treatment?",
          "answer": "Yes, we offer specialized paediatric orthopaedics for children with bone and joint issues."
        }
      ]
    },
    {
      title: "Podiatrics",
      child: [],
      image: "https://img.freepik.com/free-photo/doctor-taking-care-afro-american-child_23-2151159928.jpg",
      description: "At SMV Super Specialty Hospital, our Podiatrics department is dedicated to the comprehensive care of children's feet and lower limbs. We understand that children's growing bodies require special attention and customized treatments. Our podiatric specialists are trained to diagnose and manage congenital deformities, flat feet, gait abnormalities, and sports injuries in children. We emphasize early detection to prevent complications in adulthood. Our team works closely with pediatricians and physiotherapists for integrated care. We provide tailored orthotic solutions and rehabilitation support. With child-friendly diagnostic tools, we ensure a comforting experience for your child. From minor concerns to complex deformities, we ensure optimal foot health. Our mission is to support every child’s journey to healthy mobility. SMV is committed to excellence in pediatric foot care.",
      faq: [
        {
          "question": "What conditions do pediatric podiatrists treat?",
          "answer": "They treat flat feet, toe walking, in-toeing, out-toeing, and sports injuries in children."
        },
        {
          "question": "Is podiatric care safe for young children?",
          "answer": "Yes, podiatric treatments are tailored for children and are completely safe and non-invasive."
        },
        {
          "question": "When should I see a podiatrist for my child?",
          "answer": "If your child has foot pain, trouble walking, or unusual gait, a podiatrist should be consulted."
        }
      ]
    },
    {
      title: "Obstetrics & Gynaecology",
      child: [],
      image: "/medicalservices/obstetrics&gynaecology.jpg",
      description: "The Obstetrics & Gynaecology department at SMV Super Specialty Hospital offers compassionate and advanced care for women at every stage of life. We provide specialized services for pregnancy care, high-risk deliveries, infertility treatments, menstrual disorders, and menopausal management. Our team of experienced obstetricians and gynaecologists combines clinical excellence with empathy. We are equipped with state-of-the-art labour wards, fetal monitoring systems, and neonatal intensive care units. Our antenatal programs ensure healthy pregnancies and informed mothers. We also offer advanced laparoscopic gynaecological surgeries. Women's wellness is at the heart of everything we do. From adolescence to post-menopause, we’re your lifelong health partner. We foster a safe, respectful, and empowering environment for women. SMV stands as a trusted name in women's health care.",
      faq: [
        {
          "question": "Do you offer prenatal and postnatal care?",
          "answer": "Yes, we offer full-spectrum prenatal, delivery, and postnatal care with experienced specialists."
        },
        {
          "question": "What are common gynaecological issues you treat?",
          "answer": "We treat menstrual disorders, PCOS, infertility, menopause issues, and infections."
        },
        {
          "question": "Is fertility treatment available?",
          "answer": "Yes, we offer fertility evaluations and treatment plans tailored to individual needs."
        }
      ]
    },
    {
      title: "Paediatrics & Neonatology",
      child: [],
      image: "https://img.freepik.com/free-photo/close-up-baby-boy-being-examined_23-2148231323.jpg",
      description: "At SMV Super Specialty Hospital, we provide world-class Paediatrics & Neonatology services tailored to the unique needs of infants and children. Our neonatology unit is equipped with advanced NICU facilities for critically ill newborns. We specialize in the management of premature births, low birth weight babies, and neonatal complications. Our paediatricians focus on preventive care, vaccinations, and developmental milestones. We ensure timely diagnosis and treatment of acute and chronic childhood illnesses. The department fosters a child-friendly environment to ease anxiety. Our multidisciplinary approach includes dietitians, psychologists, and speech therapists for holistic care. Parents are guided with education and counseling throughout the care process. From newborns to adolescents, we nurture every stage of childhood. SMV is dedicated to giving your child the healthiest start in life.",
      faq: [
        {
          "question": "What is neonatology?",
          "answer": "Neonatology is the medical care of newborn infants, especially ill or premature babies."
        },
        {
          "question": "Do you offer vaccination services?",
          "answer": "Yes, we provide all essential and optional vaccinations as per national guidelines."
        },
        {
          "question": "Can I consult for my child’s development issues?",
          "answer": "Absolutely. We offer developmental assessments and support services."
        }
      ]
    },
    {
      title: "Gastroenterology ",
      child: [
        "Medical Gastroenterology",
        "Surgical Gastroenterology",
        "Hepato Pancreato Biliary Surgery",
        "Bariatric Surgery",
        "Liver transplants"
      ],
      image: "https://img.freepik.com/free-photo/side-view-man-dealing-with-std_23-2149485523.jpg",
      description: "SMV Super Specialty Hospital’s Gastroenterology department is a center of excellence for digestive health. We offer a full spectrum of services in Medical and Surgical Gastroenterology. Our experts manage disorders like GERD, IBS, ulcers, pancreatitis, liver diseases, and inflammatory bowel conditions. The department is equipped with advanced endoscopy, colonoscopy, and liver biopsy tools. We also perform complex procedures like Hepato Pancreato Biliary surgeries and liver transplants. A multidisciplinary team including hepatologists, dietitians, and surgeons ensures comprehensive care. We focus on early detection and prevention through screening programs. Patient comfort and minimally invasive techniques are central to our approach. Every treatment is tailored to the individual’s digestive health needs. At SMV, we redefine excellence in gastrointestinal care.",
      faq: [
        {
          "question": "What conditions are treated under gastroenterology?",
          "answer": "We treat acid reflux, ulcers, IBS, hepatitis, liver cirrhosis, and more."
        },
        {
          "question": "Is bariatric surgery safe?",
          "answer": "Yes, it’s a safe and effective weight-loss option for qualified patients with proper monitoring."
        },
        {
          "question": "Do you perform liver transplants?",
          "answer": "Yes, we have experienced surgeons for liver transplant surgeries."
        }
      ]
    },
    {
      title: "Pulmonology & Sleep Medicine",
      child: [],
      image: "https://img.freepik.com/free-photo/senior-man-with-respirator-hospital-bed_23-2149011213.jpg",
      description: "The Pulmonology & Sleep Medicine department at SMV Super Specialty Hospital delivers expert care for respiratory and sleep-related disorders. We treat asthma, COPD, pneumonia, lung fibrosis, and tuberculosis with precision. Our sleep lab diagnoses and manages sleep apnea, insomnia, and restless leg syndrome. We offer bronchoscopy, pulmonary function tests, and advanced imaging for accurate diagnoses. Our pulmonologists work closely with critical care and rehabilitation teams. Personalized therapy and long-term disease management are central to our care model. We also provide smoking cessation support and lung health awareness programs. Early diagnosis and preventive care are emphasized to reduce complications. Our sleep solutions are designed to restore your rest and energy. SMV is your trusted partner in breathing easy and sleeping soundly.",
      faq: [
        {
          "question": "What tests are done for sleep disorders?",
          "answer": "We conduct polysomnography (sleep study) to diagnose sleep apnea and other disorders."
        },
        {
          "question": "How is asthma managed?",
          "answer": "Asthma is managed through inhalers, medication, lifestyle changes, and regular monitoring."
        },
        {
          "question": "Do you treat long COVID-related lung issues?",
          "answer": "Yes, we offer post-COVID pulmonary rehabilitation and care."
        }
      ]
    },
    {
      title: "Oncology",
      child: [],
      image: "https://img.freepik.com/free-photo/health-assistant-taking-care-female-patient_23-2148981269.jpg",
      description: "SMV Super Specialty Hospital’s Oncology department is committed to delivering compassionate, comprehensive cancer care. We offer Medical, Surgical, and Radiation Oncology under one roof. Our experts treat a wide range of cancers including breast, lung, prostate, blood, and gastrointestinal malignancies. Personalized treatment plans are based on the latest advancements and individual needs. We offer chemotherapy, immunotherapy, targeted therapy, and minimally invasive surgeries. Early diagnosis is supported through screenings, PET scans, and biopsies. Emotional and psychological support is provided throughout the treatment journey. Our tumor board ensures multidisciplinary case discussions for the best outcomes. We emphasize post-treatment care, rehabilitation, and survivorship. At SMV, we bring hope, healing, and innovation together in cancer care.",
      faq: [
        {
          "question": "What types of cancer do you treat?",
          "answer": "We treat all major cancers including breast, lung, colon, prostate, blood, and pediatric cancers."
        },
        {
          "question": "Is chemotherapy painful?",
          "answer": "Chemotherapy is not painful but may cause side effects. Our team provides support to manage them."
        },
        {
          "question": "Do you provide counseling for cancer patients?",
          "answer": "Yes, we have counseling and support groups to help patients and their families cope emotionally."
        }
      ]
    },
    {
      title: "Rheumatology",
      child: [],
      image: "https://img.freepik.com/free-photo/doctor-taking-care-afro-american-child_23-2151159898.jpg",
      description: "The Rheumatology department at SMV Super Specialty Hospital specializes in the diagnosis and treatment of autoimmune and inflammatory joint diseases. Our focus areas include rheumatoid arthritis, lupus, gout, scleroderma, and vasculitis. We use advanced diagnostic tools including imaging, autoimmune panels, and joint fluid analysis. Individualized treatment plans aim to control inflammation and prevent joint damage. Our rheumatologists work closely with physiotherapists and orthopaedic surgeons. We promote patient education to empower long-term management. Regular monitoring ensures medication efficacy and safety. We are dedicated to enhancing quality of life through pain management and mobility improvement. Rehabilitation programs are tailored for each patient’s lifestyle. At SMV, we restore movement and redefine possibilities.",
      faq: [
        {
          "question": "What symptoms require a rheumatology consult?",
          "answer": "Persistent joint pain, swelling, fatigue, and stiffness may require a rheumatology evaluation."
        },
        {
          "question": "Can arthritis be cured?",
          "answer": "While not curable, arthritis can be effectively managed with medications, therapy, and lifestyle changes."
        },
        {
          "question": "Is rheumatology only for older adults?",
          "answer": "No, autoimmune diseases can affect individuals of all ages including children."
        }
      ]
    },
    {
      title: "Endocrinology",
      child: [],
      image: "https://img.freepik.com/free-photo/side-view-doctor-checking-patient_23-2150165422.jpg",
      description: "At SMV Super Specialty Hospital, our Endocrinology department provides expert care for hormonal imbalances and endocrine disorders. We manage diabetes, thyroid disorders, adrenal gland diseases, osteoporosis, and metabolic syndromes. Our specialists conduct thorough evaluations using hormone assays, imaging, and dynamic function tests. We focus on patient education for lifestyle modifications and medication adherence. Advanced insulin therapy and continuous glucose monitoring are available for diabetes management. Our care is personalized and long-term. Women with PCOS, menopause-related issues, and hirsutism receive integrated hormonal care. We also cater to children with growth disorders and pubertal issues. Preventive screenings are offered for at-risk patients. SMV delivers cutting-edge endocrine care for balanced and healthy living.",
      faq: [
        {
          "question": "Do you treat type 1 and type 2 diabetes?",
          "answer": "Yes, we manage both types with medication, insulin therapy, and dietary guidance."
        },
        {
          "question": "What are signs of thyroid problems?",
          "answer": "Symptoms may include fatigue, weight changes, hair loss, anxiety, or irregular periods."
        },
        {
          "question": "Are hormonal imbalances treatable?",
          "answer": "Yes, most hormonal issues are treatable with proper diagnosis and hormone therapy."
        }
      ]
    },
    {
      title: "Radio Frequency Ablation (RFA)",
      child: [],
      image: "https://img.freepik.com/free-photo/young-woman-lying-cosmetologist-s-table-rejuvenation-procedure_343596-140.jpg",
      description: "The RFA department at SMV Super Specialty Hospital offers advanced, minimally invasive treatments using radiofrequency energy. RFA is used for managing chronic pain, varicose veins, and some types of tumors. Our interventional radiologists perform image-guided procedures with precision and care. We offer RFA as an outpatient procedure with rapid recovery time and minimal discomfort. It is a safe and effective alternative to conventional surgery. Our pain management specialists ensure optimal pre- and post-procedure care. We follow strict protocols for safety and infection control. Patient satisfaction and lasting relief are our primary goals. Detailed assessments determine candidacy for RFA to ensure best outcomes. At SMV, we blend technology with comfort for enhanced patient care.",
      faq: [
        {
          "question": "Is RFA painful?",
          "answer": "RFA is minimally painful and usually done under local anesthesia or sedation."
        },
        {
          "question": "How long does the procedure take?",
          "answer": "It typically takes 30 minutes to an hour depending on the area being treated."
        },
        {
          "question": "What conditions can be treated with RFA?",
          "answer": "Chronic back pain, nerve pain, varicose veins, and some tumors can be treated with RFA."
        }
      ]
    },
    {
      title: "ENT",
      child: [],
      image: "https://img.freepik.com/free-photo/endocrinologist-examining-throat-young-woman-clinic-women-with-thyroid-gland-test-endocrinology-hormones-treatment-inflammation-sore-throat_657921-270.jpg",
      description: "SMV Super Specialty Hospital’s ENT department provides specialized care for disorders of the ear, nose, throat, head, and neck. We offer comprehensive treatment for sinusitis, hearing loss, tinnitus, vertigo, allergies, and voice disorders. Our team performs advanced surgeries including endoscopic sinus surgery, cochlear implants, and tonsillectomies. Audiology and speech therapy services are integrated into our care model. We use minimally invasive diagnostic and therapeutic tools for precise results. Our focus is on restoring function and improving quality of life. Personalized treatment plans are made for each patient based on diagnostic findings. We also offer pediatric ENT care in a child-friendly setting. SMV ensures clear communication and better breathing with expert ENT care.",
      faq: [
        {
          "question": "What are signs I should see an ENT specialist?",
          "answer": "Recurring ear infections, sore throat, sinus congestion, or hearing issues are common reasons."
        },
        {
          "question": "Do you perform tonsil removal?",
          "answer": "Yes, we offer surgical procedures like tonsillectomy, septoplasty, and more."
        },
        {
          "question": "Can you help with sleep apnea?",
          "answer": "Yes, ENT plays a role in diagnosing and treating sleep apnea and snoring."
        }
      ]
    },
    {
      title: "Dermatology & Trichology",
      child: [],
      image: "https://img.freepik.com/free-photo/woman-getting-hair-loss-treatment-clinic_23-2149152750.jpg",
      description: "At SMV Super Specialty Hospital, our Dermatology & Trichology department offers comprehensive solutions for all skin, hair, and nail concerns. From acne, eczema, and psoriasis to fungal infections and pigmentation issues, we provide evidence-based treatments. Our trichologists specialize in managing hair fall, dandruff, alopecia, and scalp infections with advanced therapies. We also offer cosmetic dermatology services including chemical peels, laser hair removal, and skin rejuvenation. Every patient undergoes a thorough skin and scalp analysis before treatment planning. Our experts focus on both aesthetics and medical outcomes. Safe, personalized, and result-oriented care is at the core of what we do. We use FDA-approved techniques for minimal side effects and maximum benefit. We also educate patients on skincare and preventive measures. SMV is your trusted destination for healthy skin and hair.",
      faq: [
        {
          "question": "Do you treat hair loss?",
          "answer": "Yes, we offer treatments including medications, PRP therapy, and hair transplant guidance."
        },
        {
          "question": "Can I get treatment for acne scars?",
          "answer": "Absolutely. We provide laser treatments, chemical peels, and microneedling."
        },
        {
          "question": "Are cosmetic treatments safe?",
          "answer": "Yes, all procedures are done by certified dermatologists using safe, approved methods."
        }
      ]
    },
    {
      title: "Interventional Radiology",
      child: [],
      image: "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg",
      description: "SMV Super Specialty Hospital is proud to offer cutting-edge Interventional Radiology services for diagnosis and minimally invasive treatment of complex conditions. Our procedures are guided by advanced imaging like ultrasound, CT, and fluoroscopy for pinpoint accuracy. We treat conditions like blocked arteries, fibroids, varicose veins, tumors, and abscesses without the need for open surgery. Services include angioplasty, embolization, biopsies, drainage procedures, and tumor ablation. Interventional radiology is associated with faster recovery, reduced pain, and fewer complications. Our radiologists work in tandem with other departments to provide comprehensive care. Patients benefit from our day-care model for most procedures. We prioritize safety, precision, and patient comfort in every intervention. SMV ensures that innovation meets clinical excellence through Interventional Radiology.",
      faq: [
        {
          "question": "What are common interventional procedures?",
          "answer": "Angioplasty, embolization, biopsies, and image-guided tumor treatments are common."
        },
        {
          "question": "Is it safer than surgery?",
          "answer": "Yes, it involves less risk, smaller incisions, and faster recovery."
        },
        {
          "question": "Do you use sedation or anesthesia?",
          "answer": "Most procedures are performed under local anesthesia with sedation if required."
        }
      ]
    },
    {
      title: "Craniofacial Surgery",
      child: [],
      image: "https://img.freepik.com/free-photo/surgeons-wearing-surgical-loupes-while-performing-operation_107420-64893.jpg",
      description: "At SMV Super Specialty Hospital, our Craniofacial Surgery unit addresses complex deformities and trauma involving the face and skull. We treat congenital anomalies like cleft lip and palate, craniosynostosis, facial asymmetry, and jaw deformities. Our surgeons use 3D planning and imaging technology for accurate pre-operative evaluation. We work closely with neurosurgery, ENT, and orthodontic teams for holistic outcomes. Trauma reconstruction, facial tumor removal, and aesthetic corrections are also part of our expertise. Each case is approached with precision, compassion, and a commitment to restoring function and appearance. Children and adults receive specialized care tailored to their needs. Our patient-centric philosophy includes pre-surgical counseling and long-term rehabilitation. SMV is a center of excellence for facial reconstruction and transformation. We help patients regain confidence and quality of life.",
      faq: [
        {
          "question": "What conditions require craniofacial surgery?",
          "answer": "Cleft lip/palate, facial trauma, birth defects, and skull abnormalities are common reasons."
        },
        {
          "question": "Is the surgery safe for children?",
          "answer": "Yes, we have pediatric specialists and protocols to ensure safety and effectiveness."
        },
        {
          "question": "What is the recovery time?",
          "answer": "Recovery depends on the complexity, but typically ranges from a few weeks to months."
        }
      ]
    },
    {
      title: "Transfusion Medicine",
      child: [],
      image: "https://img.freepik.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg",
      description: "SMV Super Specialty Hospital’s Transfusion Medicine department ensures safe, timely, and quality blood and blood component services. Our NABH-compliant blood bank operates round-the-clock with rigorous screening protocols. We support surgeries, emergencies, and oncology treatments with precise transfusion support. The department follows strict quality checks including NAT testing, blood grouping, and compatibility testing. We provide packed red cells, platelets, plasma, and cryoprecipitate as per clinical needs. Apheresis services and stem cell collection are also part of our offerings. Our team works with clinicians to reduce transfusion reactions and improve outcomes. Patient safety and ethical sourcing are our top priorities. We promote voluntary blood donation and conduct regular awareness drives. At SMV, we ensure every drop counts in saving lives.",
      faq: [
        {
          "question": "Is donated blood safe?",
          "answer": "Yes, all donated blood undergoes rigorous screening for infections and compatibility."
        },
        {
          "question": "Who needs blood transfusions?",
          "answer": "Patients with severe anemia, trauma, surgery, or cancer may require transfusions."
        },
        {
          "question": "Can I donate blood at your hospital?",
          "answer": "Yes, we encourage healthy individuals to donate through our certified blood bank."
        }
      ]
    },
    {
      title: "Internal Medicine",
      child: [],
      image: "https://img.freepik.com/free-photo/nurse-doctor-team-ready-work-day_23-2149309947.jpg",
      description: "At the heart of SMV Super Specialty Hospital lies our Internal Medicine department, providing holistic, evidence-based care for adult health concerns. We are often the first point of contact for patients with undiagnosed symptoms and chronic diseases. Our physicians expertly manage diabetes, hypertension, infections, thyroid issues, and autoimmune disorders. We focus on preventive care, early detection, and lifestyle management. With comprehensive diagnostic support, we ensure accurate and timely treatment. Our internists also coordinate with specialists for multidisciplinary care when needed. Inpatients benefit from our vigilant monitoring and 24/7 physician availability. We emphasize patient education for long-term well-being and disease control. SMV's Internal Medicine team embodies empathy, precision, and continuity of care. Your health journey begins with us—trusted partners for life.",
      faq: [
        {
          "question": "What does an internist treat?",
          "answer": "Internists manage adult health concerns such as high blood pressure, diabetes, infections, and more."
        },
        {
          "question": "Is this different from a general physician?",
          "answer": "Yes, internists are specialists in complex, chronic, and multisystem diseases in adults."
        },
        {
          "question": "Can I consult for regular health checkups?",
          "answer": "Absolutely. We provide preventive screenings and routine check-ups."
        }
      ]
    }
  ];

  function handleScroll(){
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  
  }
  function handleSelect(index){
    setShowSpecialty(medicalServices[index])
    if(isMobile){
      setTimeout(() => {
        handleScroll()
      }, 100);
    }
  }
  return (
   <>
   <ScrollToTop/>
   {isMobile?<MobileHero6 data={heroData}/>:<Hero6 data={heroData}/>}
   <div className='sp_main'>
    <div className='sp_container1' ref={sectionRef}>
        <img src={showSpecialty.image} alt="" />
        <div className='sp_title'>{showSpecialty?.title}</div>
        
        <p className='sp_desc'>{showSpecialty?.description}</p>
       
         <div className='sp_container1_faq'>
           
             {loading?(
            <p>loading...</p>
        ):(
          <>
           {showSpecialty?.faq?.map((e,index)=>(
                <div key={index} className={`sp_container1_faq1 ${faqContainer==index?'true':null}`}>
                    <div className='sp_container1_faq_ques'onClick={()=>{setFaqConatiner(index)}} >0{index+1} {e.question} </div>
                    <div className='sp_container1_faq_ans'>{e.answer}</div>
                </div>
            ))}
            {console.log(showSpecialty)}
          </>
        )}
            
        </div>

    </div>
    <div className='sp_container2'>
        <h1>
            Medical Services
        </h1>
        <div className='sp_con2div1'>
        {medicalServices.map((element,index)=>(
            <div key={index} onClick={()=>{handleSelect(index)}}>{element.title} <span><LuMoveRight/></span></div>
        ))}
        </div>
    </div>
       
   </div>
   <Footer/>
   </>
  )
}

export default SpecialtyPage