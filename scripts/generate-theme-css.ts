import * as fs from "fs";
import * as path from "path";

const THEME_PATH = path.resolve(__dirname, "../theme.json");
const OUTPUT_PATH = path.resolve(
  __dirname,
  "../src/styles/theme-vars.generated.css"
);

function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function flattenTokens(
  obj: Record<string, unknown>,
  prefix: string = ""
): Array<{ key: string; value: string }> {
  const result: Array<{ key: string; value: string }> = [];

  for (const [key, value] of Object.entries(obj)) {
    const kebabKey = toKebabCase(key);
    const fullKey = prefix ? `${prefix}-${kebabKey}` : kebabKey;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      result.push(
        ...flattenTokens(value as Record<string, unknown>, fullKey)
      );
    } else {
      result.push({ key: `--${fullKey}`, value: String(value) });
    }
  }

  return result;
}

function generateThemeCSS(): void {
  const themeRaw = fs.readFileSync(THEME_PATH, "utf-8");
  const theme = JSON.parse(themeRaw) as Record<string, unknown>;

  const tokens = flattenTokens(theme);

  const cssVars = tokens.map(({ key, value }) => `  ${key}: ${value};`).join("\n");

  const css = `/* AUTO-GENERATED — DO NOT EDIT MANUALLY */\n/* Generated from theme.json by scripts/generate-theme-css.ts */\n\n:root {\n${cssVars}\n}\n`;

  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, css, "utf-8");
  console.log(`✓ Theme CSS generated: ${OUTPUT_PATH}`);
  console.log(`  ${tokens.length} CSS custom properties written.`);
}

generateThemeCSS();
