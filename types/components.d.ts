// In your SidebarProps definition
import { Dispatch, SetStateAction } from "react";

// The Section type that is used in the Home component
type Section =
  | "profile"
  | "work-experience"
  | "skills"
  | "certifications"
  | "projects"
  | "education"
  | "languages"
  | "references";

export type SidebarProps = {
  activeSection: Section; // Use Section type here
  setActiveSection: Dispatch<SetStateAction<Section>>; // Ensure the setter uses the Section type
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>; // Keep boolean type for sidebar open state
};
