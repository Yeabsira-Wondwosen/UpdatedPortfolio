import { Code, Palette, Zap, Smartphone, Video, Brush } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Backend Development',
    description: 'I develop robust server-side systems that handle data, security, and business logic. I focus on building APIs, databases and authentication systems.',
    icon: Code,
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'I craft visually appealing, modern, and user-friendly website interfaces. My designs are fully responsive and optimized for all devices.',
    icon: Palette,
  },
  {
    id: 3,
    title: 'Graphics Design',
    description: 'I create high-quality graphic designs that communicate ideas clearly and creatively. From social media posts to branding materials.',
    icon: Brush,
  },
  {
    id: 4,
    title: 'Video Editing',
    description: 'I produce professional and captivating videos by cutting, editing, and enhancing raw footage. My editing style focuses on storytelling and transitions.',
    icon: Video,
  },
  {
    id: 5,
    title: 'Website Development',
    description: 'I build functional and efficient websites using modern front-end and back-end technologies for optimal performance.',
    icon: Zap,
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'I develop responsive mobile applications that provide seamless user experiences across iOS and Android platforms.',
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of services to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="stagger-item group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-violet-600/20 hover:border-violet-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/20 hover:-translate-y-3">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
