const asset = (fileName) => `${process.env.PUBLIC_URL}/${fileName}`;

export const projects = [
  {
    title: "Twitter Engine Clone",
    subtitle: "Distributed OS",
    description:
      "A twitter engine implemented using erlang actor model and paired with JSON based API clone which integrates all design features and functionalities of Twitter using Erlang’s Cowboy web framework. All Twitter Features are implemented.",
    image: asset("twitter_clone.jpg"),
    link: "https://github.com/ashsunabr99/Twitter_replica_4.2",
  },
  {
    title: "Log data Visualizer",
    subtitle: "Tableau and NLP",
    description:
    "This software enables users to analyze textual log data, exploring an analyst's interactions to understand their thought process and behavior. Using React and Tableau, this interactive dashboard preprocesses data using natural language processing.",
    image: asset("Log Data Visualizer.gif"),
    link: "https://info-viz-project.w3spaces.com/",
  },
  {
    title: "E – mall space management system",
    subtitle: "Spring Boot Framework, React JS, Axios, MySQL",
    description:
      "A virtual space management system, implemented in micro-service architecture where the marketing staff of a mall can book spaces online for sellers.",
    image: asset("emall.gif"),
    link: "https://github.com/ashsunabr99/web-emall",
  },
  {
    title: "Sky Detection Algorithm",
    subtitle: "Python and Image Processing",
    description:
      "A complete implementation of a sky region detection algorithm within a single image using python, image processing, and energy optimization function.",
    image: asset("skydetect.png"),
    link: "https://github.com/ashsunabr99",
  },
  {
    title: "Maternal Health Risk Prediction Model",
    subtitle: "Feature Selection · Artificial Intelligence (AI)",
    description:
      "Built a feature selection project which leverages Internet of Medical Things (IoMT) device data for maternal health risk prediction. Through diverse feature selection techniques, a crucial subset of features is identified to improve risk assessment.",
    image: asset("Maternal.png"),
    link: "https://github.com/ashsunabr99/FeatureSelection_MHR",
  },
  {
    title: "BITCOIN Mining",
    subtitle: "Erlang · Actor Model",
    description:
      "A bitcoin mining algorithm which uses Erlang and actor model to implement cryptographic hashing for mining bitcoins. A bitcoin is an input that, when “hashed” produces an output smaller than a target value.",
    image: asset("bitcoin.jpg"),
    link: "https://github.com/ashsunabr99",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  "Java", "Python", "C# .NET", "SQL", "JavaScript", "React.js", "Springboot", ".NET Core", "REST API", "OData API"
];

export const tools = [
  "SQL", "PostgreSQL", "Google Cloud Platform", "BigQuery", "AWS S3", "Fivetran", "Docker", "Kubernetes", "Jenkins", "VS Code", "Jupyter Notebook", "Android Studio", "Datadog", "Azure", "GitHub", "Tableau", "Google Looker","Power BI", "Postman"
];
