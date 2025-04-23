
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="bg-logistics-50 section-padding">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Shipping Process?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our logistics services can help your business save costs and enhance operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us Now
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
