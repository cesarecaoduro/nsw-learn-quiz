import { Button } from "@/components/ui/button";
import { BookOpen, Plus } from "lucide-react";

interface NavbarProps {
  onAddQuiz: () => void;
  onLogoClick: () => void;
  showAddButton?: boolean;
}

export const Navbar = ({ onAddQuiz, onLogoClick, showAddButton = true }: NavbarProps) => {
  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLogoClick}
          >
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 p-2 rounded-lg shadow-md">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-fredoka font-bold text-amber-900">
                NSW Quiz Fun 🌟
              </h1>
              <p className="text-sm text-amber-700 font-medium">
                Learning Adventures • K-6
              </p>
            </div>
          </div>

          {showAddButton && (
            <Button 
              onClick={onAddQuiz}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium shadow-md transition-all duration-200"
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