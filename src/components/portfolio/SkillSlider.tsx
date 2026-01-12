import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { getSkillIcon } from "../../lib/skillIcons";
import type { Skill } from "../../types/portfolio";

interface SkillSliderProps {
  skills: Skill[];
}

export default function SkillSlider({ skills }: SkillSliderProps) {
  const { colors, mode } = useTheme();

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden w-full max-w-full">
      {/* Left fade gradient */}
      <div
        className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${colors.background}, transparent)` }}
      />
      {/* Right fade gradient */}
      <div
        className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${colors.background}, transparent)` }}
      />

      {/* Sliding container */}
      <div className="skill-slider-track flex gap-3 sm:gap-4">
        {duplicatedSkills.map((skill, index) => {
          const IconComponent = getSkillIcon(skill.icon);
          return (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (index % skills.length) * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex-shrink-0 flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 backdrop-blur-sm cursor-default"
              style={{
                backgroundColor: mode === "dark"
                  ? "rgba(24, 24, 27, 0.6)"
                  : "rgba(255, 255, 255, 0.8)",
                borderColor: mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
                boxShadow: mode === "light" 
                  ? "0 2px 8px rgba(0,0,0,0.05)" 
                  : "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              {IconComponent && (
                <IconComponent
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  style={{ color: skill.color }}
                />
              )}
              <span
                className="text-xs sm:text-sm font-medium whitespace-nowrap"
                style={{ color: colors.foreground }}
              >
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
