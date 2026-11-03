# HealGain Landing Page

> Content note: the testimonials and case scenarios are illustrative samples, not real client results. Replace them with real, approved material before going live. The booking form is a sample and sends nothing.

A high-converting, animated landing page for HealGain - an outbound marketing agency that builds scalable outbound engines for tech startups, agencies, and B2B companies.

## 🚀 Features

- **Modern Design**: Apple-level aesthetics with gradient color schemes
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Animated**: Engaging animations and micro-interactions
- **Clear offer**: one page, one booking call to action
- **Performance**: Built with Next.js for optimal loading speeds
- **Accessible basics**: labelled form fields, visible focus states and a reduced-motion rule (not audited against WCAG)

## 🎨 Design System

### Color Palette
- **Primary Gradient**: `#4985DE` → `#A9CBFF`
- **Secondary Gradient**: `#C0A5EF` → `#E3DBFF`
- **Background**: White with gradient overlays
- **Text**: Professional gray scale hierarchy

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear heading structure with proper line spacing
- **Responsive**: Scales appropriately across devices

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (static export), React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Custom CSS animations + Tailwind utilities

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.0 or higher
- **npm**: Version 7.0 or higher (comes with Node.js)
- **Git**: For version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd healgain-landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
healgain-landing/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   ├── not-found.tsx        # The 404 page
│   ├── page.tsx             # Main landing page component
│   └── privacy/page.tsx     # Privacy page
├── public/
│   ├── healgain logo.svg    # Company logo
│   └── HealGain Text.svg    # Company text logo
├── eslint.config.mjs        # ESLint flat config (npm run lint)
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## 🎯 Key Components

### Hero Section
- Animated logo with glow effects
- Typewriter-style headlines
- A "What you get" card
- Dual CTA buttons

### Interactive Elements
- Rotating testimonials carousel
- Comparison table
- FAQ list
- Process steps with icons
- Hover effects on cards

### Conversion Features
- Multiple strategic CTAs
- Sample testimonials and sample case scenarios, labelled as illustrative
- A sample booking form that sends and stores nothing
- A privacy page

## 🌍 Target Audience

Tech startups and SaaS founders, agencies, remote B2B companies with long sales cycles, and SDR teams, as written on the page.

## 🎨 Customization

### Colors
Update the gradient colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#4985DE',
    light: '#A9CBFF'
  },
  secondary: {
    DEFAULT: '#C0A5EF',
    light: '#E3DBFF'
  }
}
```

### Content
Main content is in `app/page.tsx`. Update:
- Headlines and copy
- Testimonials
- Case studies
- Contact information

### Animations
Custom animations are defined in `app/globals.css`:
- `animate-fade-in-up`
- `animate-float`
- `animate-glow`
- `btn-pulse`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables
No environment variables required for basic setup.

### Next.js Configuration
The app is configured for static export in `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};
```

## 🚀 Deployment

### Static Export
```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Deployment Platforms
- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Upload the `out/` folder contents

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run dev
   ```

2. **TypeScript Errors**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

3. **Styling Issues**
   ```bash
   # Rebuild Tailwind
   npm run build
   ```

### Performance Optimization

- Images are optimized for web
- CSS is purged in production
- JavaScript is minified and tree-shaken
- Fonts are preloaded

## 📊 Analytics & Tracking

To add analytics:

1. **Google Analytics**: Add tracking code to `app/layout.tsx`
2. **Conversion Tracking**: Add event handlers to CTA buttons
3. **Heat Maps**: Integrate tools like Hotjar or Crazy Egg

## 🔒 Security

- No sensitive data exposed
- Static site generation for security
- HTTPS recommended for production
- Regular dependency updates

## 📈 Performance Metrics

Target metrics:
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to HealGain. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: [your-email@healgain.com]
- **Documentation**: This README
- **Issues**: Create GitHub issues for bugs

## 🔄 Updates

### Version History
- **v1.0.0**: Initial landing page with animations
- **v1.1.0**: Enhanced mobile responsiveness
- **v1.2.0**: Added conversion tracking

### Maintenance
- Regular dependency updates
- Performance monitoring
- A/B testing for conversion optimization

---

**Built with ❤️ for HealGain by [Your Development Team]**