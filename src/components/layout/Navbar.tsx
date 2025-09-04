import { Button } from "@/components/ui/button";
import { MacOSBookIcon, MacOSPlusIcon } from "@/components/ui/macos-icon";

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
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 p-2 rounded-xl shadow-md">
              <MacOSBookIcon size="lg" className="text-white stroke-[1.5]" />
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
              <MacOSPlusIcon size="sm" className="mr-2" />
              Add Quiz
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};