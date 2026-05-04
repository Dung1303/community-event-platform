# EventHub Team – Community Event Platform

## Project Overview

**EventHub** is a full-stack web application designed to help local communities easily discover, manage, and participate in events. The platform connects **event organizers** with **attendees** through a centralized system, replacing scattered communication channels like social media and flyers.

This project is developed as part of an **Advanced Web Development course**, following industry-standard practices including Agile (Scrum), RESTful API design, and modern frontend/backend architectures.

---

## Objectives

* Build a **production-ready full-stack application**
* Apply **modern technologies** (React, REST API, database systems)
* Practice **team collaboration using Scrum**
* Implement **real-world features** such as authentication, event registration, and reviews
* Prepare a project suitable for **portfolio and CV showcase**

---

## Key Features

### Authentication & Authorization

* User registration and login
* Role-based access (Organizer / Attendee)
* Secure password hashing
* Protected routes

### Event Management (Organizer)

* Create, edit, and cancel events
* Manage event details:

  * Name, description, category
  * Location, date & time
  * Capacity
* Event status: Draft / Published / Cancelled
* Organizer dashboard with event statistics

### Event Discovery (Attendee)

* Browse all upcoming events (public access)
* Search events by keyword
* Filter by category
* View event details

### Registration System

* Register for events
* Capacity management
* Waitlist system with auto-promotion
* Cancel registration
* Prevent duplicate registrations

### Reviews & Ratings

* One review per attendee after event ends
* Star rating (1–5)
* Comment (max 300 characters)
* Average rating displayed

---

## Technology Stack

### Frontend

* React (Functional Components & Hooks)
* React Router
* Axios / Fetch API
* State Management: (Context API / Redux / Zustand)
* UI Framework: (TailwindCSS / Material UI / Ant Design)
* Build Tool: Vite / Create React App

### Backend

* Laravel (RESTful API)

### Database

* MySQL 

### Other Tools

* Git & GitHub (version control)
* Postman / Swagger (API documentation)
* Agile Scrum (task management)

---

## System Architecture

The application follows a **client-server architecture**:

* **Frontend (React)** communicates with backend via REST APIs
* **Backend (API server)** handles business logic and authentication
* **Database** stores users, events, registrations, and reviews

---

## Project Structure

```
eventhub/
│── frontend/        # React application
│── backend/         # API server (Laravel)
│── database/        # Database schema / scripts
│── docs/            # Documentation (API, diagrams)
│── README.md
```

---

## Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/Dung1303/community-event-platform.git
cd community-event-platform
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Setup Backend

```bash
cd backend
npm install
npm start
```

### 4. Environment Variables

Create `.env` file in backend:

```
PORT=5000
DB_URL=your_database_url
JWT_SECRET=your_secret_key
```

---

## API Documentation

API documentation will be available via:

* Postman Collection (link here)
* Swagger UI (if implemented)

---

## Testing

* Unit testing (planned)
* Manual testing for features:

  * Authentication
  * Event creation
  * Registration flow
  * Edge cases (full capacity, waitlist)

---

## Development Process (Scrum)

* Weekly sprints (Week 2–6)
* Daily stand-ups (team sync)
* Sprint planning & retrospectives
* Task tracking via Jira 

---

## Team Members

| Name     | Role                                           | Responsibilities |
| -------- | ---------------------------------------------- | ---------------- |
| Nguyễn Thị Dung  | Fullstack Developer x Leader           |
| Hồ Thị Vãi       | Fullstack Developer x Tester           |                  |
| Nguyễn Tiến Nhựt | Fullstack Developer x Designer UX/UI   | ...              |
| Hồ Văn Tiết      | Fullstack Developer x Business Analyst | ...              |

---

## Future Improvements

* Real-time notifications
* Image upload for events
* Email confirmations
* Admin dashboard
* Deployment (AWS / Vercel / Render)

---

##  Status

**In Development**
This project is currently under active development as part of coursework.

---

## License

This project is for educational purposes.

---

## Notes

This README will be continuously updated as the project evolves.
