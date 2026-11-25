// Shared logic for the Para Tabatita designs: bouquet of huillis, ambient backdrop, hearts.
export const REASONS = [
  "Porque eres la doctora más hermosa del mundo.",
  "Por cómo te brillan los ojos cuando te emocionas.",
  "Por tu paciencia con mis interminables monólogos de cosas que me gustan.",
  "Por cómo te preocupas de mí.",
  "Porque a tu lado cualquier lugar es mejor.",
  "Por cómo me llevas a Dios cuando lo necesito.",
  "Eres ÚNICA.",
  "Tienes un estilo que me vuelve loquito.",
  "Tus panqueques suben mi ánimo (y azúcar).",
  "Me escuchas atentamente y resuelves mis dudas.",
  "Tu creatividad me encanta.",
  "Porque a veces solo necesito pasear contigo para olvidar cualquier problema.",
  "Porque a tu lado, quiero ser mejor.",
  "Tu inteligencia me hipnotiza.",
  "Porque eres mi compañera de proyectos y de vida.",
  "Porque haces que los días difíciles en la u sean mejores.",
  "Porque te ves hermosa incluso después de un turno largo.",
  "Porque contigo el mundo tiene colores.",
  "Por tu manito acompañándome cada vez que conduzco.",
  "Por esos abrazos que me llenan el corazón.",
  "Por esos regaloneos que terminan en siestas.",
  "Porque eres mi mejor amiga, mi confidente, y el amor de mi vida."
];

const CSS = `
@keyframes hSway{0%{transform:rotate(-1.8deg)}100%{transform:rotate(2deg)}}
@keyframes hBob{0%{transform:rotate(-5deg) scale(.985)}100%{transform:rotate(4deg) scale(1.025)}}
@keyframes hOpen{0%{transform:scale(.1) rotate(-70deg);opacity:0}60%{opacity:1}100%{transform:scale(1) rotate(0);opacity:1}}
@keyframes hRise{0%{transform:scale(.3,0)}100%{transform:scale(1,1)}}
@keyframes hGrow{0%{stroke-dashoffset:1}100%{stroke-dashoffset:0}}
@keyframes hFallA{0%{transform:translate3d(0,-10vh,0)}50%{transform:translate3d(6vw,50vh,0)}100%{transform:translate3d(-2vw,112vh,0)}}
@keyframes hFallB{0%{transform:translate3d(0,-10vh,0)}50%{transform:translate3d(-7vw,52vh,0)}100%{transform:translate3d(3vw,112vh,0)}}
@keyframes hFallC{0%{transform:translate3d(0,-10vh,0)}50%{transform:translate3d(3vw,48vh,0)}100%{transform:translate3d(9vw,112vh,0)}}
@keyframes hSpin{0%{transform:rotate(0deg) rotateX(0deg)}100%{transform:rotate(360deg) rotateX(360deg)}}
@keyframes hMote{0%{transform:translate(0,0);opacity:0}20%{opacity:.95}50%{transform:translate(1.5vw,-6vh);opacity:.35}80%{opacity:.9}100%{transform:translate(-1vw,-12vh);opacity:0}}
@keyframes hGlow{0%{transform:translate(0,0) scale(1);opacity:.7}100%{transform:translate(4vw,3vh) scale(1.18);opacity:1}}
@keyframes hHeartA{0%{transform:translate(0,0) scale(.3);opacity:0}12%{transform:translate(0,-10px) scale(1);opacity:1}100%{transform:translate(-28px,-160px) rotate(-18deg) scale(.8);opacity:0}}
@keyframes hHeartB{0%{transform:translate(0,0) scale(.3);opacity:0}12%{transform:translate(0,-12px) scale(1);opacity:1}100%{transform:translate(6px,-185px) rotate(6deg) scale(.8);opacity:0}}
@keyframes hHeartC{0%{transform:translate(0,0) scale(.3);opacity:0}12%{transform:translate(0,-8px) scale(1);opacity:1}100%{transform:translate(30px,-150px) rotate(18deg) scale(.8);opacity:0}}
@keyframes hRing{0%{transform:translate(-50%,-50%) scale(.2);opacity:.8}100%{transform:translate(-50%,-50%) scale(1);opacity:0}}
`;
export function injectStyles() {
  if (document.getElementById('huilli-kf')) return;
  const s = document.createElement('style');
  s.id = 'huilli-kf'; s.textContent = CSS;
  document.head.appendChild(s);
}

function rng(seed) {
  return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

const PET = 'M0 0 C20 -20 17 -47 0 -58 C-17 -47 -20 -20 0 0Z';
const BUD = 'M0 0 C7 -8 7 -24 0 -36 C-7 -24 -7 -8 0 0Z';

function flower(h, p, x, y, s, rot, delay, r, key) {
  const id = p.id;
  const petal = (a, back) => h('g', { key: (back ? 'b' : 'f') + a, transform: `rotate(${a}) scale(${back ? 1.05 : .93})` },
    h('path', { d: PET, fill: `url(#${id}-${back ? 'petB' : 'pet'})`, stroke: p.edge, strokeWidth: .5, strokeOpacity: .55 }),
    h('path', { d: 'M0 -4 Q1.6 -30 0 -52', stroke: p.vein, strokeWidth: .8, fill: 'none', strokeOpacity: .5, strokeLinecap: 'round' }),
    h('path', { d: 'M0 -7 Q8 -26 4.5 -44', stroke: p.vein, strokeWidth: .45, fill: 'none', strokeOpacity: .3 }),
    h('path', { d: 'M0 -7 Q-8 -26 -4.5 -44', stroke: p.vein, strokeWidth: .45, fill: 'none', strokeOpacity: .3 })
  );
  const bob = 4.5 + r() * 3, bd = -r() * 8;
  return h('g', { key, transform: `translate(${x} ${y}) rotate(${rot}) scale(${s})` },
    h('g', { style: { animation: `hBob ${bob}s ease-in-out ${bd}s infinite alternate`, transformOrigin: '0 0' } },
      h('g', { style: { animation: `hOpen 1.8s cubic-bezier(.2,.8,.2,1) ${delay}s both`, transformOrigin: '0 0' } },
        [0, 120, 240].map(a => petal(a, true)),
        [60, 180, 300].map(a => petal(a, false)),
        h('circle', { r: 9, fill: `url(#${id}-thr)` }),
        [60, 180, 300].map(a => h('g', { key: 's' + a, transform: `rotate(${a})` },
          h('path', { d: 'M0 -3 L0 -10', stroke: p.pale, strokeWidth: .9, strokeLinecap: 'round' }),
          h('circle', { cy: -10.5, r: 1.3, fill: p.stamen }))),
        [0, 120, 240].map(a => h('g', { key: 'm' + a, transform: `rotate(${a})` },
          h('path', { d: 'M0 -2 C2.4 -6 2.8 -11 0 -14.5 C-2.8 -11 -2.4 -6 0 -2Z', fill: p.stamen }),
          h('circle', { cy: -12.8, r: 1.4, fill: p.stamenTip }))),
        h('circle', { r: 2.6, fill: p.throat })
      )));
}

function bud(h, p, x, y, s, rot, delay, r, key) {
  const bob = 5 + r() * 3, bd = -r() * 8;
  return h('g', { key, transform: `translate(${x} ${y}) rotate(${rot}) scale(${s})` },
    h('g', { style: { animation: `hBob ${bob}s ease-in-out ${bd}s infinite alternate`, transformOrigin: '0 0' } },
      h('g', { style: { animation: `hOpen 1.6s cubic-bezier(.2,.8,.2,1) ${delay}s both`, transformOrigin: '0 0' } },
        h('path', { d: BUD, fill: `url(#${p.id}-bud)`, stroke: p.edge, strokeWidth: .5, strokeOpacity: .6 }),
        h('path', { d: 'M0 -2 Q1.2 -18 0 -33', stroke: p.vein, strokeWidth: .7, fill: 'none', strokeOpacity: .5 }),
        h('path', { d: 'M-2.5 -3 Q-3.5 -16 -1.5 -28', stroke: p.vein, strokeWidth: .5, fill: 'none', strokeOpacity: .35 }),
        h('path', { d: 'M0 2 C3 0 5 -4 4 -8 C2 -5 -2 -5 -4 -8 C-5 -4 -3 0 0 2Z', fill: p.stem })
      )));
}

const STEMS = [
  { tip: [-95, -300], bend: -22, items: [{ t: 'f', s: .95, rot: -20 }, { t: 'f', dx: 26, dy: -32, s: .6, rot: 18 }] },
  { tip: [100, -320], bend: 24, items: [{ t: 'f', s: 1, rot: 18 }, { t: 'b', dx: 26, dy: -22, s: .85, rot: 34 }] },
  { tip: [0, -380], bend: 10, items: [{ t: 'f', s: 1.15, rot: 2 }, { t: 'b', dx: -28, dy: -20, s: .9, rot: -28 }] },
  { tip: [-56, -205], bend: -14, items: [{ t: 'f', s: .78, rot: -32 }] },
  { tip: [62, -200], bend: 12, items: [{ t: 'f', s: .7, rot: 28 }, { t: 'b', dx: -20, dy: -26, s: .72, rot: -12 }] }
];
const BLADES = [[-150, -150, -60, 5], [-100, -240, -24, 4], [-38, -175, -4, 3.5], [58, -215, 12, 4], [128, -180, 48, 4.5], [168, -112, 70, 5], [-176, -70, -80, 5]];

export function Bouquet(React, p, onTap) {
  const h = React.createElement, r = rng(p.seed || 7), id = p.id;
  const lg = (gid, stops, y2) => h('linearGradient', { key: gid, id: `${id}-${gid}`, gradientUnits: 'userSpaceOnUse', x1: 0, y1: 0, x2: 0, y2 },
    stops.map(([o, c], i) => h('stop', { key: i, offset: o, stopColor: c })));
  const defs = h('defs', null,
    lg('pet', [[0, p.throat], [.1, p.pale], [.45, p.pale], [.78, p.mid], [1, p.tip]], -58),
    lg('petB', [[0, p.throat], [.12, p.pale], [.4, p.mid], [1, p.backTip]], -58),
    lg('bud', [[0, p.pale], [.55, p.mid], [1, p.backTip]], -36),
    h('radialGradient', { id: `${id}-thr` }, h('stop', { offset: 0, stopColor: p.throat, stopOpacity: .95 }), h('stop', { offset: 1, stopColor: p.throat, stopOpacity: 0 })),
    h('linearGradient', { id: `${id}-leaf`, x1: 0, y1: 1, x2: 0, y2: 0 }, h('stop', { offset: 0, stopColor: p.leaf1 }), h('stop', { offset: 1, stopColor: p.leaf2 }))
  );
  const blades = BLADES.map(([tx, ty, curl, w], i) => {
    const mx = tx * .3 + curl, my = ty * .6, d = 1.5 + r() * 2;
    return h('g', { key: 'l' + i, style: { animation: `hSway ${7 + r() * 4}s ease-in-out ${-r() * 8}s infinite alternate`, transformOrigin: '0 0' } },
      h('g', { style: { animation: `hRise 1.4s cubic-bezier(.2,.8,.2,1) ${i * .07}s both`, transformOrigin: '0 0' } },
        h('path', { d: `M${-w * .7} 0 Q${mx - w * 1.9} ${my} ${tx} ${ty} Q${mx + w * 1.9} ${my} ${w * .7} 0Z`, fill: `url(#${id}-leaf)`, opacity: .9 + d * 0 })));
  });
  let fi = 0;
  const stems = STEMS.map((st, i) => {
    const [tx, ty] = st.tip, cx = tx * .25 + st.bend, cy = ty * .55;
    const sd = .25 + i * .15;
    const parts = [h('path', { key: 'st', d: `M0 0 Q${cx} ${cy} ${tx} ${ty}`, stroke: p.stem, strokeWidth: 2.4, fill: 'none', strokeLinecap: 'round', pathLength: 1, strokeDasharray: 1, style: { animation: `hGrow 1.6s cubic-bezier(.4,0,.2,1) ${sd}s both` } })];
    st.items.forEach((it, j) => {
      const x = tx + (it.dx || 0), y = ty + (it.dy || 0), delay = 1.3 + (fi++) * .22;
      if (it.dx) parts.push(h('path', { key: 'pd' + j, d: `M${tx} ${ty} Q${tx + it.dx * .2} ${ty + it.dy * .7} ${x} ${y}`, stroke: p.stem, strokeWidth: 1.4, fill: 'none', strokeLinecap: 'round', pathLength: 1, strokeDasharray: 1, style: { animation: `hGrow .8s ease-out ${delay - .5}s both` } }));
      parts.push((it.t === 'f' ? flower : bud)(h, p, x, y, it.s, it.rot, delay, r, 'it' + j));
    });
    return h('g', { key: 's' + i, style: { animation: `hSway ${6 + r() * 3}s ease-in-out ${-r() * 6}s infinite alternate`, transformOrigin: '0 0' } }, parts);
  });
  const tail = [-10, 0, 9].map((dx, i) => h('path', { key: 't' + i, d: `M0 0 L${dx} 22`, stroke: p.stem, strokeWidth: 2.2, strokeLinecap: 'round' }));
  return h('svg', { viewBox: '0 0 400 520', width: '100%', height: '100%', onClick: onTap, style: { overflow: 'visible', cursor: 'pointer', display: 'block' } },
    defs, h('g', { transform: 'translate(200 498)' }, blades, tail, stems));
}

export function Backdrop(React, kind, p, particles) {
  const h = React.createElement, r = rng(kind.length * 31 + 3), out = [];
  const glow = (k, pos, size, color, dur) => h('div', { key: k, style: { position: 'absolute', ...pos, width: size, height: size, borderRadius: '50%', background: `radial-gradient(circle, ${color} 0%, transparent 65%)`, animation: `hGlow ${dur}s ease-in-out infinite alternate` } });
  if (kind === 'night') {
    out.push(glow('g1', { left: '-20vmax', top: '-25vmax' }, '80vmax', 'rgba(126,87,194,.38)', 17));
    out.push(glow('g2', { right: '-25vmax', bottom: '-30vmax' }, '80vmax', 'rgba(214,120,170,.16)', 21));
  } else if (kind === 'paper') {
    out.push(glow('g1', { left: '-15vmax', top: '-20vmax' }, '70vmax', 'rgba(255,214,170,.38)', 19));
  } else {
    out.push(glow('g1', { left: '2vw', top: '6vh' }, '70vmin', 'rgba(255,226,232,.95)', 14));
    out.push(glow('g2', { right: '-20vmax', bottom: '-25vmax' }, '75vmax', 'rgba(150,120,220,.22)', 20));
  }
  if (particles !== false) {
    const nPet = kind === 'night' ? 6 : kind === 'paper' ? 7 : 10;
    for (let i = 0; i < nPet; i++) {
      const dur = 20 + r() * 16, size = 11 + r() * 9;
      out.push(h('div', { key: 'p' + i, style: { position: 'absolute', top: 0, left: (r() * 96) + '%', animation: `hFall${'ABC'[i % 3]} ${dur}s linear ${-r() * dur}s infinite`, willChange: 'transform' } },
        h('svg', { viewBox: '-20 -60 40 62', width: size, height: size * 1.55, style: { display: 'block', opacity: kind === 'night' ? .55 : .75, animation: `hSpin ${7 + r() * 7}s linear infinite` } },
          h('path', { d: PET, fill: i % 2 ? p.mid : p.tip }))));
    }
    if (kind === 'night') for (let i = 0; i < 16; i++) {
      const s = 2 + r() * 3;
      out.push(h('div', { key: 'm' + i, style: { position: 'absolute', left: (r() * 100) + '%', top: (20 + r() * 78) + '%', width: s, height: s, borderRadius: '50%', background: '#fff3c4', boxShadow: '0 0 10px 3px rgba(255,228,150,.45)', animation: `hMote ${8 + r() * 7}s ease-in-out ${-r() * 12}s infinite` } }));
    }
  }
  return h('div', { style: { position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' } }, out);
}

const HEART = 'M12 21s-7.5-4.6-9.8-9.3C.6 8.4 2.6 4.5 6.4 4.5c2.3 0 3.8 1.3 5.6 3.4 1.8-2.1 3.3-3.4 5.6-3.4 3.8 0 5.8 3.9 4.2 7.2C19.5 16.4 12 21 12 21z';
export function Hearts(React, hearts, color) {
  const h = React.createElement;
  return h('div', { style: { position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 5 } }, hearts.map(ht =>
    ht.ring
      ? h('div', { key: ht.id, style: { position: 'absolute', left: ht.x, top: ht.y, width: 90, height: 90, borderRadius: '50%', border: `1px solid ${color}`, animation: 'hRing 1.1s ease-out forwards' } })
      : h('div', { key: ht.id, style: { position: 'absolute', left: ht.x - ht.size / 2, top: ht.y - ht.size / 2, animation: `hHeart${'ABC'[ht.k]} 2.6s cubic-bezier(.2,.7,.3,1) ${ht.delay}s both` } },
        h('svg', { viewBox: '0 0 24 24', width: ht.size, height: ht.size, style: { display: 'block' } }, h('path', { d: HEART, fill: color })))));
}

export function makeTap(self) {
  return e => {
    const b = Date.now() + Math.random();
    const hs = [0, 1, 2].map(i => ({ id: b + '-' + i, x: e.clientX + (Math.random() * 44 - 22), y: e.clientY + (Math.random() * 16 - 8), k: i, size: 14 + Math.random() * 12, delay: i * .12 }));
    hs.push({ id: b + '-r', ring: true, x: e.clientX, y: e.clientY });
    self.setState(s => ({ hearts: [...s.hearts, ...hs] }));
    setTimeout(() => self.setState(s => ({ hearts: s.hearts.filter(x => !hs.includes(x)) })), 3200);
  };
}
