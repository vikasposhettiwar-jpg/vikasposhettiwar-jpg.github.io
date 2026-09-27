<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- All résumé content lives in `src/lib/resume-data.ts`; both the portfolio page and `/resume` render from it. Why: one source keeps the site, the printed sheet and the PDF from drifting apart.
- Presentational sections live in `src/components/site/`, and colour/type tokens live in `src/styles.css`; components never hardcode colours. Why: theming, print styles and contrast stay controlled in one place.
- `/resume` must fit one A4 page. Why: recruiters expect a single-sheet CV — verify by printing to PDF headlessly (`pdfinfo` shows 1 page) rather than eyeballing the screen.
- The brand mark is a real file at `public/favicon.svg` referenced from the root route's `head().links`. Why: the favicon needs a stable path served outside the bundler.

