import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Portfolio UI/UX Improvements', () => {
    beforeEach(() => {
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
        document.documentElement.innerHTML = html;
        // Reset localStorage
        localStorage.clear();
    });

    it('contains theme and language toggle buttons', () => {
        expect(document.getElementById('theme-toggle')).not.toBeNull();
        expect(document.getElementById('lang-toggle')).not.toBeNull();
    });

    it('contains the favicon in the head', () => {
        const favicon = document.querySelector('link[rel="icon"]');
        expect(favicon).not.toBeNull();
        expect(favicon.getAttribute('href')).toContain('favicon');
    });

    it('has non-interactive class on the In-house Dev card', () => {
        const cards = Array.from(document.querySelectorAll('.project-card'));
        const inHouseCard = cards.find(card => card.tagName.toLowerCase() === 'article');
        expect(inHouseCard).toBeDefined();
        if (inHouseCard) {
            expect(inHouseCard.classList.contains('non-interactive')).toBe(true);
        }
    });

    it('contains data-i18n attributes on important text elements', () => {
        const i18nElements = document.querySelectorAll('[data-i18n]');
        expect(i18nElements.length).toBeGreaterThan(0);
    });

    it('skips the typing indicator rendering', () => {
        expect(document.querySelector('.typing-indicator')).toBeNull();
    });
});
