import { BookOpen, Users, Calendar } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Branding & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg shadow-md">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-fredoka font-bold text-foreground">
                  NSW Quiz Fun 🌟
                </h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interactive learning quizzes designed for NSW Curriculum Standards. 
              Supporting students from Kindergarten to Year 6 with engaging educational content.
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-fredoka font-semibold text-foreground">
              Year Levels 📚
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['K', '1', '2', '3', '4', '5', '6'].map((year) => (
                <div key={year} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {year === 'K' ? 'Kindergarten' : `Year ${year}`}
                </div>
              ))}
            </div>
            <div className="pt-2">
              <h5 className="text-sm font-medium text-foreground mb-2">Subjects 🎯</h5>
              <div className="text-xs text-muted-foreground space-y-1">
                <div>English • Mathematics • Science</div>
                <div>History • Geography • Arts</div>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-4">
            <h4 className="text-base font-fredoka font-semibold text-foreground">
              Information 📋
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>1000+ Educational Questions</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Updated {currentYear}</span>
              </div>
              <div className="text-xs text-muted-foreground bg-muted p-2 rounded border border-border">
                Built with ❤️ for NSW students and educators
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-muted-foreground">
              © {currentYear} NSW Quiz Fun. Educational content aligned with NSW Curriculum.
            </p>
            <p className="text-xs text-muted-foreground">
              Made for learning • K-6 Education 🦉
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};