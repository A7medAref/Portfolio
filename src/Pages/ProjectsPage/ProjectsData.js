import arc from "../../UI/Images/arc.jpg";
import youtube from "../../UI/Images/youtube.jpg";
import mars from "../../UI/Images/Mars.png";
import fetcher from "../../UI/Images/fetcher.jpg";
import circuit from "../../UI/Images/circuit.jpg";
import logic from "../../UI/Images/Logic.jpg";

const data = [
  {
    imgSrc: arc,
    title: "Arc Development",
    description: `Website to show information and services provided by a company called Arc Development. This app was built using React.js and material ui.`,
    link: "https://arc-development-aref.netlify.app/",
  },
  {
    imgSrc: youtube,
    title: "Youtube Downloader",
    description: `You can download any youtube video just put the link, choose the quality you want, and click the button to download it. You also can download any video as mp3. This app was built using python.`,
    link: "https://github.com/A7medAref/Youtube-Downloader",
  },
  {
    imgSrc: fetcher,
    title: "Github Fetcher",
    description: `With this website you can analize the profile of any user in github and get all information about his account like the most rated and visited repositories and most used programming languages in his account.`,
    link: "https://github.com/A7medAref/Github-Fetcher",
  },
  {
    imgSrc: circuit,
    title: "Circuit Analizer",
    description: `app to analize any electric circuit with any number of components. just input the information about the circuit as in the formation file and launch the app. This app was built using c++.`,
    link: "https://github.com/A7medAref/Circuit-analyzer",
  },
  {
    imgSrc: mars,
    title: "Mars Station",
    description: `Project to describe some missions and operations while exploring Mars. It is implemented using some Data Structures and by doing several algorithms using c++.`,
    link: "https://github.com/ahmedasad236/Mars_Exploration",
  },
  {
    imgSrc: logic,
    title: "Logic Simulator",
    description: `You can simulate and test any logical circuit using this app. You can also do some operations like deleting, copying, pasting, saving and loading. This app was built using c++.`,
    link: "https://github.com/A7medAref/Logic-Simulator",
  },
];
export default data;
