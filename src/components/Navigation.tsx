
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  return (
    <nav className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-end items-center h-16">
          <div className="flex gap-6 items-center text-white">
            <Link to="/" className="hover:text-[#c0c0c0] transition-colors">
              Koti
            </Link>
            <Link to="/minusta" className="hover:text-[#c0c0c0] transition-colors">
              Minusta
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-[#c0c0c0] transition-colors">
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
            
            <Link to="/yhteydenotto" className="hover:text-[#c0c0c0] transition-colors">
              Yhteydenotto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
