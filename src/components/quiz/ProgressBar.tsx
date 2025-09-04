interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <span className="font-fredoka font-semibold text-gray-900">
          Question {current} of {total}
        </span>
        <span className="text-sm text-gray-600 font-medium">
          {Math.round(percentage)}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};