# Web Design Guidelines and Deployment Setup

## Local Development and Testing

If you want to view or test the portfolio locally before pushing to GitHub:

1. **Install Dependencies**: Run `npm install` (or `mise run npm install` if using mise).
2. **Start Development Server**: Run `npm run dev`. This will start a local Vite server (usually at `http://localhost:5173`).
3. **Run Automated Tests**: The portfolio includes Vitest setup for DOM checks. Run `npm run test` to verify the structure.
4. **Preview Production Build**: To see how the built site will look run `npm run build` and then `npm run preview`.

---

## GitHub Pages Deployment Setup

To enable automatic deployment of this portfolio to GitHub Pages via GitHub Actions, please follow these steps in your GitHub repository settings:

1. **Push your code to GitHub**: Make sure this repository is pushed to a GitHub remote repository.
2. **Go to Repository Settings**: In your GitHub repository, navigate to the **Settings** tab.
3. **Navigate to Pages**: In the left sidebar, click on **Pages** under the "Code and automation" section.
4. **Change the Build and Deployment Source**:
   - Under the **Build and deployment** section, look for the **Source** dropdown.
   - Change the source from "Deploy from a branch" to **"GitHub Actions"**.
5. **Verify Actions Permissions**:
   - Go to **Settings > Actions > General**.
   - Under **Workflow permissions**, ensure that **"Read and write permissions"** is selected.
   - Click **Save** if you made changes.

Once these settings are configured, every push to the `main` branch will automatically trigger the `.github/workflows/deploy.yml` action, which will build the project and deploy the `dist` folder to GitHub Pages.

**Note on Repository Name:**
If your repository is named something other than `[username].github.io` (for example, `portofolio`), your site will be hosted at `https://[username].github.io/portofolio/`. The `vite.config.js` is already configured with `base: './'` to handle relative asset paths correctly.
