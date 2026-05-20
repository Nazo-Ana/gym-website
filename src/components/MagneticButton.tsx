import { type MouseEvent as ReactMouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { gymContent, type GymContentItem } from '../data/assets';

interface MagneticButtonProps {
  text: string;
  contentId: string;
  className?: string;
}

const ContentDrawer = ({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: GymContentItem | null;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {open && item ? (
        <motion.div
          className="content-drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="content-drawer"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-image-wrapper">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="drawer-content">
              <span className="drawer-tag">Featured Program</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <button className="gradient-button drawer-cta" onClick={onClose}>
                {item.cta}
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export const MagneticButton = ({ text, contentId, className = '' }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<{ id: string; x: number; y: number }[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerItem, setDrawerItem] = useState<GymContentItem | null>(null);

  const selectedItem = useMemo(
    () => gymContent.find((item) => item.id === contentId) ?? null,
    [contentId]
  );

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMove = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxRadius = 50;

      if (distance < maxRadius) {
        const strength = 1 - distance / maxRadius;
        gsap.to(button, {
          x: dx * 0.16 * strength,
          y: dy * 0.16 * strength,
          duration: 0.25,
          ease: 'power3.out',
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.35,
          ease: 'power3.out',
        });
      }
    };

    const handleLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.35,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', handleMove);
    button.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      button.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rippleId = `ripple-${Date.now()}`;

    setRipples((prev) => [...prev, { id: rippleId, x, y }]);
    setIsSuccess(true);
    setDrawerOpen(true);
    setDrawerItem(selectedItem);

    window.setTimeout(() => setIsSuccess(false), 1400);
    window.setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== rippleId)), 700);
  };

  return (
    <>
      <button
        ref={buttonRef}
        className={`magnetic-button ${isSuccess ? 'success' : ''} ${className}`}
        onClick={handleClick}
        type="button"
      >
        {text}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </button>
      <ContentDrawer open={drawerOpen} item={drawerItem} onClose={() => setDrawerOpen(false)} />
    </>
  );
};
