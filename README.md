# BCA Syllabus Progress Checklist

An interactive, mobile-first web application I built to help students track their syllabus completion subject-by-subject, unit-by-unit, and topic-by-topic with real-time cloud synchronization.

**Live Demo:** [https://ashutosh-hye.github.io/BCA_Syllabus_Checklist_By_A4Ashutosh/](https://ashutosh-hye.github.io/BCA_Syllabus_Checklist_By_A4Ashutosh/)

## Key Features
- **Complete Syllabus Breakdown:** Dedicated tabs for every subject with unit-wise and overall completion progress bars.
- **Smart Search & Filters:** Filter topics by `All`, `Pending`, or `Completed`, and search any topic instantly.
- **1-Tap Google Sign-In:** Personalized header with time-based greetings and Google profile picture (`photoURL`).
- **Real-Time Cross-Device Sync:** Progress automatically syncs between mobile and laptop via Cloud Firestore, with `localStorage` fallback.
- **Role-Based Admin Dashboard:** Private admin view secured with Firestore Security Rules to monitor student progress and subject-wise completion.

## Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Authentication & Database:** Firebase Authentication (Google Provider) & Cloud Firestore
- **Hosting:** GitHub Pages

## Project Structure
```text
├── index.html      # App layout, header, tabs, and modals
├── style.css       # Responsive styling and progress bar UI
├── app.js          # Syllabus data, state management, and Firebase sync
└── README.md       # Project documentation
