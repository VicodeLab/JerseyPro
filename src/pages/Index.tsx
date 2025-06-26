import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ShoppingBag, Users, Mail, ExternalLink } from "lucide-react";

const Index = () => {
  const menuItems = [
    {
      title: "Productos",
      description: "Explora nuestra colección de camisetas de fútbol",
      icon: ShoppingBag,
      link: "/products",
      gradient: "from-blue-500 to-cyan-500",
      image: "/assets/images/products.jpg"
    },
    {
      title: "Nosotros",
      description: "Conoce más sobre nuestra empresa",
      icon: Users,
      link: "/about",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      title: "Contacto",
      description: "Ponte en contacto con nosotros",
      icon: Mail,
      link: "/contact",
      gradient: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop"
    },
    {
      title: "Universidad",
      description: "Visita la Universidad de Cartagena",
      icon: ExternalLink,
      link: "https://www.unicartagena.edu.co",
      external: true,
      gradient: "from-orange-500 to-red-500",
      image: "/assets/images/logo-oficial-unicartagena.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-14 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Jersey
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              La mejor colección de camisetas de fútbol para verdaderos fanáticos
            </p>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                
                return item.external ? (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-64 bg-gradient-to-br overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <div className="mb-4">
                        <Icon className="w-8 h-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.link}
                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-64 bg-gradient-to-br overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <div className="mb-4">
                        <Icon className="w-8 h-8 mb-3" />
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              ¿Por qué elegir JerseyPro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad Premium</h3>
                <p className="text-gray-600">Camisetas de la más alta calidad con materiales duraderos</p>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Atención Personalizada</h3>
                <p className="text-gray-600">Servicio al cliente dedicado y soporte especializado</p>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-teal-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Entrega Rápida</h3>
                <p className="text-gray-600">Envíos seguros y rápidos a todo el país</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;