import { Phone } from 'lucide-react';
import './HoursInfo.css';

const HoursInfo = () => {
    const schedule = [
        { day: 'Lunedì', time: 'CHIUSO' },
        { day: 'Martedì', time: '18:00 - 24:00' },
        { day: 'Mercoledì', time: '18:00 - 24:00' },
        { day: 'Giovedì', time: '18:00 - 24:00' },
        { day: 'Venerdì', time: '18:00 - 24:00' },
        { day: 'Sabato', time: '18:00 - 24:00' },
        { day: 'Domenica', time: '17:30 - 22:30' },
    ];

    return (
        <div className="hours-info-container">
            {/* Orari Section */}
            <div className="section-badge">Orari</div>

            <div className="hours-list">
                {schedule.map((slot, index) => (
                    <div key={index} className="hours-row">
                        <span className="day-name">{slot.day}</span>
                        <div className="separator-line"></div>
                        <span className="time-range">{slot.time}</span>
                    </div>
                ))}
            </div>

            {/* Importante Section */}
            <div className="section-badge">Importante</div>

            <p className="important-text">
                *Per gruppi da 6/8 persone chiamare dalle 17:30 alle 22:00
            </p>

            <a href="tel:0209959584" className="phone-link">
                <Phone size={20} fill="currentColor" /> 02 0995 9584
            </a>
        </div>
    );
};

export default HoursInfo;
