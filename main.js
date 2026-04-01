import i18next from 'i18next';

// Translations
const resources = {
    en: {
        translation: {
            "nav.activities": "Activities",
            "nav.about": "About",
            "nav.contact": "Contact",
            "hero.badge": "System Ready",
            "hero.subtitle1": "Software Engineer",
            "hero.subtitle2": "Machine Learning Engineer",
            "activities.title": "Achievements & Activities",
            "card1.title": "Kaggle Competitions",
            "card1.desc": "Fine-tuned LLMs using QLoRA and built simple time-series models.",
            "card2.title": "ID-POS Data Analysis",
            "card2.desc": "Analyzed ID-POS data to uncover actionable insights.",
            "card2.tag1": "Data Analysis",
            "card3.title": "Certified ScrumMaster®",
            "card3.desc": "Facilitating agile methodologies and maximizing team value.",
            "card3.tag1": "Agile",
            "card4.title": "In-house Software Engineer",
            "card4.desc": "Developed internal software solutions and product features.",
            "card5.title": "Competitive Programming",
            "card5.desc": "Ranked Green in AtCoder, demonstrating strong algorithm skills.",
            "card5.tag1": "Algorithms",
            "card5.tag2": "Data Structures",
            "card6.title": "Technical Articles",
            "card6.desc": "Writing articles sharing knowledge about Go, Rust, Terraform, Kubernetes, and Flink.",
            "about.title": "About Me & Philosophy",
            "about.desc": "My core philosophy as an engineer is to build products that genuinely <strong>solve user problems</strong>. Leveraging my experience as a Scrum Master, I drive development processes that maximize value across the entire team.<br><br>Currently transitioning from software development into the world of Machine Learning and Data Science.",
            "about.research": "Research & Publications",
            "about.link": "[Link]",
            "interests.title": "Interests",
            "interests.hiking": "Hiking",
            "interests.music": "Music",
            "interests.stats": "Statistics",
            "interests.running": "Running",
            "interests.futsal": "Futsal",
            "interests.english": "English Learning",
            "interests.reading": "Reading",
            "interests.dance": "Dance",
            "action.view": "[View]",
            "action.listen": "[Listen]",
            "action.recs": "[Recs]",
            "action.cert": "[Cert]",
            "action.ext": "[Ext ↗]",
            "action.info": "[Info]",
            "contact.title": "Let's Connect",
            "contact.desc": "Follow me on GitHub or X to stay updated.",
            "modal.hiking.title": "Hiking",
            "modal.hiking.p1": "Mt. Nantai, Nikko",
            "modal.hiking.p2": "Mt. Oyama, Kanagawa",
            "modal.running.title": "Running - Personal Bests",
            "modal.running.half": "Half Marathon:",
            "modal.running.10k": "10km:",
            "modal.english.title": "English Learning",
            "modal.english.p1": "Eiken Grade Pre-1",
            "modal.dance.title": "Dance",
            "modal.dance.p1": "Some experience in Lock and Hiphop.",
            "modal.music.title": "Music",
            "modal.close": "Close"
        }
    },
    ja: {
        translation: {
            "nav.activities": "活動",
            "nav.about": "自己紹介",
            "nav.contact": "連絡先",
            "hero.badge": "System Ready",
            "hero.subtitle1": "ソフトウェアエンジニア",
            "hero.subtitle2": "機械学習エンジニア",
            "activities.title": "実績と活動",
            "card1.title": "Kaggle コンペティション",
            "card1.desc": "QLoRAを用いたLLMのファインチューニングや、時系列モデルの構築。",
            "card2.title": "ID-POS データ分析",
            "card2.desc": "ID-POSデータから実践的な洞察を導出する分析。",
            "card2.tag1": "データ分析",
            "card3.title": "認定スクラムマスター®",
            "card3.desc": "アジャイル手法を推進し、チームの価値を最大化。",
            "card3.tag1": "アジャイル",
            "card4.title": "社内ソフトウェアエンジニア",
            "card4.desc": "社内システムおよびプロダクト基盤の開発。",
            "card5.title": "競技プログラミング",
            "card5.desc": "AtCoder緑ランク。確かなアルゴリズム実装力を証明。",
            "card5.tag1": "アルゴリズム",
            "card5.tag2": "データ構造",
            "card6.title": "技術記事の執筆",
            "card6.desc": "Go, Rust, Terraform, K8s, Flink等の知見をQiitaで共有。",
            "about.title": "自己紹介 & 哲学",
            "about.desc": "エンジニアとしての私の哲学は、<strong>ユーザーの課題を解決する</strong>プロダクトを作ることです。スクラムマスターの経験を活かし、チーム全体の価値を最大化する開発プロセスを推進します。<br><br>現在はソフトウェア開発から、機械学習やデータサイエンスの世界へ移行中です。",
            "about.research": "研究・論文",
            "about.link": "[リンク]",
            "interests.title": "興味・関心",
            "interests.hiking": "ハイキング",
            "interests.music": "音楽",
            "interests.stats": "統計学",
            "interests.running": "ランニング",
            "interests.futsal": "フットサル",
            "interests.english": "英語学習",
            "interests.reading": "読書",
            "interests.dance": "ダンス",
            "action.view": "[詳細]",
            "action.listen": "[聴く]",
            "action.recs": "[記録]",
            "action.cert": "[資格]",
            "action.ext": "[外部リンク ↗]",
            "action.info": "[情報]",
            "contact.title": "連絡先",
            "contact.desc": "最新情報はGitHubやXをフォローしてください。",
            "modal.hiking.title": "ハイキング",
            "modal.hiking.p1": "日光 男体山",
            "modal.hiking.p2": "神奈川 大山",
            "modal.running.title": "ランニング - 自己ベスト",
            "modal.running.half": "ハーフマラソン:",
            "modal.running.10k": "10km:",
            "modal.english.title": "英語学習",
            "modal.english.p1": "英検 準1級",
            "modal.dance.title": "ダンス",
            "modal.dance.p1": "LockとHiphopの経験が少しあります。",
            "modal.music.title": "音楽",
            "modal.close": "閉じる"
        }
    }
};

// Initialize i18next
let defaultLang = 'en';
if (navigator.language && navigator.language.startsWith('ja')) {
    defaultLang = 'ja';
}
const savedLang = localStorage.getItem('lang') || defaultLang;
i18next.init({
    lng: savedLang,
    resources,
}).then(function (t) {
    updateContent();
    updateLangButton();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });
}

const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const currentLang = i18next.language;
        const newLang = currentLang === 'en' ? 'ja' : 'en';
        i18next.changeLanguage(newLang).then(() => {
            localStorage.setItem('lang', newLang);
            updateContent();
            updateLangButton();
        });
    });
}

function updateLangButton() {
    if (langToggleBtn) {
        langToggleBtn.textContent = i18next.language === 'en' ? 'JP' : 'EN';
    }
}

// Theme toggling
const themeToggleBtn = document.getElementById('theme-toggle');
let defaultTheme = 'light';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    defaultTheme = 'dark';
}
const currentTheme = localStorage.getItem('theme') || defaultTheme;
document.documentElement.setAttribute('data-theme', currentTheme);

if (themeToggleBtn) {
    updateThemeButton(currentTheme);
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });
}

function updateThemeButton(theme) {
    if (themeToggleBtn) {
        themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Typewriter
const greetingText = document.getElementById('ai-greeting');
const textToType = '> Initializing portfolio... \n> Hello World.';
let i = 0;

function typeWriter() {
    if (i < textToType.length && greetingText) {
        if (textToType.charAt(i) === '\n') {
            greetingText.innerHTML += '<br/>';
        } else {
            greetingText.innerHTML += textToType.charAt(i);
        }
        i++;
        setTimeout(typeWriter, Math.random() * 50 + 50); // random delay 50-100ms
    }
    // Typing indicator removing logic deleted as requested
}

// Start typing effect on load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal Logic
document.querySelectorAll('.modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    });
});

document.querySelectorAll('.modal .btn-secondary').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.close();
        }
    });
});

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    });
});

// Mobile navigation toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const hamburgerSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hamburger-icon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
const closeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

if (mobileMenuBtn && navLinks) {
    const closeMenu = () => {
        navLinks.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = hamburgerSVG;
    };

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.contains('menu-open');
        if (isOpen) {
            closeMenu();
        } else {
            navLinks.classList.add('menu-open');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mobileMenuBtn.innerHTML = closeSVG;
        }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('menu-open')) {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMenu();
            }
        }
    });
}
