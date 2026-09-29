import { UserButton } from "@clerk/nextjs";

const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

const experience = [
  {
    company: "United Bank For Africa (UBA) Head Office",
    role: "IT Care Intern",
    period: "06/2026 – 10/2026",
    location: "Lagos Island, Lagos",
    points: [
      "Assisted with the creation, modification, maintenance, deactivation and re-enablement of staff accounts.",
      "Performed basic network connectivity checks using ping tests to help troubleshoot branch connectivity issues.",
      "Developed hands-on knowledge of user access management, Active Directory, and banking technology processes.",
    ],
  },
  {
    company: "Maxim (AI Analytics)",
    role: "Intern",
    period: "",
    location: "",
    points: [
      "Observed how data is used to support business intelligence, decision-making, and operational efficiency.",
      "Strengthened knowledge of how IT, data analytics, and AI support modern banking operations.",
    ],
  },
  {
    company: "Nikky Taurus",
    role: "Audit Intern",
    period: "03/2025 – 04/2025",
    location: "Maryland, Lagos",
    points: [
      "Assisted with reviewing and reconciling monthly vehicle rental records and financial transactions.",
      "Assisted in verifying invoices, payment records, and supporting documents.",
      "Gained practical experience in auditing, reconciliation, and internal control procedures.",
    ],
  },
  {
    company: "Spring Care Pharmacy",
    role: "Data Analyst",
    period: "02/2024 – 04/2024",
    location: "Gbagada, Lagos",
    points: [
      "Developed a web application using Python and Django.",
      "Contributed to a team project, designing and implementing a database management system.",
      "Collaborated with QA engineers to identify and resolve bugs.",
    ],
  },
];

const skills = [
  "Excel",
  "Visual Studio Code",
  "Python",
  "Java",
  "SQL",
  "Data Structures",
  "Algorithm Design",
  "Debugging",
  "Network Security",
  "Accessibility",
  "English",
  "Italian (Intermediate)",
];

const profileStats = [
  { value: "3.83", label: "CGPA" },
  { value: "4+", label: "Internships" },
  { value: "Expert", label: "Technical" },
];

export default function Portfolio() {
  return (
    <main className="cv-page">
      <div className="user-button-wrap">
        {clerkEnabled ? <UserButton /> : null}
      </div>

      <section className="cv-shell">
        <aside className="sidebar">
          <div className="photo-panel">
            <img src="/profile-placeholder.svg" alt="Nwufo Akachukwu Michael" />
          </div>

          <div className="profile-card">
            <p className="eyebrow">Portfolio</p>
            <h1>Nwufo Akachukwu Michael</h1>
            <p className="location">Ogudu, Lagos</p>
          </div>

          <div className="contact-card">
            <h2>Contact</h2>
            <p>
              <span>Email</span>
              <a href="mailto:nwufomichael8@gmail.com">nwufomichael8@gmail.com</a>
            </p>
            <p>
              <span>Phone</span>
              <a href="tel:+2349023047692">09023047692</a>
            </p>
            <p>
              <span>LinkedIn</span>
              <a href="https://linkedin.com/in/Michael-nwufo" target="_blank" rel="noreferrer">
                linkedin.com/in/Michael-nwufo
              </a>
            </p>
          </div>

          <div className="stats-grid">
            {profileStats.map((stat) => (
              <div className="stat-box" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="chip-box">
            <h3>Core strengths</h3>
            <div className="chip-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className="content-panel">
          <section className="intro-panel">
            <p className="eyebrow">Profile</p>
            <p className="summary">
              Computer Science student at Caleb University with hands-on experience across
              data analysis, IT support, and banking technology, gained through internships
              at UBA, Maxim, Nikky Taurus, and Spring Care Pharmacy.
            </p>
          </section>

          <section className="cv-section">
            <h2>Education</h2>
            <div className="education-item">
              <div className="row">
                <strong>Caleb University</strong>
                <span>10/2023 – Present</span>
              </div>
              <p>Bachelor&apos;s Degree in Computer Science</p>
              <p>Imota, Lagos</p>
              <p>Cumulative GPA: 3.83/4.20</p>
            </div>

            <div className="education-item">
              <div className="row">
                <strong>Queen Mary College</strong>
                <span>09/2017 – 07/2023</span>
              </div>
              <p>Ogudu/Ojota, Lagos</p>
              <p>Cumulative GPA: 3.95/4.00, CTA: 30</p>
            </div>
          </section>

          <section className="cv-section">
            <h2>Experience</h2>
            {experience.map((job) => (
              <article className="job-item" key={job.company}>
                <div className="row job-header">
                  <strong>{job.company}</strong>
                  {job.period ? <span>{job.period}</span> : null}
                </div>
                <p className="role">{job.role}</p>
                {job.location ? <p className="location-text">{job.location}</p> : null}
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="cv-section">
            <h2>Technical Skills</h2>
            <div className="skill-groups">
              <div className="skill-group">
                <strong>Software tools</strong>
                <p>Excel, Visual Studio Code, SVN, Clang, Python, Java, SQL</p>
              </div>
              <div className="skill-group">
                <strong>Computing principles</strong>
                <p>Algorithm design, data structures, Big-O notation, testing and debugging, network security, accessibility, SQL and query languages</p>
              </div>
              <div className="skill-group">
                <strong>Communication</strong>
                <p>Written and oral communication in English and Italian (Intermediate)</p>
              </div>
              <div className="skill-group">
                <strong>Technical &amp; computing proficiency</strong>
                <p>Expert</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
