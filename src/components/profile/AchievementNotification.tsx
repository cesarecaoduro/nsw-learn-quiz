import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Achievement } from "@/types/progress";
import { X } from "lucide-react";

interface AchievementNotificationProps {
  achievement: Achievement;
  onClose: () => void;
  autoHide?: boolean;
  duration?: number;
}

export const AchievementNotification = ({ 
  achievement, 
  onClose, 
  autoHide = true, 
  duration = 5000 
}: AchievementNotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in
    setIsVisible(true);

    // Auto hide if enabled
    if (autoHide) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoHide, duration]);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for animation to complete before calling onClose
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className={`fixed top-4 right-4 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 shadow-lg max-w-sm">
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              {/* Achievement Icon */}
              <div className="text-center mb-3">
                <div className="text-4xl animate-bounce">
                  {achievement.icon}
                </div>
              </div>
              
              {/* Achievement Info */}
              <div className="text-center space-y-1">
                <h3 className="font-fredoka font-bold text-amber-900 text-lg">
                  Achievement Unlocked! 🎉
                </h3>
                <p className="font-semibold text-amber-800">
                  {achievement.title}
                </p>
                <p className="text-sm text-amber-700">
                  {achievement.description}
                </p>
              </div>
            </div>
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-amber-600 hover:text-amber-800 hover:bg-amber-100 p-1 h-6 w-6"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

interface AchievementNotificationManagerProps {
  achievements: Achievement[];
  onNotificationShown: (achievementId: string) => void;
}

export const AchievementNotificationManager = ({ 
  achievements, 
  onNotificationShown 
}: AchievementNotificationManagerProps) => {
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [queue, setQueue] = useState<Achievement[]>([]);

  useEffect(() => {
    // Add new achievements to queue
    const newAchievements = achievements.filter(
      achievement => !queue.some(q => q.id === achievement.id) && 
                   currentAchievement?.id !== achievement.id
    );
    
    if (newAchievements.length > 0) {
      setQueue(prev => [...prev, ...newAchievements]);
    }
  }, [achievements, queue, currentAchievement]);

  useEffect(() => {
    // Show next achievement if none is currently showing
    if (!currentAchievement && queue.length > 0) {
      const nextAchievement = queue[0];
      setCurrentAchievement(nextAchievement);
      setQueue(prev => prev.slice(1));
      onNotificationShown(nextAchievement.id);
    }
  }, [currentAchievement, queue, onNotificationShown]);

  const handleClose = () => {
    setCurrentAchievement(null);
  };

  if (!currentAchievement) {
    return null;
  }

  return (
    <AchievementNotification
      achievement={currentAchievement}
      onClose={handleClose}
    />
  );
};