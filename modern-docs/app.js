const topics = [
    {
        title: "Home",
        slug: "home",
        file: "0. Home Content",
        group: "Start"
    },
    {
        title: "Introduction",
        slug: "introduction",
        file: "1. Introduction",
        group: "1. Introduction",
        children: [
            { title: "System Requirements", slug: "system-requirements", file: "1.1 System Requirements" },
            { title: "Getting Help", slug: "getting-help", file: "1.2 Getting Help" }
        ]
    },
    {
        title: "Installation",
        slug: "installation",
        file: "2. Installation",
        group: "2. Installation",
        children: [
            { title: "Prerequisites", slug: "prerequisites", file: "2.1 Prerequisites" },
            { title: "Instructions to Run", slug: "instructions-to-run", file: "2.2 Instructions to Run" },
            { title: "SSL Configuration", slug: "ssl-configuration", file: "2.3 SSL Configuration" },
            { title: "Accessing pgAdmin", slug: "accessing-pgadmin", file: "2.4 Accessing pgAdmin" }
        ]
    },
    {
        title: "Getting Started",
        slug: "getting-started",
        file: "3. Getting Started",
        group: "3. Getting Started",
        children: [
            { title: "Admin Interface Overview", slug: "admin-interface-overview", file: "3.1 Admin Interface Overview" },
            { title: "User Interface Overview", slug: "user-interface-overview", file: "3.2 User Interface Overview" },
            { title: "First Access and Password Reset", slug: "first-access-password-reset", file: "3.3 First Access and Password Reset" }
        ]
    },
    {
        title: "Main Features",
        slug: "main-features",
        file: "4. Main Features",
        group: "4. Main Features",
        children: [
            { title: "Visualization Filters", slug: "visualization-filters", file: "4.1 Visualization Filters" },
            { title: "Information Levels", slug: "information-levels", file: "4.2 Information Levels" },
            { title: "Extern Integration", slug: "extern-integration", file: "4.3 Extern Integration" },
            { title: "Customization Tools", slug: "customization-tools", file: "4.4 Customization Tools" },
            { title: "Multi-tenancy", slug: "multi-tenancy", file: "4.5 Multi-tenancy" },
            { title: "System Interface Language", slug: "system-interface-language", file: "4.7 System Interface Language" },
            { title: "User Data Translations", slug: "user-data-translations", file: "4.6 User Data Translations" }
        ]
    },
    {
        title: "Troubleshooting",
        slug: "troubleshooting",
        file: "5. Troubleshooting",
        group: "5. Troubleshooting",
        children: [
            { title: "Common Issues and Solutions", slug: "common-issues-and-solutions", file: "5.1 Common Issues and Solutions" }
        ]
    },
    {
        title: "Feedback and Suggestions",
        slug: "feedback-and-suggestions",
        file: "6. Feedback and Suggestions",
        group: "6. Feedback and Suggestions",
        children: [
            { title: "Providing Feedback", slug: "providing-feedback", file: "6.1 Providing Feedback" },
            { title: "Feature Requests", slug: "feature-requests", file: "6.2 Feature Requests" }
        ]
    },
    {
        title: "Glossary",
        slug: "glossary",
        file: "7. Glossary",
        group: "Appendix"
    },
    {
        title: "Frequently Asked Questions",
        slug: "faqs",
        file: "8. Frequently Asked Questions (FAQs)",
        group: "Appendix"
    }
];

const flatTopics = topics.flatMap((topic) => [topic, ...(topic.children || []).map((child) => ({
    ...child,
    group: topic.group
}))]);

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

const cache = new Map();

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
            nav.innerHTML = '<div class="empty-state">No topics found.</div>';
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

async function loadTopic(topic) {
    if (cache.has(topic.file)) {
        return cache.get(topic.file);
    }

    const response = await fetch(`../topics/${encodeURIComponent(topic.file)}.html`);
    if (!response.ok) {
        throw new Error(`Could not load ${topic.file}.html`);
    }

    const html = await response.text();
    const parsed = new DOMParser().parseFromString(html, "text/html");
    cleanImportedContent(parsed);
    const body = parsed.body.innerHTML;
    cache.set(topic.file, body);
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
    readingTime.textContent = `${minutes} min read`;
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
    prevTopic.textContent = previous ? `Previous: ${previous.title}` : "Previous";
    prevTopic.setAttribute("aria-disabled", previous ? "false" : "true");

    nextTopic.href = next ? `#${next.slug}` : "#home";
    nextTopic.textContent = next ? `Next: ${next.title}` : "Next";
    nextTopic.setAttribute("aria-disabled", next ? "false" : "true");
}

async function renderCurrentTopic() {
    const topic = findTopic(getCurrentSlug());
    currentSection.textContent = topic.title;
    sectionKicker.textContent = topic.group;
    document.title = `${topic.title} | ChameleonMap Guide`;
    hero.hidden = topic.slug !== "home";
    updateActiveNav(topic.slug);
    updatePager(topic);

    content.innerHTML = '<div class="loading-state">Loading documentation...</div>';

    try {
        content.innerHTML = await loadTopic(topic);
        estimateReadingTime();
        closeMenu();
        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
        content.innerHTML = `
            <div class="empty-state">
                <strong>This topic could not be loaded.</strong>
                <p>${error.message}</p>
                <p>Run this guide through a local web server or GitHub Pages so the browser can load the source topic files.</p>
            </div>
        `;
        readingTime.textContent = "Unavailable";
    }
}

function closeMenu() {
    document.body.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

backdrop.addEventListener("click", closeMenu);
searchInput.addEventListener("input", () => renderNav());
window.addEventListener("hashchange", renderCurrentTopic);

renderNav();
renderCurrentTopic();
