import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut, Camera } from "lucide-react";

interface UserProfileProps {
  userData: {
    name: string;
    email: string;
    phone: string;
    photo?: string;
  };
}

const UserProfile = ({ userData }: UserProfileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-pastel-lavender/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src={userData.photo} alt={userData.name} />
          <AvatarFallback className="bg-pastel-lavender text-white">
            {getInitials(userData.name)}
          </AvatarFallback>
        </Avatar>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white border border-pastel-lavender/20">
          <div className="p-4 space-y-4">
            {/* Profile Header */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={userData.photo} alt={userData.name} />
                  <AvatarFallback className="bg-pastel-lavender text-white text-xl">
                    {getInitials(userData.name)}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white border-pastel-lavender hover:bg-pastel-lavender/10"
                >
                  <Camera className="h-4 w-4 text-pastel-lavender" />
                </Button>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{userData.name}</h3>
                <p className="text-sm text-foreground/70">{userData.email}</p>
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-2 pt-2 border-t border-pastel-lavender/20">
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-4 w-4 text-pastel-lavender" />
                <span>{userData.name}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-4 w-4 text-pastel-lavender" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-4 w-4 text-pastel-lavender" />
                <span>{userData.phone}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-pastel-lavender/20 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-sm"
              >
                <Settings className="h-4 w-4 mr-2 text-pastel-lavender" />
                Settings
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-sm text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile; 