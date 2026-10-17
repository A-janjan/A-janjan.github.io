import React, {useState, useEffect} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import ProjectCard from "../../components/projectCard/ProjectCard";
import {openSource, selectedProjects, socialMediaLinks} from "../../portfolio";

export default function Projects() {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    let active = true;
    fetch("/profile.json")
      .then(result => {
        if (result.ok) {
          return result.json();
        }
        throw result;
      })
      .then(response => {
        const edges = response?.data?.user?.pinnedItems?.edges;
        if (active && Array.isArray(edges) && edges.length > 0) {
          setRepo(edges);
        }
      })
      .catch(() => {
        /* No pinned GitHub data at build time — the curated list below is shown. */
      });
    return () => {
      active = false;
    };
  }, []);

  if (!openSource.display) {
    return null;
  }

  // Pinned repositories are matched against the curated list by name so the
  // copy stays hand-written: pinned data only contributes live stats.
  const pinnedByName = {};
  if (Array.isArray(repo)) {
    repo.forEach(item => {
      if (item && item.node && item.node.name) {
        pinnedByName[item.node.name.toLowerCase()] = item.node;
      }
    });
  }

  return (
    <section className="main projects-section" id="opensource">
      <SectionHeading
        index="05"
        kicker="Projects"
        title={selectedProjects.title}
        lead={selectedProjects.subtitle}
      />

      <div className="repo-cards-div-main">
        {selectedProjects.projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            stats={pinnedByName[project.name.toLowerCase()]}
          />
        ))}
      </div>

      <div className="project-button">
        <Button
          text="More on GitHub"
          href={socialMediaLinks.github}
          newTab={true}
          variant="ghost"
        />
      </div>
    </section>
  );
}
