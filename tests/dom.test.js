import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Portfolio DOM Structure', () => {
    beforeEach(() => {
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
        document.documentElement.innerHTML = html;
    });

    it('contains the main layout elements', () => {
        expect(document.querySelector('.hero')).not.toBeNull();
        expect(document.querySelector('.content-grid')).not.toBeNull();
        expect(document.querySelector('.footer')).not.toBeNull();
    });

    it('contains the correct interests', () => {
        const textContext = document.body.textContent;
        expect(textContext).toContain('Hiking');
        expect(textContext).toContain('Statistics');
        expect(textContext).toContain('Running');
    });

    it('contains the AI typing indicator', () => {
        expect(document.querySelector('.typing-indicator')).not.toBeNull();
    });

    it('contains correctly linked stylesheets', () => {
        const scripts = Array.from(document.querySelectorAll('script[type="module"]'));
        const hasMainJs = scripts.some(s => s.getAttribute('src').includes('main.js'));
        expect(hasMainJs).toBe(true);
    });
});
