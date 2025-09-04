import { Button } from "@/components/ui/button";
import { BookOpen, Plus } from "lucide-react";

interface NavbarProps {
  onAddQuiz: () => void;
  onLogoClick: () => void;
  showAddButton?: boolean;
}

export const Navbar = ({ onAddQuiz, onLogoClick, showAddButton = true }: NavbarProps) => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLogoClick}
          >
            <div className="bg-primary p-2 rounded-lg shadow-md">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-fredoka font-bold text-foreground">
                NSW Quiz Fun 🌟
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Learning Adventures • K-6
              </p>
            </div>
          </div>

          {showAddButton && (
            <Button 
              onClick={onAddQuiz}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md transition-all duration-200"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Quiz
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};