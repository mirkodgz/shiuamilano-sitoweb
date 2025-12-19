import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Contattaci from './pages/Contattaci';
import Prenota from './pages/Prenota';
import Raccontaci from './pages/Raccontaci';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const AppContent = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if preloader has shown in this session
        const hasLoaded = sessionStorage.getItem('shiuaLoaded');

        // Only show preloader on initial visit (if not loaded before)
        if (hasLoaded) {
            setLoading(false);
        } else {
            const timer = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem('shiuaLoaded', 'true');
            }, 2500); // 2.5 seconds duration
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div className="app">
            <AnimatePresence mode="wait">
                {loading && <Preloader key="preloader" />}
            </AnimatePresence>

            {/* We show the content but it might animate in after preloader */}
            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Header />
                    <ScrollToTop />
                    <main>
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                                <Route path="/chi-siamo" element={<PageTransition><ChiSiamo /></PageTransition>} />
                                <Route path="/contattaci" element={<PageTransition><Contattaci /></PageTransition>} />
                                <Route path="/prenota" element={<PageTransition><Prenota /></PageTransition>} />
                                <Route path="/raccontaci-la-tua-esperienza" element={<PageTransition><Raccontaci /></PageTransition>} />
                            </Routes>
                        </AnimatePresence>
                    </main>
                    <Footer />
                </motion.div>
            )}
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
