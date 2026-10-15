import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="skills-section" aria-label="Working toolkit">
      <div className="skills-heading">
        <p className="section-label">01 / Working toolkit</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <section className="skill-group" key={group.label}>
            <p className="skill-index">{String(index + 1).padStart(2, "0")}</p>
            <div>
              <h3>{group.label}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
