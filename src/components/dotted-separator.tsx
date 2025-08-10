import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
}

export const DottedSeparator: React.FC<DottedSeparatorProps> = ({
  className = "",
  color = "#d4d4d8",
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
}) => {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "flex items-center",
        isHorizontal ? "w-full" : "h-full flex-col",
        className
      )}
    >
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
        style={{
          height: isHorizontal ? height : "100%",
          width: isHorizontal ? "100%" : height,
          backgroundPosition: "center",
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
          backgroundSize: isHorizontal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
        }}
      />
    </div>
  );
};
