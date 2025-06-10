

#  Smart Resume Builder with AI Suggestions

A smart and intuitive web application that helps users build professional resumes with AI-powered content suggestions. Built using **React**, **Python (FastAPI)**, and integrated with **OpenAI GPT** for smart suggestions.

##  Features

-  Create and edit resume sections (Education, Experience, Skills, etc.)
- AI suggestions for summary, achievements, job descriptions, etc.
- Download resume as PDF
-  Save and load resume data (locally or via backend)
-  Clean and modern UI with responsive design

## Tech Stack

**Frontend**  
- React.js (with Hooks)  
- Tailwind CSS / Bootstrap  
- Axios for API calls

**Backend**  
- FastAPI (Python)  
- OpenAI GPT-4.0 API  
- Pydantic for data validation

**Other Tools**  
- React-to-PDF / jsPDF  
- Formik + Yup (for form handling and validation)

---

##  Project Structure

smart-resume-builder/ ├── client/                  # React frontend │   ├── components/ │   ├── pages/ │   ├── App.jsx │   └── ... ├── backend/                 # FastAPI backend │   ├── main.py │   ├── ai_utils.py │   ├── models.py │   └── ... └── README.md

---

## How to Run

### Prerequisites

- Node.js and npm
- Python 3.9+
- OpenAI API key

### 1. Clone the repository

```bash
git clone https://github.com/your-username/smart-resume-builder.git
cd smart-resume-builder

2. Start the Backend

cd backend
pip install -r requirements.txt
# Add your OpenAI API key in a .env file or directly in ai_utils.py
uvicorn main:app --reload

3. Start the Frontend

cd ../client
npm install
npm run dev  # or npm start

Now open your browser and go to: http://localhost:3000


---

