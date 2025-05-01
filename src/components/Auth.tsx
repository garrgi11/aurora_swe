import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
  profilePicture?: string;
}

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    phone: '',
    password: '',
    profilePicture: '',
  });
  const [errors, setErrors] = useState<Partial<User>>({});
  const [previewImage, setPreviewImage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
        setUser(prev => ({ ...prev, profilePicture: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: Partial<User> = {};
    
    if (!isLogin) {
      if (!user.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!user.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?[1-9]\d{1,14}$/.test(user.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!user.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof User]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Dummy authentication logic
    if (isLogin) {
      if (user.email === 'alex@example.com' && user.password === 'password123') {
        const userData = {
          name: 'Alex Johnson',
          email: user.email,
          phone: '+1 (555) 987-6543',
          profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop'
        };
        localStorage.setItem('user', JSON.stringify(userData));
        navigate("/");
      } else {
        setErrors({ password: 'Invalid email or password' });
      }
    } else {
      // Registration logic
      localStorage.setItem('user', JSON.stringify(user));
      setIsLogin(true);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pastel-lavender/20 to-pastel-sky/20">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold font-montserrat glow-text">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-foreground/70">
            {isLogin 
              ? "Sign in to continue exploring AI agents" 
              : "Join us to discover amazing AI agents"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={user.name}
                  onChange={handleChange}
                  className={`border-pastel-lavender/30 focus:border-pastel-lavender ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={user.phone}
                  onChange={handleChange}
                  className={`border-pastel-lavender/30 focus:border-pastel-lavender ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Profile Picture</label>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Profile preview"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-pastel-lavender/20 flex items-center justify-center">
                        <Camera className="h-8 w-8 text-pastel-lavender" />
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="font-quicksand border-pastel-lavender hover:bg-pastel-lavender/20"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Upload Photo
                  </Button>
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="john@example.com"
              value={user.email}
              onChange={handleChange}
              className={`border-pastel-lavender/30 focus:border-pastel-lavender ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              value={user.password}
              onChange={handleChange}
              className={`border-pastel-lavender/30 focus:border-pastel-lavender ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-pastel-lavender hover:bg-pastel-lavender/80 text-white font-quicksand"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-pastel-lavender hover:text-pastel-lavender/80"
          >
            {isLogin 
              ? "Don't have an account? Sign Up" 
              : "Already have an account? Sign In"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Auth; 