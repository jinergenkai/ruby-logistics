import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { Ship, Plane, Warehouse, Globe, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "international-sea",
      icon: <Ship size={48} className="text-logistics-500 mb-4 animate-bounce" />,
      title: "International Sea Freight",
      description: "Our international sea freight service connects businesses to over 100 countries and 500 major ports worldwide. With our extensive network and expertise, we help customers save up to 20% on shipping costs while ensuring timely deliveries.",
      features: [
        "Shipping to over 100 countries worldwide",
        "Access to 500+ major ports",
        "Cost savings of up to 20%",
        "Fast shipping times (5-10 days)",
        "Real-time shipment tracking",
        "Comprehensive insurance options"
      ],
      image: "/1.jpg"
    },
    {
      id: "domestic-sea",
      icon: <Ship size={48} className="text-logistics-500 mb-4 hover:scale-110 transition-transform" />,
      title: "Domestic Sea Freight",
      description: "Our domestic sea freight service provides efficient shipping between major ports in Vietnam, including Ho Chi Minh City, Hai Phong, and Da Nang. We optimize shipping costs and delivery time to enhance your domestic supply chain.",
      features: [
        "Shipping between all major Vietnamese ports",
        "Optimized cost and delivery time",
        "Frequent departure schedules",
        "Door-to-door service available",
        "Specialized handling for various cargo types",
        "Reliable delivery tracking"
      ],
      image: "/2.jpeg"
    },
    {
      id: "air-freight",
      icon: <Plane size={48} className="text-logistics-500 mb-4 animate-pulse" />,
      title: "Air Freight",
      description: "Our air freight service offers rapid delivery of goods within 24-48 hours, working with trusted international airlines. This service is ideal for time-sensitive shipments, high-value goods, and urgent deliveries.",
      features: [
        "Delivery within 24-48 hours",
        "Partnerships with major airlines",
        "Global coverage to major airports",
        "Priority handling options",
        "Suitable for urgent and high-value shipments",
        "Comprehensive insurance coverage"
      ],
      image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=1470"
    },
    {
      id: "warehousing",
      icon: <Warehouse size={48} className="text-logistics-500 mb-4 hover:rotate-6 transition-transform" />,
      title: "Warehousing and Inventory Management",
      description: "Our warehousing service provides 10,000m² of strategically located storage space, offering packing, sorting, and fast delivery services. We help businesses optimize their inventory management and distribution processes.",
      features: [
        "10,000m² warehouse space",
        "Strategic locations for efficient distribution",
        "Packing and sorting services",
        "Inventory management systems",
        "Temperature-controlled storage options",
        "24/7 security and surveillance"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1470"
    },
    {
      id: "international-shipping",
      icon: <Globe size={48} className="text-logistics-500 mb-4 animate-spin-slow" />,
      title: "International Shipping",
      description: "Our international shipping service offers global coverage, optimizing costs and delivery times for import/export customers. We handle all aspects of international logistics, including customs clearance and documentation.",
      features: [
        "Comprehensive global shipping solutions",
        "Cost and delivery time optimization",
        "Customs clearance assistance",
        "Documentation preparation",
        "Regulatory compliance support",
        "Personalized service from start to finish"
      ],
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1470"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-logistics-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Our Logistics Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in`} style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="text-center lg:text-left mb-6">
                  {service.icon}
                  <h2 className="text-3xl font-bold mb-4 hover:text-logistics-500 transition-colors">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group">
                      <CheckCircle size={18} className="text-logistics-500 mt-1 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-logistics-500 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="btn-primary inline-block transform hover:scale-105 transition-transform"
                >
                  Request a Quote
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in`} style={{ animationDelay: `${0.3 * index}s` }}>
                <img 
                  src={service.image}
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-logistics-700 text-white py-16">
        <div className="container-custom text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Logistics?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our logistics services can help your business save costs and enhance operational efficiency.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary bg-white text-logistics-600 hover:bg-gray-100 transform hover:scale-105 transition-transform"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
