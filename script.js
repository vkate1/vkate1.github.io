/* ==========================================================================
   DAA Course Web Portal Logic - Theme Toggle & Binary Search Visualizer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const savedTheme = localStorage.getItem('daa-theme') || 'dark-theme';
    body.className = savedTheme;
    themeIcon.textContent = savedTheme === 'dark-theme' ? '☀️' : '🌙';

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            themeIcon.textContent = '🌙';
            localStorage.setItem('daa-theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            themeIcon.textContent = '☀️';
            localStorage.setItem('daa-theme', 'dark-theme');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 3. Binary Search Visualizer Demo
    const arrayContainer = document.getElementById('array-container');
    const runBtn = document.getElementById('run-btn');
    const searchInput = document.getElementById('search-input');
    const logOutput = document.getElementById('log-output');

    // Generate a sorted array of 15 numbers
    const sampleArray = Array.from({ length: 15 }, (_, i) => (i + 1) * 6);

    function renderArray(low = -1, high = -1, mid = -1, found = false) {
        arrayContainer.innerHTML = '';
        sampleArray.forEach((val, index) => {
            const bar = document.createElement('div');
            bar.className = 'array-bar';
            bar.textContent = val;

            if (found && index === mid) {
                bar.classList.add('found');
            } else if (index >= low && index <= high) {
                bar.classList.add('active');
            }
            arrayContainer.appendChild(bar);
        });
    }

    async function binarySearchVisualized(target) {
        let low = 0;
        let high = sampleArray.length - 1;
        logOutput.textContent = `Starting Binary Search for key ${target}...[cite: 1]`;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            renderArray(low, high, mid);
            logOutput.textContent = `Range [${sampleArray[low]} .. ${sampleArray[high]}]. Checking midpoint index ${mid} (value: ${sampleArray[mid]})...`;

            await new Promise(resolve => setTimeout(resolve, 1000));

            if (sampleArray[mid] === target) {
                renderArray(low, high, mid, true);
                logOutput.textContent = `🎯 Element ${target} found at index ${mid}! Complexity: O(log n) steps[cite: 1].`;
                return;
            } else if (sampleArray[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        renderArray();
        logOutput.textContent = `❌ Target ${target} not found in the array.`;
    }

    runBtn.addEventListener('click', () => {
        const val = parseInt(searchInput.value, 10);
        if (!isNaN(val)) {
            binarySearchVisualized(val);
        }
    });

    // Initial render
    renderArray();
});