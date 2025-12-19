import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import SEO from '../components/SEO';
import './Home.css';

import HoursInfo from '../components/HoursInfo';

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="home-page" ref={containerRef}>
            <SEO
                title="Home"
                description="SHIUA Enoteca Wine Bar a Milano. Un'esperienza unica di vini selezionati e atmosfera ispirata all'Amazzonia. Via Solari 43."
                canonical="/"
            />
            {/* Hero Section with Fixed Logo */}
            <section className="hero">
                <div
                    className="hero-content"
                >
                    <img
                        src="/assets/SHIUA-Logo-Hero-Paralex.png"
                        alt="Shiua Milano"
                        className="hero-logo-large"
                    />
                </div>
            </section>

            {/* Prenota Section */}
            <section className="prenota-section">
                <div className="prenota-container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="prenota-text">
                            Prenota ora il tuo tavolo con un <strong>semplice click</strong>.<br />
                            Ti aspettiamo per offrirti un'esperienza indimenticabile
                        </p>

                        {/* Reusable Hours Info Component */}
                        <HoursInfo />

                        <div className="prenota-card">
                            <div className="prenota-header">Prenota un tavolo</div>
                            <img src="/assets/Foto-Section-Prenota-Homepage.jpg" alt="Wine pouring" className="prenota-img" />
                            <div className="prenota-btn-container">
                                <a href="/prenota" className="prenota-btn">
                                    Prenota <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="info-icon"><Info size={29} /></div>
                            <div style={{ textAlign: 'left' }}>
                                <strong>In caso di ritardi di oltre 15 minuti, non possiamo garantire la vostra prenotazione.</strong><br />
                                La cucina chiude alle ore 22:30
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
