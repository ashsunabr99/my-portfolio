const asset = (fileName) => `${process.env.PUBLIC_URL}/${fileName}`;

export const projects = [
  {
    title: "Twitter Engine Clone",
    subtitle: "Distributed OS",
    description:
      "Built a Twitter-style engine in Erlang using the actor model with a JSON API on Cowboy. Implemented core social features including timelines, follows, and tweet workflows.",
    image: asset("twitter_clone.jpg"),
    link: "https://github.com/ashsunabr99/Twitter_replica_4.2",
  },
  {
    title: "Log data Visualizer",
    subtitle: "Tableau and NLP",
    description:
    "Developed an interactive React and Tableau dashboard to analyze analyst log text. Applied NLP preprocessing to surface user behavior patterns and decision flow.",
    image: asset("Log Data Visualizer.gif"),
    link: "https://info-viz-project.w3spaces.com/",
  },
  {
    title: "E – mall space management system",
    subtitle: "Spring Boot Framework, React JS, Axios, MySQL",
    description:
      "Built a microservices-based booking platform for mall marketing teams to manage and allocate seller spaces through a web workflow.",
    image: asset("emall.gif"),
    link: "https://github.com/ashsunabr99/web-emall",
  },
  {
    title: "Sky Detection Algorithm",
    subtitle: "Python and Image Processing",
    description:
      "Implemented a sky-region detection pipeline in Python using image processing and energy optimization for single-image segmentation.",
    image: asset("skydetect.png"),
    link: "https://github.com/ashsunabr99",
  },
  {
    title: "Maternal Health Risk Prediction Model",
    subtitle: "Feature Selection · Artificial Intelligence (AI)",
    description:
      "Built a maternal health risk model using IoMT data and feature selection techniques to improve prediction quality and interpretability.",
    image: asset("Maternal.png"),
    link: "https://github.com/ashsunabr99/FeatureSelection_MHR",
  },
  {
    title: "BITCOIN Mining",
    subtitle: "Erlang · Actor Model",
    description:
      "Created a distributed Bitcoin mining simulation in Erlang using actor-based parallel hashing and configurable target thresholds.",
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
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Bootstrap",
  "Java",
  "Python",
  "C#",
  ".NET",
  "Spring Boot",
  "JUnit",
  "Flask",
  "PyTest",
  "Microservices",
  "REST APIs",
  "MVC",
  "Scikit-learn",
  "LangChain",
  "PostgreSQL",
  "MySQL",
  "MS SQL Server",
  "BigQuery",
  "Redis",
  "TensorFlow",
  "PyTorch",
  "Vector Databases",
  "ODATA APIs",
  "LLMs",
  "MCP Servers",
  "RAG Models",
  "Prompt Engineering"
];

export const tools = [
  "Google Cloud Platform",
  "AWS S3",
  "AWS ECS",
  "AWS Bedrock",
  "AWS SQS",
  "AWS Lambda",
  "GitHub",
  "CI/CD",
  "Agile/Scrum",
  "Power BI",
  "Tableau",
  "Jira",
  "VS Code",
  "IntelliJ IDEA",
  "Postman",
  "Visual Studio",
  "Eclipse",
  "Docker",
  "Kubernetes"
];
