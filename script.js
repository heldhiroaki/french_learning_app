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

  function selectFrenchVoice() {
    if (!window.speechSynthesis || typeof window.speechSynthesis.getVoices !== 'function') {
      frenchVoice = null;
      return;
    }

    const voices = window.speechSynthesis.getVoices() || [];
    frenchVoice = voices.find((voice) => voice.lang && voice.lang.startsWith('fr')) || null;
  }

  function speakWord(word) {
    if (!('speechSynthesis' in window)) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'fr-FR';
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }
    utterance.rate = 0.98;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function formatWithArticle(animal) {
    if (!animal.article) return animal.word;
    if (animal.article === "l'") {
      return `${animal.article}${animal.word}`;
    }
    return `${animal.article} ${animal.word}`;
  }

  function buildEmojiVisual(animal, index) {
    const [start, end] = palette[index % palette.length];
    const visual = document.createElement('div');
    visual.className = 'emoji-visual';
    visual.style.setProperty('--start', start);
    visual.style.setProperty('--end', end);
    visual.setAttribute('aria-hidden', 'true');

    const emoji = document.createElement('span');
    emoji.className = 'emoji-char';
    emoji.textContent = animal.emoji;

    const labels = document.createElement('div');
    labels.className = 'emoji-labels';

    const hint = document.createElement('span');
    hint.className = 'emoji-hint';
    hint.textContent = animal.hint;

    const word = document.createElement('span');
    word.className = 'emoji-word';
    word.textContent = formatWithArticle(animal);

    labels.append(hint, word);
    visual.append(emoji, labels);
    return visual;
  }

  function createCard(animal, index) {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${formatWithArticle(animal)} を再生`);

    const visual = buildEmojiVisual(animal, index);
    visual.setAttribute('role', 'presentation');

    const content = document.createElement('div');
    content.className = 'card-content';

    const wordRow = document.createElement('div');
    wordRow.className = 'word';
    wordRow.textContent = formatWithArticle(animal);

    const pill = document.createElement('span');
    pill.className = 'pill';
    pill.textContent = animal.hint;
    wordRow.appendChild(pill);

    const pronunciation = document.createElement('div');
    pronunciation.className = 'pronunciation';
    pronunciation.textContent = animal.reading;

    const hint = document.createElement('div');
    hint.className = 'hint';
    hint.innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 9v6l5-3-5-3z"></path><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg><span>タップして音声を聞く</span>';

    content.append(wordRow, pronunciation, hint);
    card.append(visual, content);

    const handlePlay = () => speakWord(formatWithArticle(animal));
    card.addEventListener('click', handlePlay);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handlePlay();
      }
    });

    return card;
  }

  function renderGrid() {
    const container = document.getElementById('app-container');
    if (!container) return;

    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.innerHTML = '<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5v14l11-7z"></path><path d="M5 5v14"></path></svg><span>ネイティブ風の音声でチェックしよう</span>';

    container.before(badge);

    animals.forEach((animal, index) => {
      const card = createCard(animal, index);
      container.appendChild(card);
    });

    if (!('speechSynthesis' in window)) {
      const footer = document.createElement('footer');
      footer.textContent = 'お使いのブラウザでは音声再生に対応していません。フランス語の音声合成に対応したブラウザでお試しください。';
      document.body.appendChild(footer);
    }
  }

  window.addEventListener('load', () => {
    selectFrenchVoice();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.addEventListener('voiceschanged', selectFrenchVoice);
    }
    renderGrid();
  });
})();
