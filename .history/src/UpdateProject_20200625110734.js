import React from "react";

export const UpdateProject = () => {
  const [selectedProject, setSelectedProject] = useContext(
    SelectedProjectContext
  );
  const [projects, setProjects] = useContext(ProjectContext);

  const updateProjects = () => {
    let updatedArray = [...projects];
    let i;
    updatedArray.map((p) =>
      p.name === selectedProject.name ? (i = projects.indexOf(p)) : null
    );
    updatedArray[i] = selectedProject;
    setProjects(updatedArray);
  };
};
