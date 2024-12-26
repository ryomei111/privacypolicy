// 言語ごとのテキスト
const translations = {
    jp: {
        description: "これはプライバシーポリシーです",
    },
    en: {
        description: "This is \"privacy policy\".",
    },
};

// 言語を切り替える関数
function switchLanguage(lang) {
    document.getElementById("description").textContent = translations[lang].description;
    document.getElementById("favorites").textContent = translations[lang].favorites;
    document.getElementById("respect").textContent = translations[lang].respect;
}

// 現在の年をフッターに表示する関数
function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
}

// 初期化処理
window.onload = function () {
    // 初期設定: 日本語を表示
    switchLanguage("jp");
    displayCurrentYear();

    // 言語選択メニューのイベントリスナーを設定
    document.getElementById("language").addEventListener("change", function () {
        switchLanguage(this.value);
    });
};
