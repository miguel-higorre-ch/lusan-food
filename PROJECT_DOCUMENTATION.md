# Lusan Food - Project Documentation

## Project Overview

Lusan Food is a food delivery landing page and ordering system for a local food business. The platform allows customers to browse the menu, add items to a cart, and place orders via WhatsApp.

**Tech Stack:**
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Lucide React (icons)
- Custom animated components

**Current Deployment:** Vercel (via GitHub integration)

---

## Current Features

### 1. Hero Section
- Animated flame logo with floating ember effects
- Call-to-action buttons for WhatsApp ordering and menu viewing
- Responsive design for mobile and desktop

### 2. Menu System
- Dynamic menu items loaded from `src/data.js`
- Product cards with images, descriptions, and pricing
- Support for product variants (different sizes/options)
- Add to cart functionality with visual feedback
- Image loading states and error handling

### 3. Shopping Cart
- Persistent cart (saved to localStorage)
- Quantity adjustment (increase/decrease)
- Item removal
- Real-time total calculation
- Customer name input (optional)
- Cart icon with item count badge

### 4. WhatsApp Integration
- Direct WhatsApp ordering for individual items
- Cart-based ordering with itemized list
- Automatic message generation with order details
- Phone number: 60341419

### 5. Value Propositions
- Three value cards: Entregas, Fresco, Delicioso
- 3D card animations on hover
- Gradient backgrounds and shadows

### 6. Testimonials
- Customer reviews with star ratings
- Responsive grid layout
- 3D card effects

### 7. Navigation
- Fixed header with scroll effects
- Smooth scroll to sections
- Mobile hamburger menu
- Floating cart button (when items in cart)

### 8. Footer
- Business information
- Operating hours (16:30 pm – 21:00 pm)
- Social media links (Facebook, Instagram, TikTok)
- Contact information

### 9. Animations & Visual Effects
- Custom FlameLogo component
- Ember particle effects
- AnimatedBorder component for buttons and cards
- Floating and glow animations
- Card 3D hover effects

---

## New Feature: Progressive Web App (PWA)

### Objective
Convert the existing Lusan Food website into a Progressive Web App (PWA) to provide a native app-like experience on mobile devices (Android and iOS) without the need for separate native app development.

### Rationale for PWA Approach

**Advantages:**
- **Cost-effective**: Leverages existing React codebase, no native development needed
- **Cross-platform**: Works on both Android and iOS devices
- **Automatic updates**: App updates when website is updated
- **No Play Store required**: Can be installed directly from the website
- **Faster development**: Implementation timeline in days vs. months for native app
- **Native-like experience**: Installable to home screen, full-screen mode, app icon
- **SEO benefits**: PWA scores better in search rankings
- **Smaller size**: Much smaller than native apps (cached resources only)

**Trade-offs:**
- Limited access to some device APIs (not needed for current features)
- iOS has some PWA limitations (acceptable for food ordering use case)

---

## PWA Requirements

### Functional Requirements

#### Phase 1 - MVP (Immediate)
1. **Web App Manifest**
   - Define app metadata (name, short name, description)
   - Specify app icon (192x192 and 512x512 pixels)
   - Set theme colors (background, primary)
   - Configure display mode (standalone for full-screen)
   - Define start URL

2. **Service Worker**
   - Cache critical assets (HTML, CSS, JS, images)
   - Enable offline menu viewing
   - Implement cache-first strategy for static assets
   - Network-first strategy for dynamic content (if any)
   - Handle service worker updates

3. **Install Experience**
   - Add "Install App" button in navigation/hero
   - Detect PWA installability
   - Show install prompt when appropriate
   - Handle install success/failure
   - Hide install button after installation

4. **App Shell Architecture**
   - Ensure fast initial load (app shell loads first)
   - Cache the app shell for instant subsequent loads
   - Progressive enhancement for content loading

5. **Mobile Optimization**
   - Add to home screen capability
   - Remove browser chrome in standalone mode
   - Handle viewport properly
   - Touch-friendly interactions

#### Phase 2 - Enhanced (Future)
1. **Push Notifications**
   - Order status updates
   - Promotional offers
   - Daily specials notifications
   - Permission handling

2. **Advanced Offline Features**
   - Offline order queuing (sync when online)
   - Offline cart management
   - Better offline UX indicators

3. **Performance Optimization**
   - Image optimization and lazy loading
   - Code splitting
   - Preloading critical resources

---

## Architecture

### Current Architecture

```
lusan-food/
├── public/
│   ├── images/
│   │   └── menu/          # Product images
│   └── index.html         # Entry HTML
├── src/
│   ├── components/
│   │   ├── AnimatedBorder.jsx
│   │   ├── Ember.jsx
│   │   ├── FlameLogo.jsx
│   │   └── TikTokIcon.jsx
│   ├── App.jsx            # Main application
│   ├── data.js            # Menu items, values, testimonials
│   └── main.jsx           # React entry point
├── index.html             # Vite entry
├── package.json
├── tailwind.config.js
└── vite.config.js
```

### Proposed PWA Architecture

```
lusan-food/
├── public/
│   ├── images/
│   │   └── menu/          # Product images
│   ├── icons/             # NEW: PWA icons
│   │   ├── icon-192x192.png
│   │   ├── icon-512x512.png
│   │   └── favicon.ico
│   ├── manifest.json      # NEW: Web app manifest
│   ├── sw.js              # NEW: Service worker
│   └── index.html         # Updated with PWA links
├── src/
│   ├── components/
│   │   ├── AnimatedBorder.jsx
│   │   ├── Ember.jsx
│   │   ├── FlameLogo.jsx
│   │   ├── TikTokIcon.jsx
│   │   └── InstallButton.jsx  # NEW: PWA install component
│   ├── hooks/
│   │   └── usePWAInstall.js   # NEW: PWA install hook
│   ├── App.jsx            # Updated with install button
│   ├── data.js            # Menu items, values, testimonials
│   └── main.jsx           # Updated to register service worker
├── index.html             # Updated with manifest link
├── package.json           # Updated with workbox plugin
├── tailwind.config.js
└── vite.config.js         # Updated with PWA plugin
```

### Technology Additions

**New Dependencies:**
- `vite-plugin-pwa` - Vite plugin for PWA generation
- `workbox-window` - Service worker registration and updates

**Configuration Files:**
- `manifest.json` - App metadata
- `sw.js` - Service worker (auto-generated by vite-plugin-pwa)
- Updated `vite.config.js` - PWA plugin configuration

---

## Implementation Plan

### Phase 1: PWA MVP (Days 1-3)

**Day 1: Setup & Configuration**
1. Install PWA dependencies
2. Configure vite-plugin-pwa
3. Create app icons (192x192 and 512x512)
4. Generate manifest.json
5. Update index.html with manifest link

**Day 2: Service Worker & Offline Support**
1. Configure service worker caching strategy
2. Test offline functionality
3. Verify app shell caching
4. Test service worker updates

**Day 3: Install Experience**
1. Create usePWAInstall hook
2. Build InstallButton component
3. Add install button to navigation/hero
4. Test install flow on Android device
5. Test standalone mode behavior
6. Verify full-screen experience

### Phase 2: Enhancements (Future)

**Push Notifications**
- Implement notification API
- Create notification permission flow
- Build notification system
- Test on Android devices

**Advanced Offline**
- Implement offline order queuing
- Add sync when online
- Better offline UI indicators

---

## Testing Strategy

### Device Testing
- Android Chrome (multiple versions)
- iOS Safari (multiple versions)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

### PWA-Specific Tests
- Installability check (Lighthouse)
- Offline functionality
- Service worker registration
- Cache performance
- App install flow
- Standalone mode behavior
- Push notifications (Phase 2)

### Performance Metrics
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.8s
- Cumulative Layout Shift (CLS) < 0.1

---

## Success Criteria

### Phase 1 Success
- [x] PWA passes Lighthouse PWA audit (score > 90)
- [x] App can be installed on Android devices
- [x] App can be installed on iOS devices
- [x] Menu works offline
- [x] Install button appears and functions correctly
- [x] Standalone mode removes browser chrome
- [x] Service worker updates properly
- [x] No breaking changes to existing functionality

### Phase 2 Success
- [ ] Push notifications work on Android
- [ ] Order status updates delivered
- [ ] Offline order queuing functional
- [ ] Sync works when connection restored

---

## Deployment Considerations

### Vercel Deployment
- Vercel supports PWA out of the box
- Service worker will be served correctly
- HTTPS is required (Vercel provides this)
- No additional configuration needed

### Build Process
```bash
npm run build
```
This will generate:
- `dist/` folder with PWA-ready assets
- `sw.js` service worker
- `manifest.json` (embedded or separate)
- Optimized assets

---

## Maintenance

### Updates
- Deploying new version updates the PWA automatically
- Service worker updates on next page load
- Users get new content seamlessly

### Monitoring
- Track PWA installs (if analytics added)
- Monitor service worker errors
- Check offline functionality periodically

---

## Prompt for Implementation

Below is a comprehensive prompt that can be used to implement the PWA feature:

---

**PROMPT START**

You are implementing Progressive Web App (PWA) functionality for the Lusan Food project, a React + Vite + Tailwind CSS food delivery website.

## Context
- Current project is a food ordering website with menu, cart, and WhatsApp integration
- Tech stack: React 18, Vite, Tailwind CSS, Lucide React
- Deployed on Vercel
- Current structure: public/images, src/components, src/App.jsx, src/data.js

## Task
Convert the existing website into a Progressive Web App (PWA) to provide native app-like experience on mobile devices (Android and iOS).

## Requirements

### 1. Install Dependencies
Install the following packages:
```bash
npm install -D vite-plugin-pwa workbox-window
```

### 2. Configure Vite for PWA
Update `vite.config.js` to include the PWA plugin with the following configuration:
- App name: "Lusan Food"
- Short name: "Lusan"
- Description: "Hecho para antojar - Comida rápida con sabor casero"
- Theme color: Matches the current flame/gold theme
- Background color: Dark (#000000 or similar)
- Display mode: standalone (full-screen, no browser chrome)
- Icons: 192x192 and 512x512
- RegisterType: autoUpdate
- Workbox strategy: CacheFirst for static assets
- Include: all JS, CSS, HTML, and image files

### 3. Create App Icons
Create PWA icons in `public/icons/`:
- icon-192x192.png (192x192 pixels)
- icon-512x512.png (512x512 pixels)
- Use the flame logo from FlameLogo component as base
- Colors: flame orange/gold gradient, dark background
- Style: Clean, modern, app-like

### 4. Update index.html
Add the following to index.html:
- Link to manifest.json (will be injected by plugin)
- Theme color meta tag
- Apple touch icon link
- Disable right-click context menu in standalone mode (optional)

### 5. Register Service Worker
Update `src/main.jsx` to:
- Import workbox-window
- Register the service worker
- Handle update events
- Show update notification when new version available

### 6. Create PWA Install Hook
Create `src/hooks/usePWAInstall.js`:
- Detect if PWA is installable (using window.addEventListener('beforeinstallprompt'))
- Store the install prompt event
- Return { isInstallable, promptInstall, isInstalled }
- Handle iOS Safari (different install flow)
- Track if already installed (using window.matchMedia('(display-mode: standalone)'))

### 7. Create Install Button Component
Create `src/components/InstallButton.jsx`:
- Use the usePWAInstall hook
- Button design: Gradient from-flameRed to-flameGold, matches existing CTA buttons
- Icon: Download or Install icon from lucide-react
- Text: "Instalar App" or "Instalar"
- Position: Add to navigation bar next to "Pedir ahora" button
- Responsive: Show on mobile, hide on desktop (or show on both)
- Hide if already installed or not installable
- Animation: Similar to existing buttons with hover effects

### 8. Update App.jsx
- Import and use InstallButton component
- Add to navigation bar (both desktop and mobile)
- Ensure it doesn't break existing layout
- Test responsive behavior

### 9. Update Navigation
Add "Instalar" button to:
- Desktop navigation (next to "Pedir ahora")
- Mobile menu (in the menu list)
- Optional: Add to hero section as secondary CTA

### 10. Testing
Test the following:
- PWA installability using Chrome DevTools Lighthouse
- Install flow on Android device
- Install flow on iOS device
- Offline menu viewing
- Service worker registration
- App shell caching
- Standalone mode (full-screen, no URL bar)
- Updates when new version deployed
- No breaking changes to existing features

### 11. Build and Verify
```bash
npm run build
npm run preview
```
Verify:
- dist/ folder contains PWA assets
- sw.js is generated
- manifest.json is properly configured
- Icons are included
- Build succeeds without errors

## Design Guidelines
- Match existing design system (flame orange/gold theme)
- Use existing button styles (gradient backgrounds, rounded-full, shadows)
- Maintain consistency with AnimatedBorder component
- Ensure responsive design works on all screen sizes
- Don't break existing functionality

## Success Criteria
- PWA passes Lighthouse PWA audit (score > 90)
- Install button appears and functions correctly
- App can be installed on Android and iOS
- Menu works offline
- Standalone mode removes browser chrome
- No breaking changes to existing features
- Build succeeds without errors

## Implementation Order
1. Install dependencies
2. Configure vite-plugin-pwa
3. Create app icons
4. Update vite.config.js
5. Update index.html
6. Create usePWAInstall hook
7. Create InstallButton component
8. Update App.jsx with install button
9. Test on devices
10. Build and verify

Please implement this step by step, testing each component before moving to the next. Ensure existing functionality remains intact.

**PROMPT END**

---

## Next Steps

1. Review and approve this documentation
2. Adjust requirements if needed
3. Begin Phase 1 implementation using the provided prompt
4. Test thoroughly on multiple devices
5. Deploy to Vercel
6. Monitor and gather user feedback
7. Plan Phase 2 enhancements based on feedback

---

## References

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Vite PWA Plugin](https://vite-plugin-pwa.netlify.app/)
- [Workbox Documentation](https://developers.google.com/web/tools/workbox)
- [Lighthouse PWA Criteria](https://web.dev/lighthouse-pwa/)
