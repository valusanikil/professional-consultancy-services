# Professional Consultancy Services (PCS)

This repository contains **two projects** for the Professional Consultancy Services application:

1. **PCS (Frontend)** – Angular client-side application for managing employees and certificates.  
2. **PCS Backend** – A Node.js/Express (or similar) server-side application providing RESTful APIs and database connectivity.

## Overview

**Professional Consultancy Services (PCS)** is designed to manage employees, certificates, and other related data in an efficient manner. It includes:

- A **frontend** that provides a clean and intuitive interface for adding, viewing, and updating employee details and certificates.  
- A **backend** that exposes RESTful endpoints, connects to a database, and implements the necessary business logic for handling employee and certificate data.

---

## Key Features

1. **Secure Login** – A dedicated login page for authenticated access.  
2. **Employee Management** – Add, update, view, and delete employee records.  
3. **Certificate Management** – Add and manage certificates related to each employee.  
4. **Search & Filter** – Quickly find employees by name or skill set.  
5. **Responsive UI** – Clean design that adapts to different screen sizes.  
6. **Scalable Architecture** – Separate frontend and backend for modular development.

---

## Technology Stack

- **Frontend (PCS)**  
  - **React** (or create-react-app or another framework)  
  - **HTML5/CSS3**  
  - **JavaScript** (ES6+)  
  - **Axios** or **Fetch API** for making HTTP requests  

- **Backend (PCS Backend)**  
  - **Node.js** and **Express**  
  - **Database** (e.g., MySQL, MongoDB, or PostgreSQL) – depends on your actual setup  
  - **RESTful** API design  

- **Tools**  
  - **npm** or **yarn** for package management  
  - **Git** & **GitHub** for version control  

---


## Screenshots

### Login Page
<img src="assets/Screenshot 2025-03-14 151717.png" alt="">

### Employee List
<img src="assets/Screenshot 2025-03-14 151746.png" alt="">
_A table of employees with search functionality, and options to update or delete._

### Add Certificate
<img src="assets/Screenshot 2025-03-14 151757.png" alt="">
_Form to add a new certificate with fields for **Id**, **Title**, **Category**, and **Description**._

### Update Employee
<img src="assets/Screenshot 2025-03-14 151809.png" alt="">
_An editable form to modify an employee’s details._

### Employee Details
<img src="assets/Screenshot 2025-03-14 151827.png" alt="">
_A summary view of employees with a “Details” button to see further information._


## Project Structure

### PCS (Frontend) Structure

```
PCS/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/
│   │   ├── Login.js
│   │   ├── EmployeeList.js
│   │   ├── AddEmployee.js
│   │   ├── UpdateEmployee.js
│   │   ├── AddCertificate.js
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

**Key Folders and Files**  
- **public/** – Contains static files (HTML, images, etc.).  
- **src/components/** – Reusable UI components (e.g., `Navbar.js`, `Footer.js`).  
- **src/pages/** – Page-level components (`Login.js`, `EmployeeList.js`, `AddEmployee.js`, etc.).  
- **src/services/** – Centralized API calls and utility functions (e.g., `api.js` for Axios).  
- **App.js** – Main application component, sets up routes and overall structure.  
- **index.js** – Entry point that renders the app to the DOM.

### PCS Backend Structure

```
PCS Backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── ...
│   ├── controllers/
│   │   ├── employeeController.js
│   │   ├── certificateController.js
│   │   └── ...
│   ├── models/
│   │   ├── Employee.js
│   │   ├── Certificate.js
│   │   └── ...
│   ├── routes/
│   │   ├── employeeRoutes.js
│   │   ├── certificateRoutes.js
│   │   └── ...
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── utils/
│   │   └── ...
│   └── app.js
├── package.json
└── README.md
```

**Key Folders and Files**  
- **config/** – Database connection and environment configurations.  
- **controllers/** – Functions that handle incoming requests and responses (`employeeController.js`, `certificateController.js`).  
- **models/** – Data models or schemas for employees, certificates, etc.  
- **routes/** – Defines the API endpoints and maps them to controllers.  
- **middleware/** – Authentication, logging, or other reusable middleware functions.  
- **app.js** – Main server file that initializes Express, connects to the database, and sets up routes.

---

## Installation

### Frontend Setup

1. **Clone or Download** the repository (after extracting `PCS.zip` if necessary).  
2. Navigate to the `PCS` directory:
   ```bash
   cd PCS
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The frontend should now be running at `http://localhost:3000` (or your configured port).

### Backend Setup

1. Navigate to the `PCS Backend` directory (after extracting `PCS Backend.zip`):
   ```bash
   cd PCS\ Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (create a `.env` or update `database.js`):
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=yourpassword
   DB_NAME=pcs_db
   PORT=5000
   ```
4. Run database migrations (if applicable) or ensure your database is set up correctly.  
5. Start the server:
   ```bash
   npm start
   ```
   The backend API should now be running at `http://localhost:5000`.

---

## Usage

1. **Open** your browser at `http://localhost:3000`.  
2. **Login** with valid credentials on the login page.  
3. **Manage Employees**:  
   - **Add Employee** – Fill out the form with first name, last name, skills, and date.  
   - **Employee List** – View existing employees, search by name, update or delete records.  
4. **Manage Certificates**:  
   - **Add Certificate** – Provide an ID, title, category, and description.  
   - **Certificate List** – If implemented, view, update, or delete certificates.  
5. **Logout** when finished.

---
