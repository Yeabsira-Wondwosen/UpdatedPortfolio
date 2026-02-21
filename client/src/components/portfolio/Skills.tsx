const skills = [
  { name: 'C++', emoji: '⚙️' },
  { name: 'HTML', emoji: '🏗️' },
  { name: 'CSS', emoji: '🎨' },
  { name: 'JavaScript', emoji: '⚡' },
  { name: 'React', emoji: '⚛️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'Photoshop', emoji: '🖼️' },
  { name: 'Illustrator', emoji: '✏️' },
  { name: 'Adobe XD', emoji: '🎯' },
  { name: 'CapCut', emoji: '🎬' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A diverse set of technologies and tools I master
          </p>
        </div>

        {/* Skills Grid */}
        <div className="bg-gradient-to-br from-violet-600/10 to-cyan-500/10 rounded-2xl p-8 md:p-12 border border-violet-600/20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="stagger-item group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-violet-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/20 hover:scale-110 cursor-pointer">
                  <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                    {skill.emoji}
                  </div>
                  <p className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors text-center">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
