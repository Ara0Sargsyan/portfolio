import { useSelector } from "react-redux";
import Card from "../../shared/UI/Card";

const Projects = () => {
  const projects = useSelector((state) => state.projects.items);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => (
        <Card key={project.id} hover>
          <div>⚡</div>
          <h3>{project.title}</h3>
          <p>{project.tech.join(", ")}</p>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
