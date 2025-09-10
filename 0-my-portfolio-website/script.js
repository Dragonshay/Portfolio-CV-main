const portfolioData = {
    about: `
    Welkom op mijn portfolio! 
    Ik ben een nieuwsgierige en creatieve Full Stack Developer die na meer dan 20 jaar in de publieke sector besloot een nieuw avontuur aan te gaan: de wereld van technologie 🌍💻. 

    Met mijn achtergrond in pedagogiek, beveiliging en administratie ben ik gewend om zowel onder druk te presteren als met mensen mee te denken. 
    Nu gebruik ik diezelfde vaardigheden om slimme, gebruiksvriendelijke weboplossingen te bouwen. 

    Wat mij drijft? 
    ✨ Complexe problemen simpel maken 
    ✨ Creatieve oplossingen bedenken 
    ✨ Samenwerken met mensen en écht luisteren 

    Ik zoek een plek waar ik mijn technische kennis kan combineren met mijn communicatieve kracht en brede werkervaring – en waar ik met plezier kan blijven leren en groeien. 🚀 
    `,

    hobbies: [
        {
            name: "Tekenen & Schilderen",
            description: "Creatieve expressie door verschillende technieken en materialen",
            icon: "🎨"
        },
        {
            name: "Fotograferen",
            description: "Vastleggen van mooie momenten en natuurlijke schoonheid",
            icon: "📸"
        },
        {
            name: "Haken",
            description: "Ontspannende handvaardigheid met praktische en decoratieve resultaten",
            icon: "🧶"
        },
        {
            name: "Gamen met Kinderen",
            description: "Samen spelen en kwaliteitstijd doorbrengen met de familie",
            icon: "🎮"
        },
        {
            name: "Natuur Genieten",
            description: "Wandelingen, rust vinden en inspiratie opdoen in de buitenlucht",
            icon: "🌿"
        }
    ],

    education: [
        {
            degree: "Full Stack Development (HBO)",
            period: "2023-2024",
            institution: "Winc Academy",
            details: [
                "Backend Development: JavaScript, Node.js, Express, Prisma, ORM, SQL, API Development, Authentication, Data Modeling, Debugging",
                "Frontend Development: HTML, CSS, JavaScript, React, Webdesign, Github, Programmatic Thinking, Wireframing, Accessibility"
            ]
        },
        {
            degree: "Gespecialiseerd Pedagogisch Medewerker (MBO-4)",
            period: "2019-2021",
            institution: "ROC Midden Nederland, Utrecht",
            details: []
        },
        {
            degree: "Medewerker Maatschappelijke Zorg (MBO-3)",
            period: "2014-2015",
            institution: "ROC Tilburg/(OIDJI)",
            details: []
        },
        {
            degree: "Secretaresse",
            period: "2004-2005",
            institution: "ROC Friese Poort Emmeloord",
            details: []
        },
        {
            degree: "Bewaarder DJI",
            period: "1999-2000",
            institution: "Opleidingsinstituut DJI (OIDJI)",
            details: []
        },
        {
            degree: "Algemeen Beveiligingsmedewerker - Basisdiploma Beveiliging",
            period: "1996-1997",
            institution: "Gildevaart College Nieuwegein",
            details: []
        },
        {
            degree: "MAVO",
            period: "1990-1995",
            institution: "Utrecht Zuid College",
            details: []
        }
    ],

    experience: [
        {
            title: "Medewerker Secretariaat",
            period: "2023 tot heden",
            company: "Kreston Lentink Huizen",
            responsibilities: [
                "Telefooncentrale en receptie/gastvrouw functies",
                "Post behandeling en digitaal archiveren",
                "Agenda en afspraak beheer",
                "Diverse secretariaatswerkzaamheden"
            ],
            skills: ["Nauwkeurigheid", "Representativiteit", "Communicatie", "Flexibiliteit", "Stressbestendigheid"]
        },
        {
            title: "Carrièreonderbreking & Omscholing",
            period: "2022-2024",
            company: "UWV & Hilde Huisman & co",
            responsibilities: [
                "Re-integratie project door coaching",
                "Omscholing naar Full Stack Development",
                "Persoonlijke ontwikkeling en nieuwe vaardigheden"
            ],
            skills: ["Doorzettingsvermogen", "Leervermogen", "Zelfstandigheid"]
        },
        {
            title: "Pedagogische Medewerker Kinderopvang",
            period: "2019-2022",
            company: "De Geheime Tuin Zeist, Doorn, Driebergen",
            responsibilities: [
                "Verzorging en begeleiding baby's en peuters van 0-4 jaar",
                "Ontwikkelingsgerichte activiteiten",
                "Samenwerking met ouders en collega's"
            ],
            skills: ["Geduld", "Inlevingsvermogen", "Creativiteit", "Communicatie", "Zorgvuldigheid"]
        },
        {
            title: "Penitentiaire Inrichtingswerker",
            period: "1999-2019",
            company: "Penitentiaire inrichtingen Zwolle, Almere, Amsterdam, Lelystad",
            responsibilities: [
                "Bewaarder complexbeveiliger",
                "Bezoekreceptie en administratieve werkzaamheden",
                "Bureau Management en Ondersteuning",
                "Telefoniste bij de telefooncentrale",
                "Inrichtingswerker Gevangenis, Huis van Bewaring, Beperkt Beveiligde Inrichting"
            ],
            skills: ["Integriteit", "Stressbestendigheid", "Besluitvorming", "Analytisch denkvermogen", "Communicatie"]
        }
    ],

    volunteer: [
        {
            title: "Collectante Nierstichting",
            period: "01-2019 tot 06-2024",
            organization: "Nierstichting Nederland",
            responsibilities: [
                "Collecteren voor nieronderzoek en orgaandonatie",
                "Voorlichting over nierziekten en preventie",
                "Ondersteuning van mensen met nierziekte"
            ],
            skills: ["Empathie", "Communicatie", "Doorzettingsvermogen", "Maatschappelijke betrokkenheid"]
        },
        {
            title: "Welpenleider Raksha",
            period: "11-2020 tot 01-2023",
            organization: "Flevoscouts Dronten",
            responsibilities: [
                "Begeleiding en educatie van welpen (7-11 jaar)",
                "Organisatie van spellen, activiteiten en kampen",
                "Ontwikkeling van sociale vaardigheden bij kinderen",
                "Samenwerking met andere leiders en ouders"
            ],
            skills: ["Pedagogiek", "Creativiteit", "Geduld", "Leiderschap", "Teamwork", "Verantwoordelijkheid"]
        },
        {
            title: "Coördinator en Organisator Landstrekenwijk en Warande",
            period: "01-2021 tot 12-2022",
            organization: "Brandwondenstichting",
            responsibilities: [
                "Coördinatie van collecteactiviteiten in toegewezen wijken",
                "Organisatie en planning van collecteroutes",
                "Begeleiding en ondersteuning van andere collectanten",
                "Rapportage en administratie van collecteresultaten"
            ],
            skills: ["Organisatie", "Leiderschap", "Planning", "Teamwork", "Administratie"]
        },
        {
            title: "Collectante Brandwondenstichting",
            period: "01-2015 tot 12-2022",
            organization: "Brandwondenstichting",
            responsibilities: [
                "Collecteren voor brandwondenonderzoek en -zorg",
                "Bewustwording creëren over brandpreventie",
                "Ondersteuning bieden aan het goede doel"
            ],
            skills: ["Empathie", "Communicatie", "Sociale betrokkenheid", "Betrouwbaarheid"]
        },
        {
            title: "Collectante KWF Kankerbestrijding",
            period: "01-2016 tot 08-2021",
            organization: "KWF Kankerbestrijding",
            responsibilities: [
                "Collecteren met collectebus voor kankeronderzoek",
                "Voorlichting geven over het belang van onderzoek",
                "Bijdragen aan fondsenwerving voor een belangrijk doel"
            ],
            skills: ["Communicatie", "Betrokkenheid", "Doorzettingsvermogen", "Maatschappelijk bewustzijn"]
        }
    ],

    projects: [
        {
            title: "Winc Dating App",
            description: "Een dating app, met HTML, CSS en Javascript. Uitprobeersel om te begrijpen hoe HTML werkt.",
            image: "./images/Homepage-Winc-Winc-Dating-App.png",
            link: "#",
        },
        {
            title: "My portfolio",
            description: "HTML en CSS project, ik heb gekozen om een portfolio te maken. Met informatie over mijn studie. Mijn eerste portfolio, is best lastig als je nog niet helamaal door hebt wat je eigenlijk wil. Maar ik ben trots op mijn resultaat.",
            image: "./images/Homepage-my-portfolio.png",
            link: "#",
        },
        {
            title: "Possible Matches via Replit",
            description: "Dit is een deel van mijn Winc dating-app. Zodra gebruikers hun informatie op Replit invullen, krijgen ze een match. Helaas kan ik geen back-end voorbeeld laten zien, omdat ik Replit niet langer gebruik. Mijn volgende project is trouwens volledig zonder Replit.",
            image: "./images/no-image.jpeg",
            link: "#",
        },
        {
            title: "Possible Matches",
            description: "Dit is een onderdeel van mijn Winc dating app. Na het invullen van je informatie kun je gematcht worden met 0, 1 of meerdere personen.",
            image: "./images/resultaat-keuzepagina.png",
            link: "#",
        },
        {
            title: "Cake Recipes via Replit",
            description: "Hier kun je recepten opzoeken op naam auteur, maar ook op naam van het recept of met bepaalde ingrediënten. Helaas kan ik geen replit voorbeeld laten zien, omdat ik Replit niet langer gebruik. Mijn volgende project is trouwens volledig zonder Replit.",
            image: "./images/no-image.jpeg",
            link: "#",
        },
        {
            title: "Cake Recipes",
            description: "Hier kun je recepten opzoeken op naam auteur, maar ook op naam van het recept of met bepaalde ingrediënten. Ik ben niet de eigenaar van de recepten, dus mocht je iemand een compliment willen geven, dan mag dat bij de auteur zelf. Je kunt ook kijken waar het recept oorspronkelijk vandaan is gehaald.",
            image: "./images/Homepage-Cake-Recipes-Management-System.png",
            link: "#",
        },
        {
            title: "Bed Final Booking Api",
            description: "Hier kun je een overnachting boeken of iets dergelijks.",
            image: "./images/no-image.jpeg",
            link: "#",
        },
        {
            title: "Mijn portfolio",
            description: "Mijn portfolio en Curriculum Vitae",
            image: "./images/homepage-mijn-portfolio.png",
            link: "#",
        },
        {
            title: "Boter Kaas & Eieren",
            description: "Spelletje met O of X, de persoon die 3 van hetzelfde teken horizontaal, verticaal of diagonaal heeft gewonnen",
            image: "./images/Boter-Kaas-&-Eieren.png",
            link: "#",
        },
        {
            title: "Sudoku",
            description: "Spelletje met O of X, de persoon die 3 van hetzelfde teken horizontaal, verticaal of diagonaal heeft gewonnen",
            image: "./images/Sudoku.png",
            link: "#",
        },
        {
            title: "Yahtzee",
            description: "Spelletje met O of X, de persoon die 3 van hetzelfde teken horizontaal, verticaal of diagonaal heeft gewonnen",
            image: "./images/Yahtzee.png",
            link: "#",
        }
    ],

    skills: {
        technical: ["JavaScript", "Node.js", "Express", "React", "HTML/CSS", "SQL", "API Development", "Git/GitHub"],
        soft: ["Communicatie", "Teamwork", "Probleemoplossend denken", "Stressbestendigheid", "Klantgerichtheid"],
        tools: ["VSCode", "Postman", "Prisma", "Debugging tools"]
    }
};

const sectionTitles = {
    'about': 'Over Mij',
    'hobbies': 'Hobby\'s',
    'education': 'Opleiding',
    'experience': 'Werkervaring',
    'skills': 'Vaardigheden',
    'volunteer': 'Vrijwilligerswerk',
    'projects': 'Projecten',
    'contact': 'Contact'
};

// Animation and interaction functions
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        setTimeout(() => {
            targetSection.classList.add('visible');
        }, 100);

        loadSectionContent(sectionId);
        document.title = `${sectionTitles[sectionId]} | Portfolio`;
    }
}

function loadSectionContent(sectionId) {
    switch(sectionId) {
        case 'about':
            const aboutParagraphs = portfolioData.about
                .split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0);

            document.getElementById('about-text').innerHTML =
                aboutParagraphs.map(p => `<p class="interactive-text">${p}</p>`).join('');
            break;
        case 'hobbies':
            loadHobbies();
            break;
        case 'education':
            loadEducation();
            break;
        case 'experience':
            loadExperience();
            break;
        case 'skills':
            loadSkills();
            break;
        case 'volunteer':
            loadVolunteer();
            break;
        case 'projects':
            loadProjects();
            break;
        case 'contact':
            loadContact();
            break;
    }
}

function rotateLogo(logoElement) {
    logoElement.style.transform = 'rotate(720deg) scale(1.2)';
    logoElement.style.boxShadow = '0 15px 40px rgba(139, 115, 85, 0.6)';
    setTimeout(() => {
        logoElement.style.transform = '';
        logoElement.style.boxShadow = '';
    }, 1000);
}

function loadHobbies() {
    const hobbyGrid = document.getElementById('hobby-grid');
    hobbyGrid.innerHTML = portfolioData.hobbies.map(hobby => `
        <div class="hobby-card" onclick="animateHobbyCard(this)">
            <div style="font-size: 2em; margin-bottom: 10px;">${hobby.icon}</div>
            <h3>${hobby.name}</h3>
            <p>${hobby.description}</p>
        </div>
    `).join('');
}

function loadEducation() {
    const content = document.getElementById('education-content');
    content.innerHTML = portfolioData.education.map(edu => `
        <div class="education-item">
            <div class="year">${edu.period}</div>
            <h3 class="institution">${edu.degree}</h3>
            <p><strong>${edu.institution}</strong></p>
            ${edu.details.length > 0 ? `<ul>${edu.details.map(detail => `<li>${detail}</li>`).join('')}</ul>` : ''}
        </div>
    `).join('');
}

function loadExperience() {
    const content = document.getElementById('experience-content');
    content.innerHTML = portfolioData.experience.map(exp => `
        <div class="work-item">
            <div class="year">${exp.period}</div>
            <h3>${exp.title}</h3>
            ${exp.company ? `<p><strong>${exp.company}</strong></p>` : ''}
            <ul>
                ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
            <div class="skills-container">
                ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function loadSkills() {
    const content = document.getElementById('skills-content');
    content.innerHTML = `
        <div style="margin-bottom: 25px;">
            <h3>Technische Vaardigheden</h3>
            <div class="skills-container">
                ${portfolioData.skills.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
        <div style="margin-bottom: 25px;">
            <h3>Soft Skills</h3>
            <div class="skills-container">
                ${portfolioData.skills.soft.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
        <div>
            <h3>Tools & Platformen</h3>
            <div class="skills-container">
                ${portfolioData.skills.tools.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `;
}

function loadVolunteer() {
    const content = document.getElementById('volunteer-content');
    content.innerHTML = portfolioData.volunteer.map(vol => `
        <div class="work-item">
            <div class="year">${vol.period}</div>
            <h3>${vol.title}</h3>
            <p><strong>${vol.organization}</strong></p>
            <ul>
                ${vol.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
            <div class="skills-container">
                ${vol.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function loadProjects() {
    const content = document.getElementById('projects-content');
    const activeProjects = portfolioData.projects.filter(proj => proj.title.trim() !== "");

    content.innerHTML = activeProjects.map(proj => `
        <div class="project-item">
            ${proj.image ? `<img src="${proj.image}" alt="${proj.title}" class="project-image">` : `<div class="no-image-placeholder">Geen Afbeelding Beschikbaar</div>`}
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <a href="${proj.link}" target="_blank" class="project-link">Bekijk Project</a>
        </div>
    `).join('');
}

function loadContact() {
    const content = document.getElementById('contact-content');
    content.innerHTML = `
        <div class="interactive-text">
            <p><strong>Beschikbaarheid:</strong> Per direct, met een opzegtermijn van één maand.</p>
            <p><strong>Werkvoorkeur:</strong> Fulltime, parttime of hybride werken mogelijk</p>
            <p><strong>Locatie:</strong> Flexibel voor reizen binnen Nederland</p>
            <br>
            <p>Ik sta open voor een persoonlijk gesprek om mijn ervaring en motivatie toe te lichten. Neem gerust contact met me op!</p>
        </div>
    `;
}

function rotatePhoto() {
    const photo = document.querySelector('.profile-photo');
    photo.style.transform = 'rotate(720deg) scale(1.2)';
    setTimeout(() => {
        photo.style.transform = '';
    }, 1000);
}

function animateHobbyCard(card) {
    card.style.transform = 'rotateY(360deg) scale(1.1)';
    setTimeout(() => {
        card.style.transform = '';
    }, 600);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Nieuwe functie om te luisteren naar hash-veranderingen
function handleHashChange() {
    const sectionId = window.location.hash.substring(1);
    if (sectionId) {
        showSection(sectionId);
    } else {
        // Laad 'about' als er geen hash is
        showSection('about');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Check voor profielfoto
    const profilePhoto = document.getElementById('profilePhoto');
    const photoText = document.getElementById('photoText');

    if (profilePhoto && photoText) {
        const testImg = new Image();
        testImg.onload = function() {
            photoText.style.display = 'none';
            profilePhoto.style.backgroundImage = "url('profielfoto.jpg')";
            profilePhoto.classList.remove('no-image');
        };
        testImg.onerror = function() {
            photoText.style.display = 'flex';
            profilePhoto.classList.add('no-image');
        };
        testImg.src = 'profielfoto.jpg';
    }

    // 2. Check voor logo
    const logoElement = document.getElementById('mainLogo');
    const logoText = document.getElementById('logoText');

    if (logoElement && logoText) {
        const testLogo = new Image();
        testLogo.onload = function() {
            logoText.style.display = 'none';
            logoElement.style.backgroundImage = "url('main-logo.jpg')";
            logoElement.classList.remove('no-logo');
        };
        testLogo.onerror = function() {
            logoText.style.display = 'flex';
            logoText.textContent = 'Logo';
            logoElement.classList.add('no-logo');
        };
        testLogo.src = 'main-logo.jpg';
    }

    // 3. Check voor cartoon profielfoto
    const cartoonPhoto = document.getElementById('cartoonPhoto');
    const cartoonText = document.getElementById('cartoonText');

    if (cartoonPhoto && cartoonText) {
        const testCartoon = new Image();
        testCartoon.onload = function() {
            cartoonText.style.display = 'none';
            cartoonPhoto.style.backgroundImage = "url('profielfoto.cartoon.jpg')";
            cartoonPhoto.classList.remove('no-image');
        };
        testCartoon.onerror = function() {
            cartoonText.style.display = 'flex';
            cartoonPhoto.classList.add('no-image');
        };
        testCartoon.src = 'profielfoto.cartoon.jpg';
    }

    // Luister naar hash-veranderingen (bijv. bij back/forward knoppen)
    window.addEventListener('hashchange', handleHashChange);

    // Bepaal de sectie op basis van de initiële URL hash
    handleHashChange();

    // Interactive text
    setTimeout(() => {
        document.querySelectorAll('.interactive-text').forEach(text => {
            text.addEventListener('mouseover', function() {
                this.style.textShadow = '2px 2px 4px rgba(139, 115, 85, 0.3)';
            });
            text.addEventListener('mouseout', function() {
                this.style.textShadow = 'none';
            });
        });
    }, 1000);
});