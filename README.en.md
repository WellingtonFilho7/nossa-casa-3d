# Nossa Casa 3D

Local 2D/3D prototype for reviewing the preliminary internal layout of **Nossa Casa**, based on the original Floorplan 3D app and preserving the MIT license.

This version implements option A: a single-story L-shaped house, open kitchen connected to dining/living, large glass doors to the rear porch, free backyard, reserved family bedroom wing, integrated guest suite, and a homeschooling/work/library room inside the house.

## Study Status

The displayed dimensions and areas are **PROVISIONAL ASSUMPTIONS** for visualization and family discussion. They are not an approved floor plan, construction document, site-fit verification, structural design, budget, setback study, solar orientation study, or code compliance check.

## Opening Locally

```bash
python3 -m http.server 5173
```

Open `http://127.0.0.1:5173`.

The 2D plan can also be opened directly from `index.html`. The 3D view needs internet access because Three.js is loaded from a CDN.

## Navigation

- `Planta 2D`: pan by dragging empty space, zoom with the mouse wheel, click rooms/furniture to select.
- `Cena 3D`: top button switches to the navigable model; use `Orbitar`, `Topo`, and `Aérea`.
- `Passeio`: first-person mode with `WASD`, mouse look, `Shift` to move faster, and `E` for doors.
- `Arquivo`: exports PNG and JSON; imports a reopenable JSON file.
- `dados/nossa-casa-projeto-v1.json`: initial exported project state.

## Generated Deliverables

- `capturas/01-planta-2d.png`
- `capturas/02-3d-aerea.png`
- `capturas/03-3d-social-alpendre.png`
- `dados/nossa-casa-projeto-v1.json`
- `RELATORIO_DE_VALIDACAO.md`

## Reference Files

Package documents are stored in `referencias/`. Decision priority is defined in `AGENTS.md`, especially:

1. Approved needs program.
2. Distribution study v0.4, with option A selected for further development.
3. Option A diagram as a relationship reference, not as a scale drawing.

## Tests

```bash
npm test
npm run capture
```

The first command validates core project markers. The second opens a browser, verifies WebGL, creates screenshots, and exports the reopenable JSON file.

## Original Base

Original project: `https://github.com/wy51ai/floorplan-3d`.

Preserved license: [MIT](LICENSE).
