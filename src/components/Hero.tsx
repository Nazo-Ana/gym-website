import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/hero.css';

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Simple fade-in animations without timeline
    const title = textRef.current.querySelector('.hero-title');
    const subtitle = textRef.current.querySelector('.hero-subtitle');
    const description = textRef.current.querySelector('.hero-description');
    const buttons = textRef.current.querySelector('.hero-buttons');
    const stats = textRef.current.querySelector('.hero-stats');

    if (title) {
      gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    if (subtitle) {
      gsap.from(subtitle, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });
    }

    if (description) {
      gsap.from(description, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });
    }

    if (buttons) {
      gsap.from(buttons, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });
    }

    if (stats) {
      gsap.from(stats, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
      });
    }

    // Floating animation
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero-content">
        <motion.div
          ref={textRef}
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-title"
            variants={itemVariants}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }}
          >
            <span className="gradient-text">
              Transform Your Body,
              <br />
              Transform Your Life
            </span>
          </motion.div>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Experience the ultimate fitness revolution with cutting-edge equipment,
            expert trainers, and an incredible community
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Join thousands of members who have already achieved their fitness goals.
            Get started today and unlock your true potential.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="gradient-button btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Classes Monthly</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image/Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="hero-image-container glassmorphic floating-element">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80"
              alt="Fitness Hero"
              className="hero-image"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow">⬇</div>
      </motion.div>
    </section>
  );
};
