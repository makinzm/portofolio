# Timeline

- **2026-03-07**: Started task for UI/UX improvements. Analyzed `style.css`, `index.html`, and `main.js`. Created new branch `feature/ui-ux-improvements`. Noticed `vitest` and `jsdom` setup exist with `tests/dom.test.js`.

- **2026-03-07**: Wrote UI/UX tests for new features. Ran `npm run test` which failed as expected because the features are not yet implemented. Here are the expected failures:
```
 FAIL  tests/ui-ux.test.js > Portfolio UI/UX Improvements > contains theme and language toggle buttons
 FAIL  tests/ui-ux.test.js > Portfolio UI/UX Improvements > contains the favicon in the head
 FAIL  tests/ui-ux.test.js > Portfolio UI/UX Improvements > has non-interactive class on the In-house Dev card
 FAIL  tests/ui-ux.test.js > Portfolio UI/UX Improvements > contains data-i18n attributes on important text elements
 FAIL  tests/ui-ux.test.js > Portfolio UI/UX Improvements > skips the typing indicator rendering
```

- **2026-03-07**: Implementation complete. Refactored HTML structure to adopt i18n patterns. Set up JS logic to seamlessly switch modes and languages. Fixed CSS syntax errors introduced and re-ran tests. 
- **2026-03-07**: Confirmed all (8) tests pass cleanly. Changes committed to `feature/ui-ux-improvements`.

- **2026-03-07**: Implemented UX polish based on user feedback. 
  - Restored proper contrast between page background and elements using distinct `--color-surface` and `--color-image-placeholder` variables.
  - Adjusted `--color-surface` and `--color-image-placeholder` in both dark and light themes.
  - Initialized standard preferences (`window.matchMedia` and `navigator.language`) instead of hardcoding 'en' and 'light'.
  - Added `.non-interactive` to "Statistics" and "Futsal" and removed the hardcoded `background` inline style from the X button block in the footer, introducing a responsive `.btn-dark` class.
- **2026-03-07**: Wrote failing regression tests prior to logic execution. Fixed logic and re-ran tests mapping to 100% stable green passes. Committed refinements to git.
