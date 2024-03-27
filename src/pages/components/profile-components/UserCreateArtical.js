import { useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import Select from "react-select";

const tagesOptions = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "js", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "nodejs", label: "Node.js" },
  { value: "mongodb", label: "MongoDB" },
  { value: "sql", label: "SQL" },
  { value: "git", label: "Git" },
  { value: "restapi", label: "REST API" },
  { value: "graphql", label: "GraphQL" },
  { value: "docker", label: "Docker" },
  { value: "aws", label: "Amazon Web Services (AWS)" },
  { value: "azure", label: "Microsoft Azure" },
  { value: "gcp", label: "Google Cloud Platform (GCP)" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cplusplus", label: "C++" },
  { value: "typescript", label: "TypeScript" },
  { value: "redux", label: "Redux" },
  { value: "graphql", label: "GraphQL" },
  { value: "vuejs", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "webpack", label: "Webpack" },
  { value: "babel", label: "Babel" },
  { value: "sass", label: "Sass" },
  { value: "less", label: "Less" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "materialui", label: "Material-UI" },
  { value: "tailwindcss", label: "Tailwind CSS" },
  { value: "nextjs", label: "Next.js" },
  { value: "gatsbyjs", label: "Gatsby.js" },
  { value: "storybook", label: "Storybook" },
  { value: "jest", label: "Jest" },
  { value: "cypress", label: "Cypress" },
  { value: "enzyme", label: "Enzyme" },
  { value: "eslint", label: "ESLint" },
  { value: "prettier", label: "Prettier" },
  { value: "webpack", label: "Webpack" },
  { value: "babel", label: "Babel" },
  { value: "gulp", label: "Gulp" },
  { value: "grunt", label: "Grunt" },
  { value: "npm", label: "npm" },
  { value: "yarn", label: "Yarn" },
  { value: "linux", label: "Linux" },
  { value: "windows", label: "Windows" },
  { value: "macos", label: "macOS" },
  { value: "unix", label: "Unix" },
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "ansible", label: "Ansible" },
  { value: "terraform", label: "Terraform" },
  { value: "nginx", label: "Nginx" },
  { value: "apache", label: "Apache HTTP Server" },
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "sqlite", label: "SQLite" },
  { value: "redis", label: "Redis" },
  { value: "graphql", label: "GraphQL" },
  { value: "mongodb", label: "MongoDB" },
  { value: "firebase", label: "Firebase" },
  { value: "kafka", label: "Apache Kafka" },
  { value: "rabbitmq", label: "RabbitMQ" },
  { value: "mqtt", label: "MQTT" },
  { value: "websockets", label: "WebSockets" },
  { value: "grpc", label: "gRPC" },
  { value: "oauth", label: "OAuth" },
  { value: "jwt", label: "JSON Web Tokens (JWT)" },
  { value: "ssl", label: "SSL/TLS" },
  { value: "cors", label: "Cross-Origin Resource Sharing (CORS)" },
  { value: "csrf", label: "Cross-Site Request Forgery (CSRF)" },
  { value: "oauth", label: "OAuth" },
];
const categories = [
  { value: "tech", label: "Technical" },
  { value: "sport", label: "Sports" },
  { value: "health", label: "Health & Wellness" },
  { value: "food", label: "Food & Cooking" },
  { value: "travel", label: "Travel & Adventure" },
  { value: "education", label: "Education & Learning" },
  { value: "finance", label: "Finance & Investing" },
  { value: "art", label: "Art & Creativity" },
  { value: "music", label: "Music & Entertainment" },
  { value: "science", label: "Science & Technology" },
];
const editorConfig = {
  height: "500px",
  showXPathInStatusbar: false,
  showCharsCounter: false,
  showWordsCounter: false,
  toolbarAdaptive: false,
  toolbarSticky: false,
  style: {
    background: "#27272E",
    color: "rgba(255,255,255,0.5)",
  },
};

export default function UserCreateArtical() {
  const [content, setContent] = useState("");
  const handleChange = (value) => {
    console.log(value);
    setContent(value);
  };
  const handleSelectChange = (value) => {
    console.log(value);
  };
  const handleSelectChangeCategory = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="card-profile-2 create-artical">
        <h1> Create Artical</h1>
        <p>Her you can create articals and share your knowladge </p>
        <div className="card-profile-2-artical-create">
          <form className="create-artical-form">
            <div className="form-group">
              <label>title</label>
              <input
                className="form-control"
                type="text"
                placeholder="artical title..."
              />
            </div>
            <div className="form-group">
              <label>image url</label>
              <input
                className="form-control"
                type="text"
                placeholder="image url..."
              />
            </div>

            <div className="form-group">
              <label>Tages</label>
              <Select
                options={tagesOptions}
                isMulti
                onChange={handleSelectChange}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <Select
                options={categories}
                onChange={handleSelectChangeCategory}
              />
            </div>
            <div className="form-group">
              <label>pharagraph</label>
              <JoditEditor
                value={content}
                onChange={handleChange}
                options={editorConfig}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
