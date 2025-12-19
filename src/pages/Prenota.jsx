import { motion } from 'framer-motion';
import { useEffect } from 'react';
import HoursInfo from '../components/HoursInfo';
import SEO from '../components/SEO';
import './Prenota.css';

const Prenota = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                // Usually we remove scripts on unmount, but ensuring clean state is good
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="prenota-page-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <SEO
                    title="Prenota un Tavolo"
                    description="Prenota il tuo tavolo da SHIUA Milano. Assicura il tuo posto per una serata indimenticabile di vino e gusto."
                    canonical="/prenota"
                />
                {/* Intro Text */}
                <div className="intro-text">
                    <p>
                        Prenota ora il tuo tavolo con un <strong>semplice click</strong>.<br />
                        Ti aspettiamo per offrirti un'esperienza indimenticabile
                    </p>
                </div>

                {/* Hours Info Component */}
                <HoursInfo />

                {/* Title Badge */}
                <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto 1rem' }}>
                    <div className="section-badge-prenota">Prenota un tavolo</div>
                </div>

                {/* Booking Widget Embed */}
                <div style={{ width: '100%', minHeight: '600px' }}>
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/lI62xZDtlslqfeDy49Ov"
                        style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }}
                        scrolling="no"
                        id="lI62xZDtlslqfeDy49Ov_1766159476523"
                        title="Booking Widget"
                    ></iframe>
                </div>

            </motion.div>
        </div>
    );
};

export default Prenota;
