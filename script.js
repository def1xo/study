const uiDict = {
    ru: {
        chartTitle: "Сравнение характеристик",
        chartSub: "Выберите языки для отображения на радарной диаграмме",
        gridTitle: "Каталог Технологий",
        moreBtn: "Подробнее",
        modalFeaturesTitle: "Ключевые особенности:",
        chartLabels: ['Скорость', 'Сложность', 'Популярность', 'Экосистема', 'Вакансии', 'Универсальность', 'Комьюнити'],
        themeDarkBtn: "Темная",
        themeLightBtn: "Светлая"
    },
    en: {
        chartTitle: "Characteristics Comparison",
        chartSub: "Select languages to display on the radar chart",
        gridTitle: "Technology Catalog",
        moreBtn: "Learn More",
        modalFeaturesTitle: "Key Features:",
        chartLabels: ['Performance', 'Difficulty', 'Popularity', 'Ecosystem', 'Jobs', 'Versatility', 'Community'],
        themeDarkBtn: "Dark",
        themeLightBtn: "Light"
    }
};

const languagesData = [
    { 
        id: 'python', name: 'Python', logo: 'img/python.svg', color: '#3b82f6', stats: [40, 20, 100, 95, 90, 90, 100],
        ru: { 
            short: 'ИИ, данные и мощный бэкенд.', 
            long: 'Python — это высокоуровневый язык с акцентом на чистоту и читаемость кода. Благодаря колоссальной экосистеме библиотек (TensorFlow, Pandas, Django), он стал абсолютным монополистом в сфере нейросетей, машинного обучения и анализа данных. Отлично подходит как первый язык для изучения, но при этом используется гигантами вроде Google и NASA для сложнейших серверных вычислений.', 
            features: ['Максимально простой синтаксис', 'Лидер в ИИ и Data Science', 'Интерпретируемый и универсальный'] 
        },
        en: { 
            short: 'AI, Data and powerful Backend.', 
            long: 'Python is a high-level language with a strong emphasis on code readability. Thanks to its massive ecosystem of libraries (TensorFlow, Pandas, Django), it has become the absolute monopolist in neural networks, machine learning, and data analytics. It is an excellent first language to learn, yet it is used by tech giants like Google and NASA for highly complex server computations.', 
            features: ['Extremely simple syntax', 'Leader in AI & Data Science', 'Interpreted and versatile'] 
        }
    },
    { 
        id: 'js', name: 'JavaScript', logo: 'img/js.svg', color: '#eab308', stats: [60, 40, 95, 100, 95, 80, 95],
        ru: { 
            short: 'Монополист веб-разработки.', 
            long: 'JavaScript — это язык, который делает интернет живым. Изначально созданный только для браузеров, чтобы добавлять анимации и интерактив на сайты, сегодня он вырос в настоящего гиганта. С появлением Node.js на JavaScript пишут полноценные серверные приложения, а с React Native — мобильные приложения. Ни один современный веб-проект не обходится без него.', 
            features: ['Работает в любом браузере', 'Асинхронная модель выполнения', 'Самый большой пакетный менеджер NPM'] 
        },
        en: { 
            short: 'Web development monopolist.', 
            long: 'JavaScript is the language that makes the internet alive. Originally created only for browsers to add animations and interactivity to websites, it has grown into a true giant today. With the advent of Node.js, JavaScript is used to write full-fledged server applications, and with React Native, mobile apps. No modern web project can exist without it.', 
            features: ['Runs natively in browsers', 'Asynchronous execution model', 'The largest package manager (NPM)'] 
        }
    },
    { 
        id: 'cpp', name: 'C++', logo: 'img/cpp.svg', color: '#3b82f6', stats: [100, 95, 75, 80, 70, 70, 80],
        ru: { 
            short: 'Максимальная скорость и контроль.', 
            long: 'C++ — это язык для тех, кому важна каждая миллисекунда производительности. Он предоставляет разработчику полный низкоуровневый контроль над памятью и ресурсами компьютера. Именно на нем написаны Windows, движок Unreal Engine, высокочастотные торговые роботы и драйверы устройств. Это сложный язык, ошибки в котором могут обрушить систему, но его мощность непревзойденна.', 
            features: ['Высочайшая производительность', 'Ручное управление памятью', 'Крайне высокий порог входа'] 
        },
        en: { 
            short: 'Maximum speed and control.', 
            long: 'C++ is a language for those who care about every millisecond of performance. It provides developers with complete low-level control over computer memory and resources. Windows, the Unreal Engine, high-frequency trading bots, and hardware drivers are written in it. It is a complex language where errors can crash a system, but its raw power is unmatched.', 
            features: ['Blazing fast performance', 'Manual memory management', 'Very steep learning curve'] 
        }
    },
    { 
        id: 'java', name: 'Java', logo: 'img/java.svg', color: '#ef4444', stats: [75, 60, 85, 90, 90, 75, 85],
        ru: { 
            short: 'Корпоративный и банковский стандарт.', 
            long: 'Java работает по принципу "написано однажды, работает везде" благодаря виртуальной машине JVM. Это строгий, надежный и безопасный язык, который стал стандартом де-факто для Enterprise-разработки. На Java работают серверные части крупнейших банков, облачные инфраструктуры и миллионы Android-приложений. Имеет автоматический сборщик мусора, что сильно упрощает жизнь.', 
            features: ['Строгая объектно-ориентированность', 'Кроссплатформенность (JVM)', 'Высокий уровень безопасности'] 
        },
        en: { 
            short: 'Enterprise and banking standard.', 
            long: 'Java works on the "write once, run anywhere" principle thanks to the JVM. It is a strict, reliable, and secure language that has become the de facto standard for Enterprise development. The server backends of major banks, cloud infrastructures, and millions of Android apps run on Java. It features an automatic garbage collector, making memory management much easier.', 
            features: ['Strictly object-oriented', 'Cross-platform (JVM)', 'High level of built-in security'] 
        }
    },
    { 
        id: 'csharp', name: 'C#', logo: 'img/cs.svg', color: '#8b5cf6', stats: [80, 60, 80, 90, 85, 85, 85],
        ru: { 
            short: 'Основа экосистемы Microsoft и Unity.', 
            long: 'C# был разработан Microsoft как ответ на Java, но со временем превзошел её по многим синтаксическим возможностям. Это невероятно мощный и элегантный язык, который является сердцем фреймворка .NET. Сегодня он доминирует не только в корпоративном софте под Windows, но и в игровой индустрии, являясь основным языком для создания игр на популярнейшем движке Unity3D.', 
            features: ['Разработка кроссплатформенных игр', 'Глубокая интеграция с .NET', 'Современный и лаконичный синтаксис'] 
        },
        en: { 
            short: 'Core of Microsoft ecosystem and Unity.', 
            long: 'C# was developed by Microsoft as an answer to Java, but over time surpassed it in many syntactic capabilities. It is an incredibly powerful and elegant language that serves as the heart of the .NET framework. Today, it dominates not only corporate Windows software but also the gaming industry, being the primary language for game development on the widely popular Unity3D engine.', 
            features: ['Cross-platform game development', 'Deep integration with .NET', 'Modern and concise syntax'] 
        }
    },
    { 
        id: 'go', name: 'Go', logo: 'img/go.svg', color: '#06b6d4', stats: [90, 40, 70, 75, 80, 65, 75],
        ru: { 
            short: 'Быстрые микросервисы от Google.', 
            long: 'Golang был создан внутри Google для решения проблем масштабируемости гигантских систем. В нем намеренно убраны многие сложные концепции программирования, чтобы код читался легко и однозначно. Его главная суперсила — горутины, которые позволяют невероятно просто и эффективно писать многопоточные приложения. Docker, Kubernetes и Terraform написаны именно на Go.', 
            features: ['Простая и мощная многопоточность', 'Компилируется в бинарный файл', 'Идеален для облачной инфраструктуры'] 
        },
        en: { 
            short: 'Fast microservices by Google.', 
            long: 'Golang was created inside Google to solve the scalability issues of giant backend systems. It intentionally removes many complex programming concepts so that code can be read easily and unambiguously. Its main superpower is goroutines, which make writing multithreaded applications incredibly simple and efficient. Docker, Kubernetes, and Terraform are all built with Go.', 
            features: ['Simple and powerful concurrency', 'Compiles directly to machine code', 'Perfect for cloud infrastructure'] 
        }
    },
    { 
        id: 'rust', name: 'Rust', logo: 'img/rust.svg', color: '#f97316', stats: [95, 100, 65, 70, 60, 70, 90],
        ru: { 
            short: 'Безопасность памяти без компромиссов.', 
            long: 'Rust — это системный язык нового поколения. Он предлагает скорость C++, но полностью решает проблему ошибок доступа к памяти благодаря уникальной системе владения (Ownership). Компилятор Rust настолько строгий, что если ваш код скомпилировался, он гарантированно не упадет из-за критической ошибки памяти. Самый любимый язык среди разработчиков последние несколько лет подряд.', 
            features: ['Абсолютная безопасность памяти', 'Отсутствие сборщика мусора', 'Потрясающая документация'] 
        },
        en: { 
            short: 'Memory safety without compromises.', 
            long: 'Rust is a next-generation systems programming language. It offers the speed of C++ but completely eliminates memory access errors through its unique Ownership system. The Rust compiler is so strict that if your code compiles, it is practically guaranteed not to crash due to a memory bug. It has been the most loved programming language by developers for several consecutive years.', 
            features: ['Absolute memory safety guarantees', 'No garbage collector overhead', 'Outstanding toolchain and docs'] 
        }
    },
    { 
        id: 'php', name: 'PHP', logo: 'img/php.svg', color: '#6366f1', stats: [50, 30, 70, 85, 75, 50, 80],
        ru: { 
            short: 'Фундамент классического веба.', 
            long: 'PHP часто хоронят, но он живее всех живых. Более 70% всех веб-сайтов в интернете до сих пор используют PHP на сервере. Это язык, созданный специально для веба. Благодаря таким платформам как WordPress, Laravel и Symfony, на PHP можно невероятно быстро развернуть как простой блог, так и сложный интернет-магазин. Имеет самый низкий порог входа для бэкенд-разработки.', 
            features: ['Поддерживается любым хостингом', 'Огромная база готовых скриптов (CMS)', 'Быстрый старт веб-разработки'] 
        },
        en: { 
            short: 'Foundation of the classic web.', 
            long: 'PHP is often declared dead, but it is more alive than ever. Over 70% of all websites on the internet still use PHP on the server. It is a language created specifically for the web. Thanks to platforms like WordPress, Laravel, and Symfony, you can deploy everything from a simple blog to a complex e-commerce store incredibly fast. It has the lowest barrier to entry for backend dev.', 
            features: ['Supported by universally all hostings', 'Massive base of ready-made CMS', 'Rapid deployment for web projects'] 
        }
    },
    { 
        id: 'ruby', name: 'Ruby', logo: 'img/ruby.svg', color: '#dc2626', stats: [40, 35, 50, 70, 55, 60, 75],
        ru: { 
            short: 'Счастье разработчика и быстрые стартапы.', 
            long: 'Главная философия Ruby — программирование должно приносить удовольствие разработчику. Язык читается практически как обычный английский текст. С выходом фреймворка Ruby on Rails язык совершил революцию: он позволяет в одиночку написать и запустить работающий прототип сложного сервиса за пару недель. На нем написаны первые версии Twitter, GitHub и Airbnb.', 
            features: ['Красивый и читаемый синтаксис', 'Культовый фреймворк Ruby on Rails', 'Идеален для проверки гипотез (MVP)'] 
        },
        en: { 
            short: 'Developer happiness and fast startups.', 
            long: 'The main philosophy of Ruby is that programming should bring joy to the developer. The language reads almost like plain English text. With the release of the Ruby on Rails framework, it caused a revolution: it allows a single developer to build and launch a working prototype of a complex service in just weeks. Early versions of Twitter, GitHub, and Airbnb were built on it.', 
            features: ['Beautiful and readable syntax', 'The iconic Ruby on Rails framework', 'Perfect for rapid prototyping (MVP)'] 
        }
    }
];

let currentLang = 'ru';
let radarChart = null;
let selectedLangs = new Set(['python', 'js']); 

function init() {
    renderChartControls();
    updateUI();
    setupThemeToggle();
    setupLangToggle();
    setupModal();
}

function updateThemeBtnText() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const btn = document.getElementById('themeToggle');
    btn.textContent = isDark ? uiDict[currentLang].themeLightBtn : uiDict[currentLang].themeDarkBtn;
}

function updateUI() {
    const dict = uiDict[currentLang];
    
    document.getElementById('ui-chart-title').textContent = dict.chartTitle;
    document.getElementById('ui-chart-sub').textContent = dict.chartSub;
    document.getElementById('ui-grid-title').textContent = dict.gridTitle;
    document.getElementById('ui-modal-features').textContent = dict.modalFeaturesTitle;
    document.getElementById('langToggle').textContent = currentLang === 'ru' ? 'EN' : 'RU';

    updateThemeBtnText();
    renderCards();
    drawChart();
}

function renderChartControls() {
    const container = document.getElementById('chartControls');
    container.innerHTML = '';
    
    languagesData.forEach((lang, index) => {
        const isChecked = selectedLangs.has(lang.id) ? 'checked' : '';
        const delay = index * 0.05; 
        const html = `
            <div style="animation: fadeInUp 0.5s ease forwards; animation-delay: ${delay}s; opacity: 0;">
                <input type="checkbox" id="chk-${lang.id}" class="lang-checkbox" value="${lang.id}" ${isChecked}>
                <label for="chk-${lang.id}" class="lang-label">${lang.name}</label>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });

    document.querySelectorAll('.lang-checkbox').forEach(chk => {
        chk.addEventListener('change', (e) => {
            if (e.target.checked) selectedLangs.add(e.target.value);
            else selectedLangs.delete(e.target.value);
            drawChart();
        });
    });
}

function renderCards() {
    const grid = document.getElementById('languagesGrid');
    grid.innerHTML = '';
    
    languagesData.forEach((lang, index) => {
        const text = lang[currentLang];
        const delay = index * 0.1;
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${delay}s`;
        card.innerHTML = `
            <img src="${lang.logo}" alt="${lang.name}" class="lang-logo">
            <h3>${lang.name}</h3>
            <p class="short-desc">${text.short}</p>
            <button class="more-btn" onclick="openModal('${lang.id}')">${uiDict[currentLang].moreBtn}</button>
        `;
        grid.appendChild(card);
    });
}

function drawChart() {
    const ctx = document.getElementById('languagesChart').getContext('2d');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    Chart.defaults.color = isDark ? '#94a3b8' : '#64748b';
    Chart.defaults.font.family = "'Segoe UI', sans-serif";

    const datasets = [];
    languagesData.forEach(lang => {
        if (selectedLangs.has(lang.id)) {
            const r = parseInt(lang.color.slice(1, 3), 16);
            const g = parseInt(lang.color.slice(3, 5), 16);
            const b = parseInt(lang.color.slice(5, 7), 16);
            
            datasets.push({
                label: lang.name,
                data: lang.stats,
                backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
                borderColor: lang.color,
                pointBackgroundColor: lang.color,
                borderWidth: 2,
            });
        }
    });

    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: uiDict[currentLang].chartLabels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' },
                    grid: { color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' },
                    pointLabels: { font: { size: 12 } },
                    ticks: { display: false, min: 0, max: 100 }
                }
            },
            plugins: {
                legend: { position: 'bottom', labels: { padding: 20 } }
            }
        }
    });
}

function setupThemeToggle() {
    const btn = document.getElementById('themeToggle');
    btn.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        updateThemeBtnText();
        drawChart();
    });
}

function setupLangToggle() {
    const btn = document.getElementById('langToggle');
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        updateUI();
    });
}

const modal = document.getElementById('modal');
function openModal(langId) {
    const lang = languagesData.find(l => l.id === langId);
    if (!lang) return;
    
    const text = lang[currentLang];
    document.getElementById('modalLogo').src = lang.logo;
    document.getElementById('modalTitle').textContent = lang.name;
    document.getElementById('modalDesc').textContent = text.long;
    
    const ul = document.getElementById('modalFeatures');
    ul.innerHTML = '';
    text.features.forEach(f => {
        const li = document.createElement('li');
        li.textContent = f;
        ul.appendChild(li);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function setupModal() {
    document.getElementById('closeModal').onclick = () => { modal.style.display = 'none'; document.body.style.overflow = ''; };
    window.onclick = (e) => { if (e.target == modal) { modal.style.display = 'none'; document.body.style.overflow = ''; } };
}

init();
