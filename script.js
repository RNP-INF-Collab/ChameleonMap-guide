var tableOfTopics = [
    { section: "1. Introduction", subsections: ["1.1 Overview", "1.2 System Requirements", "1.3 Getting Help"] },
    { section: "2. Installation", subsections: ["2.1 Pre-installation Checklist", "2.2 Installation Steps", "2.3 Activation and Registration"] },
    { section: "3. Getting Started", subsections: ["3.1 User Interface Overview", "3.2 Account Setup", "3.3 Basic Navigation"] },
    { section: "4. Main Features", subsections: ["4.1 Feature 1: [Name]", "4.2 Feature 2: [Name]"] },
    { section: "5. Advanced Features", subsections: ["5.1 Feature 1: [Name]", "5.2 Feature 2: [Name]"] },
    { section: "6. Troubleshooting", subsections: ["6.1 Common Issues and Solutions", "6.2 Error Messages and Resolutions", "6.3 Contacting Support"] },
    { section: "7. Updates and Upgrades", subsections: ["7.1 Checking for Updates", "7.2 Upgrading to a New Version", "7.3 Release Notes"] },
    { section: "8. User Community", subsections: ["8.1 Online Forums and Communities", "8.2 User Groups and Events", "8.3 Contributing to the Software"] },
    { section: "9. Feedback and Suggestions", subsections: ["9.1 Providing Feedback", "9.2 Feature Requests", "9.3 User Survey"] },
    { section: "10. Appendix", subsections: ["10.1 Glossary", "10.2 Frequently Asked Questions (FAQs)", "10.3 Resources and References"] },
];

var homeTopic = "0. Home Content";
var iframeLoadingVerified = false;
var currentTopic = homeTopic;

document.addEventListener("DOMContentLoaded", function () {

    // Generate sidebar elements
    var sidebarHTML = "<h2>Table of Topics</h2><ul>";
    tableOfTopics.forEach(function (item) {
        sidebarHTML += `<li><a href='#' onclick='renderContent("${item.section}");' id='${item.section}'>${item.section}</a>`;
        if (item.subsections && item.subsections.length > 0) {
            sidebarHTML += "<ul>";
            item.subsections.forEach(function (subsection) {
                sidebarHTML += `<li><a href='#' onclick='renderContent("${subsection}")' id='${subsection}'>${subsection}</a></li>`;
            });
            sidebarHTML += "</ul>";
        }
        sidebarHTML += "</li>";
    });
    sidebarHTML += "</ul>";

    // Set sidebar elements
    document.getElementById("sidebar").innerHTML = sidebarHTML;

    // Reset default content in iframe
    renderContent(homeTopic)
});

function renderContent(topic) {
    var iframe = document.getElementById('content-section');
    var newSrc = "./topics/"+ topic + ".html";
    iframeLoadingVerified = false;
    iframe.src = newSrc;
    setTimeout(checkIframeLoading, 50);
    setNewCurrentTopic(topic);
}

function topUpIframeLoading(){
    iframeLoadingVerified = true;
}

function checkIframeLoading(){
    if(!iframeLoadingVerified){
        setUnderConstructionSrc();
    }    
}

function setUnderConstructionSrc(){
    var iframe = document.getElementById('content-section');
    iframe.src = "./topics/UnderConstruction.html";  
}

function setNewCurrentTopic(topic){
    if(currentTopic !== homeTopic){
        var oldTopicAnchor = document.getElementById(currentTopic);
        oldTopicAnchor.style.color = "#007bff";
    }
    if(topic !== homeTopic){    
        var newTopicAnchor = document.getElementById(topic);
        newTopicAnchor.style.color = "blue";
        currentTopic = topic;
    }
}