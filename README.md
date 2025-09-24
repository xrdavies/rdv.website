# Rebase D. Ventures

Website of Rebase D. Ventures built with VitePress.

🌐 **Live Site**: https://rebased.ventures

## Tech Stack

- **VitePress** - Modern static site generator
- **Vue 3** - Progressive JavaScript framework
- **Node.js 20+** - JavaScript runtime
- **GitHub Actions** - Automated deployment

## Development

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5174/`

### Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── .vitepress/
│   ├── config.js          # VitePress configuration
│   ├── theme/             # Custom theme
│   │   ├── Layout.vue     # Main layout component
│   │   ├── components/    # Vue components
│   │   └── style.css      # Custom styles
│   └── data/
│       └── content.js     # Site content data
├── assets/                # Static assets (images, fonts, CSS)
├── public/                # Public assets
└── index.md              # Main page content
```

## Adding New Projects

To add a new project to the Portfolios section:

1. Add the project logo to `/assets/images/projects/`
2. Edit `.vitepress/data/content.js` and add to the `projects.list` array:

```javascript
{
  title: 'Project Name',
  image: '/assets/images/projects/logo-project.png',
  desc: 'Project description...',
  href: 'https://project-website.com/'
}
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `master` branch.

### Manual Deployment
```bash
npm run build
# Upload .vitepress/dist/ contents to your web server
```

## Migration Notes

This site was migrated from Jekyll to VitePress. The original Jekyll files are preserved in the git history. The VitePress version maintains visual parity with the original while providing better performance and modern tooling.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

2024 © Rebase D. Ventures all rights reserved.
