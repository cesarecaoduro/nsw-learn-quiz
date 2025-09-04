import { useState, useEffect } from "react";
import { QuizApp } from "@/components/quiz/QuizApp";
import { QuizCreator } from "@/components/quiz/QuizCreator";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProfileSelector } from "@/components/profile/ProfileSelector";
import { ProfileSwitcher } from "@/components/profile/ProfileSwitcher";
import { AchievementNotificationManager } from "@/components/profile/AchievementNotification";
import { ProgressDashboard } from "@/components/progress/ProgressDashboard";
import { useProgress } from "@/contexts/ProgressContext";
import { sampleQuizzes } from "@/data/allQuizzes";
import { Quiz } from "@/types/quiz";
import { BarChart3 } from "lucide-react";

type AppState = 'profile_selection' | 'quiz_app' | 'quiz_creator' | 'progress_dashboard';

export const AppContent = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(sampleQuizzes);
  const [appState, setAppState] = useState<AppState>('profile_selection');
  const [showProfileCreator, setShowProfileCreator] = useState(false);
  
  const {
    activeProfileId,
    activeProfile,
    profiles,
    isLoading,
    setActiveProfile,
    createProfile,
    newAchievements,
    markAchievementSeen
  } = useProgress();

  // Determine initial app state based on profiles
  useEffect(() => {
    if (!isLoading) {
      if (profiles.length === 0 || !activeProfileId) {
        setAppState('profile_selection');
      } else {
        setAppState('quiz_app');
      }
    }
  }, [profiles.length, activeProfileId, isLoading]);

  const handleQuizUploaded = (newQuiz: Quiz) => {
    setQuizzes([...quizzes, newQuiz]);
    setAppState('quiz_app');
  };

  const handleProfileSelected = (profileId: string) => {
    setActiveProfile(profileId);
    setAppState('quiz_app');
  };

  const handleSkipProfileSetup = () => {
    setAppState('quiz_app');
  };

  const handleCreateProfile = () => {
    setShowProfileCreator(true);
  };

  const handleProfileChange = (profileId: string | null) => {
    if (profileId) {
      setActiveProfile(profileId);
      setAppState('quiz_app');
    } else {
      setAppState('profile_selection');
    }
  };

  const handleLogoClick = () => {
    if (activeProfileId) {
      setAppState('quiz_app');
    } else {
      setAppState('profile_selection');
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-bounce">🦉</div>
          <p className="text-primary-600 font-medium">Loading your learning adventure...</p>
        </div>
      </div>
    );
  }

  // Profile Selection State
  if (appState === 'profile_selection' || showProfileCreator) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar 
          onAddQuiz={() => {}} // Hide add quiz when no profile
          onLogoClick={handleLogoClick}
          showAddButton={false}
        />
        
        <div className="flex-1 flex items-center justify-center p-4">
          <ProfileSelector
            onProfileSelected={handleProfileSelected}
            onSkip={handleSkipProfileSetup}
          />
        </div>
        
        <Footer />
        
        {/* Achievement Notifications */}
        <AchievementNotificationManager
          achievements={newAchievements}
          onNotificationShown={markAchievementSeen}
        />
      </div>
    );
  }

  // Quiz Creator State  
  if (appState === 'quiz_creator') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar 
          onAddQuiz={() => setAppState('quiz_creator')} 
          onLogoClick={handleLogoClick}
          showAddButton={false}
        />
        
        <div className="flex-1 p-3 sm:p-4">
          <div className="container mx-auto py-4 sm:py-8">
            <QuizCreator 
              onQuizUploaded={handleQuizUploaded} 
              onBack={() => setAppState('quiz_app')} 
            />
          </div>
        </div>
        
        <Footer />
        
        {/* Achievement Notifications */}
        <AchievementNotificationManager
          achievements={newAchievements}
          onNotificationShown={markAchievementSeen}
        />
      </div>
    );
  }

  // Progress Dashboard State
  if (appState === 'progress_dashboard') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-b border-purple-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-2 rounded-xl shadow-md">
                  <div className="w-6 h-6 text-white font-bold flex items-center justify-center">📚</div>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-fredoka font-bold text-purple-800">
                    NSW Quiz Fun 🌟
                  </h1>
                  <p className="text-sm text-purple-600 font-medium">
                    Learning Adventures • K-6
                  </p>
                </div>
              </div>

              {/* Right Side - Profile Switcher */}
              <ProfileSwitcher
                activeProfileId={activeProfileId}
                onProfileChange={handleProfileChange}
                onCreateProfile={handleCreateProfile}
              />
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <ProgressDashboard onClose={() => setAppState('quiz_app')} />
        </div>
        
        <Footer />
        
        {/* Achievement Notifications */}
        <AchievementNotificationManager
          achievements={newAchievements}
          onNotificationShown={markAchievementSeen}
        />
      </div>
    );
  }

  // Main Quiz App State
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-b border-purple-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-2 rounded-xl shadow-md">
                <div className="w-6 h-6 text-white font-bold flex items-center justify-center">📚</div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-fredoka font-bold text-purple-800">
                  NSW Quiz Fun 🌟
                </h1>
                <p className="text-sm text-purple-600 font-medium">
                  Learning Adventures • K-6
                </p>
              </div>
            </div>

            {/* Right Side - Progress and Profile */}
            <div className="flex items-center gap-3">
              {/* Progress Button */}
              {activeProfile && (
                <div className="flex items-center gap-3">
                  {/* Profile Info (hidden on small screens) */}
                  <div className="hidden lg:flex items-center gap-2 bg-white rounded-lg px-3 py-1 border border-purple-200">
                    <span className="text-lg">{activeProfile.avatar}</span>
                    <div className="text-right">
                      <p className="text-sm font-medium text-purple-800">{activeProfile.nickname}</p>
                      <p className="text-xs text-purple-600">
                        {activeProfile.stats.totalQuizzesTaken} quiz{activeProfile.stats.totalQuizzesTaken !== 1 ? 'es' : ''}
                        {activeProfile.stats.totalQuizzesTaken > 0 && ` • ${activeProfile.stats.averageScore}% avg`}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress Dashboard Button */}
                  <button
                    onClick={() => setAppState('progress_dashboard')}
                    className="flex items-center gap-2 bg-white text-purple-800 border border-purple-300 hover:bg-purple-50 hover:text-purple-900 font-medium px-3 py-2 rounded-lg transition-colors"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Progress</span>
                  </button>
                </div>
              )}

              <ProfileSwitcher
                activeProfileId={activeProfileId}
                onProfileChange={handleProfileChange}
                onCreateProfile={handleCreateProfile}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <QuizApp availableQuizzes={quizzes} />
      </div>
      
      <Footer />
      
      {/* Achievement Notifications */}
      <AchievementNotificationManager
        achievements={newAchievements}
        onNotificationShown={markAchievementSeen}
      />
    </div>
  );
};