# Task Manager - [deploy](https://yuyuu-8.github.io/task-manager)

A simple and intuitive task management application built with React and TypeScript. The application allows users to manage and filter tasks by different criteria such as status, category, and priority.

## Features

- View tasks in a responsive grid layout
- Filter tasks by:
  - Status (To Do, In Progress, Done)
  - Category (Bug, Feature, Documentation, Refactor, Test)
  - Priority (High, Medium, Low)
- View task details
- Update existing tasks

## Technology Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI Components:** Admiral DS
- **Styling:** styled-components (Admiral)
- **Routing:** React Router v6

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yuyuu-8/task-manager.git
cd task-manager
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
  ├── components/        # Reusable UI components
  ├── context/          # React Context for state management
  ├── pages/            # Application pages/routes
  ├── types/            # TypeScript type definitions
  ├── App.tsx          # Root component
  └── main.tsx         # Application entry point
```
