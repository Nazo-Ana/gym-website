export interface GymContentItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  cta: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  alt: string;
  src: string;
  tag: string;
  description: string;
}

export const gymContent: GymContentItem[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    subtitle: 'Build power with precision',
    description:
      'Our strength programs combine expert coaching, progressive overload, and elite equipment to help you lift stronger every week.',
    highlights: ['Powerlifting', 'Olympic lifts', 'Strength cycles'],
    image:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=80',
    cta: 'Explore strength plans',
  },
  {
    id: 'recovery',
    title: 'Recovery & Mobility',
    subtitle: 'Move with comfort and confidence',
    description:
      'Discover sessions designed to reduce soreness, boost flexibility, and keep your body moving without limits.',
    highlights: ['Yoga flows', 'Foam rolling', 'Stretch routines'],
    image:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=80',
    cta: 'View recovery sessions',
  },
  {
    id: 'community',
    title: 'Performance Community',
    subtitle: 'Train with people who inspire',
    description:
      'Become part of a high-energy community that supports your progress with accountability, events, and weekly challenges.',
    highlights: ['Group events', 'Progress tracking', 'Member challenges'],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    cta: 'Join our community',
  },
];

export const galleryMedia: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Peak Performance Training',
    alt: 'Gym training session with athlete',
    src: 'https://images.unsplash.com/photo-1517964603305-7d6d7d58d62d?auto=format&fit=crop&w=1000&q=80',
    tag: 'Training',
    description: 'High-intensity training zones for targeted strength and endurance.',
  },
  {
    id: 'gallery-2',
    title: 'Elite Gym Floor',
    alt: 'Modern gym equipment and studio',
    src: 'https://images.unsplash.com/photo-1517902849641-5d6d97f7e17f?auto=format&fit=crop&w=1000&q=80',
    tag: 'Facility',
    description: 'Premium equipment and immersive training spaces designed for athletes.',
  },
  {
    id: 'gallery-3',
    title: 'Dynamic Group Sessions',
    alt: 'Group fitness class in gym',
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
    tag: 'Community',
    description: 'Instructor-led sessions that keep energy high and motivation even higher.',
  },
  {
    id: 'gallery-4',
    title: 'Recovery Retreat',
    alt: 'Stretching and mobility coaching',
    src: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1000&q=80',
    tag: 'Recovery',
    description: 'Relaxed recovery zone with premium mobility coaching and guided flow.',
  },
  {
    id: 'gallery-5',
    title: 'Neon Studio Energy',
    alt: 'Dark gym lit by neon lights',
    src: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1000&q=80',
    tag: 'Lifestyle',
    description: 'Bold visual style and premium lighting for every workout vibe.',
  },
];
