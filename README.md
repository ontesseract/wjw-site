# Where Jesus Walked website (wherejesuswalkedbranson.com)

## Getting Started

Install dependencies

```bash
bun install
```

Run the development server:

```bash
bun dev
```

Setup before deploying to Cloudflare:

1. Copy `.dev.vars.example` to `.dev.vars`
2. Copy `.dev.local.example` to `.dev.local` and replace "example" values with actual ids, tokens, and keys
3. Create an R2 bucket called `where-jesus-walked-site-next-inc-cache`

Deploy:

```bash
bun run deploy
```
