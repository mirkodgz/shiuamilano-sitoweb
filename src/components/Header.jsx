import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    {/* Left Link (Desktop) */}
                    <div className="nav-link-desktop">
                        <Link to="/chi-siamo" className="nav-link">
                            Chi Siamo
                        </Link>
                    </div>

                    {/* Logo Center */}
                    <div className="logo-container">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <img
                                src="/assets/SHIUA-Logo-Header.svg"
                                alt="Shiua Milano"
                                className="logo-img"
                            />
                        </Link>
                    </div>

                    {/* Right Link (Desktop) */}
                    <div className="nav-link-desktop">
                        <Link to="/contattaci" className="nav-link">
                            Contattaci
                        </Link>
                    </div>

                    {/* Content inside header remains same until the button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {/* Modern Hamburger: thin lines, usually represented by Menu or AlignRight. Let's stick to standard Menu but styled cleanly. */}
                        {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Moved outside header to avoid containing block issues */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mobile-menu"
                    >
                        <div className="mobile-menu-links">
                            <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                            <Link to="/chi-siamo" className="mobile-link" onClick={() => setIsOpen(false)}>
                                Chi Siamo
                            </Link>
                            <Link to="/contattaci" className="mobile-link" onClick={() => setIsOpen(false)}>
                                Contattaci
                            </Link>
                            <Link to="/prenota" className="mobile-link" onClick={() => setIsOpen(false)}>
                                Prenota tavolo
                            </Link>
                        </div>

                        <div className="mobile-menu-social">
                            <span className="social-label">Seguici su</span>
                            <div className="social-icons-mobile">
                                <a href="https://www.instagram.com/shiuamilano" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                                    <Instagram size={32} />
                                </a>
                                <a href="https://www.facebook.com/shiuamilano" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                                    <Facebook size={32} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
