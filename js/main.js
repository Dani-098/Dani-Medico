/**
 * Dani Medico - Main JavaScript (Vanilla ES6)
 * Handles data, routing, localStorage, modals, and content rendering.
 */

// --- GLOBAL DATA STRUCTURE (Simulated CDN/Backend) ---

// Placeholder for content data (Lectures, Notes, Tests, Papers)
// NOTE: FILE_ID must be replaced with actual Google Drive File IDs.
const data = {
    MDCAT: {
        Sindh: {
            lectures: [
                { id: '1A-MDCAT-S-Bio-001', title: 'Biology: Cell Structure', teacher: 'Dr. Ali', duration: '45 min', subject: 'Biology', fileId: 'PLACEHOLDER_FILE_ID_MDCAT_BIO_1', dateAdded: '2025-11-20' },
                { id: '1A-MDCAT-S-Chem-001', title: 'Chemistry: Basic Concepts', teacher: 'Prof. Sana', duration: '60 min', subject: 'Chemistry', fileId: 'PLACEHOLDER_FILE_ID_MDCAT_CHEM_1', dateAdded: '2025-11-21' }
            ],
            notes: [
                { id: '2A-MDCAT-S-Note-Bio', title: 'Biology: Full Notes', subject: 'Biology', fileId: 'PLACEHOLDER_FILE_ID_MDCAT_NOTE_BIO' },
                { id: '2A-MDCAT-S-Note-Phys', title: 'Physics: Key Formulas', subject: 'Physics', fileId: 'PLACEHOLDER_FILE_ID_MDCAT_NOTE_PHYS' }
            ],
            tests: [
                { id: '3A-MDCAT-S-T01', title: 'Biology Mock Test 1', type: 'MCQ', questions: 20, time: 30, exam: 'MDCAT', province: 'Sindh' }
            ],
            papers: [
                { id: '4A-MDCAT-S-2024', title: 'MDCAT Sindh 2024 Paper', year: 2024, fileId: 'PLACEHOLDER_FILE_ID_MDCAT_PAPER_2024' }
            ]
        },
        Punjab: {
            lectures: [
                { id: '1B-MDCAT-P-Bio-001', title: 'Biology: Punjab Syllabus Focus', teacher: 'Dr. Fatima', duration: '50 min', subject: 'Biology', fileId: 'PLACEHOLDER_FILE_ID_MDCAT_P_BIO_1', dateAdded: '2025-12-01' }
            ],
            notes: [],
            tests: [],
            papers: []
        },
        KPK: { lectures: [], notes: [], tests: [], papers: [] },
        Balochistan: { lectures: [], notes: [], tests: [], papers: [] }
    },
    NUMS: {
        Sindh: { lectures: [], notes: [], tests: [], papers: [] },
        Punjab: { lectures: [], notes: [], tests: [], papers: [] },
        KPK: { lectures: [], notes: [], tests: [], papers: [] },
        Balochistan: { lectures: [], notes: [], tests: [], papers: [] }
    }
    // ... AFNS and AKU data structure would be similar ...
};

// Placeholder for Announcements
const announcements = [
    { title: "MDCAT 2025 Syllabus Update", date: "2025-01-15", category: "MDCAT", priority: "New", content: "The PMC has announced a major syllabus change for the 2025 entry test." },
    { title: "AFNS Admission Cycle Open", date: "2025-12-10", category: "AFNS", priority: "Important", content: "The Armed Forces Nursing Service application window is now open. Apply before the deadline." },
    { title: "Dashboard Maintenance Notice", date: "2025-12-05", category: "General", priority: "New", content: "Minor dashboard improvements are being deployed on 2025-12-06." },
    { title: "NUMS Test Dates Announced", date: "2025-11-25", category: "NUMS", priority: "Important", content: "Check the official NUMS website for updated test schedules." },
    // More announcements...
].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending

// --- GOOGLE DRIVE URL CONSTRUCTORS ---

/**
 * Generates the Google Drive video embed URL.
 * @param {string} fileId - The Google Drive file ID.
 * @returns {string} The URL for embedding the video.
 */
function getVideoEmbedUrl(fileId) {
    if (!fileId || fileId.includes('PLACEHOLDER')) return '';
    return `https://drive.google.com/file/d/${fileId}/preview`;
}

/**
 * Generates the Google Drive PDF direct view URL.
 * @param {string} fileId - The Google Drive file ID.
 * @returns {string} The URL for displaying the PDF in an iframe.
 */
function getPdfViewUrl(fileId) {
    if (!fileId || fileId.includes('PLACEHOLDER')) return '';
    return `https://drive.google.com/uc?id=${fileId}&export=view`;
}

/**
 * Generates the Google Drive PDF direct download URL.
 * @param {string} fileId - The Google Drive file ID.
 * @returns {string} The URL for downloading the file.
 */
function getPdfDownloadUrl(fileId) {
    if (!fileId || fileId.includes('PLACEHOLDER')) return '#';
    return `https://drive.google.com/uc?id=${fileId}&export=download`;
}


// --- UX/UI & MODAL FUNCTIONS ---

/**
 * Toggles the mobile navigation menu's visibility.
 */
function mobileMenuToggle() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

/**
 * Opens a generic modal by its ID.
 * @param {string} modalId - The ID of the modal element.
 */
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    // Optional: Add 'modal-open' class to body to prevent scrolling
    document.body.style.overflow = 'hidden';
}

/**
 * Closes a generic modal by its ID.
 * @param {string} modalId - The ID of the modal element.
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
    // Clean up modals specific content on close
    if (modalId === 'videoModal') {
        document.getElementById('video-iframe').src = '';
    }
    if (modalId === 'pdfModal') {
        document.getElementById('pdf-iframe').src = '';
    }
    document.body.style.overflow = '';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const videoModal = document.getElementById('videoModal');
    const pdfModal = document.getElementById('pdfModal');
    if (event.target === videoModal) {
        closeModal('videoModal');
    }
    if (event.target === pdfModal) {
        closeModal('pdfModal');
    }
}

/**
 * Opens the video modal and embeds the Google Drive video.
 * @param {string} fileId - The Google Drive file ID for the video.
 * @param {string} title - The title of the lecture.
 */
function openVideoModal(fileId, title) {
    const iframe = document.getElementById('video-iframe');
    const modalTitle = document.getElementById('modal-lecture-title');

    if (!fileId || fileId.includes('PLACEHOLDER')) {
        alert('Content is a placeholder. No video available yet!');
        return;
    }

    iframe.src = getVideoEmbedUrl(fileId);
    modalTitle.textContent = title;
    openModal('videoModal');
}

/**
 * Opens the PDF modal and embeds the Google Drive PDF for viewing.
 * @param {string} fileId - The Google Drive file ID for the PDF.
 * @param {string} title - The title of the note/paper.
 */
function openPDF(fileId, title) {
    const iframe = document.getElementById('pdf-iframe');
    const modalTitle = document.getElementById('modal-pdf-title');

    if (!fileId || fileId.includes('PLACEHOLDER')) {
        alert('Content is a placeholder. No PDF available yet!');
        return;
    }

    iframe.src = getPdfViewUrl(fileId);
    modalTitle.textContent = title;
    openModal('pdfModal');
}


// --- LOCAL STORAGE & SELECTION FUNCTIONS ---

/**
 * Saves the user's selected exam and province to localStorage.
 * Called from exams.html
 */
function saveUserSelection() {
    const exam = document.getElementById('exam-selector').value;
    const province = document.getElementById('province-selector').value;

    localStorage.setItem('userExam', exam);
    localStorage.setItem('userProvince', province);

    // Optionally redirect to dashboard after saving
    window.location.href = 'dashboard.html';
}

/**
 * Filters the content by exam selection (called from content pages).
 * @returns {void}
 */
function filterByExam() {
    const selectedExam = document.getElementById('filter-exam').value;
    if (selectedExam !== 'all') {
        localStorage.setItem('userExam', selectedExam);
    } else {
        localStorage.removeItem('userExam');
    }
}

/**
 * Filters the content by province selection (called from content pages).
 * @returns {void}
 */
function filterByProvince() {
    const selectedProvince = document.getElementById('filter-province').value;
    if (selectedProvince !== 'all') {
        localStorage.setItem('userProvince', selectedProvince);
    } else {
        localStorage.removeItem('userProvince');
    }
}


// --- DATA FETCHING AND RENDERING FUNCTIONS ---

/**
 * Helper to get content array based on selection or all available content.
 * @param {string} contentType - 'lectures', 'notes', 'tests', or 'papers'.
 * @param {string} [exam='all'] - The selected exam.
 * @param {string} [province='all'] - The selected province.
 * @returns {Array} Array of content objects.
 */
function getContentArray(contentType, exam = 'all', province = 'all') {
    let result = [];
    const exams = exam === 'all' ? Object.keys(data) : [exam];
    const provinces = province === 'all' ? ['Sindh', 'Punjab', 'KPK', 'Balochistan'] : [province];

    for (const ex of exams) {
        if (data[ex]) {
            for (const prov of provinces) {
                if (data[ex][prov] && data[ex][prov][contentType]) {
                    // Attach exam and province for later filtering/display
                    result.push(...data[ex][prov][contentType].map(item => ({...item, exam: ex, province: prov})));
                }
            }
        }
    }
    return result;
}

/**
 * Loads and displays data on the Dashboard page.
 */
function loadDashboard() {
    const exam = localStorage.getItem('userExam');
    const province = localStorage.getItem('userProvince');
    const dashExam = document.getElementById('selected-exam');
    const dashProvince = document.getElementById('selected-province');

    // 1. Update Selection Display
    dashExam.textContent = exam || 'All Exams (Click "Change Selection")';
    dashProvince.textContent = province || 'All Provinces (Click "Change Selection")';

    // 2. Calculate Quick Stats
    const allLectures = getContentArray('lectures', exam, province);
    const allNotes = getContentArray('notes', exam, province);
    const allTests = getContentArray('tests', exam, province);
    const allPapers = getContentArray('papers', exam, province);

    document.getElementById('stat-lectures').textContent = allLectures.length;
    document.getElementById('stat-notes').textContent = allNotes.length;
    document.getElementById('stat-tests').textContent = allTests.length;
    document.getElementById('stat-papers').textContent = allPapers.length;

    // 3. Load Latest Announcements (last 3)
    const dashboardAnnouncements = announcements.slice(0, 3);
    const dashAnnouncementsContainer = document.getElementById('dashboard-announcements');
    if (dashAnnouncementsContainer) {
        dashAnnouncementsContainer.innerHTML = dashboardAnnouncements.map(ann => createAnnouncementCard(ann)).join('');
    }

    // 4. Load Recently Added Lectures (last 3, sorted by date)
    const sortedLectures = allLectures.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 3);
    const recentLecturesContainer = document.getElementById('recent-lectures-list');
    if (recentLecturesContainer) {
        recentLecturesContainer.innerHTML = sortedLectures.map(lec => createLectureCard(lec)).join('');
    }
}

/**
 * Loads and displays announcements on the Home page (latest 2).
 */
function loadHomeAnnouncements() {
    const homeAnnouncements = announcements.slice(0, 2);
    const homeAnnouncementsContainer = document.getElementById('home-announcements');
    if (homeAnnouncementsContainer) {
        homeAnnouncementsContainer.innerHTML = homeAnnouncements.map(ann => createAnnouncementCard(ann)).join('');
    }
}

/**
 * Creates the HTML for an announcement card.
 * @param {object} ann - Announcement object.
 * @returns {string} HTML string for the card.
 */
function createAnnouncementCard(ann) {
    const priorityBadge = ann.priority ? `<span class="badge badge-${ann.priority.toLowerCase()}">${ann.priority}</span>` : '';
    return `
        <div class="card announcement-card">
            <h4>${ann.title} ${priorityBadge}</h4>
            <p><i class="fas fa-calendar-alt"></i> ${ann.date} | <i class="fas fa-tag"></i> ${ann.category}</p>
            <p>${ann.content.substring(0, 100)}...</p>
            <a href="announcements.html" class="button tertiary-button" style="margin-top: auto;">Read More</a>
        </div>
    `;
}

/**
 * Loads and displays lectures on the Lectures page.
 */
function loadLectures() {
    const exam = document.getElementById('filter-exam').value;
    const province = document.getElementById('filter-province').value;
    const subject = document.getElementById('filter-subject').value;
    const container = document.getElementById('lectures-container');
    const noContentMessage = document.getElementById('no-content-message');

    let filteredLectures = getContentArray('lectures', exam, province);

    // Apply subject filter
    if (subject !== 'all') {
        filteredLectures = filteredLectures.filter(lec => lec.subject === subject);
    }

    if (filteredLectures.length === 0) {
        container.innerHTML = '';
        noContentMessage.classList.remove('hidden');
    } else {
        container.innerHTML = filteredLectures.map(lec => createLectureCard(lec)).join('');
        noContentMessage.classList.add('hidden');
    }
}

/**
 * Creates the HTML for a lecture card.
 * @param {object} lec - Lecture object.
 * @returns {string} HTML string for the card.
 */
function createLectureCard(lec) {
    return `
        <div class="card lecture-card">
            <h4>${lec.title}</h4>
            <p><strong>Subject:</strong> ${lec.subject}</p>
            <p><strong>Teacher:</strong> ${lec.teacher}</p>
            <p><strong>Duration:</strong> ${lec.duration}</p>
            <p class="meta-info">(${lec.exam} - ${lec.province})</p>
            <button class="button primary-button" onclick="openVideoModal('${lec.fileId}', '${lec.title}')">
                <i class="fas fa-play-circle"></i> Watch Lecture
            </button>
        </div>
    `;
}

// --- INITIALIZATION (Ensure functions are globally accessible and safe) ---

document.addEventListener('DOMContentLoaded', () => {
    // This is for dynamic pages, but here for completeness
    const body = document.body;
    if (body.classList.contains('dashboard-page')) {
        loadDashboard();
    }
    // ... other page-specific initializers ...
});

// For demonstration/testing, expose required functions globally
window.mobileMenuToggle = mobileMenuToggle;
window.saveUserSelection = saveUserSelection;
window.loadDashboard = loadDashboard;
window.filterByExam = filterByExam;
window.filterByProvince = filterByProvince;
window.loadLectures = loadLectures;
window.openVideoModal = openVideoModal;
window.openPDF = openPDF;
window.closeModal = closeModal;
window.loadHomeAnnouncements = loadHomeAnnouncements;
