type Project = {
  name: string
  description: string
  tags: string[]
  githubUrl?: string
  isPrivate?: boolean
  comingSoon?: boolean
}

const PROJECTS: Project[] = [
  {
    name: 'Ecosystem Simulation NEA',
    description:
      'A simulation of real-world evolutionary processes, modelling over 5 biological characteristics across 3 distinct organism types. Built in Unity and C# with extensive technical documentation (~20,000 words, 100+ pages).',
    tags: ['C#', 'Unity', 'Simulation', 'OOP'],
    githubUrl: 'https://github.com/SebGreen24/Ecosystem-Simulation-NEA-v2',
  },
  {
    name: 'Wine Quality Prediction',
    description:
      'A machine learning pipeline to predict red wine quality from physicochemical properties. Includes data cleaning, feature analysis, and a comparison of Linear Regression (R² = 0.78) vs Decision Tree models.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Machine Learning'],
    isPrivate: true,
  },
  {
    name: 'Observatory',
    description: 'Currently in development. Details coming soon.',
    tags: ['In Progress'],
    comingSoon: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-2xl font-semibold text-ink-light dark:text-ink-dark mb-8">
          Projects
        </h2>
        <div className="space-y-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark rounded-card p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-semibold text-ink-light dark:text-ink-dark">
          {project.name}
        </h3>
        {project.comingSoon && (
          <span className="shrink-0 text-xs font-mono text-muted bg-base-light dark:bg-base-dark px-2 py-0.5 rounded-tag">
            Coming soon
          </span>
        )}
        {project.isPrivate && (
          <span className="shrink-0 text-xs font-mono text-muted bg-base-light dark:bg-base-dark px-2 py-0.5 rounded-tag">
            University coursework — private
          </span>
        )}
      </div>
      <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-muted bg-base-light dark:bg-base-dark px-2 py-0.5 rounded-tag"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
        >
          <GitHubIcon />
          GitHub
        </a>
      )}
    </article>
  )
}

function GitHubIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
