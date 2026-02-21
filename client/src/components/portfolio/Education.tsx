import { School, BookOpen } from 'lucide-react';

const educationItems = [
  {
    id: 1,
    title: 'High School',
    institution: 'Biherawi High School',
    description: 'Graduated with distinction in 2020.',
    icon: School,
    side: 'left',
  },
  {
    id: 2,
    title: 'University',
    institution: 'Dire Dawa University',
    description: 'BSc in Computer Science (2021–current).',
    icon: BookOpen,
    side: 'right',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-lg">
            My academic journey and learning path
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-600 to-cyan-500 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === 'left';

              return (
                <div
                  key={item.id}
                  className="stagger-item"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    {/* Content */}
                    <div className="md:w-1/2">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-violet-600/20 hover:border-violet-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/20 group">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>

                        {/* Institution */}
                        <p className="text-violet-400 font-semibold mb-3">
                          {item.institution}
                        </p>

                        {/* Description */}
                        <p className="text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex w-1/2 justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 border-4 border-slate-950 shadow-lg shadow-violet-600/50 z-10"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
