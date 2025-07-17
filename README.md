# Task Manager - [deploy](yuyuu-8.github.io/task-manager)

A simple and intuitive task management application built with React and TypeScript, using Supabase as a backend. The application allows users to create, view, update, and delete tasks, as well as filter them by status, category, and priority.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete tasks.
- **Task List:** View all tasks in a responsive grid layout.
- **Task Details:** View and edit the details of a specific task.
- **Filtering:** Filter tasks by:
  - Status (To Do, In Progress, Done)
  - Category (Bug, Feature, Documentation, Refactor, Test)
  - Priority (High, Medium, Low)
- **State Management:** Centralized state management for tasks using React Context.
- **Responsive UI:** The application is designed to work on various screen sizes.

## Technologies and Approaches

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI Components:** Admiral Design System
- **Styling:** styled-components
- **Routing:** React Router
- **Backend:** Supabase (for database and API)
- **State Management:** React Context API
- **Linting & Formatting:** ESLint, Prettier

## Architecture

The project is structured based on the principles of **Feature-Sliced Design (FSD)**. This architectural methodology helps in organizing code in a scalable and maintainable way by dividing the application into layers, slices, and segments.

```plaintext
src/
├── app/         # App-wide setup: router, styles, providers
├── pages/       # Application pages, composed of widgets and features
├── widgets/     # Composite UI components (e.g., TaskList, Header)
├── features/    # User interaction logic (e.g., AddToCart, UserLogin)
├── entities/    # Business entities and their UI components (e.g., Task, User)
└── shared/      # Reusable code used across the project (e.g., UI kit, APIs, helpers)
```

- **`app`**: The root of the application, responsible for initializing the app, including routing, global styles, and context providers.
- **`pages`**: Each page represents a specific route in the application (e.g., `TasksPage`, `TaskDetailsPage`). Pages are composed of widgets and features.
- **`widgets`**: Larger, self-contained blocks of the UI, like `TaskList` or a page `Header`. They are composed of smaller, more focused components from `features` and `entities`.
- **`entities`**: Core business entities of the application, such as `Task`. This layer includes components, types, and logic related to a specific entity.
- **`shared`**: The lowest-level layer containing code that can be used anywhere in the application, such as UI components (`Button`, `Input`), API service abstractions, type definitions, and context providers.

This structure ensures a clear separation of concerns and makes the codebase easier to navigate, scale, and maintain.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm, yarn, or pnpm

### Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yuyuu-8/task-manager.git
   cd task-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the project by copying the example file:

   ```bash
   copy .env.example .env
   ```

   You do not need to change the variables inside `.env` to run the project, as it is pre-configured with a public Supabase instance for demonstration purposes.

   ```bash
   # .env
   VITE_SUPABASE_URL=https://lgjgzzxlebipwlhaoegi.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxnamd6enhsZWJpcHdsaGFvZWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NjUxMjcsImV4cCI6MjA2ODI0MTEyN30.0sA0FdmTq-yx2WTqgaKrOxkBupvw4BaNG_dBB16qdAY
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).

### Other Commands

- **Build for production:**

  ```bash
  npm run build
  ```

- **Preview the production build:**

  ```bash
  npm run preview
  ```

- **Lint and format:**

  ```bash
  npm run lint
  npm run format:fix
  ```
