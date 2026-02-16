/* ===== RESET & BASE STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --dark-color: #1f2937;
    --light-color: #f9fafb;
    --text-color: #374151;
    --text-light: #6b7280;
    --white: #ffffff;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== NAVIGATION BAR ===== */
.navbar {
    background: var(--white);
    box-shadow: var(--shadow);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    cursor: pointer;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

/* Hamburger Menu (Mobile) */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--dark-color);
    transition: all 0.3s ease;
}

/* ===== HERO SECTION ===== */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: var(--white);
    padding: 150px 2rem 100px;
    text-align: center;
    margin-top: 70px;
}

.hero-content {
    max-width: 900px;
    margin: 0 auto;
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1rem;
    animation: fadeInUp 0.8s ease;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    opacity: 0.95;
    animation: fadeInUp 0.8s ease 0.2s backwards;
}

.hero-institution {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 3rem;
    animation: fadeInUp 0.8s ease 0.4s backwards;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    animation: fadeInUp 0.8s ease 0.6s backwards;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    display: block;
}

.stat-label {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-top: 0.5rem;
}

/* ===== SECTIONS ===== */
.section {
    padding: 80px 20px;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--dark-color);
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
}

/* ===== ABOUT SECTION ===== */
.about {
    background: var(--white);
}

.about-content {
    max-width: 900px;
    margin: 0 auto 3rem;
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 1.5rem;
    text-align: center;
}

.subsection-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--dark-color);
    margin-bottom: 1.5rem;
    text-align: center;
}

.research-areas {
    margin-top: 3rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
}

.tag {
    background: var(--light-color);
    padding: 0.6rem 1.2rem;
    border-radius: 25px;
    font-size: 0.95rem;
    color: var(--text-color);
    border: 2px solid #e5e7eb;
    transition: all 0.3s ease;
}

.tag:hover {
    background: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
    transform: translateY(-2px);
}

/* ===== EXPERIENCE SECTION ===== */
.experience {
    background: var(--light-color);
}

.timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding-left: 30px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: var(--primary-color);
}

.timeline-item {
    margin-bottom: 3rem;
    position: relative;
}

.timeline-marker {
    position: absolute;
    left: -36px;
    top: 0;
    width: 15px;
    height: 15px;
    background: var(--primary-color);
    border-radius: 50%;
    border: 3px solid var(--white);
    box-shadow: var(--shadow);
}

.timeline-content {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-lg);
}

.timeline-date {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 0.5rem;
}

.timeline-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--dark-color);
    margin-bottom: 0.3rem;
}

.timeline-company {
    font-size: 1.1rem;
    color: var(--text-light);
    margin-bottom: 1rem;
}

.timeline-list {
    list-style: none;
    margin-top: 1rem;
}

.timeline-list li {
    padding: 0.4rem 0;
    color: var(--text-light);
    position: relative;
    padding-left: 1.5rem;
}

.timeline-list li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

/* ===== EDUCATION SECTION ===== */
.education {
    background: var(--white);
}

.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.education-card {
    background: var(--light-color);
    padding: 2.5rem;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid #e5e7eb;
}

.education-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.degree-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.degree-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--dark-color);
    margin-bottom: 0.8rem;
}

.institution {
    color: var(--text-light);
    margin-bottom: 0.5rem;
}

.year {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 1rem;
}

.achievement {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
}

.badge {
    background: var(--primary-color);
    color: var(--white);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    display: inline-block;
}

/* ===== SKILLS SECTION ===== */
.skills {
    background: var(--light-color);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.skill-category {
    background: var(--white);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
    border-top: 4px solid var(--primary-color);
}

.skill-category:hover {
    transform: translateY(-5px);
}

.skill-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.skill-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--dark-color);
    margin-bottom: 1.5rem;
}

.skill-list {
    list-style: none;
}

.skill-list li {
    padding: 0.6rem 0;
    color: var(--text-light);
    position: relative;
    padding-left: 1.5rem;
}

.skill-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

/* Certifications */
.certifications-highlight {
    background: var(--white);
    padding: 3rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.cert-badges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.cert-badge {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: var(--white);
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

.cert-badge:hover {
    transform: scale(1.05);
}

.cert-name {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.cert-org {
    font-size: 0.9rem;
    opacity: 0.9;
}

/* ===== CONTACT SECTION ===== */
.contact {
    background: var(--white);
}

.contact-content {
    max-width: 900px;
    margin: 0 auto;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.contact-item {
    background: var(--light-color);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s ease;
    border: 2px solid #e5e7eb;
}

.contact-item:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
}

.contact-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.contact-details h4 {
    font-size: 1.1rem;
    color: var(--dark-color);
    margin-bottom: 0.5rem;
}

.contact-details a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.contact-details a:hover {
    color: var(--secondary-color);
}

.contact-details p {
    color: var(--text-light);
}

/* ===== FOOTER ===== */
.footer {
    background: var(--dark-color);
    color: var(--white);
    text-align: center;
    padding: 3rem 2rem;
}

.footer p {
    margin-bottom: 0.5rem;
}

.footer-quote {
    font-style: italic;
    opacity: 0.8;
    margin-top: 1rem;
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: var(--white);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: var(--shadow-lg);
        padding: 2rem 0;
        gap: 1rem;
    }

    .nav-menu.active {
        left: 0;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .hero-stats {
        gap: 2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .timeline {
        padding-left: 20px;
    }

    .timeline-marker {
        left: -29px;
    }

    .skills-grid,
    .education-grid,
    .cert-badges,
    .contact-info {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 120px 1rem 80px;
    }

    .hero-title {
        font-size: 2rem;
    }

    .section {
        padding: 60px 15px;
    }

    .timeline-content {
        padding: 1.5rem;
    }
}
