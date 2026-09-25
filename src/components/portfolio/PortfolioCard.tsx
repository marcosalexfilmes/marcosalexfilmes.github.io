import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/types";

interface PortfolioCardProps {
  project: PortfolioProject;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  const categoryLabels: Record<string, string> = {
    "VIDEO & PHOTOGRAPHY": "VÍDEO E FOTOGRAFIA",
    video_photography: "VÍDEO E FOTOGRAFIA",
    video: "VÍDEO",
    photography: "FOTOGRAFIA",
  };

  // Use year from database, fallback to created_at year
  const displayYear = project.year || new Date(project.created_at).getFullYear();

  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group block relative overflow-hidden rounded-2xl aspect-[4/5]"
    >
      <img
        src={project.preview_image_1}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 mb-1">
          {categoryLabels[project.category] || project.category} · {displayYear}
        </span>
        <h3 className="text-base sm:text-lg text-white tracking-tight font-normal">
          {project.title}
        </h3>
      </div>
    </Link>
  );
};

export default PortfolioCard;
