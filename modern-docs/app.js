const topicBlueprint = [
    { key: "home", slug: "home", file: "0. Home Content", groupKey: "start" },
    {
        key: "introduction",
        slug: "introduction",
        file: "1. Introduction",
        groupKey: "introductionGroup",
        children: [
            { key: "systemRequirements", slug: "system-requirements", file: "1.1 System Requirements" },
            { key: "gettingHelp", slug: "getting-help", file: "1.2 Getting Help" }
        ]
    },
    {
        key: "installation",
        slug: "installation",
        file: "2. Installation",
        groupKey: "installationGroup",
        children: [
            { key: "prerequisites", slug: "prerequisites", file: "2.1 Prerequisites" },
            { key: "instructionsToRun", slug: "instructions-to-run", file: "2.2 Instructions to Run" },
            { key: "sslConfiguration", slug: "ssl-configuration", file: "2.3 SSL Configuration" },
            { key: "accessingPgadmin", slug: "accessing-pgadmin", file: "2.4 Accessing pgAdmin" }
        ]
    },
    {
        key: "gettingStarted",
        slug: "getting-started",
        file: "3. Getting Started",
        groupKey: "gettingStartedGroup",
        children: [
            { key: "adminInterfaceOverview", slug: "admin-interface-overview", file: "3.1 Admin Interface Overview" },
            { key: "userInterfaceOverview", slug: "user-interface-overview", file: "3.2 User Interface Overview" },
            { key: "firstAccessPasswordReset", slug: "first-access-password-reset", file: "3.3 First Access and Password Reset" }
        ]
    },
    {
        key: "mainFeatures",
        slug: "main-features",
        file: "4. Main Features",
        groupKey: "mainFeaturesGroup",
        children: [
            { key: "visualizationFilters", slug: "visualization-filters", file: "4.1 Visualization Filters" },
            { key: "informationLevels", slug: "information-levels", file: "4.2 Information Levels" },
            { key: "externIntegration", slug: "extern-integration", file: "4.3 Extern Integration" },
            { key: "customizationTools", slug: "customization-tools", file: "4.4 Customization Tools" },
            { key: "multiTenancy", slug: "multi-tenancy", file: "4.5 Multi-tenancy" },
            { key: "systemInterfaceLanguage", slug: "system-interface-language", file: "4.7 System Interface Language" },
            { key: "userDataTranslations", slug: "user-data-translations", file: "4.6 User Data Translations" }
        ]
    },
    {
        key: "troubleshooting",
        slug: "troubleshooting",
        file: "5. Troubleshooting",
        groupKey: "troubleshootingGroup",
        children: [
            { key: "commonIssuesSolutions", slug: "common-issues-and-solutions", file: "5.1 Common Issues and Solutions" }
        ]
    },
    {
        key: "feedbackSuggestions",
        slug: "feedback-and-suggestions",
        file: "6. Feedback and Suggestions",
        groupKey: "feedbackSuggestionsGroup",
        children: [
            { key: "providingFeedback", slug: "providing-feedback", file: "6.1 Providing Feedback" },
            { key: "featureRequests", slug: "feature-requests", file: "6.2 Feature Requests" }
        ]
    },
    { key: "glossary", slug: "glossary", file: "7. Glossary", groupKey: "appendix" },
    { key: "faqs", slug: "faqs", file: "8. Frequently Asked Questions (FAQs)", groupKey: "appendix" }
];

const translations = {
    en: {
        label: "English (en)",
        short: "EN",
        path: "",
        ui: {
            guide: "Guide",
            searchLabel: "Search documentation",
            searchPlaceholder: "Search topics...",
            noTopics: "No topics found.",
            documentation: "Documentation",
            loading: "Loading documentation...",
            unavailable: "Unavailable",
            minRead: "min read",
            previous: "Previous",
            next: "Next",
            previousTopic: "Previous:",
            nextTopic: "Next:",
            languageLabel: "Change documentation language",
            openNavigation: "Open navigation",
            pageTitle: "ChameleonMap Guide",
            heroEyebrow: "Open-source interactive mapping",
            heroTitle: "ChameleonMap Guide",
            heroDescription: "Learn how to install, configure, customize, and operate ChameleonMap from one cleaner, searchable documentation hub.",
            loadErrorTitle: "This topic could not be loaded.",
            loadErrorHelp: "Run this guide through a local web server or GitHub Pages so the browser can load the source topic files."
        },
        topics: {
            start: "Start",
            appendix: "Appendix",
            home: "Home",
            introductionGroup: "1. Introduction",
            introduction: "Introduction",
            systemRequirements: "System Requirements",
            gettingHelp: "Getting Help",
            installationGroup: "2. Installation",
            installation: "Installation",
            prerequisites: "Prerequisites",
            instructionsToRun: "Instructions to Run",
            sslConfiguration: "SSL Configuration",
            accessingPgadmin: "Accessing pgAdmin",
            gettingStartedGroup: "3. Getting Started",
            gettingStarted: "Getting Started",
            adminInterfaceOverview: "Admin Interface Overview",
            userInterfaceOverview: "User Interface Overview",
            firstAccessPasswordReset: "First Access and Password Reset",
            mainFeaturesGroup: "4. Main Features",
            mainFeatures: "Main Features",
            visualizationFilters: "Visualization Filters",
            informationLevels: "Information Levels",
            externIntegration: "Extern Integration",
            customizationTools: "Customization Tools",
            multiTenancy: "Multi-tenancy",
            systemInterfaceLanguage: "System Interface Language",
            userDataTranslations: "User Data Translations",
            troubleshootingGroup: "5. Troubleshooting",
            troubleshooting: "Troubleshooting",
            commonIssuesSolutions: "Common Issues and Solutions",
            feedbackSuggestionsGroup: "6. Feedback and Suggestions",
            feedbackSuggestions: "Feedback and Suggestions",
            providingFeedback: "Providing Feedback",
            featureRequests: "Feature Requests",
            glossary: "Glossary",
            faqs: "Frequently Asked Questions"
        }
    },
    "pt-br": {
        label: "Português Brasileiro (pt-br)",
        short: "PT",
        path: "pt-br",
        ui: {
            guide: "Guia",
            searchLabel: "Buscar na documentação",
            searchPlaceholder: "Buscar tópicos...",
            noTopics: "Nenhum tópico encontrado.",
            documentation: "Documentação",
            loading: "Carregando documentação...",
            unavailable: "Indisponível",
            minRead: "min de leitura",
            previous: "Anterior",
            next: "Próximo",
            previousTopic: "Anterior:",
            nextTopic: "Próximo:",
            languageLabel: "Alterar idioma da documentação",
            openNavigation: "Abrir navegação",
            pageTitle: "Guia do ChameleonMap",
            heroEyebrow: "Mapeamento interativo de código aberto",
            heroTitle: "Guia do ChameleonMap",
            heroDescription: "Aprenda a instalar, configurar, personalizar e operar o ChameleonMap em uma central de documentação mais limpa e pesquisável.",
            loadErrorTitle: "Não foi possível carregar este tópico.",
            loadErrorHelp: "Execute este guia por meio de um servidor web local ou do GitHub Pages para que o navegador possa carregar os arquivos dos tópicos."
        },
        topics: {
            start: "Início",
            appendix: "Apêndice",
            home: "Início",
            introductionGroup: "1. Introdução",
            introduction: "Introdução",
            systemRequirements: "Requisitos do sistema",
            gettingHelp: "Obtendo ajuda",
            installationGroup: "2. Instalação",
            installation: "Instalação",
            prerequisites: "Pré-requisitos",
            instructionsToRun: "Instruções de execução",
            sslConfiguration: "Configuração SSL",
            accessingPgadmin: "Acessando o pgAdmin",
            gettingStartedGroup: "3. Primeiros passos",
            gettingStarted: "Primeiros passos",
            adminInterfaceOverview: "Visão geral da interface administrativa",
            userInterfaceOverview: "Visão geral da interface do usuário",
            firstAccessPasswordReset: "Primeiro acesso e redefinição de senha",
            mainFeaturesGroup: "4. Principais funcionalidades",
            mainFeatures: "Principais funcionalidades",
            visualizationFilters: "Filtros de visualização",
            informationLevels: "Níveis de informação",
            externIntegration: "Integração externa",
            customizationTools: "Ferramentas de personalização",
            multiTenancy: "Multi-tenancy",
            systemInterfaceLanguage: "Idioma da interface do sistema",
            userDataTranslations: "Traduções de dados do usuário",
            troubleshootingGroup: "5. Solução de problemas",
            troubleshooting: "Solução de problemas",
            commonIssuesSolutions: "Problemas comuns e soluções",
            feedbackSuggestionsGroup: "6. Feedback e sugestões",
            feedbackSuggestions: "Feedback e sugestões",
            providingFeedback: "Enviando feedback",
            featureRequests: "Solicitações de recursos",
            glossary: "Glossário",
            faqs: "Perguntas frequentes"
        }
    },
    es: {
        label: "español (es)",
        short: "ES",
        path: "es",
        ui: {
            guide: "Guía",
            searchLabel: "Buscar en la documentación",
            searchPlaceholder: "Buscar temas...",
            noTopics: "No se encontraron temas.",
            documentation: "Documentación",
            loading: "Cargando documentación...",
            unavailable: "No disponible",
            minRead: "min de lectura",
            previous: "Anterior",
            next: "Siguiente",
            previousTopic: "Anterior:",
            nextTopic: "Siguiente:",
            languageLabel: "Cambiar el idioma de la documentación",
            openNavigation: "Abrir navegación",
            pageTitle: "Guía de ChameleonMap",
            heroEyebrow: "Mapeo interactivo de código abierto",
            heroTitle: "Guía de ChameleonMap",
            heroDescription: "Aprenda a instalar, configurar, personalizar y operar ChameleonMap desde un centro de documentación más claro y fácil de buscar.",
            loadErrorTitle: "No se pudo cargar este tema.",
            loadErrorHelp: "Ejecute esta guía mediante un servidor web local o GitHub Pages para que el navegador pueda cargar los archivos de los temas."
        },
        topics: {
            start: "Inicio",
            appendix: "Apéndice",
            home: "Inicio",
            introductionGroup: "1. Introducción",
            introduction: "Introducción",
            systemRequirements: "Requisitos del sistema",
            gettingHelp: "Obtener ayuda",
            installationGroup: "2. Instalación",
            installation: "Instalación",
            prerequisites: "Requisitos previos",
            instructionsToRun: "Instrucciones de ejecución",
            sslConfiguration: "Configuración SSL",
            accessingPgadmin: "Acceso a pgAdmin",
            gettingStartedGroup: "3. Primeros pasos",
            gettingStarted: "Primeros pasos",
            adminInterfaceOverview: "Resumen de la interfaz administrativa",
            userInterfaceOverview: "Resumen de la interfaz de usuario",
            firstAccessPasswordReset: "Primer acceso y restablecimiento de contraseña",
            mainFeaturesGroup: "4. Funciones principales",
            mainFeatures: "Funciones principales",
            visualizationFilters: "Filtros de visualización",
            informationLevels: "Niveles de información",
            externIntegration: "Integración externa",
            customizationTools: "Herramientas de personalización",
            multiTenancy: "Multi-tenancy",
            systemInterfaceLanguage: "Idioma de la interfaz del sistema",
            userDataTranslations: "Traducciones de datos del usuario",
            troubleshootingGroup: "5. Solución de problemas",
            troubleshooting: "Solución de problemas",
            commonIssuesSolutions: "Problemas comunes y soluciones",
            feedbackSuggestionsGroup: "6. Comentarios y sugerencias",
            feedbackSuggestions: "Comentarios y sugerencias",
            providingFeedback: "Enviar comentarios",
            featureRequests: "Solicitudes de funciones",
            glossary: "Glosario",
            faqs: "Preguntas frecuentes"
        }
    }
};

const defaultLanguage = "en";
const supportedLanguages = Object.keys(translations);
const content = document.getElementById("doc-content");
const nav = document.getElementById("topic-nav");
const searchInput = document.getElementById("search-input");
const currentSection = document.getElementById("current-section");
const sectionKicker = document.getElementById("section-kicker");
const readingTime = document.getElementById("reading-time");
const hero = document.getElementById("hero");
const prevTopic = document.getElementById("prev-topic");
const nextTopic = document.getElementById("next-topic");
const menuButton = document.getElementById("menu-button");
const backdrop = document.getElementById("sidebar-backdrop");
const languageButton = document.getElementById("language-button");
const languageMenu = document.getElementById("language-menu");
const currentLanguageLabel = document.getElementById("current-language");
const brandSmall = document.querySelector(".brand small");
const searchLabel = document.querySelector(".search span");
const topbarKicker = document.querySelector(".topbar-title span");
const heroEyebrow = document.querySelector(".hero .eyebrow");
const heroTitle = document.querySelector(".hero h1");
const heroDescription = document.querySelector(".hero p:last-child");
const cache = new Map();

let currentLanguage = getInitialLanguage();
let topics = localizeTopics();
let flatTopics = flattenTopics(topics);

function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang") || localStorage.getItem("chameleon-docs-language") || defaultLanguage;
    return supportedLanguages.includes(requested) ? requested : defaultLanguage;
}

function getLocale() {
    return translations[currentLanguage];
}

function getUi() {
    return getLocale().ui;
}

function getTopicTitle(key) {
    return getLocale().topics[key] || translations.en.topics[key] || key;
}

function localizeTopic(topic) {
    return {
        ...topic,
        title: getTopicTitle(topic.key),
        group: getTopicTitle(topic.groupKey),
        children: (topic.children || []).map((child) => ({
            ...child,
            title: getTopicTitle(child.key),
            group: getTopicTitle(topic.groupKey)
        }))
    };
}

function localizeTopics() {
    return topicBlueprint.map(localizeTopic);
}

function flattenTopics(items) {
    return items.flatMap((topic) => [topic, ...(topic.children || [])]);
}

function createTopicLink(topic, child = false) {
    const link = document.createElement("a");
    link.className = `nav-link${child ? " child" : ""}`;
    link.href = `#${topic.slug}`;
    link.dataset.slug = topic.slug;
    link.textContent = topic.title;
    return link;
}

function renderNav(items = topics) {
    nav.innerHTML = "";
    const query = searchInput.value.trim().toLowerCase();

    if (query) {
        const matches = flatTopics.filter((topic) => `${topic.title} ${topic.group}`.toLowerCase().includes(query));
        if (!matches.length) {
            nav.innerHTML = `<div class="empty-state">${getUi().noTopics}</div>`;
            return;
        }

        matches.forEach((topic) => nav.appendChild(createTopicLink(topic)));
        updateActiveNav(getCurrentSlug());
        return;
    }

    items.forEach((topic) => {
        if (topic.slug === "home") {
            nav.appendChild(createTopicLink(topic));
            return;
        }

        const group = document.createElement("div");
        group.className = "nav-group";
        const title = document.createElement("div");
        title.className = "nav-group-title";
        title.textContent = topic.group;
        group.appendChild(title);
        group.appendChild(createTopicLink(topic));
        (topic.children || []).forEach((child) => group.appendChild(createTopicLink(child, true)));
        nav.appendChild(group);
    });

    updateActiveNav(getCurrentSlug());
}

function getCurrentSlug() {
    return window.location.hash.replace("#", "") || "home";
}

function findTopic(slug) {
    return flatTopics.find((topic) => topic.slug === slug) || flatTopics[0];
}

function topicUrl(topic, language = currentLanguage) {
    const languagePath = translations[language].path;
    const topicPath = `${encodeURIComponent(topic.file)}.html`;
    return languagePath ? `../topics/${languagePath}/${topicPath}` : `../topics/${topicPath}`;
}

async function fetchTopic(topic, language) {
    const response = await fetch(topicUrl(topic, language));
    if (!response.ok) {
        throw new Error(`Could not load ${topic.file}.html`);
    }
    return response.text();
}

async function loadTopic(topic) {
    const cacheKey = `${currentLanguage}:${topic.file}`;
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    let html;
    try {
        html = await fetchTopic(topic, currentLanguage);
    } catch (error) {
        if (currentLanguage === defaultLanguage) {
            throw error;
        }
        html = await fetchTopic(topic, defaultLanguage);
    }

    const parsed = new DOMParser().parseFromString(html, "text/html");
    cleanImportedContent(parsed);
    const body = parsed.body.innerHTML;
    cache.set(cacheKey, body);
    return body;
}

function cleanImportedContent(parsed) {
    parsed.querySelectorAll("[style]").forEach((element) => {
        if (element.tagName.toLowerCase() !== "p") {
            element.removeAttribute("style");
        }
    });

    parsed.querySelectorAll("a[onclick]").forEach((link) => {
        const text = link.textContent.toLowerCase();
        const target = flatTopics.find((topic) => text.includes(topic.title.toLowerCase()));
        link.removeAttribute("onclick");
        link.href = target ? `#${target.slug}` : "#home";
    });

    parsed.querySelectorAll("video").forEach((video) => {
        video.setAttribute("controls", "");
        video.setAttribute("preload", "metadata");
    });
}

function estimateReadingTime() {
    const words = content.textContent.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 220));
    readingTime.textContent = `${minutes} ${getUi().minRead}`;
}

function updateActiveNav(slug) {
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle("active", link.dataset.slug === slug);
    });
}

function updatePager(topic) {
    const index = flatTopics.findIndex((item) => item.slug === topic.slug);
    const previous = flatTopics[index - 1];
    const next = flatTopics[index + 1];

    prevTopic.href = previous ? `#${previous.slug}` : "#home";
    prevTopic.textContent = previous ? `${getUi().previousTopic} ${previous.title}` : getUi().previous;
    prevTopic.setAttribute("aria-disabled", previous ? "false" : "true");
    nextTopic.href = next ? `#${next.slug}` : "#home";
    nextTopic.textContent = next ? `${getUi().nextTopic} ${next.title}` : getUi().next;
    nextTopic.setAttribute("aria-disabled", next ? "false" : "true");
}

function updateStaticText() {
    const ui = getUi();
    document.documentElement.lang = currentLanguage;
    document.title = ui.pageTitle;
    brandSmall.textContent = ui.guide;
    searchLabel.textContent = ui.searchLabel;
    searchInput.placeholder = ui.searchPlaceholder;
    topbarKicker.textContent = ui.documentation;
    menuButton.setAttribute("aria-label", ui.openNavigation);
    languageButton.setAttribute("aria-label", ui.languageLabel);
    currentLanguageLabel.textContent = getLocale().short;
    heroEyebrow.textContent = ui.heroEyebrow;
    heroTitle.textContent = ui.heroTitle;
    heroDescription.textContent = ui.heroDescription;

    document.querySelectorAll(".language-menu button").forEach((button) => {
        const isActive = button.dataset.language === currentLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-current", isActive ? "true" : "false");
    });
}

async function renderCurrentTopic() {
    const topic = findTopic(getCurrentSlug());
    currentSection.textContent = topic.title;
    sectionKicker.textContent = topic.group;
    document.title = `${topic.title} | ${getUi().pageTitle}`;
    hero.hidden = topic.slug !== "home";
    updateActiveNav(topic.slug);
    updatePager(topic);
    content.innerHTML = `<div class="loading-state">${getUi().loading}</div>`;

    try {
        content.innerHTML = await loadTopic(topic);
        estimateReadingTime();
        closeMenu();
        closeLanguageMenu();
        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
        content.innerHTML = `
            <div class="empty-state">
                <strong>${getUi().loadErrorTitle}</strong>
                <p>${error.message}</p>
                <p>${getUi().loadErrorHelp}</p>
            </div>
        `;
        readingTime.textContent = getUi().unavailable;
    }
}

function closeMenu() {
    document.body.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
}

function closeLanguageMenu() {
    languageMenu.hidden = true;
    languageButton.setAttribute("aria-expanded", "false");
}

function setLanguage(language) {
    if (!supportedLanguages.includes(language) || language === currentLanguage) {
        closeLanguageMenu();
        return;
    }

    currentLanguage = language;
    localStorage.setItem("chameleon-docs-language", currentLanguage);
    topics = localizeTopics();
    flatTopics = flattenTopics(topics);
    updateStaticText();
    renderNav();
    renderCurrentTopic();
}

menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

languageButton.addEventListener("click", () => {
    const isOpen = languageMenu.hidden;
    languageMenu.hidden = !isOpen;
    languageButton.setAttribute("aria-expanded", String(isOpen));
});

languageMenu.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");
    if (button) {
        setLanguage(button.dataset.language);
    }
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-switcher")) {
        closeLanguageMenu();
    }
});

backdrop.addEventListener("click", closeMenu);
searchInput.addEventListener("input", () => renderNav());
window.addEventListener("hashchange", renderCurrentTopic);

updateStaticText();
renderNav();
renderCurrentTopic();
