# Task Manager - Frontend

This is the frontend for the Task Manager application, built with React and TypeScript. It provides a user-friendly interface for managing tasks.

**[View the deployed application here](https://yuyuu-8.github.io/task-manager/)**

This project is connected to a separate backend server. You can find the repository for the server here:
**[Task Manager Server Repository](https://github.com/yuyuu-8/task-manager-server)**

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
- **Backend Communication:** Fetch API to interact with the [Express REST API](https://github.com/yuyuu-8/task-manager-server).
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

To run this project, you need to have both the frontend and the [backend server](https://github.com/yuyuu-8/task-manager-server) running.

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm, yarn, or pnpm

### Installation & Setup

1. **Clone the frontend repository:**

   ```bash
   git clone https://github.com/yuyuu-8/task-manager.git
   cd task-manager
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Clone and run the backend server:**

   Follow the instructions in the [server's README](https://github.com/yuyuu-8/task-manager-server/blob/main/README.md) to get it running. By default, it runs on `http://localhost:3001`.

### Running the Project

1. **Start the frontend development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173` (or the address shown in your terminal).

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
