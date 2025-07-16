# project-dockerized-resume-builder
# ResumeBuilder

A simple and responsive web-based Resume Builder application built using **HTML, CSS, Tailwind CSS**, and **Node.js**, with **Docker** containerization and **IBM Cloud** deployment.

##  Project Overview

This project allows users to:
- Fill in their personal and professional details
- Instantly preview a resume
- Download the resume as a **PDF**
- Run the application locally using **Docker**
- Deploy it on the **IBM Cloud** using **Code Engine** and **IBM Container Registry**

## Technologies Used

- **Frontend:** HTML5, CSS3, Tailwind CSS
- **Backend:** Node.js, Express.js
- **PDF Generation:** jsPDF, html2canvas
- **Containerization:** Docker
- **Cloud Deployment:** IBM Cloud (Code Engine, CLI, Container Registry)

##  Project Structure
   Dockerfile # For building Docker image
├── package.json # Project dependencies
├── server.js # Node.js backend server
├── rb.html # Main HTML file with Tailwind CSS


---

##  Run Locally with Docker

To build and run this project on your local machine using Docker:

```bash
# Build the Docker image
docker build -t resumebuilder .

# Run the Docker container on port 8081
docker run -d -p 8081:8080 resumebuilder

# Open in your browser
http://localhost:8081










