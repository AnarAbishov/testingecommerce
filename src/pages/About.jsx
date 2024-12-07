import React from 'react';

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Haqqımızda</h1>
                <p>Sizə ən yaxşı alış-veriş təcrübəsini təqdim edirik!</p>
            </div>
            <div className="about-content">
                <div className="about-section">
                    <h2>Biz Kimik?</h2>
                    <p>
                        Bizim şirkətimiz, keyfiyyətli məhsulları və müştəri məmnuniyyətini ön planda tutaraq,
                        müasir e-ticarət dünyasında öz yerini almışdır. Məqsədimiz, müştərilərimizə
                        etibarlı, sürətli və əlçatan alış-veriş imkanları təqdim etməkdir.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Missiyamız</h2>
                    <p>
                        Bizim missiyamız, hər kəs üçün rahat və innovativ bir alış-veriş təcrübəsi yaratmaqdır.
                        Geniş məhsul çeşidlərimiz və müştəri yönümlü xidmətlərimizlə sizin ehtiyaclarınızı qarşılamağa çalışırıq.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Dəyərlərimiz</h2>
                    <ul>
                        <li>Keyfiyyətli məhsul təminatı</li>
                        <li>Müştəri məmnuniyyəti</li>
                        <li>Etibarlı və şəffaf xidmət</li>
                        <li>İnovasiya və davamlı inkişaf</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
