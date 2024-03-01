import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f0f0; /* Set a default background color */
    overflow: hidden; /* Prevent horizontal scroll due to large animations */
  }

  /* Add a keyframe animation for the background */
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Apply the animation to the body */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensure the pseudo-element is behind the content */
    background: linear-gradient(45deg, navy, silver, purple, #3498db, #e74c3c, #2ecc71, #f39c12);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite; /* Set animation duration to 10 seconds */
  }
`;

export default GlobalStyles;
