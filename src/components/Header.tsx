import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Package, Upload, LogIn, Rocket, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import Cart from "./Cart";
import UploadAgent from "./UploadAgent";
import { useState, useEffect } from "react";
import { agentsData } from "../data/agents";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserData(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const agentIndex = agentsData.findIndex(agent => 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (agentIndex !== -1) {
      const element = document.getElementById(`agent-${agentIndex}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      element?.classList.add('highlight-agent');
      setTimeout(() => {
        element?.classList.remove('highlight-agent');
      }, 2000);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pastel-lavender/20">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Package className="text-pastel-lavender mr-2 h-6 w-6" />
              <h1 className="text-xl font-bold font-montserrat glow-text bg-clip-text text-transparent bg-gradient-to-r from-pastel-sky to-pastel-lavender">
                Witly
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-2 relative max-w-md w-full">
              <form onSubmit={handleSearch} className="relative w-full flex items-center">
                <Input
                  placeholder="Search AI agents..."
                  className="pl-10 pr-20 bg-white/50 border-pastel-lavender/30 focus:border-pastel-lavender font-quicksand"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pastel-lavender/70" />
                <Button 
                  type="submit"
                  variant="ghost" 
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-pastel-lavender hover:bg-pastel-lavender/10 px-3 py-1"
                >
                  Search
                </Button>
              </form>
            </div>
            
            <div className="flex items-center space-x-4">
              {isLoggedIn && userData ? (
                <>
                  <div className="relative group">
                    <button
                      className="flex items-center space-x-2 focus:outline-none"
                      onClick={() => setIsLoggedIn(!isLoggedIn)}
                    >
                      <div className="relative">
                        <img
                          src={userData.profilePicture}
                          alt={userData.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-pastel-lavender"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="hidden md:inline text-sm font-medium">{userData.name}</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white border border-pastel-lavender/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-4 space-y-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={userData.profilePicture}
                            alt={userData.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-lg">{userData.name}</h3>
                            <p className="text-sm text-foreground/70">{userData.email}</p>
                          </div>
                        </div>
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
                        <Button
                          variant="outline"
                          className="w-full border-pastel-lavender hover:bg-pastel-lavender/20"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="font-quicksand border-pastel-lavender hover:bg-pastel-lavender/20 spring-transition"
                    onClick={() => setIsUploadOpen(true)}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Upload Agent</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-pastel-lavender hover:bg-pastel-lavender/10 relative w-12 h-12"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <ShoppingCart className="h-7 w-7" />
                    <span className="absolute -top-2 -right-2 bg-pastel-lavender text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                      2
                    </span>
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="font-quicksand border-pastel-lavender hover:bg-pastel-lavender/20 spring-transition"
                    onClick={() => navigate("/auth")}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Login</span>
                  </Button>
                  <Button 
                    variant="default" 
                    className="font-quicksand bg-pastel-lavender hover:bg-pastel-lavender/80 text-white spring-transition"
                    onClick={() => navigate("/auth")}
                  >
                    <Rocket className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Get Started</span>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <UploadAgent isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
    </>
  );
};

export default Header;
