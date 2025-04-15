
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-black font-semibold">
            Logo
          </Link>
          
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-black hover:text-[#c0c0c0] transition-colors">
              Koti
            </Link>
            <Link to="/minusta" className="text-black hover:text-[#c0c0c0] transition-colors">
              Minusta
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-black hover:text-[#c0c0c0] transition-colors">
                Palvelut
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link to="/palvelut/pariterapia" className="w-full">
                    Pariterapia
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/palvelut/lyhytterapia" className="w-full">
                    Lyhytterapia
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/palvelut/puheenvuorot" className="w-full">
                    Puheenvuorot
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/yhteydenotto" className="text-black hover:text-[#c0c0c0] transition-colors">
              Yhteydenotto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
