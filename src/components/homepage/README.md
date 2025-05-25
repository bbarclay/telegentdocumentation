# Homepage Components

This directory contains the modular components for the homepage, organized to prevent breaking changes and make maintenance easier.

## Structure

```
homepage/
├── HeroSection.tsx     # Logo, title, description, and action buttons
├── FeatureCards.tsx    # Optional feature cards grid
├── HomePage.tsx        # Main container component
├── index.ts           # Clean exports
└── README.md          # This documentation
```

## Components

### `HeroSection`
Contains the main hero content:
- Telegent logo
- Main title with gradient
- Description text
- "Get Started" and "API Reference" buttons

**Safe to edit**: Text content, button links, styling

### `FeatureCards`
Optional feature cards section:
- Currently disabled by default
- Contains 3 cards: Tutorials, Solutions, Support
- Can be enabled via props

**Safe to edit**: Card content, links, icons, descriptions

### `HomePage`
Main container component that combines all sections:
- Handles layout and spacing
- Controls which sections are shown
- Manages responsive design

**Props:**
- `showFeatureCards?: boolean` - Enable/disable feature cards (default: false)

## Usage

### In page.tsx (current):
```tsx
import { HomePage } from "@/components/homepage";

export default function Home() {
  return <HomePage showFeatureCards={false} />;
}
```

### To enable feature cards:
```tsx
return <HomePage showFeatureCards={true} />;
```

### Individual components:
```tsx
import { HeroSection, FeatureCards } from "@/components/homepage";

// Use individually if needed
<HeroSection />
<FeatureCards enabled={true} />
```

## Benefits

1. **Safer editing**: Each section is isolated
2. **No more breaking**: Changes to one section don't affect others
3. **Easy toggling**: Enable/disable sections with props
4. **Reusable**: Components can be used elsewhere
5. **Type-safe**: Full TypeScript support
6. **Clean imports**: Organized export structure

## Best Practices

- Edit content in individual components, not in `page.tsx`
- Use props to control visibility rather than commenting out code
- Test changes in individual components before deploying
- Keep the main `page.tsx` file minimal and stable 