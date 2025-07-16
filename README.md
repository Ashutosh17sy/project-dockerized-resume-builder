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

##  Run Locally & Deploy on IBM Cloud

Use the following step-by-step commands to run locally with Docker and deploy to IBM Cloud:

```bash
# Step 1: Build Docker image locally
docker build -t resumebuilder .

# Step 2: Run the container locally on port 8081
docker run -d -p 8081:8080 resumebuilder

# Step 3: Open in your browser
# Visit: http://localhost:8081

# Step 4: Login to IBM Cloud
ibmcloud login --sso

# Step 5: Create a container registry namespace (if not created already)
ibmcloud cr namespace-add ash-resume

# Step 6: Authenticate Docker with IBM Cloud
ibmcloud cr login

# Step 7: Tag the Docker image for IBM Container Registry
docker tag resumebuilder us.icr.io/ash-resume/resumebuilder

# Step 8: Push the image to IBM Cloud Container Registry
docker push us.icr.io/ash-resume/resumebuilder

# Step 9: Deploy on IBM Cloud using Code Engine
# Go to: https://cloud.ibm.com/codeengine
# - Create project
# - Create app from container image
# - Use image: us.icr.io/ash-resume/resumebuilder
# - Set port to 8080 and deploy










