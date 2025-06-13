<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->
This is a Next.js application built with TypeScript, using the App Router architecture. The project structure includes React components, server and client components, and organizes routes under the `app/` directory. The codebase uses Tailwind CSS for styling and follows modular, best-practice patterns for Next.js and React. Please follow these guidelines when contributing:

## Code Standards

### Required Before Each Commit
- Run `npm run lint` to ensure code follows project standards
- Make sure all components follow Next.js App Router patterns
- Client components should be marked with 'use client' when they use browser APIs or React hooks
- When adding new functionality, make sure you update the README
- Make sure that the repository structure documentation is correct and accurate in the Copilot Instructions file
- Ensure all tests pass by running `npm run test` in the terminal

### TypeScript and React Patterns
- Use TypeScript interfaces/types for all props and data structures
- Follow React best practices (hooks, functional components)
- Use proper state management techniques
- Components should be modular and follow single-responsibility principle

### Styling
- You must prioritize using Tailwind CSS classes as much as possible. If needed, you may define custom Tailwind Classes / Styles. Creating custom CSS should be the last approach.

## Development Flow
- Install dependencies: `npm install`
- Development server: `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`

## Repository Structure
- `app/`: Next.js App Router pages, layouts, and route-specific components
  - `app/components/`: Components used within app routes (e.g., `FilterSection.tsx`, `Header.tsx`, `Sidebar.tsx`)
  - Route folders (e.g., `economy/`, `population/`): Contain route-specific `page.tsx` files
- `public/`: Static assets (SVGs, images, etc.)
- `README.md`: Project documentation
- `next.config.ts`, `tsconfig.json`, `package.json`, `postcss.config.mjs`: Project configuration files

## Key Guidelines
1. Make sure to evaluate the components you're creating, and whether they need 'use client'
2. Images should contain meaningful alt text unless they are purely for decoration. If they are for decoration only, a null (empty) alt text should be provided (alt="") so that the images are ignored by the screen reader.
3. Follow Next.js best practices for data fetching, routing, and rendering
4. Use proper error handling and loading states
5. Optimize components and pages for performance