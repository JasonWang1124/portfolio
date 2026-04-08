'use client';

import { useEffect, useState } from 'react';
import ParticleCanvas from './ParticleCanvas';

export default function LazyParticles() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setShow(true));
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShow(true), 200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;
  return <ParticleCanvas />;
}
