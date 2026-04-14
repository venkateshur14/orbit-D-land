

## Orbital Learn — Black Landing Page with Video Background

### Hero Section (Full viewport)
- **Fixed background video** using the Mux HLS stream (`hls.js` for playback), autoplaying, muted, looped
- Dark overlay on the video for text readability
- Large "ORBITAL LEARN" headline with a subtle tagline (e.g., "The future of learning")
- Scroll indicator (animated down arrow)

### Scroll Animation — Text Slides Over Video
- The video stays fixed in place as the user scrolls
- Content sections slide up over the video with smooth fade-in-on-scroll animations using Intersection Observer
- Black opaque backgrounds on each section so they cover the video as they scroll into view

### Content Sections (scrolling over video)
1. **Mission / Value Prop** — Short statement about what Orbital Learn does
2. **Features** — 3 key features in a grid (icons + short descriptions)
3. **Call to Action** — "Get Started" / "Join Now" section with a button
4. **Footer** — Minimal footer with links

### Design
- All-black theme with white text, subtle gray accents
- Clean, modern typography
- Smooth scroll-triggered animations (fade + slide up)

### Technical
- Add `hls.js` dependency for Mux HLS video playback
- Create reusable scroll animation hook with Intersection Observer
- All on the index route as a single-page landing

