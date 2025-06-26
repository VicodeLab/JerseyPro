import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Award, Users, Truck, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Años de Experiencia", value: "15+", icon: Award },
    { label: "Clientes Satisfechos", value: "10K+", icon: Users },
    { label: "Productos Vendidos", value: "50K+", icon: Truck },
    { label: "Garantía de Calidad", value: "100%", icon: Shield },
  ];

  const team = [
    {
      name: "Carlos Rodríguez",
      position: "Fundador & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Apasionado del fútbol con más de 15 años de experiencia en la industria deportiva."
    },
    {
      name: "María González",
      position: "Directora de Producto",
      image: "https://images.unsplash.com/photo-1494790108755-2616c4e5f0da?w=300&h=300&fit=crop",
      description: "Experta en diseño y calidad de productos deportivos con visión innovadora."
    },
    {
      name: "Luis Martínez",
      position: "Gerente de Ventas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "Especialista en atención al cliente y desarrollo de relaciones comerciales."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una empresa dedicada a ofrecer las mejores camisetas de fútbol con calidad premium y servicio excepcional
            </p>
          </div>

          {/* Company Story */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
                <p className="text-gray-600 mb-4">
                  JerseyPro nació en 2008 de la pasión por el fútbol y el deseo de ofrecer camisetas auténticas y de alta calidad a todos los fanáticos del deporte más popular del mundo.
                </p>
                <p className="text-gray-600 mb-4">
                  Desde nuestros humildes comienzos en Cartagena, hemos crecido hasta convertirnos en una de las tiendas de camisetas deportivas más confiables del país, siempre manteniendo nuestro compromiso con la calidad y la satisfacción del cliente.
                </p>
                <p className="text-gray-600">
                  Nuestro equipo está formado por verdaderos amantes del fútbol que entienden la importancia de llevar los colores de tu equipo favorito con orgullo y estilo.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Equipo JerseyPro"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600">
                Proporcionar a los fanáticos del fútbol camisetas auténticas y de alta calidad, ofreciendo una experiencia de compra excepcional y construyendo una comunidad de verdaderos amantes del deporte.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
              <p className="text-gray-600">
                Ser la tienda de camisetas deportivas líder en Colombia, reconocida por nuestra calidad, autenticidad y servicio al cliente excepcional, expandiendo nuestra presencia a nivel internacional.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Calidad</h3>
                <p className="text-gray-600 text-sm">Productos de la más alta calidad y autenticidad garantizada</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Servicio</h3>
                <p className="text-gray-600 text-sm">Atención personalizada y soporte excepcional</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Confianza</h3>
                <p className="text-gray-600 text-sm">Transparencia y honestidad en cada transacción</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Rapidez</h3>
                <p className="text-gray-600 text-sm">Entregas rápidas y seguras en todo el país</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;