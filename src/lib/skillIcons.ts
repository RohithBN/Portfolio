import {
  Code,
  Database,
  Server,
  Globe,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiRedis,
  SiApachekafka,
  SiPrometheus,
  SiGrafana,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  type IconType,
} from "@icons-pack/react-simple-icons";

// Lucide icons for generic concepts (fallback)
const lucideIconMap: Record<string, LucideIcon> = {
  code: Code,
  database: Database,
  server: Server,
  globe: Globe,
  terminal: Terminal,
  zap: Zap,
};

// Simple Icons for brand/technology icons (from data.json)
const simpleIconMap: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  go: SiGo,
  cplusplus: SiCplusplus,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  nodedotjs: SiNodedotjs,
  docker: SiDocker,
  redis: SiRedis,
  apachekafka: SiApachekafka,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
};

type IconComponent = LucideIcon | IconType;

export function getSkillIcon(name: string): IconComponent | null {
  const lowerName = name.toLowerCase();
  
  if (simpleIconMap[lowerName]) {
    return simpleIconMap[lowerName];
  }
  
  if (lucideIconMap[lowerName]) {
    return lucideIconMap[lowerName];
  }
  
  return null;
}

export { lucideIconMap, simpleIconMap };

