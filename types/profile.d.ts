export type Profile = {
    id: string;
    name: string;
    email: string;
    phone: string;
    social_links: {
      facebook: string;
      instagram: string;
      github: string;
    };
    profile_picture: string;
    bio: string;
  };

  
export type SocialLink = {
  icon: React.ElementType; // Type for React component (icon)
  href: string; // URL for the social media link
};