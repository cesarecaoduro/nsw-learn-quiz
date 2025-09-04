import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { progressStorage } from "@/services/progressStorage";
import { AVAILABLE_AVATARS, AvatarEmoji, ProfileSummary, isValidNickname } from "@/types/progress";
import { MacOSPlusIcon } from "@/components/ui/macos-icon";
import { ArrowRight, User, Trophy } from "lucide-react";

interface ProfileSelectorProps {
  onProfileSelected: (profileId: string) => void;
  onSkip?: () => void; // Optional skip button for first-time users
}

export const ProfileSelector = ({ onProfileSelected, onSkip }: ProfileSelectorProps) => {
  const [profiles, setProfiles] = useState<ProfileSummary[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarEmoji>("🦋");
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = () => {
    const profileSummaries = progressStorage.getProfilesSummary();
    // Sort by most recently active
    profileSummaries.sort((a, b) => b.lastActive - a.lastActive);
    setProfiles(profileSummaries);
    
    // If no profiles exist, show create form by default
    if (profileSummaries.length === 0) {
      setShowCreateForm(true);
    }
  };

  const handleCreateProfile = async () => {
    if (!isValidNickname(newNickname)) {
      setError("Please enter a valid name (letters, numbers, and spaces only, max 20 characters)");
      return;
    }

    setIsCreating(true);
    setError("");

    try {
      const profileId = progressStorage.addProfile(newNickname.trim(), selectedAvatar);
      
      if (profileId) {
        // Profile created successfully
        onProfileSelected(profileId);
      } else {
        setError("Could not create profile. You may have reached the maximum limit of 5 profiles.");
      }
    } catch (err) {
      setError("An error occurred while creating the profile.");
    } finally {
      setIsCreating(false);
    }
  };

  const formatLastActive = (timestamp: number): string => {
    const now = Date.now();
    const diffMs = now - timestamp;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const getGradeColor = (score: number): string => {
    if (score >= 90) return "bg-green-100 text-green-800 border-green-200";
    if (score >= 80) return "bg-blue-100 text-blue-800 border-blue-200";
    if (score >= 70) return "bg-amber-100 text-amber-800 border-amber-200";
    if (score >= 60) return "bg-orange-100 text-orange-800 border-orange-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  if (showCreateForm) {
    return (
      <div className="w-full max-w-md mx-auto space-y-6">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-fredoka font-bold text-amber-900">
              {profiles.length === 0 ? "Welcome! 🌟" : "Create New Profile"}
            </CardTitle>
            <p className="text-amber-800">
              {profiles.length === 0 
                ? "Let's get started with your learning adventure!" 
                : "Add another profile to track progress separately"
              }
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Nickname Input */}
            <div className="space-y-2">
              <Label htmlFor="nickname" className="text-amber-900 font-medium">
                Choose your name
              </Label>
              <Input
                id="nickname"
                value={newNickname}
                onChange={(e) => setNewNickname(e.target.value)}
                placeholder="Enter your name..."
                maxLength={20}
                className="bg-white border-amber-300 focus:border-amber-400 focus:ring-amber-400"
              />
              <p className="text-xs text-amber-700">
                Letters, numbers, and spaces only (max 20 characters)
              </p>
            </div>

            {/* Avatar Selection */}
            <div className="space-y-3">
              <Label className="text-amber-900 font-medium">Choose your avatar</Label>
              <div className="grid grid-cols-8 gap-2">
                {AVAILABLE_AVATARS.map((avatar) => (
                  <Button
                    key={avatar}
                    variant="outline"
                    className={`w-10 h-10 p-0 text-xl border-2 transition-all duration-200 ${
                      selectedAvatar === avatar
                        ? "border-amber-400 bg-amber-100 scale-110"
                        : "border-amber-200 hover:border-amber-300 hover:bg-amber-50"
                    }`}
                    onClick={() => setSelectedAvatar(avatar)}
                  >
                    {avatar}
                  </Button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                onClick={handleCreateProfile}
                disabled={!newNickname.trim() || isCreating}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-fredoka font-semibold"
              >
                {isCreating ? (
                  "Creating Profile..."
                ) : (
                  <>
                    <MacOSPlusIcon size="sm" className="mr-2 text-white" />
                    Start Learning Adventure!
                  </>
                )}
              </Button>

              {profiles.length > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setShowCreateForm(false)}
                  className="w-full bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 font-medium"
                >
                  Back to Profile Selection
                </Button>
              )}

              {onSkip && profiles.length === 0 && (
                <Button
                  variant="ghost"
                  onClick={onSkip}
                  className="w-full text-amber-700 hover:text-amber-900 hover:bg-amber-50"
                >
                  Skip for now (no progress tracking)
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-fredoka font-bold text-amber-900">
            Choose Your Profile 👋
          </CardTitle>
          <p className="text-amber-800">
            Select a profile to continue your learning journey
          </p>
        </CardHeader>
      </Card>

      {/* Existing Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            className="cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg border-2 border-amber-200 hover:border-amber-400 bg-white"
            onClick={() => onProfileSelected(profile.id)}
          >
            <CardContent className="p-6 text-center space-y-4">
              {/* Avatar */}
              <div className="text-4xl">{profile.avatar}</div>
              
              {/* Name */}
              <div>
                <h3 className="font-fredoka font-bold text-lg text-gray-900">
                  {profile.nickname}
                </h3>
                <p className="text-sm text-amber-700">
                  {formatLastActive(profile.lastActive)}
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {profile.totalQuizzes} quiz{profile.totalQuizzes !== 1 ? 'es' : ''}
                  </span>
                </div>
                
                {profile.totalQuizzes > 0 && (
                  <Badge className={`text-xs font-medium border ${getGradeColor(profile.averageScore)}`}>
                    {profile.averageScore}% average
                  </Badge>
                )}
              </div>

              {/* Continue Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-5 h-5 text-amber-600" />
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Profile Card */}
        {profiles.length < 5 && (
          <Card
            className="cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg border-2 border-dashed border-amber-300 hover:border-amber-500 bg-white"
            onClick={() => setShowCreateForm(true)}
          >
            <CardContent className="p-6 text-center space-y-4 flex flex-col justify-center min-h-[200px]">
              <MacOSPlusIcon 
                size="xl" 
                className="mx-auto text-amber-500 w-12 h-12"
              />
              <div>
                <h3 className="font-fredoka font-bold text-lg text-amber-900">
                  Add New Profile
                </h3>
                <p className="text-sm text-amber-700">
                  Create another learning profile
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Skip Option for New Users */}
      {onSkip && (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={onSkip}
            className="text-amber-700 hover:text-amber-900 hover:bg-amber-50"
          >
            Skip profile setup (no progress tracking)
          </Button>
        </div>
      )}
    </div>
  );
};