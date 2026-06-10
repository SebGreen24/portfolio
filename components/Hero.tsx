export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-content mx-auto w-full">
        <h1 className="text-4xl font-bold text-ink-light dark:text-ink-dark mb-3">
          Sebastian Green
        </h1>
        <p className="text-lg text-muted mb-8 flex items-center">
          Full-stack developer &amp; CS student
          <span className="cursor" aria-hidden="true" />
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/SebGreen24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm border border-line-light dark:border-line-dark text-ink-light dark:text-ink-dark rounded-tag hover:border-accent hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/sebagreen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm border border-line-light dark:border-line-dark text-ink-light dark:text-ink-dark rounded-tag hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
