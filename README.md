# `@fdhl/oxlint-config`

An opinionated, production-ready [Oxlint](https://oxc.rs/docs/guide/usage/linter) configuration for TypeScript and React projects. Requires `oxlint >= 1.51.0`.

## Quick Start

```bash
pnpm add -D @fdhl/oxlint-config oxlint
# or
npm install --save-dev @fdhl/oxlint-config oxlint
```

Create `oxlint.config.js` in your project root:

```js
import config from "@fdhl/oxlint-config";

export default config;
```

Run the linter:

```bash
npx oxlint .
```

## What's Included

### Oxlint Native Plugins

| Plugin       | Purpose                         |
| ------------ | ------------------------------- |
| `typescript` | TypeScript-specific rules       |
| `unicorn`    | Modern JS best practices        |
| `react`      | React and React DOM rules       |
| `node`       | Node.js best practices          |
| `import`     | Import consistency and ordering |

### JS Plugins (ESLint-compatible, bridged via oxlint)

| Plugin                                                                                                                                    | Purpose                              |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`eslint-plugin-perfectionist`](https://perfectionist.dev)                                                                                | Sorted imports, exports, named items |
| [`eslint-plugin-react-dom`](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)                    | React DOM-specific rules             |
| [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)                            | Rules of hooks, exhaustive deps      |
| [`eslint-plugin-unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports)                                               | Auto-remove unused imports and vars  |
| [`eslint-plugin-no-only-tests`](https://github.com/levibuzolic/eslint-plugin-no-only-tests)                                               | Prevent `.only` in test files        |

## Design Principles

1. **Explicit Opt-in Rules** — Oxlint's `correctness` category is disabled; only hand-picked rules are enabled, so you know exactly what's enforced
2. **TypeScript-aware** — Bans `@ts-ignore`, prevents unsafe type patterns, enforces `prefer-as-const`
3. **Modern JS** — ES2024+, prefers `at()`, `includes()`, `structuredClone()`, node protocol imports
4. **React Best Practices** — Blocks legacy APIs (`findDOMNode`, `dangerouslySetInnerHTML`), enforces hooks rules
5. **Import Hygiene** — Sorted imports/exports, no duplicates, unused imports auto-removed
6. **Developer UX** — Blocks `@nocommit` tags and `.only` tests from reaching production

## VS Code Setup

Install the [Oxlint VS Code extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode), then add to `.vscode/settings.json`:

```json
{
  "oxc.enable": true
}
```

## License

MIT
