import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { progressStorage } from "@/services/progressStorage";
import { ProfileSummary, ProfileData } from "@/types/progress";
import { ChevronDown, User, Plus, LogOut } from "lucide-react";

interface ProfileSwitcherProps {
  activeProfileId: string | null;
  onProfileChange: (profileId: string | null) => void;
  onCreateProfile: () => void;
  className?: string;
}

export const ProfileSwitcher = ({ 
  activeProfileId, 
  onProfileChange, 
  onCreateProfile,
  className 
}: ProfileSwitcherProps) => {
  const [profiles, setProfiles] = useState<ProfileSummary[]>([]);
  const [activeProfile, setActiveProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    loadProfiles();
  }, [activeProfileId]);

  const loadProfiles = () => {
    const profileSummaries = progressStorage.getProfilesSummary();
    setProfiles(profileSummaries);

    if (activeProfileId) {
      const profile = progressStorage.getProfile(activeProfileId);
      setActiveProfile(profile);
    } else {
      setActiveProfile(null);
    }
  };

  const handleProfileSelect = (profileId: string) => {
    const success = progressStorage.setActiveProfile(profileId);
    if (success) {
      onProfileChange(profileId);
    }
  };

  const handleLogout = () => {
    onProfileChange(null);
  };

  const formatStats = (profile: ProfileSummary): string => {
    if (profile.totalQuizzes === 0) return "No quizzes yet";
    return `${profile.totalQuizzes} quiz${profile.totalQuizzes !== 1 ? 'es' : ''} • ${profile.averageScore}% avg`;
  };

  if (!activeProfile) {
    return (
      <Button
        onClick={onCreateProfile}
        variant="outline"
        className={`bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 font-medium ${className}`}
      >
        <User className="w-4 h-4 mr-2" />
        Choose Profile
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`bg-white text-amber-800 border-amber-300 hover:bg-amber-50 hover:text-amber-900 font-medium ${className}`}
        >
          <span className="mr-2 text-lg">{activeProfile.avatar}</span>
          <span className="hidden sm:inline">{activeProfile.nickname}</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-64 bg-white border-amber-200">
        <DropdownMenuLabel className="font-fredoka font-bold text-amber-900">
          Switch Profile
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-amber-200" />
        
        {/* Current Profile */}
        <div className="px-2 py-3 bg-amber-50 border-l-4 border-amber-400">
          <div className="flex items-center gap-3">
            <span className="text-xl">{activeProfile.avatar}</span>
            <div className="flex-1">
              <p className="font-medium text-amber-900">{activeProfile.nickname}</p>
              <p className="text-xs text-amber-700">
                {formatStats({
                  id: activeProfileId!,
                  nickname: activeProfile.nickname,
                  avatar: activeProfile.avatar,
                  totalQuizzes: activeProfile.stats.totalQuizzesTaken,
                  averageScore: activeProfile.stats.averageScore,
                  lastActive: activeProfile.lastActiveAt
                })}
              </p>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
              Active
            </Badge>
          </div>
        </div>
        
        <DropdownMenuSeparator className="bg-amber-200" />
        
        {/* Other Profiles */}
        {profiles
          .filter(profile => profile.id !== activeProfileId)
          .map((profile) => (
            <DropdownMenuItem
              key={profile.id}
              onClick={() => handleProfileSelect(profile.id)}
              className="cursor-pointer p-3 hover:bg-amber-50 focus:bg-amber-50"
            >
              <div className="flex items-center gap-3 w-full">
                <span className="text-lg">{profile.avatar}</span>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{profile.nickname}</p>
                  <p className="text-xs text-gray-600">
                    {formatStats(profile)}
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        
        {/* Add New Profile */}
        {profiles.length < 5 && (
          <>
            <DropdownMenuSeparator className="bg-amber-200" />
            <DropdownMenuItem
              onClick={onCreateProfile}
              className="cursor-pointer p-3 hover:bg-amber-50 focus:bg-amber-50 text-amber-800"
            >
              <Plus className="w-4 h-4 mr-3" />
              <span className="font-medium">Add New Profile</span>
            </DropdownMenuItem>
          </>
        )}
        
        {/* Logout */}
        <DropdownMenuSeparator className="bg-amber-200" />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer p-3 hover:bg-red-50 focus:bg-red-50 text-red-600"
        >
          <LogOut className="w-4 h-4 mr-3" />
          <span className="font-medium">Switch User</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};