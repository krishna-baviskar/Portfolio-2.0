# Portfolio 2.0

Welcome to the Portfolio 2.0, an interactive and dynamic personal portfolio website. This project showcases skills, experience, and projects in a visually engaging format, complete with a stunning 3D animated background and an AI-powered chatbot.

## ✨ Features

- **Interactive 3D Background**: A mesmerizing, animated background built with Three.js, featuring falling code-related symbols that react to mouse movement.
- **AI Chatbot**: A conversational chatbot powered by Google's Gemini model via Genkit. It's knowledgeable about the portfolio content and can answer visitor questions.
- **Responsive Design**: A fully responsive layout that looks great on desktops, tablets, and mobile devices.
- **Modern UI Components**: Built with the sleek and customizable [ShadCN UI](https://ui.shadcn.com/) component library.
- **Comprehensive Sections**: Detailed sections to showcase:
  - About Me
  - Professional Experience
  - Featured Projects
  - Technical Skills
  - Education
  - Certifications
  - Contact Information
- **Smooth Navigation**: A fixed header with smooth-scrolling links to all sections of the portfolio.

## 🛠️ Tech Stack

This project is built with a modern, full-stack tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
- **3D Graphics**: [Three.js](https://threejs.org/)


## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later recommended)
- npm or another package manager

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of your project and add your Google Gemini API key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

### Running the Development Server

You need to run two separate processes for the Next.js app and the Genkit AI flows.

1.  **Start the Genkit development server:**
    Open a terminal and run:
    ```sh
    npm run genkit:dev
    ```
    This will start the Genkit development UI, typically on `http://localhost:4000`.

2.  **Start the Next.js development server:**
    Open a second terminal and run:
    ```sh
    npm run dev
    ```
    This will start the main application, typically on `http://localhost:9002`.

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 🏗️ Building for Production

To create a production-ready build of the application, run the following command:

```sh
npm run build
```

This will generate an optimized build in the `.next` directory. You can then start the production server with:

```sh
npm run start
```
