import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-violet-600/20 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-slate-400 flex items-center justify-center md:justify-start gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Yeabsira
            </p>
          </div>

          {/* Center */}
          <p className="text-slate-500 text-sm">
            © {currentYear} Yeabsira Wondwosen. All rights reserved.
          </p>

          {/* Right Side */}
          <div className="flex gap-4">
            <a
              href="#home"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
