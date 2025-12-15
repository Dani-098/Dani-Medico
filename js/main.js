/**
 * Dani Medico - Main JavaScript (Vanilla ES6)
 * Handles data, routing, localStorage, modals, and content rendering.
 */

// --- GLOBAL DATA STRUCTURE (Simulated CDN/Backend) ---

// Replace 'PLACEHOLDER_FILE_ID' with actual Google Drive File IDs
const data = {
    MDCAT: {
        Sindh: {
            lectures: [
                { id: '1A-MDCAT-S-Bio-001', title: 'Biology: Cell Structure', teacher: 'Dr. Ali', duration: '45 min', subject: 'Biology', fileId: 'PLACEHOLDER_VIDEO_1', dateAdded: '2025-11-20' },
                { id: '1A-MDCAT-S-Chem-001', title: 'Chemistry: Basic Concepts', teacher: 'Prof. Sana', duration: '60 min', subject: 'Chemistry', fileId: 'PLACEHOLDER_VIDEO_2', dateAdded: '2025-11-21' }
            ],
            notes: [
                { id: '2A-MDCAT-S-Note-Bio', title: 'Biology: Cell Biology Notes', subject: 'Biology', fileId: 'PLACEHOLDER_PDF_1' },
                { id: '2A-MDCAT-S-Note-Phys', title: 'Physics: Key Formulas Sheet', subject: 'Physics', fileId: 'PLACEHOLDER_PDF_2' }
            ],
            tests: [
                { 
                    id: '3A-MDCAT-S-T01', title: 'MDCAT Sindh Biology Mock Test 1', type: 'MCQ', questions: 3, time: 5, exam: 'MDCAT', province: 'Sindh',
                    mcqs: [
                        { q: "The powerhouse of the cell is:", options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"], answer: 2 },
                        { q: "What is the primary function of chlorophyll?", options: ["Respiration", "Digestion", "Photosynthesis", "Circulation"], answer: 2 },
                        { q: "Which of the following is an inert gas?", options: ["Oxygen", "Nitrogen", "Argon", "Fluorine"], answer: 2 }
                    ]
                }
            ],
            papers: [
                { id: '4A-MDCAT-S-2024', title: 'MDCAT Sindh 2024 Paper', year: 2024, fileId: 'PLACEHOLDER_PDF_3', download: true }
            ]
        },
        Punjab: {
            lectures: [
                { id: '1B-MDCAT-P-Bio-001', title: 'Biology: Punjab Syllabus Focus', teacher: 'Dr. Fatima', duration: '50 min', subject: 'Biology', fileId: 'PLACEHOLDER_VIDEO_3', dateAdded: '2025-12-01' }
            ],
            notes: [], tests: [], papers: []
        },
        KPK: { lectures: [], notes: [], tests: [], papers: [] },
        Balochistan: { lectures: [], notes: [], tests: [], papers: [] }
    },
    NUMS: {
        Sindh: { lectures: [], notes: [], tests: [], papers: [] },
        Punjab: { lectures: [], notes: [], tests: [], papers: [] },
        AFNS: { lectures: [], notes: [], tests: [], papers: [] },
        AKU: { lectures: [], notes: [], tests: [], papers: [] }
    }
};

// Placeholder for Announcements
const announcements = [
    { title: "MDCAT 2025 Syllabus Update", date: "2025-01-15", category: "MDCAT", priority: "New", content: "The PMC has announced a major syllabus change for the 2025 entry test." },
    { title: "AFNS Admission Cycle Open", date: "2025-12-10", category: "AFNS", priority: "Important", content: "The Armed Forces Nursing Service application window is now open. Apply before the deadline." },
    { title: "Dashboard Maintenance Notice", date: "2025-12-05", category: "General", priority: "New", content: "Minor dashboard improvements are being deployed on 2025-12-06." },
].sort((a, b) => new Date(b.date) - new Date(a.date));

let currentTest = null; // Store the currently active test data

// --- GOOGLE DRIVE URL CONSTRUCTORS ---

function getVideoEmbedUrl(fileId) {
    if (!fileId || fileId.includes('PLACEHOLDER')) return '';
    return `https://drive.google.com/file/d/${fileId}/preview`;
}

function getPdfViewUrl(fileId) {
    if (!fileId || fileId.includes('PLACEHOLDER')) return '';
    return `https://drive.google.com/uc?id=${fileId}&export=view`;
}

function getPdfDownloadUrl(fileId) {
    if (!fileId || fileId.includes('PLACEHOLDER')) return '#';
    return `https://drive.google.com/uc?id=${fileId}&export=download`;
}

// --- UX/UI & MODAL FUNCTIONS ---

function mobileMenuToggle() {
    document.querySelector('.nav-links').classList.toggle('active');
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        // Cleanup iframe sources
        if (modalId === 'videoModal') document.getElementById('video-iframe').src = '';
        if (modalId === 'pdfModal') document.getElementById('pdf-iframe').src = '';
        
        // Reset test modal on close
        if (modalId === 'testModal') {
            document.getElementById('mcq-form').classList.remove('hidden');
            document.getElementById('result-summary').classList.add('hidden');
            document.getElementById('mcq-questions').innerHTML = '';
        }
    }
    document.body.style.overflow = '';
}

window.onclick = function(event) {
    const modals = ['videoModal', 'pdfModal', 'testModal'];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            closeModal(id);
        }
    });
}

function openVideoModal(fileId, title) {
    const iframe = document.getElementById('video-iframe');
    const modalTitle = document.getElementById('modal-lecture-title');
    if (fileId.includes('PLACEHOLDER')) { alert('Content is a placeholder. No video available yet!'); return; }
    iframe.src = getVideoEmbedUrl(fileId);
    modalTitle.textContent = title;
    openModal('videoModal');
}

function openPDF(fileId, title) {
    const iframe = document.getElementById('pdf-iframe');
    const modalTitle = document.getElementById('modal-pdf-title');
    if (fileId.includes('PLACEHOLDER')) { alert('Content is a placeholder. No PDF available yet!'); return; }
    iframe.src = getPdfViewUrl(fileId);
    modalTitle.textContent = title;
    openModal('pdfModal');
}

// --- LOCAL STORAGE & SELECTION FUNCTIONS ---

function saveUserSelection() {
    const exam = document.getElementById('exam-selector').value;
    const province = document.getElementById('province-selector').value;
    if (exam && province) {
        localStorage.setItem('userExam', exam);
        localStorage.setItem('userProvince', province);
        window.location.href = 'dashboard.html';
    } else {
        alert("Please select both an Exam and a Province.");
    }
}

function filterByExam() {
    const selectedExam = document.getElementById('filter-exam').value;
    if (selectedExam !== 'all') { localStorage.setItem('userExam', selectedExam); } else { localStorage.removeItem('userExam'); }
}

function filterByProvince() {
    const selectedProvince = document.getElementById('filter-province').value;
    if (selectedProvince !== 'all') { localStorage.setItem('userProvince', selectedProvince); } else { localStorage.removeItem('userProvince'); }
}

// --- DATA FETCHING AND RENDERING HELPERS ---

function getContentArray(contentType, exam = 'all', province = 'all') {
    let result = [];
    const exams = exam === 'all' ? Object.keys(data) : [exam];
    const provinces = province === 'all' ? ['Sindh', 'Punjab', 'KPK', 'Balochistan'] : [province];

    for (const ex of exams) {
        if (data[ex]) {
            for (const prov of provinces) {
                if (data[ex][prov] && data[ex][prov][contentType]) {
                    result.push(...data[ex][prov][contentType].map(item => ({...item, exam: ex, province: prov})));
                }
            }
        }
    }
    return result;
}

// --- DASHBOARD AND ANNOUNCEMENTS ---

function loadDashboard() {
    const exam = localStorage.getItem('userExam');
    const province = localStorage.getItem('userProvince');
    // ... dashboard stats and display logic (from previous response) ...

    const allLectures = getContentArray('lectures', exam, province);
    const allNotes = getContentArray('notes', exam, province);
    const allTests = getContentArray('tests', exam, province);
    const allPapers = getContentArray('papers', exam, province);

    document.getElementById('selected-exam').textContent = exam || 'All Exams';
    document.getElementById('selected-province').textContent = province || 'All Provinces';
    document.getElementById('stat-lectures').textContent = allLectures.length;
    document.getElementById('stat-notes').textContent = allNotes.length;
    document.getElementById('stat-tests').textContent = allTests.length;
    document.getElementById('stat-papers').textContent = allPapers.length;

    const dashboardAnnouncements = announcements.slice(0, 3);
    document.getElementById('dashboard-announcements').innerHTML = dashboardAnnouncements.map(ann => createAnnouncementCard(ann)).join('');

    const sortedLectures = allLectures.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 3);
    document.getElementById('recent-lectures-list').innerHTML = sortedLectures.map(lec => createLectureCard(lec)).join('');
}

function loadHomeAnnouncements() {
    const homeAnnouncements = announcements.slice(0, 2);
    document.getElementById('home-announcements').innerHTML = homeAnnouncements.map(ann => createAnnouncementCard(ann)).join('');
}

function createAnnouncementCard(ann) {
    const priorityBadge = ann.priority ? `<span class="badge badge-${ann.priority.toLowerCase()}">${ann.priority}</span>` : '';
    return `
        <div class="card announcement-card">
            <h4>${ann.title} ${priorityBadge}</h4>
            <p><i class="fas fa-calendar-alt"></i> ${ann.date} | <i class="fas fa-tag"></i> ${ann.category}</p>
            <p>${ann.content.substring(0, 100)}...</p>
        </div>
    `;
}

// --- CONTENT RENDERING FUNCTIONS ---

function loadLectures() {
    const exam = document.getElementById('filter-exam').value;
    const province = document.getElementById('filter-province').value;
    const subject = document.getElementById('filter-subject').value;
    const container = document.getElementById('lectures-container');
    const filteredLectures = getContentArray('lectures', exam, province).filter(lec => subject === 'all' || lec.subject === subject);
    
    if (filteredLectures.length === 0) {
        container.innerHTML = '';
        document.getElementById('no-content-message').classList.remove('hidden');
    } else {
        container.innerHTML = filteredLectures.map(lec => createLectureCard(lec)).join('');
        document.getElementById('no-content-message').classList.add('hidden');
    }
}

function createLectureCard(lec) {
    return `
        <div class="card lecture-card">
            <h4>${lec.title}</h4>
            <p><strong>Subject:</strong> ${lec.subject}</p>
            <p><strong>Teacher:</strong> ${lec.teacher}</p>
            <p class="meta-info">(${lec.exam} - ${lec.province})</p>
            <button class="button primary-button" onclick="openVideoModal('${lec.fileId}', '${lec.title}')">
                <i class="fas fa-play-circle"></i> Watch (${lec.duration})
            </button>
        </div>
    `;
}

function loadNotes() {
    const exam = document.getElementById('filter-exam').value;
    const province = document.getElementById('filter-province').value;
    const container = document.getElementById('notes-container');
    const filteredNotes = getContentArray('notes', exam, province); 
    
    if (filteredNotes.length === 0) {
        container.innerHTML = '';
        document.getElementById('no-content-message').classList.remove('hidden');
    } else {
        container.innerHTML = filteredNotes.map(note => createNoteCard(note)).join('');
        document.getElementById('no-content-message').classList.add('hidden');
    }
}

function createNoteCard(note) {
    return `
        <div class="card lecture-card">
            <h4>${note.title}</h4>
            <p><strong>Subject:</strong> ${note.subject}</p>
            <p class="meta-info">(${note.exam} - ${note.province})</p>
            <button class="button primary-button" onclick="openPDF('${note.fileId}', '${note.title}')">
                <i class="fas fa-eye"></i> View PDF
            </button>
            <a href="${getPdfDownloadUrl(note.fileId)}" class="button secondary-button" download="${note.title.replace(/ /g, '_')}.pdf" target="_blank" style="margin-top: 5px;">
                <i class="fas fa-download"></i> Download
            </a>
        </div>
    `;
}

// --- TEST / MCQ SYSTEM ---

function loadTests() {
    const exam = document.getElementById('filter-exam').value;
    const province = document.getElementById('filter-province').value;
    const container = document.getElementById('tests-container');
    const filteredTests = getContentArray('tests', exam, province);
    
    if (filteredTests.length === 0) {
        container.innerHTML = '';
        document.getElementById('no-tests-message').classList.remove('hidden');
    } else {
        container.innerHTML = filteredTests.map(test => createTestCard(test)).join('');
        document.getElementById('no-tests-message').classList.add('hidden');
    }
}

function createTestCard(test) {
    return `
        <div class="card lecture-card">
            <h4>${test.title}</h4>
            <p><strong>Type:</strong> ${test.type}</p>
            <p><strong>Questions:</strong> ${test.questions}</p>
            <p><strong>Time Limit:</strong> ${test.time} min</p>
            <p class="meta-info">(${test.exam} - ${test.province})</p>
            <button class="button primary-button" onclick="openTestModal('${test.id}')">
                <i class="fas fa-arrow-right"></i> Start Test
            </button>
        </div>
    `;
}

function openTestModal(testId) {
    currentTest = getContentArray('tests').find(t => t.id === testId);
    if (!currentTest) { alert('Test not found!'); return; }
    
    document.getElementById('test-title').textContent = currentTest.title;
    document.getElementById('mcq-form').classList.remove('hidden');
    document.getElementById('result-summary').classList.add('hidden');
    
    const questionsContainer = document.getElementById('mcq-questions');
    questionsContainer.innerHTML = currentTest.mcqs.map((mcq, index) => {
        return `
            <div class="mcq-question card">
                <h4>Q${index + 1}: ${mcq.q}</h4>
                ${mcq.options.map((option, optIndex) => `
                    <div class="mcq-option">
                        <label>
                            <input type="radio" name="question-${index}" value="${optIndex}" required>
                            ${String.fromCharCode(65 + optIndex)}. ${option}
                        </label>
                    </div>
                `).join('')}
            </div>
        `;
    }).join('');

    openModal('testModal');
}

function submitTest(event) {
    event.preventDefault();
    if (!currentTest) return;

    let correctCount = 0;
    const totalQuestions = currentTest.mcqs.length;
    const form = event.target;

    currentTest.mcqs.forEach((mcq, index) => {
        const selectedOption = form.elements[`question-${index}`].value;
        if (parseInt(selectedOption) === mcq.answer) {
            correctCount++;
        }
    });

    const scorePercentage = (correctCount / totalQuestions) * 100;

    // Display Results
    document.getElementById('result-total').textContent = totalQuestions;
    document.getElementById('result-correct').textContent = correctCount;
    document.getElementById('result-score').textContent = `${scorePercentage.toFixed(0)}%`;
    
    document.getElementById('mcq-form').classList.add('hidden');
    document.getElementById('result-summary').classList.remove('hidden');

    alert(`Test Submitted! You scored ${correctCount}/${totalQuestions} (${scorePercentage.toFixed(0)}%)`);
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    // Expose functions globally (required since we call them via HTML attributes)
    window.mobileMenuToggle = mobileMenuToggle;
    window.saveUserSelection = saveUserSelection;
    window.loadDashboard = loadDashboard;
    window.filterByExam = filterByExam;
    window.filterByProvince = filterByProvince;
    window.loadLectures = loadLectures;
    window.loadNotes = loadNotes;
    window.loadTests = loadTests;
    window.openVideoModal = openVideoModal;
    window.openPDF = openPDF;
    window.closeModal = closeModal;
    window.loadHomeAnnouncements = loadHomeAnnouncements;
    window.openTestModal = openTestModal;
    window.submitTest = submitTest;
});
