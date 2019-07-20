module.exports = {
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    fontSize: {
      xs: ".75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem" // 48px
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    leading: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2
    },
    tracking: {
      tight: "-0.05em",
      normal: "0",
      wide: "0.05em"
    },
    spacing: {
      auto: "auto",
      px: "1px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "24": "6rem",
      "32": "8rem",
      "40": "10rem",
      "48": "12rem",
      "64": "16rem",
      "72": "20rem",
      "78": "24rem",
      "128": "32rem",
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "5/6": "83.33333%",
      xs: "20rem",
      sm: "30rem",
      md: "40rem",
      lg: "50rem",
      xl: "60rem",
      "2xl": "70rem",
      "3xl": "80rem",
      "4xl": "90rem",
      "5xl": "100rem",
      full: "100%"
    },
    minHeight: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    maxHeight: {
      "0": "0",
      "128": "32rem",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    shadows: {
      default: "0 2px 4px 0 rgba(0,0,0,0.10)",
      md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
      "md-dark": "0 4px 8px 0 rgba(0,0,0,0.25), 0 2px 4px 0 rgba(0,0,0,0.16)",
      lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      top: "-1px 0px 3px 0 rgba(0,0,0,0.50)",
      outline: "0 0 0 3px rgba(52,144,220,0.5)",
      none: "none"
    },
    opacity: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "100": "1"
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      inherit: "inherit",
      none: "none",
      "2": "2 2 0%"
    },
    extend: {}
  },
  variants: {
    fontSize: ["responsive", "hover", "focus"],
    fontWeight: ["responsive", "hover", "focus", "active", "group-hover"],
    backgroundColors: ["responsive", "hover", "focus", "group-hover", "active"],
    height: ["responsive", "hover", "focus"],
    width: ["responsive", "hover", "focus", "group-hover", "active"],
    minHeight: ["responsive", "hover", "focus", "group-hover", "active"],
    maxHeight: ["responsive", "hover", "focus", "group-hover", "active"],
    minWidth: ["responsive", "hover", "focus", "group-hover", "active"],
    maxWidth: ["responsive", "hover", "focus", "group-hover", "active"],
    borderColors: ["responsive", "hover", "active", "focus"],
    flex: ["responsive", "hover", "focus"],
    opacity: ["responsive", "hover", "group-hover"],
    shadows: ["responsive", "hover", "focus"],
    textColors: ["responsive", "hover"],
    textStyle: ["responsive", "hover", "focus"],
    float: ["responsive", "hover", "focus"]
  },

  plugins: []
};
