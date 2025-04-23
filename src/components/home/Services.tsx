
import { Link } from 'react-router-dom';
import { Ship, Plane, Package, Warehouse, Globe } from 'lucide-react';

const services = [
  {
    icon: <Ship size={42} className="text-logistics-500 mb-4" />,
    title: "International Sea Freight",
    description: "Shipping goods to over 100 countries and 500 major ports worldwide, saving up to 20% on costs.",
    link: "/services#international-sea"
  },
  {
    icon: <Ship size={42} className="text-logistics-500 mb-4" />,
    title: "Domestic Sea Freight",
    description: "Shipping between major ports in Vietnam such as Ho Chi Minh City, Hai Phong, Da Nang.",
    link: "/services#domestic-sea"
  },
  {
    icon: <Plane size={42} className="text-logistics-500 mb-4" />,
    title: "Air Freight",
    description: "Fast delivery of goods within 24-48 hours with trusted international airlines.",
    link: "/services#air-freight"
  },
  {
    icon: <Warehouse size={42} className="text-logistics-500 mb-4" />,
    title: "Warehousing",
    description: "10,000m² warehouses located strategically, providing packing, sorting, and fast delivery services.",
    link: "/services#warehousing"
  },
  {
    icon: <Globe size={42} className="text-logistics-500 mb-4" />,
    title: "International Shipping",
    description: "Global shipping services, optimizing costs and delivery time for import/export customers.",
    link: "/services#international-shipping"
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Logistics Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive logistics solutions tailored to your specific needs, helping you optimize costs and enhance operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-service flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="mt-auto text-logistics-500 hover:text-logistics-600 font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
