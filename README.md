# DocuCraft


# Task 66: DocuCraft - Professional Resume Builder

## Project Overview
**DocuCraft** is a productivity web application designed to help users create professional resumes and portfolios quickly and efficiently. It features a split-screen interface with a real-time editor and a live preview of the final document. Users can customize the design, manage dynamic content sections, and export their finalized resume as a high-quality PDF.

## Features

### Core Functionality
- **Real-Time Preview:** As users type in the editor, the resume preview updates instantly.
- **Dynamic Content:** Users can add or remove multiple "Experience" and "Education" entries dynamically.
- **PDF Export:** Integrated `html2pdf.js` library allows users to download the resume as a formatted PDF file.
- **Responsive Design:** The layout adjusts seamlessly for desktop and mobile devices, stacking the editor and preview on smaller screens.

### Enhancements (Optional Features Implemented)
- **Theme Customization:** Users can select from preset color themes (Blue, Red, Green, Yellow) or use a color picker to choose a custom primary color.
- **Profile Photo Upload:** Includes functionality to upload and display a profile picture directly on the resume.
- **Dynamic DOM Manipulation:** Experience and Education sections support adding unlimited entries.

## Technologies Used
- **HTML5:** Semantic structure for the editor and resume layout.
- **CSS3:** Flexbox for layout, CSS Variables for theming, and specific print styles for A4 paper simulation.
- **JavaScript (ES6+):** Logic for event listeners, state management, and DOM manipulation.

## External Libraries
Per the project guidelines, the following external resources were used:
1. **html2pdf.js (v0.10.1)**
   - **Purpose:** Used to convert the HTML DOM element (`#resume-preview`) into a downloadable PDF file.
   - **Source:** [cdnjs.com/libraries/html2pdf.js](https://cdnjs.com/libraries/html2pdf.js)
2. **Font Awesome (v6.0.0)**
   - **Purpose:** Used for UI icons (Edit, Download, Plus, Trash icons).
   - **Source:** [cdnjs.com/libraries/font-awesome](https://cdnjs.com/libraries/font-awesome)

## Folder Structure
The project follows the required separate folder structure

```text
Task66_DocuCraft/
│
├── index.html          # Main application file (Semantic HTML)
├── README.md           # Project documentation
├── css/
│   ├── style.css       # Global layout and Editor styling
│   ├── template1.css   # Resume Template styling (A4 simulation)
│   └── responsive.css  # Media queries for mobile responsiveness
├── js/
│   ├── app.js          # Main logic (Real-time sync, Dynamic sections, Theming)
│   └── pdfExport.js    # PDF generation logic
└── assets/
    └── (Optional)      # Folder for placeholder images
```

Setup & Usage Instructions
Download: Unzip the project folder Task66_DocuCraft.

Run: Open the index.html file in any modern web browser (Chrome, Edge, or Firefox recommended).

Edit:

Use the Design & Photo section to upload a picture and pick a color theme.

Fill in your details in the "Personal Information", "Summary", and "Skills" sections.

Click "Add Job" or "Add Education" to create new entries.

Export: Click the blue "Download PDF" button in the top right corner to save your resume.

Module Mapping (Concepts Applied)
This project demonstrates proficiency in the following Front-End Web Development modules:

Module 1 (HTML/CSS): Semantic structure, Flexbox layouts, and CSS Variables.

Module 2 (JavaScript): Event handling (input, click, change), DOM manipulation (creating/removing elements), and FileReader API.

Module 3 (Responsive Design): Media queries for adapting layouts to mobile screens.

Module 4 (Third-Party Integration): Integration of external JS libraries (html2pdf).

Challenges Faced & Solutions
Challenge: Handling dynamic content where the user can add an indefinite number of job entries.

Solution: Implemented JavaScript functions to append HTML strings with unique IDs to the DOM and attached specific event listeners for synchronization.

Challenge: Ensuring the PDF output matched the web preview exactly.

Solution: Used html2pdf.js with specific configuration options (scale: 2) and CSS dimensions set to 210mm width to mimic physical A4 paper.
