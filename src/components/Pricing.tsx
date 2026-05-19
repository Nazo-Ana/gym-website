import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import '../styles/pricing.css';

export const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for beginners',
      features: [
        'Gym access',
        'Basic equipment',
        '10 group classes',
        'Locker facility',
        'Mobile app access',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$59',
      period: '/month',
      description: 'Most popular choice',
      features: [
        'Full gym access 24/7',
        'All equipment access',
        'Unlimited group classes',
        'Personal trainer session',
        'Nutrition guidance',
        'Priority support',
        'Mobile app access',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: '$99',
      period: '/month',
      description: 'For serious athletes',
      features: [
        'Everything in Pro',
        'Dedicated personal trainer',
        'Custom meal plans',
        'Recovery programs',
        'Body composition analysis',
        'VIP lounge access',
        'Video coaching sessions',
      ],
      highlighted: false,
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
    <section id="pricing" className="pricing">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Flexible Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the perfect plan that fits your fitness journey
          </p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {plan.highlighted && (
                <div className="popular-badge">Most Popular</div>
              )}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="price-section">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <motion.button
                className="gradient-button plan-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>

              <div className="features-list">
                {plan.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="feature-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Check size={20} className="feature-icon" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="pricing-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>All plans include free 7-day trial • Cancel anytime • No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
};
