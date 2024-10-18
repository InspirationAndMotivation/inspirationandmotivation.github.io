const meta = {
  title: 'Anastasia Pranovych',
  description: 'Anastasia Pranovych, Frontend React Developer',
};

const introdata = {
  animated: {
    first: 'I am React Software Developer',
    second: 'I love coding',
    third: 'I develop websites',
    fourth: 'Nice to meet you!',
    fifth: 'You found the EASTER EGG!',
  },
};

const worktimeline = [
  {
    jobtitle: 'React Software Engineer',
    employer: 'SmartBear Software',
    where: 'Poland, Wrocław',
    date: '03.2023 - 06.2024',
  },
  {
    jobtitle: 'Frontend Software Developer',
    employer: 'Stellarity',
    where: 'Poland, Wrocław',
    date: '10.2021 - 02.2023',
  },
  {
    jobtitle: 'Frontend Software Developer',
    employer: 'ITOP1000',
    where: 'Ukraine, Kyiv',
    date: '07.2021 - 10.2021',
  },
];

const educationtimeline = [
  {
    school: 'Advanced React by Meta',
    where: 'Online',
    degree: 'Certificate',
    date: '04/2024-05/2024',
  },
  {
    school: 'Learn HTML and CSS by Scrimba',
    where: 'Online',
    degree: 'Certificate',
    date: '04/2024-05/2024',
  },
  {
    school: 'UX/UI Design Course by Maria Hres',
    where: 'Online',
    degree: 'Certificate',
    date: '03/2022-06/2022',
  },
  {
    school: 'Intensive JavaScript Course by Andersen',
    where: 'Online',
    degree: 'Certificate',
    date: '09/2021-10/2021',
  },
  {
    school: 'Wrocław University of The Science and Technology',
    where: 'Poland, Wrocław',
    degree: 'Bachelor`s degree',
    date: '10/2017-10/2021',
  },
  {
    school: 'Yevhen Paton Applied College Of The Welding And Electronics',
    where: 'Ukraine, Dnipro',
    degree: 'Associate degree with Honors',
    date: '09/2013-09/2017',
  },
];

const skills = [
  {
    img_name: 'react.png',
    alt: 'React',
    name: 'React',
    info: 'React, React-testing-library, React-router-dom, React Hooks, React Forms',
  },
  {
    img_name: 'redux.png',
    alt: 'Redux',
    name: 'Redux',
    info: 'Redux, Redux-Toolkit, Redux-Observable',
  },
  {
    img_name: 'rxjs.png',
    alt: 'RxJS',
    name: 'RxJS',
    info: 'RxJS',
  },
  {
    img_name: 'html.png',
    alt: 'HTML',
    name: 'HTML',
    info: 'HTML',
  },
  {
    img_name: 'css.png',
    alt: 'CSS',
    name: 'CSS',
    info: 'CSS',
  },
  {
    img_name: 'sass.png',
    alt: 'SASS',
    name: 'SASS',
    info: 'SASS',
  },
  {
    img_name: 'typescript.png',
    alt: 'Typescript',
    name: 'Typescript',
    info: 'Typescript',
  },
  {
    img_name: 'javascript.png',
    alt: 'Javascript',
    name: 'Javascript',
    info: 'Javascript',
  },
  {
    img_name: 'bootstrap.png',
    alt: 'Bootstrap',
    name: 'Bootstrap',
    info: 'Bootstrap',
  },
  {
    img_name: 'tailwind.png',
    alt: 'Tailwind',
    name: 'Tailwind',
    info: 'Tailwind',
  },
  {
    img_name: 'mui.png',
    alt: 'Material UI',
    name: 'Material UI',
    info: 'Material UI',
  },
  {
    img_name: 'primereact.png',
    alt: 'Primereact',
    name: 'Primereact',
    info: 'Primereact',
  },
  {
    img_name: 'nodejs.png',
    alt: 'Nodejs',
    name: 'Node.js',
    info: 'Node.js',
  },
  {
    img_name: 'github.png',
    alt: 'GitHub',
    name: 'GitHub',
    info: 'GitHub',
  },
  {
    img_name: 'jira.png',
    alt: 'Jira',
    name: 'Jira',
    info: 'Jira, Confluence, Scrum Poker',
  },
  {
    img_name: 'figma.png',
    alt: 'Figma',
    name: 'Figma',
    info: 'Figma',
  },
  {
    img_name: 'sketch.png',
    alt: 'Sketch',
    name: 'Sketch',
    info: 'Sketch',
  },
  {
    img_name: 'jest.png',
    alt: 'Jest',
    name: 'Jest',
    info: 'Jest',
  },
];

const projects = [
  {
    name: 'Memory game',
    type: 'Pet project',
    description:
      'Main goal of the project was to develop web version of memory game, where you need to find pairs for every picture. Im planning to implement few more mods with higher difficulty and few more secret features.',
    link: 'https://github.com/InspirationAndMotivation/memory-game',
    image: 'MemoryGame1.png',
    stack: 'React, TypeScript, SCSS, HTML',
  },
  {
    name: 'Weather App',
    type: 'Pet project',
    description:
      'Main goal of the project was to develop web application for checking current weather based on obtained persons location or picked city. Weather Api was used to get weather data. Also implemented functionality for location detecting and temperature units selection. Im planning to implement getting cities from API and mobile view in future.',
    link: 'https://github.com/InspirationAndMotivation/react-weather-app',
    image: 'WeatherApp.png',
    stack:
      'React, TypeScript, CSS/SCSS, HTML, JavaScript, Redux, X-charts, Material UI',
  },
  {
    name: 'Scheduler',
    type: 'Pet project',
    description:
      'Main goal of the project was to develop web application for scheduling meetings and events from scratch without using any of libraries.',
    link: 'https://github.com/InspirationAndMotivation/Scheduler',
    image: 'Scheduler_light.png',
    stack: 'React, TypeScript, SCSS, HTML, JavaScript, CSS',
  },
  {
    name: 'Luxmed Application',
    type: 'Pet project',
    description:
      'Main goal of the project was to develop web application for registration clients for an appointment with doctors and registration new doctors working in the company as well. Several forms were implemented where doctors could add the languages they speak, skills and other information about themselves. The project wasnt finished. However, the diamond of the project is the hand-written drop-down menu for language selecting, because there is implemented tags system without any libraries.',
    link: 'https://github.com/InspirationAndMotivation/luxmed-website',
    image: 'LuxmedApp1.png',
    stack: 'React, HTML, CSS, JavaScript, React Forms',
  },
  {
    name: 'VisualTest',
    type: 'Commercial project',
    description:
      'Main goal of the project was to develop a web version of the automated testing tool that allow debug tests and detect visual regressions.',
    link: 'https://smartbear.com/product/visualtest/',
    image: 'VisualTest.png',
    stack:
      'React, Typescript, Redux, RXJS, HTML5, CSS/SCSS, Jest, React Testing Library, MaterialUI, Primereact, GIT, I18next',
  },
  {
    name: 'TestComplete',
    type: 'Commercial project',
    description:
      'Main goal of the project was to develop a web version of the automated testing tool with extensive functionalities for testing GUIs.',
    link: 'https://smartbear.com/product/testcomplete/',
    image: 'TestComplete.png',
    stack:
      'React, Typescript, Redux, HTML5, CSS/SCSS, Tailwind, Electron, I18next, GIT',
  },
  {
    name: 'I.Materialise',
    type: 'Commercial project',
    description:
      'Main goal of the project was to develop web application for ordering online and printing of the 3D Sculptures.',
    link: 'https://i.materialise.com/en/3dprint',
    image: 'Imaterialise.png',
    stack:
      'React, Typescript, Redux, React Hooks, HTML5, CSS/SCSS, Three.js, MaterialUI, GIT',
  },
  {
    name: 'Dropie',
    type: 'Commercial project',
    description:
      'Main goal of the project was to develop mobile app for vehicle renting (scooters, bicycles, motorboats, cars etc.), web app to manage mobile app & web app for client usage.',
    link: 'https://dropie.co/',
    image: 'Dropie.png',
    stack: 'JavaScript, HTML, CSS/SCSS, Ant Design, React, Webpack, Gulp',
  },
];

const contactConfig = {
  contact_email: ' anastasia.pranovych@gmail.com',
  contact_phone: ' +1 (403) 992-0692',
  contact_address: ' Canada, Calgary, T2N 1V9',
};

const socialprofils = {
  github: 'https://github.com/InspirationAndMotivation',
  linkedin: 'https://www.linkedin.com/in/anastasia-pranovych',
};

const languages = {
  en: 'en',
  fr: 'fr',
  pl: 'pl',
  ru: 'ru',
  ua: 'ua',
};

export {
  meta,
  worktimeline,
  educationtimeline,
  skills,
  projects,
  introdata,
  contactConfig,
  socialprofils,
  languages,
};
