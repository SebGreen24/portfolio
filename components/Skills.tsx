const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['C', 'C#', 'Python', 'Java', 'Haskell', 'TypeScript'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['React', 'Expo', 'Next.js', 'FastAPI', 'Tailwind CSS', 'Git'],
  },
  {
    label: 'Data & Infrastructure',
    skills: ['SQL', 'Supabase', 'Render', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-2xl font-semibold text-ink-light dark:text-ink-dark mb-8">
          Skills
        </h2>
        <div className="space-y-7">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-muted bg-surface-light dark:bg-surface-dark px-2.5 py-1 rounded-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
