import { colorTokens } from "./colors";
import { spacingScale } from "./spacing";
import { shadows } from "./shadows";

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
    borderRadius: "16px",
    padding: spacingScale[6],
  },
  glassCard: {
    bg: colorTokens.accent.glass,
    backdropBlur: "16px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    shadow: shadows.glass,
    borderRadius: "24px",
  },
  input: {
    bg: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    text: colorTokens.neutral[0],
    placeholder: colorTokens.neutral[400],
    focus: colorTokens.primary[500],
  }
};
