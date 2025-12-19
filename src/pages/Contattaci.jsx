import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import SEO from '../components/SEO';
import './Contattaci.css';

const Contattaci = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                // Ideally check if it's the specific script, but removing last child might be risky if multiple scripts added.
                // Generally GHL scripts are harmless to leave or just ensuring we don't duplicate is key on re-renders.
                // For safety in this specific context, we can just append.
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="contattaci-container">
            <SEO
                title="Contattaci"
                description="Contatta SHIUA Milano. Siamo in Via Solari 43. Chiamaci o scrivici per prenotazioni ed eventi privati."
                canonical="/contattaci"
            />
            <div className="contattaci-grid">

                {/* Contact Info (Left) */}
                <motion.div
                    className="info-section"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="info-group">
                        <h3>Trovaci !</h3>
                        <p className="info-text"><MapPin size={18} /> Via Solari 43, Milano, 20144</p>
                    </div>

                    <div className="info-group">
                        <h3>Inviaci Una Email</h3>
                        <p className="info-text"><Mail size={18} /> <a href="mailto:info@shiuamilano.it">info@shiuamilano.it</a></p>
                    </div>

                    <div className="info-group">
                        <h3>Chiamaci !</h3>
                        <p className="info-text"><Phone size={18} /> <a href="tel:0209959584">02 09959584</a></p>
                    </div>

                    <div className="info-group">
                        <h3>Seguici Su Instagram</h3>
                        <p className="info-text"><Instagram size={18} /> <a href="https://www.instagram.com/shiuamilano" target="_blank" rel="noopener noreferrer">shiuamilano</a></p>
                    </div>
                </motion.div>

                {/* Contact Form (Right) */}
                <motion.div
                    className="contact-form-section"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="form-header">
                        Contattaci
                    </div>

                    <p className="form-desc">
                        Compila il modulo sottostante o contattaci direttamente tramite telefono, whatsapp o email. Siamo ansiosi di sentirti e di rendere la tua esperienza indimenticabile presso SHIUA Milano Enoteca Wine Bar.
                    </p>

                    <div style={{ width: '100%', minHeight: '500px' }}>
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/form/rfpdWr8gxNH0GKsyIU3r"
                            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                            id="inline-rfpdWr8gxNH0GKsyIU3r"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Contact Form - Sitoweb"
                            data-height="480"
                            data-layout-iframe-id="inline-rfpdWr8gxNH0GKsyIU3r"
                            data-form-id="rfpdWr8gxNH0GKsyIU3r"
                            title="Contact Form - Sitoweb"
                        >
                        </iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contattaci;
