# Rich Text Daily Task Manager

A modern, responsive Todo application built with React, Vite, and Tailwind CSS. It features a rich text editor (TipTap) for detailed task descriptions, local storage persistence, and a clean, modular architecture.

![Project Preview](https://via.placeholder.com/800x400?text=Daily+Task+App+Preview)

## 🚀 Features

* **Rich Text Descriptions:** Use bold, italics, lists, and headings to describe tasks using the integrated [TipTap](https://tiptap.dev/) editor.
* **Full CRUD:** Create, Read, Update, and Delete tasks efficiently.
* **Smart Filtering:** Filter tasks by status (All, Pending, Done) or date (Today).
* **Local Storage Persistence:** Your data is saved automatically and persists across page reloads.
* **Responsive Design:** Fully responsive UI built with Tailwind CSS.
* **Inline Editing:** Edit tasks without losing context of your current view.
* **Clean Architecture:** Logic separated into custom hooks (`useTodos`) and modular UI components.

## 🛠️ Tech Stack

* **Framework:** React 18 + Vite
* **Styling:** Tailwind CSS
* **Editor:** TipTap (Headless rich text editor)
* **Icons:** Lucide React
* **Date Handling:** date-fns
* **Utilities:** clsx, tailwind-merge

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/rich-text-todo.git](https://github.com/your-username/rich-text-todo.git)
    cd rich-text-todo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to view the app.

## 📂 Project Structure

The project follows a component-based architecture with separated concerns:

```text
src/
├── components/
│   ├── editor/           
│   │   ├── EditorToolbar.jsx
│   │   ├── TipTapEditor.jsx
│   │   └── ToolbarBtn.jsx
│   ├── todo/             
│   │   ├── EmptyState.jsx
│   │   ├── TodoFilter.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoHeader.jsx
│   │   └── TodoItem.jsx
│   └── ui/             
│       ├── Button.jsx
│       ├── Heading.jsx
│       └── Paragraph.jsx
├── hooks/
│   └── useTodos.js       # Custom hook for state & LocalStorage logic
├── data.js               # Static data (Filter options, Header text)
├── utils.js              # Helper for dynamic class merging (cn)
├── App.jsx               # Main application layout
└── main.jsx              # Entry point



🧩 Key Components

useTodos Hook: Centralizes all state management. It handles lazy initialization of LocalStorage to prevent data loss and manages CRUD operations.

TipTapEditor: A wrapper around the TipTap library that synchronizes content and fixes common CSS issues (like list formatting) using Tailwind arbitrary values.

TodoFilter: Renders dynamic filter tabs based on the src/data.js configuration.