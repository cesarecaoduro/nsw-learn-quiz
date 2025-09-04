interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full px-2 sm:px-0">
      <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-2">
        <span>Question {current} of {total}</span>
        <span className="hidden sm:inline">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-secondary h-2 sm:h-3 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};