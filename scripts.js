document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }


    showSlide(currentSlide);

    // это потом бля хуйня не работает
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', nextSlide);
    document.body.appendChild(nextButton);
});
// анимка при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const profileInfo = document.querySelector('.profile-info');
    const projects = document.querySelectorAll('.project');
    const header = document.querySelector('header');
    
    profileInfo.style.opacity = 0;
    profileInfo.style.transform = 'translateY(-20px)';
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        profileInfo.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        profileInfo.style.opacity = 1;
        profileInfo.style.transform = 'translateY(0)';
        header.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 300);
    
    projects.forEach((project, index) => {
        project.style.opacity = 0;
        project.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            project.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
            project.style.opacity = 1;
            project.style.transform = 'translateY(0)';
        }, 500);
    });
});

// прокрут стр
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const link = project.querySelector('a');

    });
});
document.addEventListener('DOMContentLoaded', function() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    
    const visitCountElement = document.getElementById('visit-count');
    visitCountElement.textContent = visitCount;
});
const translations = {
    ru: {
        name: "Акулич Альберт",
        profile: "Python-Разработчик из России, увлекаюсь этичным взломом",
        skills: "Навыки",
        coding: "Программирование",
        hacking: "Этичный взлом",
        other_skills: "Другие навыки",
        contact: "Мои контакты:",
        my_projects: "Мои проекты:",
        telegram_tool: "Инструмент удаленного управления Telegram",
        telegram_tool_desc: "Этот проект - это Telegram-бот для удаленного управления компьютером. Пользователи могут запускать приложения, управлять файлами и контролировать состояние системы через мессенджер, обеспечивая безопасное соединение и удобство использования.",
        murmuwer_tools: "Инструменты Murmuwer",
        murmuwer_tools_desc: "Комбинирует функциональность моих собственных инструментов с другими популярными программами, предоставляя широкий спектр возможностей для открытой разведки.",
        leaks_bot: "Бот для утечек и разведки Telegram",
        leaks_bot_desc: "Этот проект - это Telegram-бот, который позволяет пользователям искать текст в файлах и получать информацию о номерах телефонов и пользователях социальных сетей. Бот разработан с использованием библиотеки aiogram для асинхронного взаимодействия с API Telegram. Он также включает функции работы с файлами и веб-запросами.",
        luckyjet_bot: "Бот LuckyJet Casino",
        luckyjet_bot_desc: "LuckyJet - ваш личный гид по миру азартных игр и удачи! Созданный по заказу для казино, этот уникальный бот предназначен для того, чтобы предложить пользователям захватывающий опыт и шанс на большой выигрыш. Оснащенный специальной кодовой фразой, LuckyJet мгновенно превращает ваше виртуальное путешествие в захватывающий полет удачи.",
        learn_more: "Узнать больше"
    },
    en: {
        name: "Akulich Albert",
        profile: "Python developer from Russia, addicted to ethical hacking",
        skills: "Skills",
        coding: "Coding",
        hacking: "Hacking",
        other_skills: "Other Skills",
        contact: "Contact me:",
        my_projects: "My projects:",
        telegram_tool: "Telegram Remote Control tool",
        telegram_tool_desc: "This project is a Telegram bot for remote computer management. Users can launch applications, manage files, and monitor system status through the messenger, providing a secure connection and ease of use.",
        murmuwer_tools: "Murmuwer Tools",
        murmuwer_tools_desc: "Combines the functionality of my own tools with other popular programs, providing a wide range of capabilities for open-source intelligence gathering.",
        leaks_bot: "Leaks&Osint Telegram bot",
        leaks_bot_desc: "This project is a Telegram bot that allows users to search for text in files and obtain information about phone numbers and social media users. The bot is developed using the aiogram library for asynchronous interaction with the Telegram API. It also includes features for working with files and web requests.",
        luckyjet_bot: "LuckyJet Casino Bot",
        luckyjet_bot_desc: "LuckyJet - your personal guide to the world of gambling and luck! Created on demand for casinos, this unique bot is designed to offer users an exciting experience and a chance at a big win. Equipped with a special passphrase, LuckyJet instantly transforms your virtual journey into an exhilarating flight of luck.",
        learn_more: "Learn More"
    }
};

document.getElementById("language-btn").addEventListener("click", () => {
    document.getElementById("language-menu").classList.toggle("show");
});

document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        switchLanguage(lang);
        document.getElementById('current-lang-icon').src = e.currentTarget.querySelector('img').src;
        document.getElementById("language-menu").classList.remove("show");
    });
});

function switchLanguage(lang) {
    document.querySelectorAll('.translate').forEach(el => {
        const key = el.getAttribute('data-key');
        el.textContent = translations[lang][key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    switchLanguage('ru'); // defolt language
});

