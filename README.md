# Data Visualization Platform

## Setup Instructions

### Environment

-   Node.js (v18+)
-   npm or yarn package manager
-   Modern web browser (Chrome, Firefox, Safari)

### Installation

1. Clone the repository
2. Install dependencies:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm run dev
    ```

## Features Implemented

-   **Interactive Dashboard**: Tabbed interface for different data visualizations
-   **Data Visualization**: Interactive charts using Recharts library
-   **User Authentication**: Secure login with Firebase authentication
-   **Responsive Design**: Works across desktop and mobile devices
-   **State Management**: Redux toolkit for centralized data management

## Technical Decisions and Trade-offs

-   **React + Vite**: Chosen for fast development experience and quick startup times
-   **Redux Toolkit**: Used for centralized state management, making it easier to track data changes
-   **Firebase Authentication**: Provides secure user authentication without building a custom backend
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development
-   **TypeScript**: Added type safety and better developer experience at the cost of slightly increased development time
-   **Recharts**: Lightweight charting library with good performance and customization options
-   **Shadcn UI**: Utilized for high-quality, customizable components that follow Radix UI's accessibility patterns

## Known Limitations

-   Limited to predefined visualization types and data formats
-   Demo data is used for visualizations; integration with real-time data sources pending
-   Mobile optimization for complex visualizations is still in progress

## Project Structure

-   `/src/components` - Reusable UI components
-   `/src/screens` - Main application screens
-   `/src/lib` - Utility functions and helpers
-   `/src/store` - Redux store configuration and slices
-   `/src/types` - TypeScript type definitions
-   `/src/assets` - Static assets like images and icons
-   `/src/components/ui` - Shadcn UI components
