# Scott Fuston Portfolio

A personal portfolio website built to showcase my experience as an Automation Engineer and developer, including featured projects, technologies, and contact information.

## Overview

This project is a React-based single-page portfolio designed to present:

- Work experience and background
- Technical skills and proficiency levels
- Project highlights with GitHub and live links
- A clean, responsive layout for desktop and mobile

## Tech Stack

- React 17
- React Scripts
- JavaScript
- Sass
- React Scroll
- Jest + React Testing Library

## Features

- Smooth-scrolling navigation
- Responsive layout for multiple screen sizes
- Dynamic project and skills data loading
- GitHub links for each portfolio project
- Conditionally rendered live site links
- Clean, modern styling inspired by an HTML5UP template

## Project Structure

```bash
src/
├── App.jsx
├── index.jsx
├── assets/
│   └── data/
│       ├── projects.js
│       └── skillsData.js
├── components/
│   ├── About/
│   ├── Common/
│   ├── Contact/
│   ├── Portfolio/
│   └── Skills/
├── utils/
└── __test__/
```

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the app in development mode:

```bash
npm start
```

4. Build for production:

```bash
npm run build
```

## Testing

```bash
npm test
```

This project includes basic React testing with Jest and Testing Library.

## Notes

- Project data is loaded dynamically from the data files in `src/assets/data`.
- Images are optimized for performance and kept under the target size for quick loading.
- The design uses a template-inspired aesthetic while maintaining a custom React implementation.

## Credits

- [React](https://react.dev/)
- [React Scroll](https://www.npmjs.com/package/react-scroll)
- [Sass](https://sass-lang.com/)
- [HTML5UP](https://html5up.net/)
- [TinyPNG](https://tinypng.com/)
- [Font Awesome](https://fontawesome.com/)

