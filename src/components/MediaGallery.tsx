import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { galleryMedia } from '../data/assets';

gsap.registerPlugin(ScrollTrigger);

export const MediaGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMedia, setSelectedMedia] = useState(galleryMedia[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.gallery-card');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 70,
          clipPath: 'inset(20% 0 20% 0 round 30px)',
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0 0 round 30px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const title = container.querySelector('.gallery-heading');
    if (title) {
      gsap.from(title, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 95%',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleOpen = (mediaId: string) => {
    const chosen = galleryMedia.find((item) => item.id === mediaId);
    if (chosen) {
      setSelectedMedia(chosen);
      setIsOpen(true);
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-heading-wrapper">
          <p className="section-label">Media Showcase</p>
          <h2 className="gallery-heading">Immersive gym visuals that inspire every workout.</h2>
        </div>

        <div className="gallery-scroll" ref={containerRef}>
          {galleryMedia.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-card"
              layoutId={item.id}
              whileHover={{ y: -10, scale: 1.01 }}
              onClick={() => handleOpen(item.id)}
            >
              <div className="gallery-image-wrapper">
                <img src={`${item.src}`} alt={item.alt} loading="lazy" />
                <div className="glass-overlay">
                  <span className="gallery-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="lightbox-image"
                layoutId={selectedMedia.id}
                loading="lazy"
              />
              <div className="lightbox-details">
                <span className="gallery-tag">{selectedMedia.tag}</span>
                <h3>{selectedMedia.title}</h3>
                <p>{selectedMedia.description}</p>
                <button className="gradient-button drawer-cta" onClick={() => setIsOpen(false)}>
                  Close Gallery
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};
