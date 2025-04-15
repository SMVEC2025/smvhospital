import React, { useState } from 'react';
import '../styles/About.css'
import SpecialtyCard from './SpecialtyCard';
function AboutSpeciality() {
    const [isHovered, setIsHovered] = useState(false);
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
      }
   
    ];
  
    return (
      <div 
        className="as_wrapper" 
      
      >
        <div 
          className="inner" 
          style={{ "--quantity": medicalServices.length, animationPlayState: isHovered ? "paused" : "running" }}
        >
          {medicalServices.map((card, index) => (
            <div
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
              className="card"
              key={index}
              style={{ "--index": index, "--color-card": card.color }}
            >
              <div className="img">
                <SpecialtyCard index={index} image={card.image} name={card.title}/>
              </div>
            </div>
          ))}
          
        </div>
      
      </div>
   
  );
}

export default AboutSpeciality;
