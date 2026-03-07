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
