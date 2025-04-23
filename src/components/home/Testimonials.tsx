
const testimonials = [
  {
    content: "We are very satisfied with the international shipping service, with costs reduced by 15-20% and on-time deliveries, ensuring stable supply chains.",
    author: "Director, ABC Import-Export Company",
    company: "ABC Import-Export Company",
  },
  {
    content: "Sea freight service has reduced our shipping time from 3 days to 1-2 days, improving operational efficiency and flexibility.",
    author: "Operations Manager, DEF Transport Company",
    company: "DEF Transport Company",
  },
  {
    content: "Air freight service ensured delivery within 48 hours, optimized customs procedures, and boosted our revenue by 25% during peak season.",
    author: "Business Director, GHI Trading Company",
    company: "GHI Trading Company",
  }
];

const Testimonials = () => {
  return (
    <section className="bg-logistics-700 text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            See what our valued clients have to say about our logistics services and how we've helped them optimize their shipping processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-logistics-600 p-6 rounded-lg shadow-lg animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="mb-6 italic">"{testimonial.content}"</p>
              {/* <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-logistics-300">{testimonial.company}</p>
              </div> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/reviews" className="btn-secondary">
            View All Testimonials
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
