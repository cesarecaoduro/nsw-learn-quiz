import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/contexts/ProgressContext";
import { MacOSTrophyIcon, MacOSStarIcon } from "@/components/ui/macos-icon";
import { Calendar, Clock, Target, TrendingUp, Award, History } from "lucide-react";

interface ProgressDashboardProps {
  onClose?: () => void;
}

export const ProgressDashboard = ({ onClose }: ProgressDashboardProps) => {
  const { 
    activeProfile, 
    getSubjectStats, 
    getCurrentStreak, 
    getTotalQuizzesTaken, 
    getAverageScore 
  } = useProgress();

  if (!activeProfile) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card className="text-center">
          <CardContent className="p-8">
            <p className="text-purple-800">No active profile selected</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const subjectStats = getSubjectStats();
  const currentStreak = getCurrentStreak();
  const totalQuizzes = getTotalQuizzesTaken();
  const averageScore = getAverageScore();

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getGradeColor = (score: number): string => {
    if (score >= 90) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 80) return "bg-blue-100 text-blue-800 border-blue-200";
    if (score >= 70) return "bg-purple-100 text-purple-800 border-purple-200";
    if (score >= 60) return "bg-pink-100 text-pink-800 border-pink-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getSubjectEmoji = (subject: string): string => {
    const emojis: Record<string, string> = {
      "English": "📚",
      "Mathematics": "🔢",
      "Science": "🔬", 
      "History": "🏛️",
      "Geography": "🌍",
      "Creative Arts": "🎨"
    };
    return emojis[subject] || "📝";
  };

  const recentHistory = activeProfile.history.slice(0, 5); // Show last 5 quizzes

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{activeProfile.avatar}</div>
          <div>
            <h1 className="text-2xl font-fredoka font-bold text-purple-900">
              {activeProfile.nickname}'s Progress 📊
            </h1>
            <p className="text-purple-700">
              Member since {formatDate(activeProfile.createdAt)}
            </p>
          </div>
        </div>
        
        {onClose && (
          <Button
            variant="outline"
            onClick={onClose}
            className="bg-white text-purple-800 border-purple-300 hover:bg-purple-50"
          >
            Back to Quizzes
          </Button>
        )}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6 text-center">
            <MacOSTrophyIcon size="xl" className="mx-auto mb-3 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-900">{totalQuizzes}</h3>
            <p className="text-blue-700 font-medium">Quiz{totalQuizzes !== 1 ? 'es' : ''} Completed</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 mx-auto mb-3 text-green-600" />
            <h3 className="text-2xl font-bold text-green-900">{averageScore}%</h3>
            <p className="text-green-700 font-medium">Average Score</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
          <CardContent className="p-6 text-center">
            <div className="w-8 h-8 mx-auto mb-3 text-2xl">🔥</div>
            <h3 className="text-2xl font-bold text-pink-900">{currentStreak}</h3>
            <p className="text-pink-700 font-medium">Day{currentStreak !== 1 ? 's' : ''} Streak</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6 text-center">
            <Award className="w-8 h-8 mx-auto mb-3 text-purple-600" />
            <h3 className="text-2xl font-bold text-purple-900">{activeProfile.achievements.length}</h3>
            <p className="text-purple-700 font-medium">Achievement{activeProfile.achievements.length !== 1 ? 's' : ''}</p>
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="text-xl font-fredoka font-bold text-purple-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Subject Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          {Object.keys(subjectStats).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(subjectStats).map(([subject, stats]) => (
                <div key={subject} className="bg-white rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{getSubjectEmoji(subject)}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{subject}</h4>
                      <p className="text-sm text-gray-600">{stats.attempted} quiz{stats.attempted !== 1 ? 'es' : ''}</p>
                    </div>
                    <Badge className={`${getGradeColor(stats.averageScore)} border font-medium`}>
                      {stats.averageScore}%
                    </Badge>
                  </div>
                  
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(stats.averageScore, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-purple-700">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Complete some quizzes to see your subject performance!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-white border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="text-xl font-fredoka font-bold text-purple-900 flex items-center gap-2">
            <History className="w-5 h-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recentHistory.length > 0 ? (
            <div className="space-y-3">
              {recentHistory.map((quiz) => (
                <div key={quiz.id} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-4">
                    <Badge className={`${getGradeColor(quiz.score)} border font-bold`}>
                      {quiz.grade}
                    </Badge>
                    <div>
                      <h4 className="font-semibold text-gray-900">{quiz.quizName}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(quiz.completedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {Math.floor(quiz.timeSpent / 60)}m {quiz.timeSpent % 60}s
                        </span>
                        <span>{quiz.subjects.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-purple-900">{quiz.score}%</div>
                    <div className="text-sm text-gray-600">{quiz.correctAnswers}/{quiz.totalQuestions}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-purple-700">
              <History className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Complete your first quiz to see it here!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="text-xl font-fredoka font-bold text-purple-900 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Achievements ({activeProfile.achievements.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {activeProfile.achievements.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeProfile.achievements.map((achievement) => (
                <div key={achievement.id} className="bg-white rounded-xl p-4 border border-purple-200">
                  <div className="text-center">
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h4 className="font-bold text-purple-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-purple-700 mb-2">{achievement.description}</p>
                    <p className="text-xs text-gray-500">
                      Unlocked {formatDate(achievement.unlockedAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-purple-700">
              <Award className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Complete quizzes to unlock achievements!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};