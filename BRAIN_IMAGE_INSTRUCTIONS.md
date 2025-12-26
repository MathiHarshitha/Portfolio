# Skills Section Layout

## Current Layout:
- **Left Side**: Your skills image (`skills image.png`) with animated particles
- **Center**: Interactive skills with tabs and circular arrangement
- **Right Side**: Animated brain visualization with orbiting tech icons

## Images Used:
1. **Skills Image**: `/skills image.png` (Left side)
2. **Brain Image**: Currently using placeholder with animated overlay (Right side)

## To add the brain image you uploaded:
1. Save your brain image as `brain-tech.jpg` in the `Portfolio/public/` folder
2. Update the Image src in `Portfolio/components/skills-section.tsx` on line ~200:

Change from:
```jsx
<Image
  src="/placeholder.svg"
  alt="AI Brain with Technology Icons"
  fill
  className="object-contain rounded-2xl opacity-80"
  priority
/>
```

To:
```jsx
<Image
  src="/brain-tech.jpg"
  alt="AI Brain with Technology Icons"
  fill
  className="object-contain rounded-2xl"
  priority
/>
```

## Current Features:
- ✅ Three-column layout with skills image on left
- ✅ Animated tabs that slide in after initial skills display
- ✅ Smooth skill reorganization when switching tabs
- ✅ Floating skill badges with hover effects
- ✅ Animated brain visualization with orbiting tech icons
- ✅ Responsive design for mobile and desktop
- ✅ Smooth scroll-triggered animations
- ✅ Floating particles on skills image