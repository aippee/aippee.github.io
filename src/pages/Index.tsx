
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
            <a
              href="https://vello.fi/lav-coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white/20 transition-colors rounded-lg"
            >
              Varaa aika pariterapiaan
            </a>
            <a
              href="https://vello.fi/aino-pekkarinen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white/20 transition-colors rounded-lg"
            >
              Varaa aika lyhytterapiaan
            </a>
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
              src="/lovable-uploads/0597ecf4-aacd-42b6-bfa6-1a6f1cc6c649.png"
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
              src="/lovable-uploads/81e208dd-6290-4eac-b9a1-a40894223f43.png"
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
              src="/lovable-uploads/e826cca7-a3ac-482e-860e-4cc69502db6a.png"
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
