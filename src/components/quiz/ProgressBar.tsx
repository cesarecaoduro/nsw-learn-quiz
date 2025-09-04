interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full px-2 sm:px-0">
      <div className="flex justify-between text-xs sm:text-sm text-slate-600 mb-3">
        <span className="font-fredoka font-semibold">
          🎯 Question {current} of {total}
        </span>
        <span className="hidden sm:inline font-comic text-fun-purple">
          {Math.round(percentage)}% Complete! ✨
        </span>
      </div>
      <div className="w-full bg-gradient-to-r from-slate-200 to-slate-100 h-3 sm:h-4 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-fun-purple via-fun-pink to-fun-orange transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};