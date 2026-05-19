import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, Share2, Sparkles, Heart } from 'lucide-react';
import '../styles/footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Share2, href: '#', label: 'Social Share' },
    { icon: Sparkles, href: '#', label: 'Highlights' },
    { icon: Heart, href: '#', label: 'Favorites' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'Services',
      links: ['Memberships', 'Classes', 'Training', 'Nutrition'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Contact', 'FAQ'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="container">
          <motion.div
            className="footer-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h3 className="footer-title gradient-text">FitZone</h3>
              <p className="footer-description">
                Transform your body, transform your life. Join our community of fitness enthusiasts
                today.
              </p>

              <div className="contact-info">
                <motion.div
                  className="contact-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin size={18} />
                  <span>123 Fitness Street, NY 10001</span>
                </motion.div>
                <motion.div
                  className="contact-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone size={18} />
                  <span>+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  className="contact-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail size={18} />
                  <span>info@fitzone.com</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <motion.div key={section.title} className="footer-section" variants={itemVariants}>
                <h4 className="footer-subtitle">{section.title}</h4>
                <ul className="footer-links">
                  {section.links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5, color: '#ff1493' }}
                        transition={{ duration: 0.3 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h4 className="footer-subtitle">Newsletter</h4>
              <p className="footer-description">Subscribe to get exclusive offers and updates</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <motion.button
                  className="gradient-button newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            className="footer-bottom"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="footer-divider" />

            <div className="footer-bottom-content">
              <p className="footer-copyright">
                &copy; {currentYear} FitZone. All rights reserved.
              </p>

              <motion.div className="social-links">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      title={social.label}
                      className="social-link"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -3 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </footer>
  );
};
