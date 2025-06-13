// src/pages/AuthLayout.jsx
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Image from "../../public/images/image.png"
import { Fullscreen } from "lucide-react";

export default function AuthLayout() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-lg flex w-full max-w-5xl overflow-hidden">
        {/* Left side - Art / Image */}
        <div className="hidden md:flex flex-col justify-between bg-black text-white w-1/2 p-8 rounded-l-3xl relative">

          <div className="flex-grow flex items-center justify-center">
           <div>
           </div>
            <div className="absolute bottom-4 left-4 text-white">
                {isLogin ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
