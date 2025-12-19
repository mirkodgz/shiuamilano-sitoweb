import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical }) => {
    const siteTitle = 'SHIUA Milano | Enoteca Wine Bar';
    const finalTitle = title ? `${title} | SHIUA Milano` : siteTitle;
    const finalDescription = description || "Enoteca SHIUA Milano, un'oasi enologica nel cuore della città che fonde la passione per il vino con l'ispirazione dell'Amazzonia ecuadoriana.";

    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            {canonical && <link rel="canonical" href={`https://shiuamilano.it${canonical}`} />}

            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="SHIUA Milano" />
            <meta property="og:locale" content="it_IT" />
            {/* Additional meta tags can be added here */}
        </Helmet>
    );
};

export default SEO;
