import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const softwareSkills = [
    "c++",
    "Data Structures",
    "Algorithms",
    "Dtabases",
    "Problem Solving",
  ];
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Api",
  ];

  const backendSkills = ["odoo", "Python", "postgres", "Api", "ERP"];
  const mobileSkills = ["Flutter", "sqlite", "Firebase", "Dart", "Api"];
  const devopsSkills = [
    "AWS",
    "Azure",
    "Github",
    "bash",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Jenkins",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Software Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softwareSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Mobile</h3>
                <div className="flex flex-wrap gap-2">
                  {mobileSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {devopsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Bachelor’s Degree in Systems and Computer Engineering
                  </strong>{" "}
                  – Al-Azhar University (2017 – 2022)
                </li>
                <li>
                  College of Engineering – Department of Systems and Computer
                </li>
              </ul>
            </div>
           <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
  <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
  <div className="space-y-4 text-gray-300">

    <div>
      <h4 className="font-semibold">
        Odoo Developer at Upward (Full-time / Hybrid) — Jun 2024 – Present
      </h4>
      <ul className="list-disc list-inside">
        <li>Customized Odoo modules and resolved technical issues.</li>
        <li>Collaborated using Git and GitHub for version control on Odoo projects.</li>
        <li>Updated website portal and created custom reports.</li>
        <li>Worked with Python, XML, and PostgreSQL.</li>
        <li>Handled modules like Sales, Purchase, Accounting, Payroll, HR, and more.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold">
        System Administrator at Zi Diligence (Full-time / On-site) — Jun 2023 – Dec 2023
      </h4>
      <ul className="list-disc list-inside">
        <li>Managed and maintained both Windows Server and Linux environments.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold">
        Flutter Developer Intern at Route — Sep 2021 – Jun 2022
      </h4>
      <ul className="list-disc list-inside">
        <li>Learned advanced Flutter concepts.</li>
        <li>Built multiple projects individually and collaboratively within a team.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold">
        Data Structures & Algorithms Intern at Couch Academy — Sep 2021 – Jun 2022
      </h4>
      <ul className="list-disc list-inside">
        <li>Practiced and solved problems on core data structures and algorithms.</li>
        <li>
          Data Structures: Arrays, Vectors, Queues, Stacks, Deques, Sets, Maps, Linked Lists, etc.
        </li>
        <li>
          Algorithms: Binary Search, Prefix Sum, Sorting, and more.
        </li>
      </ul>
    </div>

  </div>
</div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
