import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/navigation.css';

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const drawerVariants = {
    hidden: { x: -400, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
    },
    exit: { x: -400, opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <nav className="navbar glassmorphic">
        <div className="container navbar-container">
          <motion.div
            className="navbar-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">💪 FitZone</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="nav-items">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="gradient-button join-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <motion.div
          className="drawer"
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="drawer-content">
            <h2 className="drawer-title gradient-text">FitZone</h2>
            <div className="drawer-items">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="drawer-link"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <motion.button
              className="gradient-button drawer-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsDrawerOpen(false)}
            >
              Join Now
            </motion.button>
          </div>
        </motion.div>
      )}

      {isDrawerOpen && (
        <motion.div
          className="drawer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
};
