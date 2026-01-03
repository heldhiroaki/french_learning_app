const animals = [
    { fr: "Le chien", kana: "ル・シアン", gender: "le", img: "https://placehold.jp/150x150.png?text=Chien" },
    { fr: "La chatte", kana: "ラ・シャットゥ", gender: "la", img: "https://placehold.jp/150x150.png?text=Chatte" },
    { fr: "Le lapin", kana: "ル・ラパン", gender: "le", img: "https://placehold.jp/150x150.png?text=Lapin" },
    { fr: "La girafe", kana: "ラ・ジラフ", gender: "la", img: "https://placehold.jp/150x150.png?text=Girafe" }
];

const container = document.getElementById('app-container');

animals.forEach(animal => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${animal.img}" alt="${animal.fr}">
        <p class="french ${animal.gender}">${animal.fr}</p>
        <p class="kana">${animal.kana}</p>
    `;

    card.onclick = () => {
        speakFrench(animal.fr);
    };

    container.appendChild(card);
});

function speakFrench(text) {
    // ブラウザの音声合成機能を使用
    const uttr = new SpeechSynthesisUtterance(text);
    uttr.lang = 'fr-FR'; // フランス語に設定
    uttr.rate = 0.9;      // 少しゆっくり再生
    window.speechSynthesis.speak(uttr);
}
