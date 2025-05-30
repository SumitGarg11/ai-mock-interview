# Mock AI Interview
![Home Page](https://github.com/user-attachments/assets/f7ce79de-d22b-40ec-8f77-30b6b9ae3d61)
![Log In](https://github.com/user-attachments/assets/688fe576-3c65-4d22-a155-deae462a3aa4)
![DashBoard](https://github.com/user-attachments/assets/96b5095b-bb85-4e05-8445-2c70af750ab2)
![Add Interview](https://github.com/user-attachments/assets/fbad2be7-7131-4a55-b938-3c65f88f4ecf)
![Interview Details](https://github.com/user-attachments/assets/1b5867f6-df58-449b-a4bb-aabaa8c896da)
![Start Interview](https://github.com/user-attachments/assets/a25a149f-e14a-4d99-ab3e-664aa0451038)
![FeedBack](https://github.com/user-attachments/assets/a635004b-f8fe-4c9d-937d-512f8fadf667)

Mock AI Interview is an AI-powered platform designed to simulate real-world technical interviews with instant feedback. It leverages modern technologies like Next.js, Drizzle ORM, and Google Gemini AI to offer a seamless and effective interview preparation experience.

This project provides users with unlimited practice interviews for various job roles, such as Data Scientist, Full Stack Developer, Cloud Engineer, and Cybersecurity specialist, and allows them to choose companies such as Amazon or Google to tailor their preparation.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **ORM:** [Drizzle ORM](https://orm.dizzle.com/)
- **Database:** [Neon.tech](https://neon.tech/)
- **Authentication:** [Clerk](https://clerk.dev/)
- **AI Integration:** Google Gemini AI API for interview feedback and analysis.
- **React Webcam:** For video interview recording.
- **React Hook Speech-to-Text:** For real-time transcription of user responses.

## Features

- AI-driven mock interviews with job-specific questions.
- Tailored preparation for specific companies like Amazon or Google.
- Real-time feedback powered by Google Gemini AI.
- Video recording and analysis of interview answers.
- Speech-to-text transcription of interview responses.

## Project Setup

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses Tailwind CSS components from [HyperUI](https://hyperui.dev/) and integrates [Clerk](https://clerk.dev/) for authentication.

### Prerequisites

Make sure you have the following installed:

- Node.js
- NPM or Yarn
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/mock-ai-interview.git
   cd mock-ai-interview
```bash
  npm install
      or
  yarn install    
```
2. Set up Drizzle ORM:
 
```bash
npm i drizzle-orm @neondatabase/serverless
npm i -D drizzle-kit
```
3. Push the schema to Neon database:

```bash
npx drizzle-kit push

```
5. View and manage the database schema using Drizzle Studio:

```bash
npx drizzle-kit studio

```
## Environment Variables

Create a  ```
 .env  ```file in the root directory of your project and add the following environment variables:
 ```
 NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
NEXT_PUBLIC_GEMINI_API_KEY=<your-google-gemini-api-key>
DATABASE_URL=<your-neon-database-url>

 ```
## Running the App 

```
npm run dev
   ```
``` 
yarn dev

```

