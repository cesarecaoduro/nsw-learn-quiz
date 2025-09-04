import { MacOSBookIcon } from "@/components/ui/macos-icon";
import { Users, Calendar } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-violet-50/30 to-purple-50/30 border-t border-purple-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Branding & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-2 rounded-xl shadow-md">
                <MacOSBookIcon size="md" className="text-white stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-lg font-fredoka font-bold text-purple-800">
                  NSW Quiz Fun 🌟
                </h3>
              </div>
            </div>
            <p className="text-sm text-purple-600 leading-relaxed">
              Interactive learning quizzes designed for NSW Curriculum Standards. 
              Supporting students from Kindergarten to Year 6 with engaging educational content.
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-fredoka font-semibold text-purple-800">
              Year Levels 📚
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['K', '1', '2', '3', '4', '5', '6'].map((year) => (
                <div key={year} className="text-sm text-purple-600 hover:text-purple-800 transition-colors">
                  {year === 'K' ? 'Kindergarten' : `Year ${year}`}
                </div>
              ))}
            </div>
            <div className="pt-2">
              <h5 className="text-sm font-medium text-purple-700 mb-2">Subjects 🎯</h5>
              <div className="text-xs text-purple-600 space-y-1">
                <div>English • Mathematics • Science</div>
                <div>History • Geography • Arts</div>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-4">
            <h4 className="text-base font-fredoka font-semibold text-purple-800">
              Information 📋
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-purple-600">
                <Users className="w-4 h-4 text-purple-500" />
                <span>1000+ Educational Questions</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-purple-600">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>Updated {currentYear}</span>
              </div>
              <div className="text-xs text-purple-600 bg-purple-50 p-2 rounded border border-purple-200">
                Built with ❤️ for NSW students and educators
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-200 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-purple-600">
              © {currentYear} NSW Quiz Fun. Educational content aligned with NSW Curriculum.
            </p>
            <p className="text-xs text-purple-600">
              Made for learning • K-6 Education 🦉
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};