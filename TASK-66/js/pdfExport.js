document.getElementById('downloadBtn').addEventListener('click', () => {
    const element = document.getElementById('resume-preview');
    
    // Configuration for html2pdf
    const opt = {
        margin:       0,
        filename:     'My_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, scrollY: 0 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().set(opt).from(element).save();
});