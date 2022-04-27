import WorkoutApp from "../../public/projects/WorkoutApp.png";
import StockChartz from "../../public/projects/StockChartz.png";


export const ProjectsData = [
  {
    title: "MY WORKOUT APP",
    image: WorkoutApp,
    description:
      "I designed and built this responsive workout web app with React. This is V2 of this project as I wanted to create a more custom workout tracker for myself. After creating a profile, users are able to create, save, and edit new workouts to store in the user’s library of workouts. Users can then select a workout for the day to have on hand while at the gym. (See README on GitHub for more specific details.)",
    github: "https://github.com/CharlesCarr/workout-v2",
    demo: "https://workout-tracker-faa13.web.app/",
    tech: [
      "React JS",
      "Material UI",
      "React-Beautiful-DnD",
      "Firebase Auth & DB",
    ],
  },
  {
    title: "STOCKCHARTZ",
    image: StockChartz,
    description: "This project allows users to input stock tickers to display animated, responsive stock price chart data. The user can add up to two stock tickers and compare side by side with a biaxial chart. Users can also easily view percentage change performance in a side component. Stock price data is fetched from an external API for current pricing. (See README on GitHub for more specific details.)",
    github: "https://github.com/CharlesCarr/react-stock-chart",
    demo: "https://stockchartz.web.app/",
    tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
  }
];
