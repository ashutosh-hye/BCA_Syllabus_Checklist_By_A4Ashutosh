# Syllabus Progress Checklist

An interactive, mobile-first web application I built to help students across multiple courses track their syllabus completion subject-by-subject, unit-by-unit, chapter-by-chapter, and topic-by-topic with real-time cloud synchronization.

**Live Demo:** [https://ashutosh-hye.github.io/BCA_Syllabus_Checklist_By_A4Ashutosh/](https://ashutosh-hye.github.io/BCA_Syllabus_Checklist_By_A4Ashutosh/)

## Key Features
- **Multi-Course & Year Selection:** Choose your course and academic year to load your syllabus; once signed in, other courses stay hidden for a clean, distraction-free view.
- **Complete Syllabus Breakdown:** Dedicated tabs for every subject with expandable Units, Chapters, and Subtopics, plus individual progress bars at overall, subject, unit, and chapter levels.
- **Smart Search & Filters:** Filter topics by `All`, `Pending`, or `Completed`, and search any chapter or topic instantly.
- **Dark & Light Mode:** Built-in theme toggle in the header with saved preference.
- **1-Tap Google Sign-In:** Personalized header with time-based greetings and Google profile picture (`photoURL`).
- **Real-Time Cross-Device Sync:** Progress automatically syncs between mobile and laptop via Cloud Firestore, with `localStorage` fallback.
- **Role-Based Admin Dashboard:** Private admin view organized by Course → Year → Student, secured with Firestore Security Rules to inspect subject-wise completion and ticked topics.

## Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Authentication & Database:** Firebase Authentication (Google Provider) & Cloud Firestore
- **Hosting:** GitHub Pages

## Project Structure
```text
├── index.html      # App layout, course/year selector, tabs, and modals
├── style.css       # Responsive styling, dark mode, and progress bar UI
├── app.js          # Multi-course syllabus data, state management, and Firebase sync
└── README.md       # Project documentation
```