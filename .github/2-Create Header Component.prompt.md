---
mode: 'agent'
---
Create a responsive header component with the following requirements:

Create the component in 'components' directory.

The header should have a fixed height (e.g., h-16) and background color bg-blue-500.

On the left side, add a hamburger menu icon (3 bars) that is clickable. When clicked, it should toggle a boolean state (isSidebarOpen) using React's useState. I will later use this state to show/hide a side menu component.

In the center of the header, display a title text, e.g., "My Dashboard". Use white text (text-white) and make it appropriately styled (font-semibold, text-lg or xl depending on screen size).

On smaller screens (sm and below), the hamburger menu should always be visible. On larger screens, you can keep it optionally hidden if needed later.

Use Flexbox (flex, justify-between, items-center) to align the hamburger icon and title properly inside the header.

Wrap the component logic using a functional React component (Header.tsx) and export it. Make sure to include proper accessibility for the button (e.g., aria-label="Toggle menu").

Do not implement the side menu yet—just make sure the onClick toggles a console.log("Toggle sidebar") or sets a state variable for now.

Use only Tailwind CSS classes for styling (no inline styles or external CSS files).

Add comments to explain each part of the code.