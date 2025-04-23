
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const testimonials = [
    {
      content: "We are very satisfied with the international shipping service, with costs reduced by 15-20% and on-time deliveries, ensuring stable supply chains.",
      author: "Director",
      company: "ABC Import-Export Company",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      content: "Sea freight service has reduced our shipping time from 3 days to 1-2 days, improving operational efficiency and flexibility.",
      author: "Operations Manager",
      company: "DEF Transport Company",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      content: "Air freight service ensured delivery within 48 hours, optimized customs procedures, and boosted our revenue by 25% during peak season.",
      author: "Business Director",
      company: "GHI Trading Company",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      content: "Working with Nguyễn Thị Thu Hiền has transformed our logistics process. Her attention to detail and cost-saving strategies have been invaluable for our growing business.",
      author: "Logistics Manager",
      company: "JKL Manufacturing",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      content: "The warehousing service has saved us considerable space and improved our inventory management. The team's efficiency in handling our products has been exceptional.",
      author: "Supply Chain Director",
      company: "MNO Retail Group",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      content: "Her expertise in international shipping regulations saved us from potential compliance issues and ensured smooth customs clearance for all our shipments.",
      author: "Import Manager",
      company: "PQR International Trade",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-logistics-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
            <p className="text-xl max-w-3xl mx-auto">
              See what our clients say about our logistics services
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-custom"
              >
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <p className="mb-6 text-gray-600 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Satisfied Clients</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the difference our logistics services can make for your business. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
