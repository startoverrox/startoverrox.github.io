import { cn } from "@/utils/cn";

interface StackCardProps {
  img: string;
  children: React.ReactNode;
  className?: string;
}

const ProjectCard = ({ img, children, className = "" }: StackCardProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm",
        className,
      )}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={img || "src/assets/placeholder.svg"}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default ProjectCard;
