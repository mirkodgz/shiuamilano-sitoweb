import { useEffect } from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    useEffect(() => {
        // Load GoHighLevel form script
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <footer className="footer">
            <div className="container">

                {/* Newsletter */}
                <div className="newsletter-section">
                    <h3 className="newsletter-badge">
                        Newsletter
                    </h3>
                    <p className="newsletter-text">
                        Unisciti alla nostra newsletter esclusiva per restare sempre aggiornato sulle ultime novità.
                    </p>
                    <div className="newsletter-form-container" style={{ minHeight: 'auto', maxWidth: '600px', margin: '0 auto' }}>
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/form/royx4ixazV1tFBTB3Z7Y"
                            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: 'auto' }}
                            id="inline-royx4ixazV1tFBTB3Z7Y"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Newsletter - Sitoweb"
                            data-height="492"
                            data-layout-iframe-id="inline-royx4ixazV1tFBTB3Z7Y"
                            data-form-id="royx4ixazV1tFBTB3Z7Y"
                            title="Newsletter - Sitoweb"
                        >
                        </iframe>
                    </div>
                </div>

                {/* Social & Contact */}
                <div className="social-section">
                    <div className="social-icons">
                        <a href="https://www.instagram.com/shiuamilano" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={24} /></a>
                        <a href="https://www.facebook.com/shiuamilano" target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={24} /></a>
                    </div>
                    <a href="mailto:info@shiuamilano.it" className="contact-item">
                        <Mail size={16} /> info@shiuamilano.it
                    </a>
                    <a href="tel:0209959584" className="contact-item">
                        <Phone size={16} /> 02 0995 9584
                    </a>
                    <a href="https://maps.app.goo.gl/E1o8nUZrqiJn7G776" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <MapPin size={16} /> Via Solari 43, Milano, 20144
                    </a>
                    <a href="https://wa.link/nn91yj" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                        WhatsApp
                    </a>
                </div>

                {/* Legal */}
                <div className="footer-bottom">
                    <div className="footer-links">
                        <a href="https://www.iubenda.com/privacy-policy/50674658/legal" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Policy</a>
                        <a href="https://www.iubenda.com/privacy-policy/50674658/cookie-policy" target="_blank" rel="noopener noreferrer" className="footer-link">Cookie Policy</a>
                    </div>
                    <p>© 2026 SHIUA Milano – All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
