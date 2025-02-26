'use client';
import Scene from '@/components/Scene';
import styles from './page.module.css';

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Scene />
    </main>
  );
}

// Metadata needs to be in a separate file for client components
// or in the layout.tsx file
