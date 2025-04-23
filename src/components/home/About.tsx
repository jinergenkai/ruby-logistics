
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const features = [
  "3 years of experience in international logistics",
  "Expert in sea freight, air freight, cost optimization",
  "Helping customers save costs up to 20%",
  "Enhancing operational efficiency",
  "Global shipping to over 100 countries"
];

const About = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
    <img
            src="/background.jpg"
            alt="Modern Logistics Services"
            className="rounded-lg shadow-lg w-full h-[400px] md:h-[480px] object-cover transform hover:scale-105 transition-all duration-300"
          />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-4">About Nguyễn Thị Thu Hiền</h2>
            <p className="text-gray-600 mb-6">
              With 3 years of experience in international logistics, Nguyễn Thị Thu Hiền specializes in optimizing sea freight, air freight, and overall logistics costs, helping businesses enhance their operational efficiency.
            </p>
            
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-logistics-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/about" className="btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
