/* ==========================================================================
   CS601 Machine Learning Website JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Drawer Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // --- Back to Top Button Logic ---
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Dynamic Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });
});

// --- Unit Tab Switcher Function ---
function switchUnitTab(unitId) {
    // Hide all unit panes
    const panes = document.querySelectorAll('.unit-content-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    // Deactivate all tab buttons
    const buttons = document.querySelectorAll('.unit-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected unit pane
    const targetPane = document.getElementById(unitId);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    // Activate selected button
    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(unitId));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// --- Topic Search Filter Function ---
function filterTopics() {
    const input = document.getElementById('topicSearch');
    const filter = input.value.toLowerCase().trim();
    const topicCards = document.querySelectorAll('.topic-card');

    topicCards.forEach(card => {
        const titleText = card.querySelector('h4').textContent.toLowerCase();
        const idText = card.querySelector('.topic-id').textContent.toLowerCase();

        if (titleText.includes(filter) || idText.includes(filter)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    // If search active, reveal all unit panes so matching topics are visible across units
    if (filter.length > 0) {
        document.querySelectorAll('.unit-content-pane').forEach(pane => pane.classList.add('active'));
    } else {
        // Reset to initial tab state
        switchUnitTab('unit1');
    }
}

// --- Interactive Quiz Evaluator ---
function evaluateQuiz() {
    const questions = document.querySelectorAll('.quiz-question');
    let totalQuestions = questions.length;
    let score = 0;

    questions.forEach(q => {
        const correctAnswer = q.getAttribute('data-correct');
        const selectedOption = q.querySelector('input[type="radio"]:checked');
        const feedbackDiv = q.querySelector('.feedback');

        if (!selectedOption) {
            feedbackDiv.textContent = "⚠️ Please select an answer.";
            feedbackDiv.className = "feedback incorrect";
        } else if (selectedOption.value === correctAnswer) {
            score++;
            feedbackDiv.textContent = "✓ Correct!";
            feedbackDiv.className = "feedback correct";
        } else {
            feedbackDiv.textContent = `✗ Incorrect. Correct answer is option (${correctAnswer}).`;
            feedbackDiv.className = "feedback incorrect";
        }
    });

    // Show Score Summary
    const scoreDisplay = document.getElementById('quizResult');
    const percentage = Math.round((score / totalQuestions) * 100);

    let resultMsg = `Your Final Score: ${score} / ${totalQuestions} (${percentage}%) - `;
    if (percentage >= 80) {
        resultMsg += "🎉 Excellent work! Outstanding mastery.";
        scoreDisplay.style.color = "var(--success-color)";
    } else if (percentage >= 50) {
        resultMsg += "👍 Good effort! Review the missed topics.";
        scoreDisplay.style.color = "var(--primary-color)";
    } else {
        resultMsg += "📚 Keep studying! Review the unit PDF lecture notes.";
        scoreDisplay.style.color = "var(--danger-color)";
    }

    scoreDisplay.textContent = resultMsg;
}
