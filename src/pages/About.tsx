import Layout from '../components/layout/Layout';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const experiences = [
    "3 years of experience in international logistics",
    "Sea freight specialist with expertise in cost optimization",
    "Air freight coordination for time-sensitive deliveries",
    "Supply chain management and problem solving",
    "Client relationship management and custom solutions",
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative text-white py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container-custom relative z-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Nguyễn Thị Thu Hiền</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Dedicated logistics professional with expertise in sea freight, air freight, and cost optimization
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Professional Profile</h2>
            <p className="text-gray-600 mb-6">
              With 3 years of experience in international logistics, I specialize in sea freight, air freight, and cost optimization solutions. My goal is to help customers save costs and enhance their operational efficiency through tailored logistics services.
            </p>

            <h3 className="text-xl font-bold mb-3">Experience & Expertise</h3>
            <ul className="space-y-2 mb-6">
              {experiences.map((experience, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-logistics-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{experience}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.tiktok.com/@rubylogistics" className="text-logistics-500 hover:text-logistics-600 transition-custom">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4A6.33 6.33 0 0 0 8.89 9a6.34 6.34 0 1 0 6.34 6.34V9.04a8.16 8.16 0 0 0 4.36 1.26V6.69z"/>
                  </svg>
                </a>
                <a href="tel:0358820162" className="text-logistics-500 hover:text-logistics-600 transition-custom">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Philosophy Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Philosophy</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                My approach to logistics is centered around creating value for clients through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-bold text-lg">Cost Optimization</h3>
                    <p className="text-gray-600">Identifying the most cost-effective shipping solutions without compromising on quality or speed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-bold text-lg">Operational Efficiency</h3>
                    <p className="text-gray-600">Streamlining logistics processes to reduce delays and improve supply chain performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-bold text-lg">Customer-Centric Solutions</h3>
                    <p className="text-gray-600">Tailoring logistics services to meet the specific needs and challenges of each client.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-bold text-lg">Continuous Improvement</h3>
                    <p className="text-gray-600">Constantly seeking ways to improve service quality and adapt to changing market conditions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
