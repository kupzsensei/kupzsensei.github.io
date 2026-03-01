import { NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export const COLORS = {
  base: '#0A0A0F',
  cyan: '#00FFFF',
  magenta: '#FF00FF',
  blue: '#0066FF',
  green: '#39FF14',
  white: '#E0E0E0',
} as const;

export const BOOT_LINES = [
  'BIOS v3.7.2 — CYBERDECK SYSTEMS',
  'Initializing neural interface...',
  'Memory check: 32GB OK',
  'Loading kernel modules... [OK]',
  'Mounting encrypted filesystem... [OK]',
  'Establishing secure uplink...',
  'Syncing with mainframe... [OK]',
  'Decrypting portfolio data... [OK]',
  'All systems nominal. Welcome, Operator.',
];

export const MATRIX_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>{}[]=/\\|~^';
