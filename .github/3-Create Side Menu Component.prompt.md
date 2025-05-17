---
mode: 'agent'
---
Create a **left-side menu (sidebar)** component for a Next.js app using **Tailwind CSS** with the following updated requirements:

1. The sidebar should start **below the fixed header** and span the full height of the remaining viewport. It should **not overlap** the header.

2. The sidebar should **push the main content to the right** when visible, instead of floating over it. Use a layout where the sidebar takes fixed width (e.g., `w-64`) and adjusts the main content layout using flex.

3. Use **`flex` layout at the page level** to accommodate the sidebar and main content side-by-side when the sidebar is open. When `isOpen` is `false`, the sidebar width should be `0` or removed.

4. The sidebar background color should be **white (`bg-white`)** with a **paper-like floating style**, using Tailwind classes like `shadow-lg`, `border-r`, and `rounded-r-lg` (optional).

5. The sidebar should contain **two navigation links**:
   - "Economy"
   - "Population"

   Each link should be:
   - Full width (`block w-full`)
   - Properly padded (`py-3 px-6`)
   - Styled with `text-gray-800`, `text-md`, `font-medium`
   - Have `hover:bg-gray-100` interaction

6. Accept a prop like `isOpen` and conditionally render or collapse the sidebar based on that. Smoothly animate the sidebar using Tailwind transition classes like `transition-all`, `duration-300`, and `ease-in-out`.

7. The sidebar component should be a functional React component (e.g., `Sidebar.tsx`), cleanly exported and with inline comments explaining each part.

8. Do not use external libraries for UI or transitions. Use only Tailwind CSS.

9. Do not implement routing—use `<a href="#">` for now.

The component should integrate well with the earlier fixed blue header and be **responsive**. 

The side bar should be tooglable by a button in the header, which is not part of this task.
