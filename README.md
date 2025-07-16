# JFM Digital Works

> **Secure, Accessible Web Solutions**
> Modern web consultancy creating cloud-native, accessible, and secure digital experiences for clients in Ireland and the EU.

![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAF## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Install dependencies (`pnpm install`)
4. Make your changes and test locally (`pnpm run dev`)
5. Run quality checks:
   - `pnpm run lint` - Check for linting issues
   - `pnpm run build` - Verify TypeScript compilation
   - `pnpm run lighthouse` - Test performance
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Standards

- **TypeScript**: All components must be properly typed
- **Accessibility**: Follow WCAG guidelines
- **Performance**: Optimize for Core Web Vitals
- **Mobile-First**: Design for mobile devices first
- **Brand Consistency**: Use JFM brand colors and typography=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.3-06B6D4?style=flat-square&logo=tailwindcss)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/jamesfmcgrath/jfmdigitalworksv1.git

# Navigate to project directory
cd jfmdigitalworksv1

# Install dependencies (using pnpm)
pnpm install

# Start development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.1.6](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.7.3](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0.3](https://tailwindcss.com/)
- **Animations**: [AOS (Animate On Scroll) 3.0.0-beta.6](https://michalsnik.github.io/aos/)
- **Forms**: [Web3Forms API](https://web3forms.com/) integration
- **UI Components**: [Headless UI 2.2.0](https://headlessui.com/)
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## 📁 Project Structure

```
jfmdigitalworksv1/
├── app/
│   ├── (auth)/                 # Authentication pages
│   │   ├── layout.tsx
│   │   ├── signin/
│   │   ├── signup/
│   │   └── reset-password/
│   ├── (default)/              # Main application
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/                    # API routes
│   │   └── hello/
│   │       └── route.ts
│   ├── css/                    # Global styles
│   │   ├── style.css
│   │   ├── critical.css
│   │   ├── jfm-brand.css      # Brand-specific styles
│   │   └── additional-styles/
│   │       ├── custom-fonts.css
│   │       ├── theme.css
│   │       └── utility-patterns.css
│   ├── layout.tsx              # Root layout
│   ├── loading.tsx             # Global loading component
│   └── not-found.tsx           # 404 page
├── components/                 # React components
│   ├── ui/                     # UI components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── footer-logo.tsx
│   │   └── logo.tsx
│   ├── accordion.tsx
│   ├── banner.tsx
│   ├── business-categories.tsx
│   ├── case-studies.tsx
│   ├── client-only-components.tsx
│   ├── contact.tsx
│   ├── cta.tsx
│   ├── features-planet.tsx
│   ├── hero-home.tsx
│   ├── large-testimonial.tsx
│   ├── optimized-image.tsx
│   ├── page-illustration.tsx
│   ├── performance-monitor.tsx
│   ├── service-worker-registration.tsx
│   └── services.tsx
├── public/                     # Static assets
│   ├── images/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── logo-192.png
│   │   ├── logo-512.png
│   │   └── [other optimized images]
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── sw.js                   # Service worker
├── .gitignore
├── CHANGELOG.md
├── lighthouserc.json          # Lighthouse CI config
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## ✨ Features

### 🎨 **Design System**

- **Custom Brand Colors**: Professional blue-gray palette with JFM branding
- **Responsive Typography**: Mobile-first design with custom scaling
- **Brand Consistency**: Dedicated `jfm-brand.css` for brand-specific styles
- **Smooth Animations**: AOS library for scroll-triggered animations

### 🔒 **Security & Performance**

- **Environment Variables**: Secure API key management
- **Performance Optimized**: Next.js 15 optimizations, image formats (WebP/AVIF)
- **Bundle Optimization**: Package import optimization and compression
- **Contact Form Security**: Web3Forms integration with validation

### 📱 **User Experience**

- **Mobile-First Design**: Responsive across all devices
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Fast Loading**: Optimized images and lazy loading

## 🔧 Development

### Available Scripts

```bash
# Development with Turbopack
pnpm run dev

# Production build
pnpm run build

# Start production server
pnpm start

# Lint code
pnpm run lint

# Run Lighthouse audit
pnpm run lighthouse

# Run Lighthouse CI
pnpm run lighthouse:ci

# Security audit
pnpm run audit

# Bundle analysis
pnpm run analyze
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Web3Forms Configuration
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key

# Get your free access key from https://web3forms.com/
```

### Component Development

Components are organized by functionality:

- **UI Components** (`components/ui/`): Reusable UI elements (Header, Footer, Logo, Footer Logo)
- **Feature Components** (`components/`): Page-specific components including:
  - `hero-home.tsx` - Homepage hero section
  - `services.tsx` - Services showcase
  - `case-studies.tsx` - Client case studies
  - `contact.tsx` - Contact form
  - `features-planet.tsx` - Feature highlights
  - `business-categories.tsx` - Business category display
  - `large-testimonial.tsx` - Testimonial component
  - `cta.tsx` - Call-to-action sections
  - `banner.tsx` - Promotional banners
  - `accordion.tsx` - Collapsible content
- **Utility Components**:
  - `optimized-image.tsx` - Image optimization wrapper
  - `performance-monitor.tsx` - Performance tracking
  - `service-worker-registration.tsx` - PWA functionality
  - `client-only-components.tsx` - Client-side only components
- **Layout Components** (`app/`): App-wide layouts and page components

### Development Workflow

1. **Component Creation**: Create TypeScript components with proper typing
2. **Styling**: Use Tailwind CSS classes with custom JFM brand variables
3. **State Management**: Use React hooks for local state
4. **Form Handling**: Integrate with Web3Forms API for contact forms
5. **Performance**: Test components with Lighthouse CI
6. **Quality**: Run linting and type checking before commits

### Development Tools

- **Package Manager**: pnpm for fast, efficient dependency management
- **TypeScript**: Strict type checking for better code quality
- **Tailwind CSS**: Utility-first CSS framework with brand customization
- **Turbopack**: Fast bundler for development
- **Lighthouse CI**: Automated performance testing

## 🎨 Brand System

### Color Palette

```css
/* Primary Colors */
--color-jfm-primary: #1e293b; /* Slate 800 */
--color-jfm-secondary: #475569; /* Slate 600 */
--color-jfm-accent: #3b82f6; /* Blue 500 */

/* Background Colors */
--color-jfm-bg-primary: #ffffff;
--color-jfm-bg-secondary: #f8fafc;
--color-jfm-bg-accent: #f1f5f9;
```

### Typography

- **Primary Font**: Inter (sans-serif)
- **Monospace Font**: Roboto Mono
- **Responsive Scaling**: Custom CSS variables for mobile-first typography

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_WEB3FORMS_KEY`
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
pnpm run build

# Start production server
pnpm start
```

## 📊 Performance Optimizations

### 🚀 Lighthouse Scores

- **Performance**: 99/100 (Excellent)
- **Accessibility**: 96/100 (Very Good)
- **Best Practices**: 82/100 → 95/100 (Improved)
- **SEO**: 100/100 (Perfect)

### ⚡ Core Web Vitals

- **First Contentful Paint (FCP)**: 1.2s → <1.0s (Target)
- **Largest Contentful Paint (LCP)**: 1.9s → <1.5s (Target)
- **Speed Index**: 1.6s → <1.3s (Target)
- **Total Blocking Time (TBT)**: 144ms → <100ms (Target)
- **Cumulative Layout Shift (CLS)**: 0.005 (Excellent)

### 🔧 Performance Features

- **Next.js 15 Optimizations**: App Router, React Server Components, Turbopack
- **Image Optimization**: WebP/AVIF formats with lazy loading and 1-year cache
- **Bundle Optimization**: Package import optimization, code splitting
- **Gzip Compression**: Enabled for smaller file sizes
- **Security Headers**: CSP, HSTS, X-Frame-Options, X-Content-Type-Options
- **Service Worker**: Caching strategy for offline support
- **Critical CSS**: Above-the-fold styles inlined for faster rendering
- **Font Optimization**: Preloaded fonts with display: swap
- **Dynamic Loading**: Lazy loading for non-critical components
- **Performance Monitoring**: Real-time Core Web Vitals tracking

### 📈 Performance Monitoring

The project includes comprehensive performance monitoring:

```bash
# Run Lighthouse audit
pnpm run lighthouse

# Run Lighthouse CI for continuous monitoring
pnpm run lighthouse:ci

# Security audit
pnpm run audit

# Bundle analysis
pnpm run analyze
```

**Performance Configuration:**

- **Lighthouse CI**: Configured via `lighthouserc.json` for automated performance testing
- **Service Worker**: (`sw.js`) Implements caching strategies for offline support
- **Critical CSS**: (`critical.css`) Above-the-fold styles for faster rendering
- **Performance Monitor**: Real-time tracking component for Core Web Vitals

## � Testing & Quality Assurance

```bash
# Type checking (via build)
pnpm run build

# Linting
pnpm run lint

# Security audit
pnpm run audit

# Performance testing
pnpm run lighthouse

# Bundle analysis
pnpm run analyze
```

**Quality Gates:**

- **TypeScript**: Strict type checking with `strict: true`
- **ESLint**: Next.js recommended linting rules
- **Lighthouse CI**: Automated performance testing
- **Security Audits**: Regular dependency vulnerability checks

## �🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**James McGrath**
JFM Digital Works
Email: [Contact Form](https://jfmdigitalworks.com/#contact)
Website: [jfmdigitalworks.com](https://jfmdigitalworks.com)

## 📄 License

This project is proprietary software. All rights reserved.

---

**Built with ❤️ by JFM Digital Works**
_Secure, Accessible Web Solutions_
