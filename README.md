# ナナヲアカリ コール セトリまとめ

Astro と Tailwind CSS で作ったセトリ・コールまとめサイトです。

## Project Structure

主なファイル構成です。

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── Badge.astro
│   │   ├── EventListItem.astro
│   │   └── SongList.astro
│   ├── data
│   │   └── setlists.generated.json
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   ├── index.astro
│   │   └── events/[id].astro
│   └── styles
│       └── global.css
└── package.json
```

## Commands

すべてリポジトリルートで実行します。

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
