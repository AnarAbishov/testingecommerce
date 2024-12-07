import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form məlumatlarının işlənməsi
        console.log('Form Data:', formData);
        alert('Mesajınız uğurla göndərildi!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Bizimlə Əlaqə</h1>
                <p>Hər hansı bir sualınız və ya təklifiniz varsa, bizimlə əlaqə saxlamaqdan çəkinməyin!</p>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Adınız</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Adınızı daxil edin"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Emailinizi daxil edin"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Mesajınız</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Mesajınızı yazın"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Göndər</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
