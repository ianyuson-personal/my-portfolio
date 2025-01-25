// components/sidebar.tsx
export type SidebarProps = {
    activeSection: string; // Type for the active section, assuming it's a string
    setActiveSection: React.Dispatch<React.SetStateAction<string>>; // Type for the setter function
    isSidebarOpen: boolean; // Type for isSidebarOpen (boolean)
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; // Type for the setter function
  };