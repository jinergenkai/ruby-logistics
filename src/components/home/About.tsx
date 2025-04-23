
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
              src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Nguyễn Thị Thu Hiền" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
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
