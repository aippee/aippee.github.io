import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  return (
    <nav className="absolute w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-white text-xl font-bold">AINO PEKKARINEN</h1>
          </div>

          <div className="flex gap-6 items-center text-white">
            <Link to="/" className="hover:text-[#c0c0c0] transition-colors">
              Koti
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-[#c0c0c0] transition-colors">
                Palvelut
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link to="/palvelut" className="w-full">
                    Kaikki palvelut
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
