
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="/lovable-uploads/26dc5ff5-e153-4729-8dc3-1cee1e32f411.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-32 w-full flex flex-col items-center gap-8">
          <div className="flex gap-8">
            <Link
              to="/palvelut/pariterapia"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white/20 transition-colors rounded-lg"
            >
              Varaa aika
            </Link>
            <Link
              to="/palvelut/lyhytterapia"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white/20 transition-colors rounded-lg"
            >
              Varaa aika
            </Link>
          </div>
          <div className="flex gap-24 text-white">
            <span>Pariterapiaan</span>
            <span>Yksilöterapiaan</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link 
            to="/palvelut/pariterapia"
            className="relative group overflow-hidden"
          >
            <img
              src="/lovable-uploads/26dc5ff5-e153-4729-8dc3-1cee1e32f411.png"
              alt="Pariterapia"
              className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">Pariterapia</span>
            </div>
          </Link>

          <Link 
            to="/palvelut/lyhytterapia"
            className="relative group overflow-hidden"
          >
            <img
              src="/lovable-uploads/26dc5ff5-e153-4729-8dc3-1cee1e32f411.png"
              alt="Lyhytterapia"
              className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">Lyhytterapia</span>
            </div>
          </Link>

          <Link 
            to="/palvelut/puheenvuorot"
            className="relative group overflow-hidden"
          >
            <img
              src="/lovable-uploads/26dc5ff5-e153-4729-8dc3-1cee1e32f411.png"
              alt="Puheenvuorot"
              className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">Puheenvuorot</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
