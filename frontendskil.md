# Frontend Design System Guide
## Maintaining Consistency Across Your App + Liquid Glass Implementation

Based on the Anthropic frontend-design skill, this guide shows you how to apply distinctive, intentional design choices across your entire codebase while maintaining visual consistency—plus a deep dive into liquid glass design.

---

## Part 1: Design System Foundation

### 1.1 Ground It in the Subject

Before building components, define what your app is:

```javascript
// designSystem.ts - Your north star
export const DESIGN_BRIEF = {
  subject: "Your App Name",
  audience: "Target users",
  primaryJob: "What does this app do in one sentence?",
  personality: "Tone: modern, minimal, playful, elegant, etc.",
  aestheticRisks: ["Risk 1: What's unique about this design?"]
};
```

**Example for Shala (school directory):**
```javascript
export const DESIGN_BRIEF = {
  subject: "Shala - Indian School Search Directory",
  audience: "Parents and educators looking for schools",
  primaryJob: "Make school discovery fast, visual, and trustworthy",
  personality: "Modern, accessible, data-forward yet human",
  aestheticRisks: ["Bento grids as organizational language", "Micro-animations revealing data gradually"]
};
```

### 1.2 Create a Design Token System

This is **the single source of truth** for all visual decisions:

```typescript
// tokens/colors.ts
export const colorTokens = {
  // Base palette (4-6 named colors)
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    500: "#0ea5e9",
    900: "#0c2d4a",
  },
  secondary: {
    50: "#f8f6f1",
    500: "#d97706",
    900: "#5a3a1a",
  },
  neutral: {
    0: "#ffffff",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  accent: {
    glass: "rgba(255, 255, 255, 0.1)", // For glassmorphism
    glassStrong: "rgba(255, 255, 255, 0.2)",
  },
  semantic: {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  }
};

// tokens/typography.ts
export const typeScale = {
  // Display (use sparingly)
  display: {
    lg: { size: "3.5rem", weight: 700, lineHeight: 1.1, family: "GeistDisplay" },
    md: { size: "2.5rem", weight: 700, lineHeight: 1.2, family: "GeistDisplay" },
    sm: { size: "1.875rem", weight: 600, lineHeight: 1.3, family: "GeistDisplay" },
  },
  // Heading
  heading: {
    h1: { size: "2rem", weight: 600, lineHeight: 1.3, family: "GeistSans" },
    h2: { size: "1.5rem", weight: 600, lineHeight: 1.4, family: "GeistSans" },
    h3: { size: "1.25rem", weight: 600, lineHeight: 1.4, family: "GeistSans" },
    h4: { size: "1rem", weight: 600, lineHeight: 1.5, family: "GeistSans" },
  },
  // Body (neutral, readable)
  body: {
    lg: { size: "1.125rem", weight: 400, lineHeight: 1.7, family: "InterVariable" },
    md: { size: "1rem", weight: 400, lineHeight: 1.6, family: "InterVariable" },
    sm: { size: "0.875rem", weight: 400, lineHeight: 1.5, family: "InterVariable" },
    xs: { size: "0.75rem", weight: 400, lineHeight: 1.5, family: "InterVariable" },
  },
  // Utility (data, captions)
  utility: {
    mono: { size: "0.875rem", weight: 500, lineHeight: 1.5, family: "MonoMono" },
    label: { size: "0.75rem", weight: 600, lineHeight: 1.4, family: "InterVariable" },
  }
};

// tokens/spacing.ts
export const spacingScale = {
  0: "0",
  1: "0.25rem",   // 4px
  2: "0.5rem",    // 8px
  3: "0.75rem",   // 12px
  4: "1rem",      // 16px
  6: "1.5rem",    // 24px
  8: "2rem",      // 32px
  12: "3rem",     // 48px
  16: "4rem",     // 64px
};

// tokens/shadows.ts
export const shadows = {
  none: "none",
  xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", // For glassmorphism
};

// tokens/index.ts - Export everything
export { colorTokens, typeScale, spacingScale, shadows };
```

### 1.3 Create a Component Token Mapping

Map tokens to actual components:

```typescript
// tokens/componentTokens.ts
export const componentTokens = {
  button: {
    primary: {
      bg: colorTokens.primary[500],
      text: colorTokens.neutral[0],
      hover: colorTokens.primary[600],
      disabled: colorTokens.neutral[300],
    },
    secondary: {
      bg: colorTokens.secondary[500],
      text: colorTokens.neutral[0],
      hover: colorTokens.secondary[600],
    },
  },
  card: {
    bg: colorTokens.neutral[0],
    border: colorTokens.neutral[200],
    shadow: shadows.md,
    borderRadius: "12px",
    padding: spacingScale[6],
  },
  glassCard: {
    bg: colorTokens.accent.glass,
    backdropBlur: "12px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    shadow: shadows.glass,
    borderRadius: "20px",
  },
  input: {
    bg: colorTokens.neutral[50],
    border: colorTokens.neutral[200],
    text: colorTokens.neutral[900],
    placeholder: colorTokens.neutral[400],
    focus: colorTokens.primary[500],
  }
};
```

---

## Part 2: Building Consistent Components

### 2.1 Create a Component Base Layer

```typescript
// components/base/BaseComponent.tsx
import { colorTokens, spacingScale, typeScale } from "@/tokens";

interface BaseComponentProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
}

// Every component derives from tokens, never hardcodes colors
export const Button: React.FC<BaseComponentProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
}) => {
  const tokenMap = {
    primary: colorTokens.primary[500],
    secondary: colorTokens.secondary[500],
    tertiary: colorTokens.neutral[200],
  };

  const sizeMap = {
    sm: spacingScale[3],
    md: spacingScale[4],
    lg: spacingScale[6],
  };

  return (
    <button
      className={className}
      style={{
        backgroundColor: tokenMap[variant],
        padding: sizeMap[size],
        fontSize: typeScale.body.md.size,
        fontWeight: typeScale.heading.h4.weight,
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </button>
  );
};
```

### 2.2 Tailwind Config with Token System

If using Tailwind, sync it with your tokens:

```javascript
// tailwind.config.ts
import { colorTokens, spacingScale } from "@/tokens";

export default {
  theme: {
    colors: {
      primary: colorTokens.primary,
      secondary: colorTokens.secondary,
      neutral: colorTokens.neutral,
      glass: colorTokens.accent.glass,
      semantic: colorTokens.semantic,
    },
    spacing: spacingScale,
    fontFamily: {
      display: ["GeistDisplay", "sans-serif"],
      sans: ["InterVariable", "sans-serif"],
      mono: ["MonoMono", "monospace"],
    },
    boxShadow: {
      xs: shadows.xs,
      sm: shadows.sm,
      md: shadows.md,
      lg: shadows.lg,
      xl: shadows.xl,
      glass: shadows.glass,
    },
    extend: {
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "20px",
      },
    },
  },
};
```

---

## Part 3: Liquid Glass Design (Glassmorphism)

Liquid glass (glassmorphism) is an aesthetic that combines:
- **Frosted glass effect** via backdrop blur
- **Translucent color** with low opacity
- **Subtle borders** with semi-transparent white
- **Soft shadows** that suggest depth
- **Smooth, rounded corners** for elegance

### 3.1 The Math Behind Liquid Glass

```typescript
// styles/glassmorphism.ts
export const liquidGlassStyle = {
  // The foundation: frosted glass backdrop
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255, 255, 255, 0.1)", // 10% opacity white
  
  // Subtle border creates dimension
  border: "1px solid rgba(255, 255, 255, 0.2)", // 20% opacity white border
  
  // Shadow gives depth without harshness
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  
  // Soft rounded corners (not extreme)
  borderRadius: "20px",
};

export const liquidGlassVariants = {
  // Light theme glass
  light: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(10px)",
  },
  
  // Strong (more opaque)
  strong: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(15px)",
  },
  
  // Subtle (barely there)
  subtle: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(8px)",
  },
  
  // Dark theme glass (use darker background)
  dark: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
  },
};
```

### 3.2 Liquid Glass Component

```typescript
// components/LiquidGlassCard.tsx
import { ReactNode } from "react";
import { liquidGlassStyle, liquidGlassVariants } from "@/styles/glassmorphism";

interface LiquidGlassCardProps {
  children: ReactNode;
  variant?: "light" | "strong" | "subtle" | "dark";
  className?: string;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  variant = "light",
  className = "",
}) => {
  const glassStyle = liquidGlassVariants[variant];

  return (
    <div
      className={`relative overflow-hidden rounded-[20px] p-6 ${className}`}
      style={{
        ...glassStyle,
        // Ensure backdrop filter applies
        WebkitBackdropFilter: glassStyle.backdropFilter,
      }}
    >
      {children}
    </div>
  );
};

// Usage example:
// <LiquidGlassCard variant="light" className="w-full">
//   <h3>Your Content Here</h3>
// </LiquidGlassCard>
```

### 3.3 Animated Liquid Glass Elements

Add micro-animations to liquid glass for depth:

```typescript
// components/AnimatedLiquidGlass.tsx
import { motion } from "framer-motion";
import { liquidGlassVariants } from "@/styles/glassmorphism";

export const AnimatedLiquidGlass = ({ children, variant = "light" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }} // Subtle lift on hover
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        ...liquidGlassVariants[variant],
        WebkitBackdropFilter: liquidGlassVariants[variant].backdropFilter,
      }}
      className="rounded-[20px] p-6"
    >
      {children}
    </motion.div>
  );
};

// Or with gradient overlay:
export const GradientLiquidGlass = ({ children, variant = "light" }) => {
  return (
    <motion.div
      style={{
        ...liquidGlassVariants[variant],
        WebkitBackdropFilter: liquidGlassVariants[variant].backdropFilter,
        background: `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.15) 0%, 
          rgba(255, 255, 255, 0.05) 100%),
          ${liquidGlassVariants[variant].backgroundColor}`,
      }}
      className="rounded-[20px] p-6"
    >
      {children}
    </motion.div>
  );
};
```

### 3.4 Liquid Glass with Real Content

```typescript
// components/LiquidGlassSection.tsx
export const LiquidGlassSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <LiquidGlassCard variant="light" className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">
          Liquid Glass Design
        </h2>
        <p className="text-white/80 mb-6">
          This card uses frosted glass effects with backdrop blur, semi-transparent colors,
          and subtle borders to create a modern, elegant appearance.
        </p>
        
        {/* Nested glass cards */}
        <div className="grid gap-4 mt-6">
          {[1, 2, 3].map((i) => (
            <LiquidGlassCard 
              key={i} 
              variant="subtle" 
              className="p-4"
            >
              <div className="text-white/70">Feature {i}</div>
            </LiquidGlassCard>
          ))}
        </div>
      </LiquidGlassCard>
    </div>
  );
};
```

---

## Part 4: Maintaining Consistency Across Your Codebase

### 4.1 Component Checklist

Every component should answer these questions:

```typescript
// components/[Component]/ComponentChecklist.ts
/**
 * Component: [Name]
 * 
 * CONSISTENCY CHECK:
 * ✓ Uses only tokens from @/tokens - no hardcoded colors
 * ✓ Follows typeScale for all text
 * ✓ Uses spacingScale for padding/margin
 * ✓ Respects design brief personality
 * ✓ Has variant system (primary/secondary/tertiary OR light/dark/glass)
 * ✓ Responds to theme/dark mode if applicable
 * ✓ Mobile-first responsive (tested at 375px+)
 * ✓ Keyboard accessible (focus visible, logical tab order)
 * ✓ Reduced motion respected (prefers-reduced-motion)
 * ✓ Error states clearly defined
 * ✓ Loading states show progress
 * ✓ Hover/active states match token system
 */
```

### 4.2 Style Layer Organization

```
src/
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── shadows.ts
│   └── componentTokens.ts
├── styles/
│   ├── glassmorphism.ts
│   ├── animations.ts
│   ├── responsive.ts
│   └── theme.css
├── components/
│   ├── base/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Typography.tsx
│   ├── compound/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── FeatureSection.tsx
│       └── LiquidGlassSection.tsx
```

### 4.3 Enforcing Consistency with ESLint

```javascript
// .eslintrc.json
{
  "rules": {
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.property.name='css']",
        "message": "Do not use inline CSS. Use token system instead."
      }
    ]
  }
}
```

Or create a custom rule to warn on hardcoded colors:

```typescript
// lint/hardcoded-colors.js
module.exports = {
  rules: {
    "no-hardcoded-colors": {
      meta: { type: "problem", docs: { description: "Use color tokens instead of hardcoded hex" } },
      create(context) {
        return {
          Literal(node) {
            const regex = /#[0-9a-f]{3,6}/i;
            if (regex.test(node.value)) {
              context.report({
                node,
                message: `Hardcoded color ${node.value}. Use colorTokens instead.`
              });
            }
          }
        };
      }
    }
  }
};
```

---

## Part 5: Typography Consistency

### 5.1 Typographic Hierarchy

```typescript
// components/Typography.tsx
export const Display = ({ children }: { children: ReactNode }) => (
  <h1 style={{ ...typeScale.display.lg, fontFamily: "GeistDisplay" }}>
    {children}
  </h1>
);

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1 style={{ ...typeScale.heading.h1 }}>
    {children}
  </h1>
);

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 style={{ ...typeScale.heading.h2 }}>
    {children}
  </h2>
);

export const Body = ({ children, size = "md" }: { children: ReactNode; size?: "lg" | "md" | "sm" | "xs" }) => (
  <p style={{ ...typeScale.body[size], color: colorTokens.neutral[700] }}>
    {children}
  </p>
);

export const Label = ({ children }: { children: ReactNode }) => (
  <label style={{ ...typeScale.utility.label, color: colorTokens.neutral[600] }}>
    {children}
  </label>
);
```

---

## Part 6: Quick Reference

### Color Palette Usage
- **Primary**: Calls-to-action, key highlights
- **Secondary**: Supporting actions, complementary elements
- **Neutral**: Text, backgrounds, borders
- **Semantic**: Status (success/warning/error/info)
- **Glass**: Translucent overlays, frosted effects

### Spacing Rule
- Use **spacingScale only**—never hardcode pixel values
- Group related content with consistent spacing

### Shadow Rule
- `xs/sm`: Subtle UI elements (buttons, small cards)
- `md`: Standard cards, elevated sections
- `lg/xl`: Modals, large overlays
- `glass`: Glassmorphic elements

### Animation Rule
- Hover: 300ms ease
- Page transitions: 400-600ms
- Entrance animations: 500-800ms
- Respect `prefers-reduced-motion`

---

## Implementation Checklist for Your Apps

- [ ] Extract all colors into `tokens/colors.ts`
- [ ] Define typography system in `tokens/typography.ts`
- [ ] Create `tokens/componentTokens.ts` for component-specific tokens
- [ ] Build base components (Button, Card, Input) using tokens
- [ ] Implement liquid glass variants in `styles/glassmorphism.ts`
- [ ] Create `LiquidGlassCard` and `AnimatedLiquidGlass` components
- [ ] Add Tailwind config mapping to tokens
- [ ] Test all components at mobile (375px) and desktop (1440px)
- [ ] Add ESLint rule to prevent hardcoded colors
- [ ] Document component API in Storybook or similar
- [ ] Audit existing components for token compliance

---

## Liquid Glass Design: Advanced Techniques

### Frosted Glass + Light Source
```css
.liquid-glass-advanced {
  backdrop-filter: blur(12px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    inset 1px 1px 0 rgba(255, 255, 255, 0.3),
    0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 20px;
}
```

### Multi-layer Glass
```typescript
// Nested glass for depth
<div className="glass-layer-1">
  <div className="glass-layer-2">
    <div className="glass-layer-3">
      Content
    </div>
  </div>
</div>
```

### Performance Tip
- Limit backdrop-blur to critical elements (can impact performance)
- Use CSS containment: `contain: layout;`
- Test on low-end devices to ensure smooth 60fps

---

**Remember:** Every color choice, every spacing decision, every animation should come from your token system. This is what makes designs feel cohesive, professional, and unmistakably *yours*.