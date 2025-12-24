function downloadPDF() {
    const form = document.getElementById('cvForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    generatePreview();

    const data = collectFormData();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);
    let yPosition = margin;

    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    doc.text(data.fullName, pageWidth / 2, 20, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    const contactInfo = `${data.email} | ${data.phone}`;
    doc.text(contactInfo, pageWidth / 2, 30, { align: 'center' });

    yPosition = 50;

    if (data.linkedin || data.portfolio || data.github) {
        const links = [];
        if (data.linkedin) links.push(data.linkedin);
        if (data.portfolio) links.push(data.portfolio);
        if (data.github) links.push(data.github);
        
        doc.setFontSize(8);
        doc.setTextColor(37, 99, 235);
        doc.text(links.join(' | '), pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 10;
    }

    yPosition += 5;
    doc.setTextColor(30, 41, 59);

    const addSection = (title, icon) => {
        if (yPosition > pageHeight - 40) {
            doc.addPage();
            yPosition = margin;
        }
        
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(37, 99, 235);
        doc.text(`${icon} ${title}`, margin, yPosition);
        
        doc.setLineWidth(0.5);
        doc.setDrawColor(37, 99, 235);
        doc.line(margin, yPosition + 2, pageWidth - margin, yPosition + 2);
        
        yPosition += 10;
        doc.setTextColor(30, 41, 59);
    };

    addSection('PROFESSIONAL SUMMARY', '');
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    const summaryLines = doc.splitTextToSize(data.summary, maxWidth);
    doc.text(summaryLines, margin, yPosition);
    yPosition += (summaryLines.length * 6) + 10;

    if (data.education.length > 0) {
        addSection('EDUCATION', '');
        doc.setFontSize(10);
        
        data.education.forEach((edu, index) => {
            if (yPosition > pageHeight - 30) {
                doc.addPage();
                yPosition = margin;
            }

            doc.setFont(undefined, 'bold');
            doc.text(edu.school || '', margin, yPosition);
            
            if (edu.years) {
                doc.text(edu.years, pageWidth - margin, yPosition, { align: 'right' });
            }
            
            yPosition += 6;
            
            if (edu.degree) {
                doc.setFont(undefined, 'italic');
                doc.setTextColor(100, 116, 139);
                doc.text(edu.degree, margin, yPosition);
                doc.setTextColor(30, 41, 59);
                yPosition += 6;
            }
            
            if (index < data.education.length - 1) {
                yPosition += 4;
            }
        });
        
        yPosition += 10;
    }

    if (data.experience.length > 0) {
        addSection('WORK EXPERIENCE', '');
        doc.setFontSize(10);
        
        data.experience.forEach((exp, index) => {
            if (yPosition > pageHeight - 40) {
                doc.addPage();
                yPosition = margin;
            }

            doc.setFont(undefined, 'bold');
            doc.text(exp.role || '', margin, yPosition);
            
            if (exp.years) {
                doc.text(exp.years, pageWidth - margin, yPosition, { align: 'right' });
            }
            
            yPosition += 6;
            
            if (exp.company) {
                doc.setFont(undefined, 'italic');
                doc.setTextColor(100, 116, 139);
                doc.text(exp.company, margin, yPosition);
                doc.setTextColor(30, 41, 59);
                yPosition += 6;
            }
            
            if (exp.description) {
                doc.setFont(undefined, 'normal');
                doc.setTextColor(100, 116, 139);
                const descLines = doc.splitTextToSize(exp.description, maxWidth);
                
                descLines.forEach(line => {
                    if (yPosition > pageHeight - 20) {
                        doc.addPage();
                        yPosition = margin;
                    }
                    doc.text(line, margin, yPosition);
                    yPosition += 5;
                });
                
                doc.setTextColor(30, 41, 59);
                yPosition += 2;
            }
            
            if (index < data.experience.length - 1) {
                yPosition += 4;
            }
        });
        
        yPosition += 10;
    }

    if (data.skills) {
        addSection('SKILLS', '');
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        
        const skillsArray = data.skills.split(',').map(s => s.trim()).filter(s => s);
        const skillsText = skillsArray.join(' • ');
        const skillsLines = doc.splitTextToSize(skillsText, maxWidth);
        
        skillsLines.forEach(line => {
            if (yPosition > pageHeight - 20) {
                doc.addPage();
                yPosition = margin;
            }
            doc.text(line, margin, yPosition);
            yPosition += 6;
        });
    }

    const fileName = `${data.fullName.replace(/\s+/g, '_')}_CV.pdf`;
    doc.save(fileName);
}
