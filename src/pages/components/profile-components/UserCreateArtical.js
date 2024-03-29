import { useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { createPostApiFun } from "../../../store/Slicers/posts/createPostSlicers";
import Alart from "../ui/Alart";
import CustomLoader from "../ui/CustomLoader";

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

export default function UserCreateArtical({ onFinshed }) {
  const { loading, data, error } = useSelector((s) => s.createPostSlicers);
  const dispatch = useDispatch();

  const [alertValue, setAlertValue] = useState({
    show: false,
    message: "",
    variant: "",
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [tages, setTages] = useState([]);

  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [contentErrorMessage, setContentErrorMessage] = useState("");
  const [imageUrlErrorMessage, setImageUrlErrorMessage] = useState("");
  const [categoryErrorMessage, setCategoryErrorMessage] = useState("");

  const handleChange = (value) => {
    setContentErrorMessage("");
    setContent(value);
  };
  const handleSelectChange = (value) => {
    setTages([]);
    value.forEach((tag) => {
      setTages((prev) => [...tages, tag.value]);
    });
  };
  const handleSelectChangeCategory = (value) => {
    setCategoryErrorMessage("");
    setCategory(value.value);
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: content,
      imageUrl: imageUrl,
      caterogry: category,
      tages: tages,
    };

    dispatch(createPostApiFun(data))
      .then((res) => {
        if (res.payload.status === "success") {
          setTitle("");
          setContent("");
          setImageUrl("");
          setCategory("");
          setTages([]);
          setAlertValue({
            show: true,
            message: res.payload.message,
            variant: "success",
          });
        } else {
          if (res.payload.message === "Invaild User Data") {
            setAlertValue({
              show: true,
              message: res.payload.message,
              variant: "error",
            });
            res.payload.data.forEach((item) => {
              if (item.path === "title") {
                setTitleErrorMessage(item.msg);
              } else if (item.path === "description") {
                setContentErrorMessage(item.msg);
              } else if (item.path === "imageUrl") {
                setImageUrlErrorMessage(item.msg);
              } else if (item.path === "caterogry") {
                setCategoryErrorMessage(item.msg);
              } else {
                console.log(item);
              }
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card-profile-2 create-artical">
        <h1> Create Artical</h1>
        <p>Her you can create articals and share your knowladge </p>
        <div className="card-profile-2-artical-create">
          <form className="create-artical-form" onSubmit={handleCreatePost}>
            <div className={`form-group ${titleErrorMessage ? "error" : ""}`}>
              <label>title</label>
              <input
                required
                className="form-control"
                type="text"
                placeholder="artical title..."
                onChange={(e) => {
                  setTitleErrorMessage("");
                  setTitle(e.target.value);
                }}
                value={title}
              />
              <div className="error-feild">
                <p>{titleErrorMessage}</p>
              </div>
            </div>
            <div className={`form-group ${contentErrorMessage ? "error" : ""}`}>
              <label>pharagraph</label>
              <JoditEditor
                required
                value={content}
                onChange={handleChange}
                options={editorConfig}
              />
              <div className="error-feild">
                <p>{contentErrorMessage}</p>
              </div>
            </div>
            <div
              className={`form-group ${imageUrlErrorMessage ? "error" : ""}`}
            >
              <label>image url</label>
              <input
                required
                className="form-control"
                type="text"
                placeholder="image url..."
                onChange={(e) => {
                  setImageUrlErrorMessage("");
                  setImageUrl(e.target.value);
                }}
                value={imageUrl}
              />
              <div className="error-feild">
                <p>{imageUrlErrorMessage}</p>
              </div>
            </div>

            <div
              className={`form-group ${categoryErrorMessage ? "error" : ""}`}
            >
              <label>Category</label>
              <Select
                required
                options={categories}
                onChange={handleSelectChangeCategory}
              />
              <div className="error-feild">
                <p>{categoryErrorMessage}</p>
              </div>
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
              {loading ? (
                <>
                  <button className="btn btn-danger" disabled>
                    <CustomLoader />
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-danger" type="submit">
                    Create Artical
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      {alertValue.show && (
        <Alart
          value={alertValue}
          change={(e) => {
            alertValue.variant === "success" && onFinshed();
            setAlertValue({
              show: false,
              message: "",
              variant: "",
            });
          }}
        />
      )}
    </>
  );
}
