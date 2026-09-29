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

- Résumé data for the portfolio sections lives in `src/lib/resume-data.ts`; the Download CV buttons link to the user-uploaded PDF asset at `src/assets/vikasposhettiwar_resume.pdf.asset.json`. Why: the CV file is user-owned — never edit or regenerate it; replace it only with a new upload.
- Presentational sections live in `src/components/site/`, and colour/type tokens live in `src/styles.css`; components never hardcode colours. Why: theming, print styles and contrast stay controlled in one place.
- The brand mark is a real file at `public/favicon.svg` referenced from the root route's `head().links`. Why: the favicon needs a stable path served outside the bundler.

