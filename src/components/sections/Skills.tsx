export default function Skills() {
  const skills = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Git & GitHub"];
  
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Yetenekler</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <span key={skill} className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}