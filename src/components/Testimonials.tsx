import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import '../styles/testimonials.css';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Marketing Executive',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      rating: 5,
      text: 'FitZone completely transformed my fitness journey. The trainers are incredibly supportive and the community is amazing!',
    },
    {
      name: 'Sarah Williams',
      role: 'Fitness Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      rating: 5,
      text: 'Best gym I\'ve ever been to. The equipment is top-notch and the classes are so engaging. Highly recommended!',
    },
    {
      name: 'Mike Chen',
      role: 'Professional Athlete',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
      rating: 5,
      text: 'As an athlete, I need serious training. FitZone delivers everything I need. Exceptional facility and staff.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">What Our Members Say</h2>
          <p className="section-subtitle">
            Real stories from real people who transformed their lives
          </p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card glassmorphic"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>

              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={18} fill="#ffb84d" color="#ffb84d" />
                  </motion.div>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
