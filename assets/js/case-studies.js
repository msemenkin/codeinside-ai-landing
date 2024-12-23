// Case studies data
const caseStudies = {
    "cases": [
        {
            "id": "smart-parking",
            "title": "Паркинг будущего: ИИ находит место для каждого",
            "description": "Интеллектуальная система управления городскими парковками с использованием компьютерного зрения и ИИ для автоматизации",
            "image": "temp/codeinside.ru/wp-content/uploads/2022/10/2023-10-19_18-17-09.jpg",
            "technologies": ["Computer Vision", "Machine Learning", "Python", "Java"],
            "link": "cases/smart-parking.html"
        },
        {
            "id": "it-resource-management",
            "title": "AI-дирижёр IT-команд: оркестрация ресурсов",
            "description": "Интеллектуальная система управления ресурсами IT-компаний с ИИ-оптимизацией распределения задач и предиктивной аналитикой",
            "image": "temp/codeinside.ru/wp-content/uploads/2023/05/01_oblozhka-1.webp",
            "technologies": ["AI Analytics", "Machine Learning", "Java", "JavaScript"],
            "link": "cases/it-resource-management.html"
        },
        {
            "id": "ship-communication",
            "title": "Морская связь под управлением ИИ: от шума к чистоте",
            "description": "Разработка системы корабельной связи с ИИ-анализом переговоров, умным шумоподавлением и автоматической архивацией",
            "image": "temp/codeinside.ru/wp-content/uploads/2023/05/dlya-sajta.webp",
            "technologies": ["Speech Recognition AI", "Machine Learning", "C++", "JavaScript"],
            "link": "cases/ship-communication.html"
        },
        {
            "id": "data-center-infrastructure",
            "title": "Нейросети на страже дата-центра: умный мониторинг",
            "description": "Разработка системы интеллектуального мониторинга инфраструктуры ЦОД с использованием ИИ для предиктивной аналитики и автоматической оптимизации",
            "image": "temp/codeinside.ru/wp-content/uploads/2022/11/Servernaya.jpg",
            "technologies": ["AI Analytics", "Machine Learning", "Kotlin", "React"],
            "link": "cases/data-center-infrastructure.html"
        },
        {
            "id": "kt-snimki",
            "title": "Нейросети анализируют КТ: революция в стоматологии",
            "description": "Разработка веб-приложения для автоматизации процесса разметки КТ-снимков в стоматологии на основе модели машинного обучения",
            "image": "temp/codeinside.ru/wp-content/uploads/2024/09/unnamed-4-2.jpg",
            "technologies": ["Java", "Machine Learning", "MedTech"],
            "link": "cases/kt-snimki.html"
        },
        {
            "id": "smart-traffic",
            "title": "Искусственный интеллект за рулём городского движения",
            "description": "Интеллектуальная система мониторинга дорожного движения с использованием компьютерного зрения",
            "image": "assets/uploads/2023/09/smart-traffic.webp",
            "technologies": ["Computer Vision", "Machine Learning"],
            "link": "cases/smart-traffic.html"
        },
        {
            "id": "fer",
            "title": "Искусственный интеллект в регистратуре: точность расписания",
            "description": "Модернизация системы здравоохранения с применением ИИ для оптимизации процессов",
            "image": "assets/uploads/2023/05/fer.webp",
            "technologies": ["AI Analytics", "Big Data"],
            "link": "cases/fer.html"
        },
        {
            "id": "computer-vision",
            "title": "Цифровые глаза производства: нейросети на страже качества",
            "description": "Внедрение интеллектуальной системы контроля на производственных предприятиях",
            "image": "assets/uploads/2023/06/argent-alyans.webp",
            "technologies": ["Computer Vision", "Deep Learning"],
            "link": "cases/computer-vision.html"
        },
        {
            "id": "marking-system",
            "title": "Интеллектуальная маркировка: ИИ против контрафакта",
            "description": "Тиражирование системы маркировки товаров с использованием ИИ и блокчейна",
            "image": "assets/uploads/2023/06/eaes-shuba.jpg",
            "technologies": ["AI", "Blockchain"],
            "link": "cases/marking-system.html"
        },
        {
            "id": "insurance-system",
            "title": "Нейросети оптимизируют страхование: ЕГИС нового формата",
            "description": "Разработка единой государственной системы учета страховой помощи с применением ИИ",
            "image": "temp/codeinside.ru/wp-content/uploads/2024/09/unnamed-5.jpg",
            "technologies": ["AI Analytics", "Big Data"],
            "link": "cases/insurance-system.html"
        },
        {
            "id": "geolocation",
            "title": "Нейросети в действии: умный трекинг нефтегазового оборудования",
            "description": "Разработка геолокационного сервиса для отслеживания и управления нефтегазовым оборудованием с применением ИИ",
            "image": "temp/codeinside.ru/wp-content/uploads/2024/12/special-operations-engineer-following-enemy-warships-submarines.jpg",
            "technologies": ["AI Analytics", "IoT", "Big Data"],
            "link": "cases/geolocation.html"
        }
    ]
};

function loadCaseStudies() {
    const caseStudiesContainer = document.getElementById('case-studies-container');
    if (!caseStudiesContainer) {
        console.error('Case studies container not found');
        return;
    }

    const caseStudiesHTML = caseStudies.cases.map(caseStudy => `
        <div class="col-lg-3 col-md-6">
            <div class="case-card card">
                <img src="${caseStudy.image}" alt="${caseStudy.title}" class="card-img-top">
                <div class="card-body">
                    <h3 class="h4">${caseStudy.title}</h3>
                    <p class="text-muted">${caseStudy.description}</p>
                    <div class="mb-4">
                        ${caseStudy.technologies.map(tech => `
                            <span class="tech-stack">${tech}</span>
                        `).join('')}
                    </div>
                    <a href="${caseStudy.link}" class="btn btn-primary">Подробнее</a>
                </div>
            </div>
        </div>
    `).join('');

    caseStudiesContainer.innerHTML = caseStudiesHTML;
}

// Load case studies when the DOM is ready
document.addEventListener('DOMContentLoaded', loadCaseStudies);
