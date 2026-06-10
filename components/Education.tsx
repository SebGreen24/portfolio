export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <h2 className="text-2xl font-semibold text-ink-light dark:text-ink-dark mb-8">
          Education
        </h2>
        <div className="space-y-8">
          <div>
            <div className="flex items-baseline justify-between gap-4 mb-1.5">
              <h3 className="text-base font-semibold text-ink-light dark:text-ink-dark">
                University of Nottingham
              </h3>
              <span className="text-sm text-muted shrink-0">2024 – present</span>
            </div>
            <p className="text-sm text-muted mb-1">
              BSc Computer Science with Year in Industry
            </p>
            <p className="text-sm text-muted mb-0.5">First year: 1st class</p>
            <p className="text-sm text-muted">
              Notable grades: 85% Programming &amp; Algorithms, 81% Software Engineering
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4 mb-1.5">
              <h3 className="text-base font-semibold text-ink-light dark:text-ink-dark">
                Ivybridge Community College
              </h3>
              <span className="text-sm text-muted shrink-0">2017 – 2024</span>
            </div>
            <p className="text-sm text-muted mb-1">
              A Levels: Mathematics (A), Computer Science (B), Physics (B)
            </p>
            <p className="text-sm text-muted">AS Level: Further Mathematics (B)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
