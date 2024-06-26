var tableOfTopics = [
    { section: "1. Introduction", subsections: ["1.1 System Requirements", "1.2 Getting Help"] },
    { section: "2. Installation", subsections: ["2.1 Prerequisites", "2.2 Instructions to Run", "2.3 SSL Configuration", "2.4 Accessing pgAdmin"] },
    { section: "3. Getting Started", subsections: ["3.1 Admin Interface Overview", "3.2 User Interface Overview"] },
    { section: "4. Main Features", subsections: ["4.1 Visualization Filters", "4.2 Information Levels", "4.3 Extern Integration", "4.4 Customization Tools"] },
    { section: "5. Troubleshooting", subsections: ["5.1 Common Issues and Solutions", /**"5.2 Error Messages and Resolutions"*/] },
    { section: "6. Feedback and Suggestions", subsections: [] },
    { section: "7. Glossary", subsections: [] },
    { section: "8. Frequently Asked Questions (FAQs)", subsections: [] },
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
    // setTimeout(checkIframeLoading, 50);
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
