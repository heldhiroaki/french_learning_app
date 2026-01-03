(() => {
  'use strict';

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
    if (!window.speechSynthesis) return;
    const voices = window.speechSynthesis.getVoices() || [];
    frenchVoice = voices.find(v => v.lang && v.lang.startsWith('fr')) || null;
  }

  function speakWord(text) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'fr-FR';
    if (frenchVoice) u.voice = frenchVoice;
    u.rate = 0.98;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  function formatWithArticle(item) {
    if (item.article === "l'") return `${item.article}${item.word}`;
    return `${item.article} ${item.word}`;
  }

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

  function buildImageVisual(item) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = formatWithArticle(item);
    img.className = 'photo-visual';
    img.loading = 'lazy';
    return img;
  }

  function createCard(item, index) {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;

    const visual = item.image
      ? buildImageVisual(item)
      : buildEmojiVisual(item, index);

    const content = document.createElement('div');
    content.className = 'card-content';
    content.innerHTML = `
      <div class="word">
        ${formatWithArticle(item)}
        <span class="pill">${item.hint}</span>
      </div>
      <div class="pronunciation">${item.reading}</div>
      <div class="hint">タップして音声を聞く</div>
    `;

    card.append(visual, content);
    card.addEventListener('click', () => speakWord(formatWithArticle(item)));
    return card;
  }

  function render() {
    const container = document.getElementById('app-container');
    container.innerHTML = '';
    categories[currentCategory].items.forEach((item, i) => {
      container.appendChild(createCard(item, i));
    });
  }

  function setupSelector() {
    const select = document.getElementById('category-select');
    const title = document.getElementById('category-title');

    Object.entries(categories).forEach(([key, cat]) => {
      const o = document.createElement('option');
      o.value = key;
      o.textContent = cat.label;
      select.appendChild(o);
    });

    select.addEventListener('change', e => {
      currentCategory = e.target.value;
      title.textContent = categories[currentCategory].label;
      render();
    });
  }

  window.addEventListener('load', () => {
    selectFrenchVoice();
    if (speechSynthesis) {
      speechSynthesis.addEventListener('voiceschanged', selectFrenchVoice);
    }
    setupSelector();
    render();
  });
})();
