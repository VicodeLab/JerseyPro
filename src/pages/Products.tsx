import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Star, ShoppingCart, Heart } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Camiseta del Royalty Betiz",
      price: "$54.99",
      image: "/assets/images/royaltyBetis.jpg",
      rating: 4.3,
      description: "Camiseta oficial del Royalty Betiz temporada 2023/2024"
    },
    {
      id: 2,
      name: "Camiseta Barçeluna FC 2024",
      price: "$89.99",
      image: "/assets/images/negreira.jpg",
      rating: 4.9,
      description: "Camiseta oficial del FC Barçeluna con diseño clásico y materiales de alta calidad."
    },
    {
      id: 3,
      name: "Camiseta Atlétik Bilbaoard",
      price: "$71.40",
      image: "/assets/images/nicoVenYa.jpg",
      rating: 4.7,
      description: "Camiseta retro del Atlétik Bilbaoard temporada 2012/2013."
    },
    {
      id: 4,
      name: "Camiseta de Colombia versión especial",
      price: "$62.99",
      image: "/assets/images/colombiaTuPapa.jpg",
      rating: 4.6,
      description: "Camiseta oficial de Colombia para que vayamos a ganar el mundial, vamos guerreros"
    },
    {
      id: 5,
      name: "Camiseta de kolo kolo FC (Parche de campeón)",
      price: "$87.99",
      image: "/assets/images/chileSinMundial.jpg",
      rating: 4.8,
      description: "Camiseta oficial del Kolo Kolo FC con el parche de campeón de la Copa Liberadores 2022, una camisa muy codiciada por coleccionistas"
    },
    {
      id: 6,
      name: "Camiseta del Flamango FC",
      price: "$89.99",
      image: "/assets/images/flamengo.jpg",
      rating: 4.3,
      description: "Camiseta oficial del Flamango FC, el mejor equipo suramericano según el ranking de la CONMEGOL"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nuestros Productos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra colección exclusiva de camisetas de fútbol de los mejores equipos del mundo
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Comprar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contáctanos y te ayudaremos a encontrar la camiseta perfecta para ti
            </p>
            <button onClick={() => window.location.href = "/contact"} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold">
              Contactar Ahora
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;