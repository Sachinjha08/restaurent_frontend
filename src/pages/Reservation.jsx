import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Reservation = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/v1/reservation', formData);
            toast.success('Reservation submitted successfully!');
            console.log('Reservation submitted:', response.data);
        } catch (error) {
            toast.error('Error submitting reservation.');
            console.error('Error submitting reservation:', error);
        }
    };

    return (
        <div className='reserve'>
            <h1 className='Title'>Make a Reserve</h1>
            <div className="reservation-wrapper">
                <div className="reservation-column image-column">
                    <img
                        src="https://librorez.com/wp-content/uploads/2022/12/Jan-Blog-Featured-Image-1024x683.jpg"
                        alt="Awesome View"
                        className="reservation-image"
                    />
                </div>
                <div className="reservation-column form-column">
                    <form className="reservation-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Submit Reservation</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
