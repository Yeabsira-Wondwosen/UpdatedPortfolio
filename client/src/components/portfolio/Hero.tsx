import { useState, useEffect } from 'react';
import { Download, Handshake, Linkedin, Github, Instagram, Send } from 'lucide-react';

const TYPING_TEXTS = [
  'Full Stack Developer',
  'Video Editor',
  'Graphics Designer',
];

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % TYPING_TEXTS.length);
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yeabsira-wondwosen', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Yeabsira-Wondwosen', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/noti_cilas/', label: 'Instagram' },
    { icon: Send, href: 'https://t.me/Yeabsirawin', label: 'Telegram' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Yeabsira</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-16 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 flex items-center gap-2">
              <span>{displayedText}</span>
              <span className="w-1 h-8 bg-cyan-400 animate-pulse"></span>
            </h2>
          </div>

          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
            I am a passionate Full Stack Web Developer, Video Editor, and Graphics Designer with a creative mindset
            and strong technical skills. I work in building responsive and dynamic websites using modern technologies,
            while also bringing ideas to life through engaging video content and visually impactful graphic designs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-violet-600 flex items-center justify-center text-violet-400 hover:bg-violet-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-600/50"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

     <a
  href="yeabsiraResume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-violet-600/50 transition-all duration-300 hover:scale-105"
>
  <Download size={20} />
  Download CV
</a>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
            >
              <Handshake size={20} />
              Hire me
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center animate-fade-in-right">
          <div className="relative">
            {/* Glowing Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Profile Image Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-violet-600/50 shadow-2xl hover:shadow-violet-600/50 transition-all duration-300 hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center">
                <img src="/yeabsira.png" alt="Profile" className="w-full h-full object-cover" />
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
