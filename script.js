// script.js
(() => {
  'use strict';

  const doctorSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="médecin illustration">
  <defs>
    <linearGradient id="bg-doc" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#e8f3ff"/>
      <stop offset="100%" stop-color="#d6e8ff"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" rx="40" fill="url(#bg-doc)"/>
  <rect x="30" y="60" width="340" height="280" rx="26" fill="#fff" stroke="#cdd6e5" stroke-width="4"/>
  <rect x="90" y="110" width="220" height="180" rx="20" fill="#f4f7fb"/>
  <circle cx="200" cy="140" r="58" fill="#f2c9a5"/>
  <circle cx="176" cy="130" r="6" fill="#374151"/>
  <circle cx="224" cy="130" r="6" fill="#374151"/>
  <rect x="180" y="165" width="40" height="10" rx="5" fill="#e58f73"/>
  <path d="M120 240q80 40 160 0l-12-50H132z" fill="#1f2937"/>
  <rect x="116" y="220" width="168" height="120" rx="28" fill="#f9fbff" stroke="#cdd6e5" stroke-width="4"/>
  <rect x="172" y="214" width="56" height="22" rx="8" fill="#0ea5e9"/>
  <circle cx="230" cy="250" r="24" fill="none" stroke="#1f2937" stroke-width="7"/>
  <path d="M230 274v24" stroke="#1f2937" stroke-width="7" stroke-linecap="round"/>
  <rect x="176" y="270" width="12" height="30" rx="6" fill="#1f2937"/>
  <rect x="150" y="256" width="18" height="16" rx="6" fill="#1f2937"/>
  <path d="M100 250h50" stroke="#1f2937" stroke-width="7" stroke-linecap="round"/>
  <path d="M250 250h50" stroke="#1f2937" stroke-width="7" stroke-linecap="round"/>
  <rect x="155" y="290" width="90" height="30" rx="10" fill="#0ea5e9"/>
  <rect x="125" y="322" width="150" height="40" rx="12" fill="#1f2937"/>
  <rect x="170" y="336" width="60" height="12" rx="6" fill="#111827"/>
</svg>
`)}`;

  const firefighterSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="pompier illustration">
  <defs>
    <linearGradient id="bg-fire" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#ffe6d5"/>
      <stop offset="100%" stop-color="#ffd1a6"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" rx="40" fill="url(#bg-fire)"/>
  <rect x="40" y="70" width="320" height="260" rx="28" fill="#fff7ed" stroke="#fbbf24" stroke-width="6"/>
  <rect x="80" y="140" width="240" height="200" rx="26" fill="#f59e0b"/>
  <rect x="90" y="150" width="220" height="140" rx="22" fill="#facc15"/>
  <circle cx="200" cy="140" r="60" fill="#f97316" stroke="#b91c1c" stroke-width="8"/>
  <rect x="140" y="110" width="120" height="24" rx="8" fill="#ef4444" stroke="#b91c1c" stroke-width="6"/>
  <rect x="175" y="70" width="50" height="20" rx="6" fill="#ef4444" stroke="#b91c1c" stroke-width="6"/>
  <circle cx="175" cy="150" r="6" fill="#0f172a"/>
  <circle cx="225" cy="150" r="6" fill="#0f172a"/>
  <rect x="182" y="182" width="36" height="10" rx="5" fill="#b91c1c"/>
  <path d="M130 230q70 42 140 0l-10-44H140z" fill="#92400e"/>
  <rect x="116" y="230" width="168" height="120" rx="26" fill="#f59e0b" stroke="#d97706" stroke-width="6"/>
  <rect x="110" y="255" width="180" height="20" rx="8" fill="#fde68a"/>
  <rect x="110" y="295" width="180" height="20" rx="8" fill="#fde68a"/>
  <rect x="176" y="250" width="48" height="36" rx="10" fill="#111827"/>
  <rect x="170" y="280" width="60" height="50" rx="16" fill="#0f172a"/>
  <rect x="140" y="250" width="20" height="70" rx="10" fill="#1f2937"/>
  <rect x="240" y="250" width="20" height="70" rx="10" fill="#1f2937"/>
  <rect x="190" y="320" width="20" height="30" rx="10" fill="#1f2937"/>
</svg>
`)}`;

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
    article: 'le',
    word: 'médecin',
    reading: 'メドゥサン',
    hint: 'Doctor',
    image: './doctor.png',
  },
  {
    article: 'le',
    word: 'pompier',
    reading: 'ポンピエ',
    hint: 'Firefighter',
    image: './firefighter.png',
  },
];

  const categories = {
    animals: { label: 'Animaux (動物)', items: animals },
    professions: { label: 'Métiers (職業)', items: professions },
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

  let frenchVoice = null;
  let currentCategory = 'animals';

  function selectFrenchVoice() {
    if (!window.speechSynthesis || typeof window.speechSynthesis.getVoices !== 'function') {
      frenchVoice = null;
      return;
    }
    const voices = window.speechSynthesis.getVoices() || [];
    frenchVoice = voices.find((v) => v.lang && v.lang.startsWith('fr')) || null;
  }

  function speakWord(text) {
    if (!('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    if (frenchVoice) utterance.voice = frenchVoice;
    utterance.rate = 0.98;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function formatWithArticle(item) {
    if (!item.article) return item.word;
    if (item.article === "l'") return `${item.article}${item.word}`;
    return `${item.article} ${item.word}`;
  }

  function buildEmojiVisual(item, index) {
    const [start, end] = palette[index % palette.length];
    const visual = document.createElement('div');
    visual.className = 'emoji-visual';
    visual.style.setProperty('--start', start);
    visual.style.setProperty('--end', end);
    visual.setAttribute('aria-hidden', 'true');

    const emoji = document.createElement('span');
    emoji.className = 'emoji-char';
    emoji.textContent = item.emoji;

    const labels = document.createElement('div');
    labels.className = 'emoji-labels';

    const hint = document.createElement('span');
    hint.className = 'emoji-hint';
    hint.textContent = item.hint;

    const word = document.createElement('span');
    word.className = 'emoji-word';
    word.textContent = formatWithArticle(item);

    labels.append(hint, word);
    visual.append(emoji, labels);
    return visual;
  }

  function buildImageVisual(item) {
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = `${formatWithArticle(item)} illustration`;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.referrerPolicy = 'no-referrer';
    image.className = 'photo-visual';
    return image;
  }

  function createCard(item, index) {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${formatWithArticle(item)} を再生`);

    const visual = item.image ? buildImageVisual(item) : buildEmojiVisual(item, index);

    const content = document.createElement('div');
    content.className = 'card-content';

    const wordRow = document.createElement('div');
    wordRow.className = 'word';
    wordRow.textContent = formatWithArticle(item);

    const pill = document.createElement('span');
    pill.className = 'pill';
    pill.textContent = item.hint;
    wordRow.appendChild(pill);

    const pronunciation = document.createElement('div');
    pronunciation.className = 'pronunciation';
    pronunciation.textContent = item.reading;

    const hint = document.createElement('div');
    hint.className = 'hint';
    hint.innerHTML =
      '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 9v6l5-3-5-3z"></path><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg><span>タップして音声を聞く</span>';

    content.append(wordRow, pronunciation, hint);
    card.append(visual, content);

    const handlePlay = () => speakWord(formatWithArticle(item));
    card.addEventListener('click', handlePlay);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handlePlay();
      }
    });

    return card;
  }

  function renderBadge() {
    const badge = document.getElementById('badge');
    if (!badge) return;

    if ('speechSynthesis' in window) {
      badge.hidden = false;
      badge.innerHTML =
        '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5v14l11-7z"></path><path d="M5 5v14"></path></svg><span>ネイティブ風の音声でチェックしよう</span>';
    } else {
      badge.hidden = true;
    }
  }

  function renderGrid() {
    const container = document.getElementById('app-container');
    if (!container) return;

    container.innerHTML = '';
    const { items } = categories[currentCategory];

    items.forEach((item, index) => {
      container.appendChild(createCard(item, index));
    });

    if (!('speechSynthesis' in window)) {
      if (!document.querySelector('footer')) {
        const footer = document.createElement('footer');
        footer.textContent =
          'お使いのブラウザでは音声再生に対応していません。フランス語の音声合成に対応したブラウザでお試しください。';
        document.body.appendChild(footer);
      }
    }
  }

  function setupCategorySelector() {
    const selector = document.getElementById('category-select');
    const heading = document.getElementById('category-title');
    if (!selector || !heading) return;

    // 初期化（重複防止）
    selector.innerHTML = '';

    Object.entries(categories).forEach(([key, category]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = category.label;
      if (key === currentCategory) option.selected = true;
      selector.appendChild(option);
    });

    selector.addEventListener('change', (event) => {
      const next = event.target.value;
      if (!categories[next]) return;
      currentCategory = next;
      heading.textContent = categories[next].label;
      renderGrid();
    });
  }

  window.addEventListener('load', () => {
    selectFrenchVoice();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.addEventListener('voiceschanged', selectFrenchVoice);
    }
    setupCategorySelector();
    renderBadge();
    renderGrid();
  });
})();
