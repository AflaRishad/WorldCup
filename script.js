
const GROUPS = {
  A: [
    { id: 'mex', name: 'Mexico',       flag: '🇲🇽' },
    { id: 'kor', name: 'South Korea',  flag: '🇰🇷' },
    { id: 'cze', name: 'Czechia',      flag: '🇨🇿' },
    { id: 'rsa', name: 'South Africa', flag: '🇿🇦' }
  ],
  B: [
    { id: 'bih', name: 'Bosnia & Herz.', flag: '🇧🇦' },
    { id: 'can', name: 'Canada',          flag: '🇨🇦' },
    { id: 'qat', name: 'Qatar',           flag: '🇶🇦' },
    { id: 'sui', name: 'Switzerland',     flag: '🇨🇭' }
  ],
  C: [
    { id: 'bra', name: 'Brazil',   flag: '🇧🇷' },
    { id: 'hai', name: 'Haiti',    flag: '🇭🇹' },
    { id: 'mar', name: 'Morocco',  flag: '🇲🇦' },
    { id: 'sco', name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' }
  ],
  D: [
    { id: 'aus', name: 'Australia', flag: '🇦🇺' },
    { id: 'par', name: 'Paraguay',  flag: '🇵🇾' },
    { id: 'tur', name: 'Türkiye',   flag: '🇹🇷' },
    { id: 'usa', name: 'USA',       flag: '🇺🇸' }
  ],
  E: [
    { id: 'cuw', name: 'Curaçao',     flag: '🇨🇼' },
    { id: 'ecu', name: 'Ecuador',     flag: '🇪🇨' },
    { id: 'ger', name: 'Germany',     flag: '🇩🇪' },
    { id: 'civ', name: 'Ivory Coast', flag: '🇨🇮' }
  ],
  F: [
    { id: 'jpn', name: 'Japan',       flag: '🇯🇵' },
    { id: 'ned', name: 'Netherlands', flag: '🇳🇱' },
    { id: 'swe', name: 'Sweden',      flag: '🇸🇪' },
    { id: 'tun', name: 'Tunisia',     flag: '🇹🇳' }
  ],
  G: [
    { id: 'bel', name: 'Belgium',     flag: '🇧🇪' },
    { id: 'egy', name: 'Egypt',       flag: '🇪🇬' },
    { id: 'irn', name: 'Iran',        flag: '🇮🇷' },
    { id: 'nzl', name: 'New Zealand', flag: '🇳🇿' }
  ],
  H: [
    { id: 'cpv', name: 'Cape Verde',  flag: '🇨🇻' },
    { id: 'ksa', name: 'Saudi Arabia',flag: '🇸🇦' },
    { id: 'esp', name: 'Spain',       flag: '🇪🇸' },
    { id: 'uru', name: 'Uruguay',     flag: '🇺🇾' }
  ],
  I: [
    { id: 'fra', name: 'France',  flag: '🇫🇷' },
    { id: 'irq', name: 'Iraq',    flag: '🇮🇶' },
    { id: 'nor', name: 'Norway',  flag: '🇳🇴' },
    { id: 'sen', name: 'Senegal', flag: '🇸🇳' }
  ],
  J: [
    { id: 'alg', name: 'Algeria',   flag: '🇩🇿' },
    { id: 'arg', name: 'Argentina', flag: '🇦🇷' },
    { id: 'aut', name: 'Austria',   flag: '🇦🇹' },
    { id: 'jor', name: 'Jordan',    flag: '🇯🇴' }
  ],
  K: [
    { id: 'col', name: 'Colombia', flag: '🇨🇴' },
    { id: 'cod', name: 'DR Congo', flag: '🇨🇩' },
    { id: 'por', name: 'Portugal', flag: '🇵🇹' },
    { id: 'uzb', name: 'Uzbekistan',flag: '🇺🇿' }
  ],
  L: [
    { id: 'cro', name: 'Croatia', flag: '🇭🇷' },
    { id: 'eng', name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { id: 'gha', name: 'Ghana',   flag: '🇬🇭' },
    { id: 'pan', name: 'Panama',  flag: '🇵🇦' }
  ]
};

// Fixture schedule (same as original)
const FIXTURE_SCHEDULE = [
  { date:'12 Jun', time:'00:30', group:'A', home:'mex', away:'rsa' },
  { date:'12 Jun', time:'07:30', group:'A', home:'kor', away:'cze' },
  { date:'13 Jun', time:'00:30', group:'B', home:'can', away:'bih' },
  { date:'13 Jun', time:'06:30', group:'D', home:'usa', away:'par' },
  { date:'13 Jun', time:'09:30', group:'D', home:'aus', away:'tur' },
  { date:'14 Jun', time:'00:30', group:'B', home:'qat', away:'sui' },
  { date:'14 Jun', time:'03:30', group:'C', home:'bra', away:'mar' },
  { date:'14 Jun', time:'06:30', group:'C', home:'hai', away:'sco' },
  { date:'14 Jun', time:'22:30', group:'E', home:'ger', away:'cuw' },
  { date:'15 Jun', time:'01:30', group:'F', home:'ned', away:'jpn' },
  { date:'15 Jun', time:'04:30', group:'E', home:'civ', away:'ecu' },
  { date:'15 Jun', time:'07:30', group:'F', home:'swe', away:'tun' },
  { date:'15 Jun', time:'21:30', group:'H', home:'esp', away:'cpv' },
  { date:'16 Jun', time:'00:30', group:'G', home:'bel', away:'egy' },
  { date:'16 Jun', time:'03:30', group:'H', home:'ksa', away:'uru' },
  { date:'16 Jun', time:'06:30', group:'G', home:'irn', away:'nzl' },
  { date:'16 Jun', time:'09:30', group:'J', home:'aut', away:'jor' },
  { date:'17 Jun', time:'00:30', group:'I', home:'fra', away:'sen' },
  { date:'17 Jun', time:'03:30', group:'I', home:'irq', away:'nor' },
  { date:'17 Jun', time:'06:30', group:'J', home:'arg', away:'alg' },
  { date:'17 Jun', time:'22:30', group:'K', home:'por', away:'cod' },
  { date:'18 Jun', time:'01:30', group:'L', home:'eng', away:'cro' },
  { date:'18 Jun', time:'04:30', group:'L', home:'gha', away:'pan' },
  { date:'18 Jun', time:'07:30', group:'K', home:'uzb', away:'col' },
  { date:'18 Jun', time:'21:30', group:'A', home:'cze', away:'rsa' },
  { date:'19 Jun', time:'00:30', group:'B', home:'sui', away:'bih' },
  { date:'19 Jun', time:'03:30', group:'B', home:'can', away:'qat' },
  { date:'19 Jun', time:'06:30', group:'A', home:'mex', away:'kor' },
  { date:'20 Jun', time:'00:30', group:'D', home:'usa', away:'aus' },
  { date:'20 Jun', time:'03:30', group:'C', home:'sco', away:'mar' },
  { date:'20 Jun', time:'06:00', group:'C', home:'bra', away:'hai' },
  { date:'20 Jun', time:'07:30', group:'D', home:'tur', away:'par' },
  { date:'20 Jun', time:'09:30', group:'F', home:'tun', away:'jpn' },
  { date:'20 Jun', time:'22:30', group:'F', home:'ned', away:'swe' },
  { date:'21 Jun', time:'01:30', group:'E', home:'ger', away:'civ' },
  { date:'21 Jun', time:'05:30', group:'E', home:'ecu', away:'cuw' },
  { date:'21 Jun', time:'21:30', group:'H', home:'esp', away:'ksa' },
  { date:'22 Jun', time:'00:30', group:'G', home:'bel', away:'irn' },
  { date:'22 Jun', time:'03:30', group:'H', home:'uru', away:'cpv' },
  { date:'22 Jun', time:'06:30', group:'G', home:'nzl', away:'egy' },
  { date:'22 Jun', time:'22:30', group:'J', home:'arg', away:'aut' },
  { date:'23 Jun', time:'02:30', group:'I', home:'fra', away:'irq' },
  { date:'23 Jun', time:'05:30', group:'I', home:'nor', away:'sen' },
  { date:'23 Jun', time:'08:30', group:'J', home:'jor', away:'alg' },
  { date:'23 Jun', time:'22:30', group:'K', home:'por', away:'uzb' },
  { date:'24 Jun', time:'01:30', group:'L', home:'eng', away:'gha' },
  { date:'24 Jun', time:'04:30', group:'L', home:'pan', away:'cro' },
  { date:'24 Jun', time:'07:30', group:'K', home:'col', away:'cod' },
  { date:'25 Jun', time:'00:30', group:'B', home:'sui', away:'can' },
  { date:'25 Jun', time:'00:30', group:'B', home:'bih', away:'qat' },
  { date:'25 Jun', time:'03:30', group:'C', home:'sco', away:'bra' },
  { date:'25 Jun', time:'03:30', group:'C', home:'mar', away:'hai' },
  { date:'25 Jun', time:'06:30', group:'A', home:'cze', away:'mex' },
  { date:'25 Jun', time:'06:30', group:'A', home:'rsa', away:'kor' },
  { date:'26 Jun', time:'01:30', group:'E', home:'cuw', away:'civ' },
  { date:'26 Jun', time:'01:30', group:'E', home:'ecu', away:'ger' },
  { date:'26 Jun', time:'04:30', group:'F', home:'jpn', away:'swe' },
  { date:'26 Jun', time:'04:30', group:'F', home:'tun', away:'ned' },
  { date:'26 Jun', time:'07:30', group:'D', home:'tur', away:'usa' },
  { date:'26 Jun', time:'07:30', group:'D', home:'par', away:'aus' },
  { date:'27 Jun', time:'00:30', group:'I', home:'nor', away:'fra' },
  { date:'27 Jun', time:'00:30', group:'I', home:'sen', away:'irq' },
  { date:'27 Jun', time:'05:30', group:'H', home:'cpv', away:'ksa' },
  { date:'27 Jun', time:'05:30', group:'H', home:'uru', away:'esp' },
  { date:'27 Jun', time:'08:30', group:'G', home:'egy', away:'irn' },
  { date:'27 Jun', time:'08:30', group:'G', home:'nzl', away:'bel' },
  { date:'28 Jun', time:'02:30', group:'L', home:'pan', away:'eng' },
  { date:'28 Jun', time:'02:30', group:'L', home:'cro', away:'gha' },
  { date:'28 Jun', time:'05:00', group:'K', home:'col', away:'por' },
  { date:'28 Jun', time:'07:30', group:'J', home:'alg', away:'aut' },
  { date:'28 Jun', time:'07:30', group:'J', home:'jor', away:'arg' },
  { date:'28 Jun', time:'07:30', group:'K', home:'cod', away:'uzb' }
];

const TRACKS = [
  {
    title: 'Dai Dai',
    artist: 'Shakira ft. Burna Boy',
    ytId: 'fcnDmrtj6Sk'
  },
  {
    title: 'Illuminate',
    artist: 'FIFA World Cup 2026',
    ytId: 'im0FLUw7wtY'
  },
  {
    title: 'Champion',
    artist: 'IShowSpeed',
    ytId: 'vrY1THC_NQE'
  },
  {
    title: 'Goals',
    artist: 'LISA, Anitta & Rema',
    ytId: 'safzyuZNCGI'
  },
  {
    title: 'DNA (More Than a Game)',
    artist: 'Andrea Bocelli, David Guetta, Megan Thee Stallion & EJAE',
    ytId: 'alTzdOAAMhc'
  },
  {
    title: 'Game Time',
    artist: 'Future & Tyla',
    ytId: 'JLucCHwY-2c'
  }
];
// ============================================================
// STATE
// ============================================================
let S = { user: null, gPicks: {}, kPicks: {}, history: [] };
let curPage = 'dashboard';

// Music
let ytPlayer = null;
let ytReady = false;
let curTrack = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let musicInited = false;

// ============================================================
// PERSISTENCE
// ============================================================
function saveState() {
  try { if (S.user) localStorage.setItem(`wc26_${S.user.name}`, JSON.stringify(S)); } catch(e){}
}
function loadState(name) {
  try { const d = localStorage.getItem(`wc26_${name}`); if (d) S = JSON.parse(d); } catch(e){}
}

// ============================================================
// HELPERS
// ============================================================
function getFixtures(teams) {
  const f = [];
  for (let i = 0; i < teams.length; i++)
    for (let j = i+1; j < teams.length; j++)
      f.push({ home: teams[i], away: teams[j] });
  return f;
}

function calcStandings(g) {
  const teams = GROUPS[g].map(t => ({...t, pts:0, gf:0, ga:0, w:0, d:0, l:0}));
  getFixtures(GROUPS[g]).forEach((f, idx) => {
    const w = S.gPicks[`${g}_${idx}`];
    if (!w) return;
    const ht = teams.find(t => t.id === f.home.id);
    const at = teams.find(t => t.id === f.away.id);
    if (w === 'draw') {
      ht.pts++; at.pts++; ht.d++; at.d++; ht.gf++; at.gf++; ht.ga++; at.ga++;
    } else if (w === f.home.id) {
      ht.pts+=3; ht.w++; ht.gf+=2; at.l++; at.ga+=2;
    } else if (w === f.away.id) {
      at.pts+=3; at.w++; at.gf+=2; ht.l++; ht.ga+=2;
    }
  });
  return teams.sort((a,b) => b.pts - a.pts || (b.gf-b.ga)-(a.gf-a.ga));
}

function getGroupQualifiers(g) { const s = calcStandings(g); return [s[0], s[1]]; }

function getR32Teams() {
  const q = {};
  Object.keys(GROUPS).forEach(g => {
    const [a, b] = getGroupQualifiers(g);
    q[`${g}1`] = a; q[`${g}2`] = b;
  });
  return [
    [q.A1,q.B2],[q.C1,q.D2],[q.E1,q.F2],[q.G1,q.H2],
    [q.I1,q.J2],[q.K1,q.L2],[q.A2,q.B1],[q.C2,q.D1],
    [q.E2,q.F1],[q.G2,q.H1],[q.I2,q.J1],[q.K2,q.L1],
    [q.A1,q.C2],[q.B1,q.D2],[q.E1,q.G2],[q.F1,q.H2],
  ];
}

function getTeamById(id) {
  for (const g of Object.values(GROUPS)) {
    const t = g.find(t => t.id === id);
    if (t) return t;
  }
  return null;
}

function getKnockoutTeam(round, i) {
  const id = S.kPicks[`${round}_${i}`];
  return id ? getTeamById(id) : null;
}

function getTotalPicks() {
  return { total: 103, done: Object.keys(S.gPicks).length + Object.keys(S.kPicks).length };
}

function getChampion() { const id = S.kPicks['f_0']; return id ? getTeamById(id) : null; }

// ============================================================
// AUTH
// ============================================================
function login() {
  const name = document.getElementById('inputName').value.trim();
  const team = document.getElementById('inputTeam').value;
  if (!name) { showToast('Enter your name!'); return; }
  loadState(name);
  const isNew = !S.user || S.user.name !== name;
  S.user = { name, team: team || S.user?.team || '', joined: isNew ? Date.now() : (S.user?.joined || Date.now()) };
  saveState(); bootApp();
}
function logout() {
  if (confirm('Logout? Your predictions are saved.')) { S.user = null; location.reload(); }
}

function populateTeamSelect() {
  const sel = document.getElementById('inputTeam');
  if (!sel) return;
  Object.entries(GROUPS).forEach(([g, teams]) => {
    const og = document.createElement('optgroup');
    og.label = `Group ${g}`;
    teams.forEach(t => {
      const o = document.createElement('option');
      o.value = t.id; o.text = `${t.flag} ${t.name}`;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });
}

// ============================================================
// BOOT
// ============================================================
function bootApp() {
  document.getElementById('page-auth').classList.add('hidden');
  document.getElementById('page-main').classList.remove('hidden');
  initHeader(); renderAll(); setPage('dashboard');
  setTimeout(initMusic, 800);
  const p = new URLSearchParams(location.search).get('p');
  if (p) { try { const d = JSON.parse(atob(p)); S.gPicks=d.g||{}; S.kPicks=d.k||{}; saveState(); renderAll(); } catch(e){} }
}

function initHeader() {
  const u = S.user;
  document.getElementById('hdrName').textContent = u.name;
  document.getElementById('hdrAvatar').textContent = u.name[0].toUpperCase();
  document.getElementById('heroName').innerHTML = `<span>${u.name}</span>`;
  updateHeaderProgress();
}

function updateHeaderProgress() {
  const {total, done} = getTotalPicks();
  const pct = Math.round((done/total)*100);
  document.getElementById('hdrPct').textContent = `${pct}% complete`;
  const pctEl = document.getElementById('heroPct');
  if (pctEl) pctEl.textContent = `${pct}%`;
  const sub = document.getElementById('heroSub');
  if (sub) sub.textContent = done === 0 ? 'Tap match teams to set your picks' : `${done} of ${total} predictions made`;
  // SVG ring
  const ring = document.getElementById('ringFill');
  if (ring) {
    const circumference = 213.6;
    ring.style.strokeDashoffset = circumference - (pct/100)*circumference;
  }
}

// ============================================================
// PAGES
// ============================================================
const PAGES = ['dashboard','groups','bracket','stats'];
function setPage(p) {
  curPage = p;
  PAGES.forEach(id => document.getElementById(`pg-${id}`).classList.toggle('hidden', id !== p));
  document.querySelectorAll('.hdr-nav-btn').forEach((btn, i) => btn.classList.toggle('active', PAGES[i] === p));
  document.querySelectorAll('.mob-btn').forEach((btn, i) => btn.classList.toggle('active', PAGES[i] === p));
  renderPage(p);
}
function renderPage(p) {
  if (p==='dashboard') renderDashboard();
  else if (p==='groups') renderGroups();
  else if (p==='bracket') renderBracket();
  else if (p==='stats') renderStats();
}
function renderAll() {
  renderDashboard();
  if (curPage==='groups') renderGroups();
  if (curPage==='bracket') renderBracket();
  if (curPage==='stats') renderStats();
  updateHeaderProgress();
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  updateHeaderProgress(); renderChampionDisplay(); renderDashStats(); renderDashGroups();
}

function renderChampionDisplay() {
  const champ = getChampion();
  const el = document.getElementById('championDisplay');
  if (!champ) { el.innerHTML=''; return; }
  el.innerHTML = `<div class="champion-card">
    <div class="champion-flag">${champ.flag}</div>
    <div>
      <div class="champion-eyebrow">🏆 Your Predicted Champion</div>
      <div class="champion-name">${champ.name}</div>
    </div></div>`;
  triggerConfetti();
}

function renderDashStats() {
  const {total, done} = getTotalPicks();
  const champ = getChampion();
  document.getElementById('dashStats').innerHTML = `
    <div class="stat-card"><div class="sc-tag"><span class="tag">Picks</span></div><div class="sc-val grn">${done}</div><div class="sc-sub">of ${total} total</div></div>
    <div class="stat-card"><div class="sc-tag"><span class="tag">Group</span></div><div class="sc-val">${Object.keys(S.gPicks).length}</div><div class="sc-sub">of 72 matches</div></div>
    <div class="stat-card"><div class="sc-tag"><span class="tag">Knockout</span></div><div class="sc-val">${Object.keys(S.kPicks).length}</div><div class="sc-sub">of 31 matches</div></div>
    <div class="stat-card"><div class="sc-tag"><span class="tag">Champion</span></div><div class="sc-val" style="font-size:2rem">${champ ? champ.flag : '?'}</div><div class="sc-sub">${champ ? champ.name : 'Not picked'}</div></div>`;
}

function renderDashGroups() {
  document.getElementById('dashGroups').innerHTML = Object.keys(GROUPS).map(g => buildGroupCard(g)).join('');
}

// ============================================================
// GROUP CARD (dashboard)
// ============================================================
function buildGroupCard(g) {
  const teams = GROUPS[g];
  const fixtures = getFixtures(teams);
  const standings = calcStandings(g);
  const done = fixtures.filter((_, i) => S.gPicks[`${g}_${i}`]).length;

  const rows = standings.map((t, i) => {
    const posClass = ['pos-1','pos-2','pos-3','pos-4'][i];
    return `<tr class="${i<2?'q'+(i+1):''}">
      <td><div class="team-cell">
        <div class="team-pos ${posClass}">${i+1}</div>
        <span class="team-flag">${t.flag}</span>
        <span class="team-name">${t.name}</span>
      </div></td>
      <td>${t.pts}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.gf}</td>
    </tr>`;
  }).join('');

  return `<div class="group-card" id="gc-${g}">
    <div class="group-head">
      <h3><span class="gtag">${g}</span> Group ${g}</h3>
      <span class="group-complete">${done}/6</span>
    </div>
    <table class="standings">
      <thead><tr><th>Team</th><th>Pts</th><th>W</th><th>D</th><th>L</th><th>GF</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

// ============================================================
// GROUPS PAGE — chronological schedule with DRAW option
// ============================================================
function renderGroups() {
  const MONTH_ORDER = {Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12};
  function dateVal(s) { const [d, m] = s.split(' '); return (MONTH_ORDER[m]||0)*100+parseInt(d); }

  const groupFixtures = {};
  Object.keys(GROUPS).forEach(g => { groupFixtures[g] = getFixtures(GROUPS[g]); });

  const grouped = {};
  FIXTURE_SCHEDULE.forEach(m => {
    const home = getTeamById(m.home);
    const away = getTeamById(m.away);
    if (!home || !away) return;
    const fixtures = groupFixtures[m.group];
    const idx = fixtures.findIndex(f => f.home.id === home.id && f.away.id === away.id);
    if (idx === -1) return;
    if (!grouped[m.date]) grouped[m.date] = [];
    grouped[m.date].push({...m, home, away, fixtureIdx: idx});
  });

  const sortedDates = Object.keys(grouped).sort((a,b) => dateVal(a)-dateVal(b));
  let html = '';
  sortedDates.forEach(date => {
    html += `<div class="date-section"><div class="date-header">${date}</div>`;
    grouped[date].forEach(m => {
      const pickKey = `${m.group}_${m.fixtureIdx}`;
      const w = S.gPicks[pickKey];
      const hw = w === m.home.id;
      const aw = w === m.away.id;
      const dw = w === 'draw';

      html += `<div class="match-row">
        <div class="match-group">${m.group}</div>
        <button class="match-team${hw?' picked':''}" onclick="pickGroup('${m.group}','${m.fixtureIdx}','${m.home.id}')">
          <span class="team-flag">${m.home.flag}</span>
          <span class="team-name-text">${m.home.name}</span>
          ${hw?'<span class="pick-check">✓</span>':''}
        </button>
        <div class="match-mid">
          <div class="vs-badge">${hw?m.home.flag:aw?m.away.flag:dw?'🤝':'VS'}</div>
          <button class="draw-btn${dw?' active':''}" onclick="pickGroup('${m.group}','${m.fixtureIdx}','draw')">Draw</button>
        </div>
        <button class="match-team right${aw?' picked':''}" onclick="pickGroup('${m.group}','${m.fixtureIdx}','${m.away.id}')">
          ${aw?'<span class="pick-check">✓</span>':''}
          <span class="team-name-text">${m.away.name}</span>
          <span class="team-flag">${m.away.flag}</span>
        </button>
      </div>`;
    });
    html += '</div>';
  });
  document.getElementById('groupsGrid').innerHTML = html;
}

// ============================================================
// BRACKET — mobile-friendly vertical stacked rounds
// ============================================================
function renderBracket() {
  const r32 = getR32Teams();

  function bTeam(t, round, idx, isHome) {
    if (!t) return `<button class="b-team tbd" disabled><span class="bflag">?</span><span class="bname">TBD</span></button>`;
    const w = S.kPicks[`${round}_${idx}`];
    const won = w === t.id;
    return `<button class="b-team${won?' winner':''}" onclick="pickKnockout('${round}','${idx}','${t.id}')">
      <span class="bflag">${t.flag}</span>
      <span class="bname">${t.name}</span>
      ${won?'<span class="bcheck">✓</span>':''}
    </button>`;
  }

  function bMatch(t1, t2, round, idx) {
    return `<div class="b-match">${bTeam(t1,round,idx,true)}${bTeam(t2,round,idx,false)}</div>`;
  }

  function buildRound(title, matchesHtml, count) {
    return `<div class="bkt-round">
      <div class="bkt-round-title">
        <h3>${title}</h3>
        <span class="round-count">${count} matches</span>
      </div>
      <div class="bkt-grid">${matchesHtml}</div>
    </div>`;
  }

  const r32Html = r32.map((p, i) => bMatch(p[0], p[1], 'r32', i)).join('');
  const r16Html = Array.from({length:8}, (_,i) =>
    bMatch(getKnockoutTeam('r32',i*2), getKnockoutTeam('r32',i*2+1), 'r16', i)).join('');
  const qfHtml = Array.from({length:4}, (_,i) =>
    bMatch(getKnockoutTeam('r16',i*2), getKnockoutTeam('r16',i*2+1), 'qf', i)).join('');
  const sfHtml = [0,1].map(i =>
    bMatch(getKnockoutTeam('qf',i*2), getKnockoutTeam('qf',i*2+1), 'sf', i)).join('');
  const finalHtml = bMatch(getKnockoutTeam('sf',0), getKnockoutTeam('sf',1), 'f', 0);

  const champ = getChampion();
  const champHtml = `<div class="champ-round">
    <div class="bkt-round-title"><h3>Champion</h3></div>
    <div class="champ-card">
      <div class="champ-label">🏆 Your Pick</div>
      ${champ
        ? `<div class="champ-flag">${champ.flag}</div><div class="champ-name">${champ.name}</div>`
        : '<div class="champ-tbd">Complete the bracket to reveal your champion</div>'
      }
    </div>
  </div>`;

  document.getElementById('bracketOuter').innerHTML =
    buildRound('Round of 32', r32Html, 16) +
    buildRound('Round of 16', r16Html, 8) +
    buildRound('Quarter Finals', qfHtml, 4) +
    buildRound('Semi Finals', sfHtml, 2) +
    buildRound('Final', finalHtml, 1) +
    champHtml;

  updateHeaderProgress();
}

// ============================================================
// STATS
// ============================================================
function renderStats() {
  const {total, done} = getTotalPicks();
  const pct = Math.round((done/total)*100);
  const champ = getChampion();
  const u = S.user;
  const fav = u?.team ? getTeamById(u.team) : null;
  const joined = u?.joined ? new Date(u.joined).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '—';
  const draws = Object.values(S.gPicks).filter(v => v==='draw').length;

  document.getElementById('statsGrid').innerHTML = `
    <div class="info-card"><h3>Your Profile</h3>
      <div class="info-row"><span class="lbl">Name</span><span class="val">${u?.name||'—'}</span></div>
      <div class="info-row"><span class="lbl">Favourite Team</span><span class="val">${fav?fav.flag+' '+fav.name:'—'}</span></div>
      <div class="info-row"><span class="lbl">Joined</span><span class="val">${joined}</span></div>
      <div class="info-row"><span class="lbl">Champion Pick</span><span class="val grn">${champ?champ.flag+' '+champ.name:'TBD'}</span></div>
    </div>
    <div class="info-card"><h3>Prediction Progress</h3>
      <div class="info-row"><span class="lbl">Group Stage</span><span class="val">${Object.keys(S.gPicks).length}/72</span></div>
      <div class="info-row"><span class="lbl">— Draws picked</span><span class="val">${draws}</span></div>
      <div class="info-row"><span class="lbl">Knockout Stage</span><span class="val">${Object.keys(S.kPicks).length}/31</span></div>
      <div class="info-row"><span class="lbl">Total Picks</span><span class="val grn">${done}/${total}</span></div>
      <div class="info-row"><span class="lbl">Completion</span><span class="val">${pct}%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="info-card"><h3>Tournament Facts</h3>
      <div class="info-row"><span class="lbl">Host Nations</span><span class="val">🇺🇸 🇨🇦 🇲🇽</span></div>
      <div class="info-row"><span class="lbl">Total Teams</span><span class="val">48</span></div>
      <div class="info-row"><span class="lbl">Format</span><span class="val">12 groups × 4 teams</span></div>
      <div class="info-row"><span class="lbl">Group Matches</span><span class="val">72</span></div>
      <div class="info-row"><span class="lbl">Total Matches</span><span class="val">104</span></div>
      <div class="info-row"><span class="lbl">Wins to title</span><span class="val grn">7</span></div>
    </div>
    <div class="info-card"><h3>Group Leaders (your picks)</h3>
      ${Object.keys(GROUPS).map(g => {
        const s = calcStandings(g);
        return `<div class="info-row"><span class="lbl">Group ${g}</span><span class="val">${s[0].flag} ${s[0].name}</span></div>`;
      }).join('')}
    </div>`;
}

// ============================================================
// PICK HANDLERS
// ============================================================
function pickGroup(g, key, winnerId) {
  const fk = `${g}_${key}`;
  const prev = S.gPicks[fk];
  if (prev === winnerId) {
    delete S.gPicks[fk];
    S.history.push({type:'group',g,key,prev:winnerId,next:null});
  } else {
    S.gPicks[fk] = winnerId;
    S.history.push({type:'group',g,key,prev,next:winnerId});
  }
  saveState(); renderPage(curPage); updateHeaderProgress();
  if (curPage !== 'groups') renderDashGroups();
}

function pickKnockout(round, matchIdx, teamId) {
  const key = `${round}_${matchIdx}`;
  const prev = S.kPicks[key];
  if (prev === teamId) { delete S.kPicks[key]; }
  else { S.kPicks[key] = teamId; S.history.push({type:'knockout',key,prev,next:teamId}); }
  saveState(); renderBracket(); renderDashboard();
}

function undoLast() {
  const last = S.history.pop();
  if (!last) { showToast('Nothing to undo'); return; }
  if (last.type === 'group') {
    if (last.prev) S.gPicks[`${last.g}_${last.key}`] = last.prev;
    else delete S.gPicks[`${last.g}_${last.key}`];
  } else {
    if (last.prev) S.kPicks[last.key] = last.prev;
    else delete S.kPicks[last.key];
  }
  saveState(); renderAll();
  showToast('Undone ↩');
}

function resetAll() {
  if (!confirm('Reset all predictions?')) return;
  S.gPicks={}; S.kPicks={}; S.history=[];
  saveState(); renderAll();
  showToast('All predictions reset 🗑');
}

function shareLink() {
  const url = location.href.split('?')[0] + '?p=' + btoa(JSON.stringify({g:S.gPicks,k:S.kPicks}));
  navigator.clipboard.writeText(url).then(()=>showToast('Share link copied! 🔗')).catch(()=>prompt('Copy:',url));
}

function exportPredictions() {
  const champ = getChampion();
  const lines = [
    'FIFA World Cup 2026 — My Predictions',
    `Predictor: ${S.user?.name||'Unknown'}`,
    `Champion: ${champ?.name||'TBD'}`,
    '',
    'GROUP LEADERS:',
    ...Object.keys(GROUPS).map(g=>{const s=calcStandings(g);return`Group ${g}: 1st ${s[0].name} · 2nd ${s[1].name}`;}),
    '',
    'KNOCKOUT:',
    ...[['r32',16],['r16',8],['qf',4],['sf',2],['f',1]].flatMap(([r,n])=>
      Array.from({length:n},(_,i)=>{const t=getKnockoutTeam(r,i);return`${r.toUpperCase()} Match ${i+1}: ${t?.name||'TBD'}`;})
    )
  ];
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/plain'}));
  a.download='wc2026_predictions.txt'; a.click();
}

// ============================================================
// SEARCH
// ============================================================
function doSearch() { filterCards(document.getElementById('searchBox').value.toLowerCase(), '#dashGroups .group-card'); }
function doSearch2() { filterCards(document.getElementById('searchBox2').value.toLowerCase(), '#groupsGrid .date-section'); }
function filterCards(q, sel) {
  document.querySelectorAll(sel).forEach(el => {
    el.style.display = (!q || el.textContent.toLowerCase().includes(q)) ? '' : 'none';
  });
}

// ============================================================
// MUSIC — YouTube IFrame API
// ============================================================
function initMusic() {
  if (musicInited) return;
  musicInited = true;
  document.getElementById('musicBar').style.display = '';
  updateMusicUI();
  // Load YouTube API
  if (!window.YT || !window.YT.Player) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  } else {
    onYouTubeIframeAPIReady();
  }
}

window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player('ytPlayer', {
    height: '1', width: '1',
    videoId: TRACKS[curTrack].ytId,
    playerVars: {
      autoplay: 0, controls: 0, disablekb: 1,
      fs: 0, iv_load_policy: 3, modestbranding: 1,
      origin: location.origin
    },
    events: {
      onReady: (e) => {
        ytReady = true;
        e.target.setVolume(70);
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          if (isRepeat) { ytPlayer.seekTo(0); ytPlayer.playVideo(); }
          else nextTrack();
        }
        if (e.data === YT.PlayerState.PLAYING) { isPlaying = true; updateMusicUI(); }
        if (e.data === YT.PlayerState.PAUSED) { isPlaying = false; updateMusicUI(); }
      },
      onError: () => {
        showToast('Track unavailable, skipping…');
        nextTrack();
      }
    }
  });
};

function togglePlay() {
  if (!ytReady || !ytPlayer) { showToast('Player loading…'); return; }
  if (isPlaying) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
}

function nextTrack() {
  curTrack = isShuffle
    ? Math.floor(Math.random()*TRACKS.length)
    : (curTrack+1) % TRACKS.length;
  loadTrack();
}

function prevTrack() {
  curTrack = (curTrack - 1 + TRACKS.length) % TRACKS.length;
  loadTrack();
}

function loadTrack() {
  if (ytReady && ytPlayer) {
    if (isPlaying) ytPlayer.loadVideoById(TRACKS[curTrack].ytId);
    else ytPlayer.cueVideoById(TRACKS[curTrack].ytId);
  }
  updateMusicUI();
}

function setVol(v) {
  if (ytReady && ytPlayer) ytPlayer.setVolume(parseInt(v));
}

function shuffleToggle() {
  isShuffle = !isShuffle;
  document.getElementById('shuffleBtn').classList.toggle('on', isShuffle);
}

function repeatToggle() {
  isRepeat = !isRepeat;
  document.getElementById('repeatBtn').classList.toggle('on', isRepeat);
}

function updateMusicUI() {
  const t = TRACKS[curTrack];
  const playIcon = isPlaying ? '⏸' : '▶';
  const discSpin = isPlaying ? 'spin' : '';

  // Bar
  document.getElementById('musicTitle').textContent = t.title;
  document.getElementById('musicArtist').textContent = t.artist;
  document.getElementById('playBtn').textContent = playIcon;
  document.getElementById('musicDot').className = `music-dot ${discSpin}`;

  // Modal
  document.getElementById('mmTitle').textContent = t.title;
  document.getElementById('mmArtist').textContent = t.artist;
  document.getElementById('playBtn2').textContent = playIcon;
  document.getElementById('mmDisc').className = `mm-disc ${discSpin}`;

  // Playlist
  const pl = document.getElementById('mmPlaylist');
  if (pl) {
    pl.innerHTML = TRACKS.map((tr, i) => `
      <div class="mm-track${i===curTrack?' active':''}" onclick="jumpTrack(${i})">
        <span class="t-num">${i===curTrack&&isPlaying?'♪':(i+1)}</span>
        <span class="t-title">${tr.title} — ${tr.artist}</span>
      </div>`).join('');
  }
}

function jumpTrack(i) {
  curTrack = i;
  loadTrack();
  if (!isPlaying) togglePlay();
}

function toggleMusicExpand() {
  document.getElementById('musicModal').style.display = 'flex';
  document.getElementById('musicModal').style.flexDirection = 'column';
  document.getElementById('musicModalBg').style.display = 'block';
  updateMusicUI();
}

function closeMusicModal() {
  document.getElementById('musicModal').style.display = 'none';
  document.getElementById('musicModalBg').style.display = 'none';
}

// ============================================================
// CONFETTI
// ============================================================
let confettiDone = false;
function triggerConfetti() {
  if (confettiDone) return; confettiDone = true;
  const colors = ['#B9FF66','#191A23','#F59E0B','#3B82F6','#EF4444'];
  for (let i = 0; i < 60; i++) setTimeout(() => {
    const p = document.createElement('div'); p.className = 'confetti-piece';
    p.style.cssText = `left:${Math.random()*100}vw;background:${colors[i%5]};animation-duration:${2+Math.random()*2}s;width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;border-radius:${Math.random()>.5?'50%':'3px'};`;
    document.body.appendChild(p); setTimeout(() => p.remove(), 4000);
  }, i*30);
  setTimeout(() => confettiDone = false, 10000);
}

// ============================================================
// TOAST
// ============================================================
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ============================================================
// INIT
// ============================================================
populateTeamSelect();
if (S.user) {
  bootApp();
} else {
  const p = new URLSearchParams(location.search).get('p');
  if (p) { try { const d = JSON.parse(atob(p)); S.gPicks=d.g||{}; S.kPicks=d.k||{}; } catch(e){} }
}
