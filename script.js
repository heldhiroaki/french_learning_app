(() => {
  'use strict';

  // =========================
  // 1) DATA
  // =========================

  const animals = [
    { article: 'le', word: 'chat', reading: 'シャ', hint: 'Cat', emoji: '🐱' },
    { article: 'le', word: 'chien', reading: 'シアン', hint: 'Dog', emoji: '🐶' },
    { article: 'le', word: 'lapin', reading: 'ラパン', hint: 'Rabbit', emoji: '🐰' },
    { article: "l'", word: 'oiseau', reading: 'ワゾ', hint: 'Bird', emoji: '🐦' },
    { article: 'le', word: 'cheval', reading: 'シュヴァル', hint: 'Horse', emoji: '🐴' },
    { article: 'la', word: 'vache', reading: 'ヴァッシュ', hint: 'Cow', emoji: '🐮' },
    { article: 'le', word: 'cochon', reading: 'コション', hint: 'Pig', emoji: '🐷' },
    { article: 'le', word: 'mouton', reading: 'ムトン', hint: 'Sheep', emoji: '🐑' },
    { article: 'la', word: 'chèvre', reading: 'シェーヴル', hint: 'Goat', emoji: '🐐' },
    { article: 'le', word: 'canard', reading: 'カナール', hint: 'Duck', emoji: '🦆' },
    { article: 'la', word: 'poule', reading: 'プール', hint: 'Chicken', emoji: '🐔' },
    { article: 'le', word: 'poisson', reading: 'ポワッソン', hint: 'Fish', emoji: '🐟' },
    { article: "l'", word: 'ours', reading: 'ウルス', hint: 'Bear', emoji: '🐻' },
    { article: 'le', word: 'lion', reading: 'リヨン', hint: 'Lion', emoji: '🦁' },
    { article: 'le', word: 'renard', reading: 'ルナール', hint: 'Fox', emoji: '🦊' },
    { article: 'le', word: 'loup', reading: 'ルー', hint: 'Wolf', emoji: '🐺' },
  ];

  const professions = [
    {
      masculine: { article: 'le', word: 'médecin' },
      feminine: { article: 'la', word: 'médecin', same: true },
      reading: 'メドゥサン',
      hint: 'Doctor',
      image: './doctor.jpg',
      sourceNote: 'SOURCE_DOCTOR',
    },
    {
      masculine: { article: 'le', word: 'pompier' },
      feminine: { article: 'la', word: 'pompière' },
      reading: 'ポンピエ',
      hint: 'Firefighter',
      image: './firefighter.jpg',
      sourceNote: 'SOURCE_FIREFIGHTER',
    },
    {
      masculine: { article: 'le', word: 'professeur' },
      feminine: { article: 'la', word: 'professeure' },
      reading: 'プロフェスール',
      hint: 'Teacher',
      image: './teacher.jpg',
      sourceNote: 'SOURCE_TEACHER',
    },
    {
      masculine: { article: "l'", word: 'infirmier' },
      feminine: { article: "l'", word: 'infirmière' },
      reading: 'アンフェルミエ',
      hint: 'Nurse',
      image: './nurse.jpg',
      sourceNote: 'SOURCE_NURSE',
    },
    {
      masculine: { article: 'le', word: 'cuisinier' },
      feminine: { article: 'la', word: 'cuisinière' },
      reading: 'キュイジニエ',
      hint: 'Cook',
      image: './cook.jpg',
      sourceNote: 'SOURCE_COOK',
    },
    {
      masculine: { article: 'le', word: 'policier' },
      feminine: { article: 'la', word: 'policière' },
      reading: 'ポリシエ',
      hint: 'Police officer',
      image: './police.jpg',
      sourceNote: 'SOURCE_POLICE',
    },
  ];

  // ★ NEW: Nature (自然) — emojiではなく画像を参照する
  // 画像ファイル名は [タイトル].png を想定（例: Mountain.png）
  // 画像はリポジトリ直下に置く想定: ./Mountain.png など
 const nature = [
  { article: 'la', word: 'montagne', reading: 'モンターニュ', hint: 'Mountain', image: './Mountain.jpg', sourceNote: 'SOURCE_MOUNTAIN' },
  { article: 'la', word: 'rivière', reading: 'リヴィエール', hint: 'River', image: './River.jpg', sourceNote: 'SOURCE_RIVER' },
  { article: 'la', word: 'mer', reading: 'メール', hint: 'Sea', image: './Sea.jpg', sourceNote: 'SOURCE_SEA' },
  { article: 'le', word: 'lac', reading: 'ラック', hint: 'Lake', image: './Lake.jpg', sourceNote: 'SOURCE_LAKE' },
  { article: 'la', word: 'vallée', reading: 'ヴァレ', hint: 'Valley', image: './Valley.jpg', sourceNote: 'SOURCE_VALLEY' },
  { article: 'la', word: 'cascade', reading: 'カスカード', hint: 'Waterfall', image: './Waterfall.jpg', sourceNote: 'SOURCE_WATERFALL' },
  { article: 'la', word: 'falaise', reading: 'ファレーズ', hint: 'Cliff', image: './Cliff.jpg', sourceNote: 'SOURCE_CLIFF' },
  { article: 'le', word: 'volcan', reading: 'ヴォルカン', hint: 'Volcano', image: './Volcano.jpg', sourceNote: 'SOURCE_VOLCANO' },
  { article: 'le', word: 'canyon', reading: 'カニョン', hint: 'Canyon', image: './Canyon.jpg', sourceNote: 'SOURCE_CANYON' },
  { article: 'le', word: 'glacier', reading: 'グラシエ', hint: 'Glacier', image: './Glacier.jpg', sourceNote: 'SOURCE_GLACIER' },
  { article: 'la', word: 'colline', reading: 'コリーヌ', hint: 'Hill', image: './Hill.jpg', sourceNote: 'SOURCE_HILL' },
  { article: 'le', word: 'désert', reading: 'デゼール', hint: 'Desert', image: './Desert.jpg', sourceNote: 'SOURCE_DESERT' },
  { article: 'la', word: 'grotte', reading: 'グロット', hint: 'Cave', image: './Cave.jpg', sourceNote: 'SOURCE_CAVE' },
  { article: "l'", word: 'île', reading: 'イル', hint: 'Island', image: './Island.jpg', sourceNote: 'SOURCE_ISLAND' },
  { article: 'le', word: 'plateau', reading: 'プラトー', hint: 'Plateau', image: './Plateau.jpg', sourceNote: 'SOURCE_PLATEAU' },
  { article: 'la', word: 'dune', reading: 'デュン', hint: 'Dune', image: './Dune.jpg', sourceNote: 'SOURCE_DUNE' },
];

  const categories = {
    animals: { label: 'Animaux (動物)', items: animals },
    professions: { label: 'Métiers (職業)', items: professions },
    nature: { label: 'Nature (自然)', items: nature }, // ★追加
  };

  const palette = [
    ['#fef3c7', '#fde68a'],
    ['#dbeafe', '#bfdbfe'],
    ['#e0f2fe', '#a5b4fc'],
    ['#ffe4e6', '#fecdd3'],
    ['#f3e8ff', '#ddd6fe'],
    ['#dcfce7', '#bbf7d0'],
    ['#cffafe', '#bae6fd'],
    ['#ede9fe', '#c4b5fd'],
  ];

  // =========================
  // 2) SPEECH
  // =========================

  let frenchVoice = null;
  let currentCategory = 'animals';
  let playToken = 0;

  function selectFrenchVoice() {
    if (!window.speechSynthesis || typeof window.speechSynthesis.getVoices !== 'function') return;
    const voices = window.speechSynthesis.getVoices() || [];
    frenchVoice = voices.find(v => v.lang && v.lang.startsWith('fr')) || null;
    // デバッグしたい場合はこの1行を有効化
    // console.log('Using voice:', frenchVoice ? `${frenchVoice.name} (${frenchVoice.lang})` : 'NONE');
  }

  function cancelSpeech() {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
  }

  function waitMs(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function speakOnce(text, token) {
    return new Promise((resolve) => {
      if (!window.speechSynthesis) return resolve();
      if (token !== playToken) return resolve();

      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      if (frenchVoice) u.voice = frenchVoice;
      u.rate = 0.98;

      const done = () => resolve();

      // Safari等で onend が不安定なことがあるので保険
      const fallback = setTimeout(done, 4500);
      u.onend = () => { clearTimeout(fallback); done(); };
      u.onerror = () => { clearTimeout(fallback); done(); };

      window.speechSynthesis.speak(u);
    });
  }

  async function speakGendered(item) {
    playToken += 1;
    const token = playToken;
    cancelSpeech();

    const male = item.masculine.article === "l'"
      ? `${item.masculine.article}${item.masculine.word}`
      : `${item.masculine.article} ${item.masculine.word}`;

    const female = item.feminine.article === "l'"
      ? `${item.feminine.article}${item.feminine.word}`
      : `${item.feminine.article} ${item.feminine.word}`;

    if (item.feminine.same || male === female) {
      await speakOnce(male, token);
      return;
    }

    await speakOnce(male, token);
    if (token !== playToken) return;

    await waitMs(250);
    if (token !== playToken) return;

    await speakOnce(female, token);
  }

  // =========================
  // 3) FORMATTERS
  // =========================

  function formatWithArticle(item) {
    if (!item.article) return item.word;
    if (item.article === "l'") return `${item.article}${item.word}`;
    return `${item.article} ${item.word}`;
  }

  function formatGendered(item) {
    const m = item.masculine.article === "l'"
      ? `${item.masculine.article}${item.masculine.word}`
      : `${item.masculine.article} ${item.masculine.word}`;

    const f = item.feminine.article === "l'"
      ? `${item.feminine.article}${item.feminine.word}`
      : `${item.feminine.article} ${item.feminine.word}`;

    return (item.feminine.same || m === f) ? `${m} / ${f}（同形）` : `${m} / ${f}`;
  }

  // =========================
  // 4) UI BUILDERS
  // =========================

  function buildEmojiVisual(item, index) {
    const [start, end] = palette[index % palette.length];
    const v = document.createElement('div');
    v.className = 'emoji-visual';
    v.style.setProperty('--start', start);
    v.style.setProperty('--end', end);

    v.innerHTML = `
      <span class="emoji-char">${item.emoji}</span>
      <div class="emoji-labels">
        <span class="emoji-hint">${item.hint}</span>
        <span class="emoji-word">${formatWithArticle(item)}</span>
      </div>
    `;
    return v;
  }

  function buildImageVisual(item, altText) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = altText;
    img.className = 'photo-visual';
    img.loading = 'lazy';
    img.decoding = 'async';

    // 画像が無い/パス違いのときに分かりやすくする
    img.addEventListener('error', () => {
      img.alt = `Missing image: ${altText}`;
      img.style.objectFit = 'contain';
      img.style.background = '#fff';
    });

    return img;
  }

  function createCard(item, index) {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');

    const isProfession = Boolean(item.masculine && item.feminine);
    const titleText = isProfession ? formatGendered(item) : formatWithArticle(item);

    const visual = item.image
      ? buildImageVisual(item, titleText)
      : buildEmojiVisual(item, index);

    const content = document.createElement('div');
    content.className = 'card-content';
    content.innerHTML = `
      <div class="word">
        ${titleText}
        <span class="pill">${item.hint}</span>
      </div>
      <div class="pronunciation">${item.reading}</div>
      <div class="hint">タップして音声を聞く</div>
    `;

    card.append(visual, content);

    const play = async () => {
      const isProfessionInner = Boolean(item.masculine && item.feminine);

      if (isProfessionInner) {
        await speakGendered(item);
      } else {
        playToken += 1;
        const token = playToken;
        cancelSpeech();
        await speakOnce(formatWithArticle(item), token);
      }
    };

    card.addEventListener('click', play);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        play();
      }
    });

    return card;
  }

  function render() {
    const container = document.getElementById('app-container');
    if (!container) return;

    container.innerHTML = '';
    categories[currentCategory].items.forEach((item, i) => {
      container.appendChild(createCard(item, i));
    });
  }

  function setupSelector() {
    const select = document.getElementById('category-select');
    const title = document.getElementById('category-title');
    if (!select || !title) return;

    select.innerHTML = '';
    Object.entries(categories).forEach(([key, cat]) => {
      const o = document.createElement('option');
      o.value = key;
      o.textContent = cat.label;
      if (key === currentCategory) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener('change', (e) => {
      const next = e.target.value;
      if (!categories[next]) return;
      currentCategory = next;
      title.textContent = categories[currentCategory].label;
      render();
    });
  }

  // =========================
  // 5) BOOT
  // =========================

  window.addEventListener('load', () => {
    selectFrenchVoice();

    // voices が遅延で来るブラウザ対応
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = selectFrenchVoice;
    }

    setupSelector();
    render();
  });
})();
