let educationCount = 1;
let experienceCount = 1;

function addEducation() {
    const container = document.getElementById('educationContainer');
    const entry = document.createElement('div');
    entry.className = 'education-entry';
    entry.innerHTML = `
        <div class="form-group">
            <label for="school_${educationCount}">School/University</label>
            <input type="text" id="school_${educationCount}" placeholder="University Name">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label for="degree_${educationCount}">Degree</label>
                <input type="text" id="degree_${educationCount}" placeholder="Bachelor of Science">
            </div>
            <div class="form-group">
                <label for="eduYears_${educationCount}">Years</label>
                <input type="text" id="eduYears_${educationCount}" placeholder="2015-2019">
            </div>
        </div>
    `;
    container.appendChild(entry);
    educationCount++;
}

function addExperience() {
    const container = document.getElementById('experienceContainer');
    const entry = document.createElement('div');
    entry.className = 'experience-entry';
    entry.innerHTML = `
        <div class="form-row">
            <div class="form-group">
                <label for="company_${experienceCount}">Company</label>
                <input type="text" id="company_${experienceCount}" placeholder="Company Name">
            </div>
            <div class="form-group">
                <label for="role_${experienceCount}">Role</label>
                <input type="text" id="role_${experienceCount}" placeholder="Software Engineer">
            </div>
        </div>
        <div class="form-group">
            <label for="expYears_${experienceCount}">Years</label>
            <input type="text" id="expYears_${experienceCount}" placeholder="2019-Present">
        </div>
        <div class="form-group">
            <label for="description_${experienceCount}">Description</label>
            <textarea id="description_${experienceCount}" rows="3" placeholder="Key responsibilities and achievements..."></textarea>
        </div>
    `;
    container.appendChild(entry);
    experienceCount++;
}

function collectFormData() {
    const data = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        summary: document.getElementById('summary').value,
        skills: document.getElementById('skills').value,
        linkedin: document.getElementById('linkedin').value,
        portfolio: document.getElementById('portfolio').value,
        github: document.getElementById('github').value,
        education: [],
        experience: []
    };

    for (let i = 0; i < educationCount; i++) {
        const school = document.getElementById(`school_${i}`)?.value;
        const degree = document.getElementById(`degree_${i}`)?.value;
        const years = document.getElementById(`eduYears_${i}`)?.value;
        
        if (school || degree || years) {
            data.education.push({ school, degree, years });
        }
    }

    for (let i = 0; i < experienceCount; i++) {
        const company = document.getElementById(`company_${i}`)?.value;
        const role = document.getElementById(`role_${i}`)?.value;
        const years = document.getElementById(`expYears_${i}`)?.value;
        const description = document.getElementById(`description_${i}`)?.value;
        
        if (company || role || years || description) {
            data.experience.push({ company, role, years, description });
        }
    }

    return data;
}

function generatePreview() {
    const form = document.getElementById('cvForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = collectFormData();
    const preview = document.getElementById('cvPreview');
    
    const skillsArray = data.skills.split(',').map(s => s.trim()).filter(s => s);
    
    let educationHTML = '';
    if (data.education.length > 0) {
        educationHTML = `
            <div class="cv-section">
                <h3 class="cv-section-title">🎓 Education</h3>
                ${data.education.map(edu => `
                    <div class="cv-item">
                        <div class="cv-item-header">
                            <div>
                                <div class="cv-item-title">${edu.school || ''}</div>
                                <div class="cv-item-subtitle">${edu.degree || ''}</div>
                            </div>
                            <div class="cv-item-years">${edu.years || ''}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    let experienceHTML = '';
    if (data.experience.length > 0) {
        experienceHTML = `
            <div class="cv-section">
                <h3 class="cv-section-title">💼 Work Experience</h3>
                ${data.experience.map(exp => `
                    <div class="cv-item">
                        <div class="cv-item-header">
                            <div>
                                <div class="cv-item-title">${exp.role || ''}</div>
                                <div class="cv-item-subtitle">${exp.company || ''}</div>
                            </div>
                            <div class="cv-item-years">${exp.years || ''}</div>
                        </div>
                        ${exp.description ? `<div class="cv-item-description">${exp.description}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    const links = [];
    if (data.linkedin) links.push(`<a href="${data.linkedin}" class="cv-link" target="_blank">LinkedIn</a>`);
    if (data.portfolio) links.push(`<a href="${data.portfolio}" class="cv-link" target="_blank">Portfolio</a>`);
    if (data.github) links.push(`<a href="${data.github}" class="cv-link" target="_blank">GitHub</a>`);
    
    const linksHTML = links.length > 0 ? `<div class="cv-links">${links.join(' • ')}</div>` : '';

    preview.innerHTML = `
        <div class="cv-template">
            <div class="cv-header">
                <h1 class="cv-name">${data.fullName}</h1>
                <div class="cv-contact">
                    <span class="cv-contact-item">📧 ${data.email}</span>
                    <span class="cv-contact-item">📱 ${data.phone}</span>
                </div>
                ${linksHTML}
            </div>

            <div class="cv-section">
                <h3 class="cv-section-title">👤 Professional Summary</h3>
                <p class="cv-summary">${data.summary}</p>
            </div>

            ${educationHTML}
            ${experienceHTML}

            <div class="cv-section">
                <h3 class="cv-section-title">🔧 Skills</h3>
                <div class="cv-skills">
                    ${skillsArray.map(skill => `<span class="cv-skill">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cvForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generatePreview();
    });
});
