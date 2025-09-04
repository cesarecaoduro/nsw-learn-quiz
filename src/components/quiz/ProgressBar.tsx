interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full px-1 sm:px-2">
      <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-left mb-3 space-y-1 sm:space-y-0">
        <span className="font-fredoka font-black text-base sm:text-lg text-white drop-shadow-lg">
          🎯 Question {current} of {total} 📝
        </span>
        <span className="font-comic font-bold text-sm sm:text-base text-white/90">
          {Math.round(percentage)}% Complete! ✨🌈
        </span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-white/30 backdrop-blur-sm h-4 sm:h-5 rounded-full overflow-hidden shadow-inner border-2 border-white/50">
          <div 
            className="h-full bg-gradient-to-r from-kid-purple via-kid-pink via-kid-orange to-kid-yellow transition-all duration-700 ease-out shadow-lg relative overflow-hidden"
            style={{ width: `${percentage}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        {/* Celebration emojis */}
        {percentage > 25 && (
          <div className="absolute -top-2 left-1/4 text-lg animate-bounce">🌟</div>
        )}
        {percentage > 50 && (
          <div className="absolute -top-2 left-1/2 text-lg animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</div>
        )}
        {percentage > 75 && (
          <div className="absolute -top-2 left-3/4 text-lg animate-bounce" style={{ animationDelay: '0.4s' }}>🚀</div>
        )}
      </div>
    </div>
  );
};