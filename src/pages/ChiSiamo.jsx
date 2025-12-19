import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './ChiSiamo.css';

const ChiSiamo = () => {
    return (
        <div className="chi-siamo-container">
            <SEO
                title="Chi Siamo"
                description="Scopri la storia di SHIUA Milano, dove la passione per il vino incontra le radici dell'Amazzonia. La nostra filosofia e il nostro team."
                canonical="/chi-siamo"
            />
            <div className="chi-siamo-grid">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="chi-siamo-title-badge">
                        Chi Siamo
                    </div>

                    <p className="chi-siamo-text">
                        Enoteca <span className="highlight">SHIUA Milano</span>, un'oasi enologica nel cuore della città, dove la passione per il vino si fonde armoniosamente con l'ispirazione tratta dalla cultura e dalla natura dei popoli indigeni dell'Amazzonia ecuadoriana.
                    </p>

                    <p className="chi-siamo-text">
                        Qui, ogni bottiglia racconta una storia millenaria, intrecciando tradizione e innovazione in un viaggio sensoriale unico nel suo genere.
                    </p>

                    <p className="chi-siamo-text">
                        Attraverso il nome "SHIUA", celebriamo la ricchezza delle tradizioni culturali e il rispetto per l'ambiente, fondendo sapientemente passato e presente in ogni sorso.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="chi-siamo-img-container"
                >
                    {/* Image Placeholder */}
                    <img src="/assets/Image-Chi-Siamo-Section.jpeg" alt="Shiua Milano Interior" className="chi-siamo-img" />
                </motion.div>
            </div>
        </div>
    );
};

export default ChiSiamo;
