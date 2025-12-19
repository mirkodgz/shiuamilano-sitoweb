import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Raccontaci.css';

const Raccontaci = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                // Check if it's safe to remove
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="raccontaci-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="raccontaci-title">Raccontaci la tua esperienza</h1>
                <p className="raccontaci-text">
                    Aiutaci a migliorare! Condividi con noi cosa ti è piaciuto o cosa possiamo fare meglio.
                    Le tue opinioni sono preziose per offrirti un servizio sempre migliore.
                </p>

                <div className="feedback-form-wrapper" style={{ minHeight: '400px' }}>
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/form/J9kAkrL1O72Z3l1KIsAa"
                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px', minHeight: '402px' }}
                        id="inline-J9kAkrL1O72Z3l1KIsAa"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Raccontaci la tua esperienza a SHIUA Milano"
                        data-height="402"
                        data-layout-iframe-id="inline-J9kAkrL1O72Z3l1KIsAa"
                        data-form-id="J9kAkrL1O72Z3l1KIsAa"
                        title="Raccontaci la tua esperienza a SHIUA Milano"
                    >
                    </iframe>
                </div>
            </motion.div>
        </div>
    );
};

export default Raccontaci;
