# ngx_waf

See [ngx_waf](https://github.com/ADD-SP/ngx_waf).

## Development

The documentation site is built with [VitePress](https://vitepress.dev/) and
[Bun](https://bun.sh/). Full-text search is provided by
[Pagefind](https://pagefind.app/), its index is generated while building.

```sh
bun install          # install dependencies
bun run docs:dev     # start the dev server (no search index in dev mode)
bun run docs:build   # build the site into docs/.vitepress/dist
bun run docs:preview # preview the production build
```
