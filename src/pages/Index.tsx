import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const officials = [
    {
      name: "Shri Narendra Modi",
      position: "Prime Minister of India",
      description: "Leading the nation with the vision of \"Sabka Saath, Sabka Vikas, Sabka Vishwas, Sabka Prayas\".",
      image: "https://tse1.mm.bing.net/th/id/OIP.R62ga1oQpdu5enm-B-ppDQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Droupadi Murmu",
      position: "President of India",
      description: "The first tribal woman to serve as President of India, upholding the nation's democratic values.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52Qh-aMxMPhodGWAG_mFpL9ny3bgw5E8B_g&s"
    },
    {
      name: "Shri Amit Shah",
      position: "Minister of Home Affairs",
      description: "Overseeing internal security and strengthening India's governance framework.",
      image: "https://th.bing.com/th/id/R.628b7c2683fa2cfa55b118e4aaaf5937?rik=CutSeuNh%2bfs%2fLA&riu=http%3a%2f%2fwww.mha.gov.in%2fsites%2fdefault%2ffiles%2f107A6566%5b1%5d.jpg&ehk=gPskMFOvLqNUcm9AmfP8ZiCvTfEhvuGzU8iDGtiTATg%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "Nirmala Sitharaman",
      position: "Minister of Finance",
      description: "Driving India's economic reforms and digital governance initiatives.",
      image: "https://english.janamtv.com/wp-content/uploads/2023/11/nirmala-seethraman-750x468-1.jpg"
    },
    {
      name: "C.P.Radhakrishnan",
      position: "Vice President of India",
      description: "He previously served as the Governor of various states, and as a member of parliament.",
      image: "https://images.timesnownews.com/thumb/msid-152479270,thumbsize-983043,width-1280,height-720,resizemode-75/152479270.jpg"
    },
    {
      name: "B.R.Gavai",
      position: "Chief Justice of India",
      description: "He is a former judge of the Bombay High Court and also currently serves as the chancellor of some National Law Universities",
      image: "https://lawtrend.in/wp-content/uploads/2025/05/cji-gavai-1.jpg"
    }
  ];

  const categories = [
    {
      title: "Road & Infrastructure",
      description: "Report issues like potholes, broken pavements, or damaged infrastructure in your locality."
    },
    {
      title: "Electricity & Water",
      description: "Register complaints related to power outages, faulty lines, or water supply problems."
    },
    {
      title: "Cleanliness & Waste",
      description: "Raise concerns about garbage collection, drainage issues, or unhygienic surroundings."
    },
    {
      title: "Public Safety",
      description: "Report streetlight failures, open manholes, or any safety hazards in public areas."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/70 backdrop-blur-md text-white z-50 px-10 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://as1.ftcdn.net/v2/jpg/07/29/34/34/1000_F_729343438_gqEk9CipKxy5FVnabVTCyr65qGqM4Fv1.jpg" 
              alt="Government of India Logo" 
              className="h-11 rounded-lg"
            />
            <span className="font-semibold text-xl">Government of India</span>
          </div>
          <ul className="flex gap-6">
            <li>
              <a 
                href="/login" 
                className="font-medium hover:text-accent transition-colors border-2 border-white px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://static.theprint.in/wp-content/uploads/2022/08/Feature-Image-6-3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
            Issue Desk Of Government of India
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Empowering Citizens to Report and Resolve Local Issues Transparently
          </p>
          <Button 
            onClick={() => scrollToSection('#about')}
            className="bg-gradient-to-r from-primary to-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-6 text-lg rounded-full"
          >
            Explore More
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-5 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-4 relative">
          About the Portal
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-accent rounded-full mt-3 block" />
        </h2>
        <p className="text-center max-w-3xl mx-auto mt-10 text-lg leading-relaxed text-foreground">
          The <strong>Issue Desk Of Government of India</strong> is an initiative under the <strong>Digital India Mission</strong> to allow citizens to report public issues 
          such as damaged roads, streetlight failures, water supply disruptions, sanitation problems, and more. 
          Our goal is to ensure transparency, accountability, and timely response from government departments.
        </p>
      </section>

      {/* Officials Section */}
      <section id="officials" className="py-20 px-5 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-4 relative">
          Government Leadership
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-accent rounded-full mt-3 block" />
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {officials.map((official, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 w-full sm:w-72 text-center"
            >
              <img 
                src={official.image} 
                alt={official.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/10"
              />
              <h3 className="text-xl font-semibold text-primary mb-1">{official.name}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">{official.position}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{official.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-5 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-4 relative">
          Major Complaint Categories
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-accent rounded-full mt-3 block" />
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 w-full sm:w-80"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{category.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(215,100%,12%)] text-white text-center py-8 mt-16">
        <p>&copy; 2025 Government of India | Public Grievance Redressal Portal</p>
      </footer>
    </div>
  );
};

export default Index;
