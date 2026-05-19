import { motion } from 'framer-motion';
import { Dumbbell, Users, Heart, Zap } from 'lucide-react';
import '../styles/services.css';

export const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase your strength with our modern equipment.',
      color: '#ff1493',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join energetic group sessions led by certified instructors.',
      color: '#8a2be2',
    },
    {
      icon: Heart,
      title: 'Cardio Programs',
      description: 'Improve your cardiovascular health with diverse cardio options.',
      color: '#00d4ff',
    },
    {
      icon: Zap,
      title: 'HIIT Training',
      description: 'High-intensity workouts that deliver maximum results in minimal time.',
      color: '#ff69b4',
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive fitness solutions tailored to your goals
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="service-card glassmorphic"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="service-icon"
                  style={{ color: service.color }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Icon size={40} />
                </motion.div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <motion.button
                  className="service-link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More →
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
