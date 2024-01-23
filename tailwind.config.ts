// import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: [require("daisyui"),
  nextui({
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {} // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {} // dark theme colors
      },
      modern: {
        extend: 'dark', // <- inherit default values from dark theme
        colors: {
          background: '#0D001A',
          foreground: '#ffffff',
          primary: {
            50: '#3B096C',
            100: '#520F83',
            200: '#7318A2',
            300: '#9823C2',
            400: '#c031e2',
            500: '#DD62ED',
            600: '#F182F6',
            700: '#FCADF9',
            800: '#FDD5F9',
            900: '#FEECFE',
            DEFAULT: '#DD62ED',
            foreground: '#ffffff'
          },
          focus: '#F182F6'
        },
        layout: {
          disabledOpacity: '0.3',
          radius: {
            small: '1px',
            medium: '2px',
            large: '4px'
          },
          borderWidth: {
            small: '1px',
            medium: '2px',
            large: '3px'
          }
        }
      }
    }
  })],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
