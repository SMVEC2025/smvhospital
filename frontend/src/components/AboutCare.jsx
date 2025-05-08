import React from 'react'

function AboutCare() {
    return (
        <div className='ac_main'>
            <div className="card">
                <div className="card-content">
                    <p className="card-title">24/7 Ambulance
                    </p><p className="card-para">Round-the-clock ambulance service for fast and safe emergency transport.</p>
                </div>
            </div>

            <div className="card" >
                <div className="card-content">
                    <p className="card-title">24/7 Visit
                    </p><p className="card-para">Access quality medical care anytime with 24/7 doctor availability.</p>
                </div>
            </div>

            <div className="card" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-GhfFjyLZWPxqX8gdBArHKMbVOEF2HnvQA&s")' }}>
                <div className="card-content">
                    <p className="card-title">Urgent Care
                    </p><p className="card-para">Immediate care for minor emergencies without the wait.</p>
                </div>
            </div>

        </div>
    )
}

export default AboutCare