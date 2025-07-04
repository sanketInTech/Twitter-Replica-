# Twitter Clone (X Clone)

![Twitter Clone](public/images/twitter-clone.png.png)

## About

Twitter-Replica is a modern web application that recreates the core functionality and user experience of Twitter (now X). Built with Next.js and TypeScript, this project demonstrates advanced frontend development skills, responsive design implementation, and modern web development practices.

Key aspects of this project include:
- Real-time tweet composition and display
- User authentication and session management
- Responsive multi-column layout design
- Modern UI/UX implementation using Tailwind CSS
- Integration with various media types (images, GIFs, polls)
- Server-side rendering for optimal performance

This project serves as a showcase of full-stack development capabilities, focusing on creating a seamless and engaging user experience while maintaining code quality and following best practices.

This project is a work-in-progress Twitter (now X) clone built using Next.js, aiming to replicate the look, feel, and core functionality of the X.com desktop experience.

## Features

-   **Authentication:** Implemented using NextAuth.js with support for Credentials and Google providers.
-   **Responsive Layout:** A multi-column layout (Left Sidebar, Main Feed, Right Sidebar) that adapts to different screen sizes.
-   **Static Left Sidebar:** The navigation sidebar remains fixed while the main content area scrolls.
-   **Tweet Composer:** A functional area to compose new tweets with various media attachment options (Image, GIF, Poll, Emoji, Location).
-   **Post Feed:** Displays sample posts with user information, timestamps, content, and interaction counts (likes, retweets, replies).
-   **Styling:** Utilizes Tailwind CSS for rapid and responsive UI development, aiming for a look similar to X.com (dark mode, rounded elements, sticky headers).
-   **Sample Data:** Uses local sample data for posts and users.

## Technologies Used

-   Next.js (React Framework)
-   TypeScript
-   Tailwind CSS
-   NextAuth.js
-   React Icons (`react-icons`)
-   Headless UI (for components like Modals - although currently commented out)
-   MongoDB (Planned for database integration)

## Project Structure

-   `app/`: Contains the main application routing and layout.
    -   `layout.tsx`: Defines the overall application layout (sidebars, main content).
    -   `page.tsx`: The main home page component, including the tweet composer and post feed.
    -   `api/auth/[...nextauth]/route.ts`: NextAuth.js configuration.
    -   `components/`: Reusable UI components (Navigation, RightSidebar).
    -   `data/`: Sample data files (`sampleData.ts`).
    -   `lib/`: Utility functions or configurations (e.g., `mongodb.ts` for database connection).
    -   `types/`: TypeScript type definitions.
-   `public/`: Static assets.
-   `styles/globals.css`: Global Tailwind CSS styles.
-   `next.config.js`: Next.js configuration, including image domain allowlist.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [your repository URL]
    cd [your repository name]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add your NextAuth.js configuration.

    ```env
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=YOUR_SECRET
    # Google Provider Credentials (if using)
    GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
    # MongoDB Connection (if using)
    MONGODB_URI=YOUR_MONGODB_URI
    ```
    _Replace placeholder values with your actual credentials._

4.  **Run the development server:**

    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```

    Open [http://localhost:3002/](http://localhost:3002/) in your browser to see the result.

## To Do / Potential Improvements

-   Implement full backend for posts, users, and interactions (likes, retweets, replies).
-   Integrate database (MongoDB is planned).
-   Improve image handling, resolving external image loading issues.
-   Add more features (user profiles, following/followers, search, trending topics).
-   Refine responsive design and layout for various screen sizes.

## Live Demo

Once deployed, a live demo of the project will be available at: `YOUR_DEPLOYMENT_URL_HERE`

*(Note: `http://localhost:3002/` is a local development address and is not accessible externally. Please replace `YOUR_DEPLOYMENT_URL_HERE` with the public URL after deploying your project to a hosting service like Vercel or Netlify.)*

## Contacts

- **GitHub:** https://github.com/sanketInTech
- **LinkedIn:** https://www.linkedin.com/in/sanket-desai-/
- **Twitter (X):** https://x.com/IAmSanket_21
- **Email:** sanketdesai1971@gmail.com

## License

