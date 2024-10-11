# Mock AI Interview

![Home Page](./screenshots/image1.png)
![Log In](./screenshots/image2.png)
![DashBoard](./screenshots/image3.png)
![Add Interview](./screenshots/image7.png)
![Interview Details](./screenshots/image4.jpg)
![Start Interview](./screenshots/image5.jpg)
![FeedBack](./screenshots/image6.png)

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

