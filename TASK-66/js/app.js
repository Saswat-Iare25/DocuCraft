// --- 1. Static Field Logic ---
const fields = [
    { input: 'nameInput', preview: 'previewName' },
    { input: 'titleInput', preview: 'previewTitle' },
    { input: 'phoneInput', preview: 'previewPhone' },
    { input: 'emailInput', preview: 'previewEmail' },
    { input: 'linkInput', preview: 'previewLink' },
    { input: 'summaryInput', preview: 'previewSummary' },
    { input: 'skillsInput', preview: 'previewSkills' }
];

fields.forEach(field => {
    const inputElement = document.getElementById(field.input);
    const previewElement = document.getElementById(field.preview);
    if (inputElement && previewElement) {
        inputElement.addEventListener('input', () => {
            previewElement.innerText = inputElement.value || ' ';
        });
    }
});

// --- 2. Theme Switching Logic ---
function setTheme(color) {
    // Update the CSS Variable which controls all headers, borders, and accents
    document.documentElement.style.setProperty('--theme-color', color);
}

// --- 3. Profile Photo Logic ---
document.getElementById('photoInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('previewPhoto');
            img.src = e.target.result;
            img.style.display = 'block'; // Show image
        }
        reader.readAsDataURL(file);
    }
});

// --- 4. Dynamic Content Logic (Experience & Education) ---

// Helper: Syncs dynamic inputs to preview
window.syncText = function(element, previewId) {
    document.getElementById(previewId).innerText = element.value;
}

// Helper: Removes a dynamic entry
window.removeEntry = function(entryId) {
    document.getElementById(`input-${entryId}`).remove();
    document.getElementById(`preview-${entryId}`).remove();
}

// Function to Add Experience
function addExperience() {
    const id = Date.now();
    
    // Add Input Form
    const inputHTML = `
        <div class="dynamic-entry" id="input-${id}">
            <button class="btn-remove" onclick="removeEntry(${id})">Remove</button>
            <label>Job Title</label>
            <input type="text" oninput="syncText(this, 'role-${id}')" placeholder="e.g. Frontend Dev">
            <label>Company</label>
            <input type="text" oninput="syncText(this, 'comp-${id}')" placeholder="e.g. Tech Corp">
            <label>Description</label>
            <textarea oninput="syncText(this, 'desc-${id}')" rows="2" placeholder="Responsibilities..."></textarea>
        </div>
    `;
    document.getElementById('experience-list').insertAdjacentHTML('beforeend', inputHTML);

    // Add Preview Element
    const previewHTML = `
        <div class="experience-item" id="preview-${id}">
            <h5 id="role-${id}">Job Title</h5>
            <p class="company-name" id="comp-${id}">Company Name</p>
            <p id="desc-${id}">Description...</p>
        </div>
    `;
    document.getElementById('previewExperienceList').insertAdjacentHTML('beforeend', previewHTML);
}

// Function to Add Education
function addEducation() {
    const id = Date.now();

    // Add Input Form
    const inputHTML = `
        <div class="dynamic-entry" id="input-${id}">
            <button class="btn-remove" onclick="removeEntry(${id})">Remove</button>
            <label>Degree</label>
            <input type="text" oninput="syncText(this, 'deg-${id}')" placeholder="e.g. B.Tech CS">
            <label>University</label>
            <input type="text" oninput="syncText(this, 'uni-${id}')" placeholder="e.g. University Name">
        </div>
    `;
    document.getElementById('education-list').insertAdjacentHTML('beforeend', inputHTML);

    // Add Preview Element
    const previewHTML = `
        <div class="education-item" id="preview-${id}">
            <h5 id="deg-${id}">Degree Name</h5>
            <p id="uni-${id}">University Name</p>
        </div>
    `;
    document.getElementById('previewEducationList').insertAdjacentHTML('beforeend', previewHTML);
}

// Add one default entry for Experience and Education on load
window.onload = function() {
    addExperience();
    addEducation();
}