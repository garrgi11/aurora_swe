# Modern React Application

A modern React application built with TypeScript, Vite, and ShadcnUI components, featuring a robust development environment and a comprehensive UI component library.

## 🚀 Setup Instructions

1. **Prerequisites**
   - Node.js (Latest LTS version recommended)
   - npm or bun package manager

2. **Installation**
   ```bash
   # Clone the repository
   git clone [your-repository-url]
   cd [your-project-name]

   # Install dependencies
   npm install
   # or if using bun
   bun install
   ```

3. **Running the Application**
   ```bash
   # Development mode
   npm run dev
   # or
   bun run dev

   # Build for production
   npm run build
   # or
   bun run build

   # Preview production build
   npm run preview
   # or
   bun run preview
   ```

## 🎯 Features

- **Modern Development Environment**
  - Vite as build tool for fast development and optimized production builds
  - TypeScript support for better type safety and developer experience
  - Hot Module Replacement (HMR) for quick development iterations

- **UI Components**
  - Comprehensive set of accessible UI components using Radix UI primitives
  - Modern and customizable design system with ShadcnUI
  - Responsive layouts and animations
  - Dark mode support via next-themes

- **Development Tools**
  - ESLint for code quality
  - TypeScript for type safety
  - Tailwind CSS for styling
  - PostCSS for CSS processing

## 🧪 Testing Instructions

1. **Linting**
   ```bash
   npm run lint
   ```

2. **Type Checking**
   ```bash
   tsc --noEmit
   ```

3. **Manual Testing**
   - Run the development server: `npm run dev`
   - Open your browser at `http://localhost:5173`
   - Test different features and components
   - Verify responsive design by resizing browser window

## 📚 Third-Party Libraries

### Core Libraries
- **React (^18.3.1)** - Core UI library
- **TypeScript (^5.8.3)** - Type safety and enhanced developer experience
- **Vite (^5.4.1)** - Build tool and development server

### UI Components and Styling
- **@radix-ui/** components - Headless UI primitives for building accessible components
- **tailwindcss (^3.4.11)** - Utility-first CSS framework
- **class-variance-authority** - Type-safe component variants
- **clsx & tailwind-merge** - Utility functions for managing CSS classes

### Form Handling and Validation
- **react-hook-form** - Form state management and validation
- **zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Data Management and Visualization
- **@tanstack/react-query** - Data fetching and state management
- **recharts** - Charting library for data visualization

### Routing
- **react-router-dom** - Client-side routing

### Development Tools
- **eslint** - Code linting
- **postcss** - CSS processing
- **@vitejs/plugin-react-swc** - Fast React refresh implementation

## 🤝 Contributing

Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.