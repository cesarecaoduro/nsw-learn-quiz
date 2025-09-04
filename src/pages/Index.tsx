import { ProgressProvider } from "@/contexts/ProgressContext";
import { AppContent } from "@/components/AppContent";

const Index = () => {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
};

export default Index;
