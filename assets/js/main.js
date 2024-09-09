// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

function enableDarkMode() {
    html.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
    console.log('Dark mode enabled');
}

function disableDarkMode() {
    html.classList.remove('dark');
    localStorage.setItem('darkMode', 'disabled');
    console.log('Dark mode disabled');
}

// Check for saved user preference, if any, on load of the website
const darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
    enableDarkMode();
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        console.log('Dark mode toggle clicked');
        const darkMode = localStorage.getItem('darkMode');
        
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {  
            disableDarkMode(); 
        }
    });
} else {
    console.error('Dark mode toggle button not found!');
}

// Generic function to render projects
function renderProject(project, container) {
  const projectHtml = `
    <div class="card-flip">
      <div class="card-inner border shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="card-front">
          <img src="${project.image}" alt="${project.name}" class="card-image w-full h-64 object-cover">
          <div class="card-content p-4">
            <h3 class="text-lg font-semibold">${project.name}</h3>
          </div>
        </div>
        <div class="card-back bg-blue-500 text-white p-4">
          <div class="card-content h-full flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-4">${project.name}</h3>
              ${project.description ? `<p class="mb-4">${project.description}</p>` : ''}
            </div>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="text-white hover:underline">
              ${project.linkText || 'Visit Site'}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  container.innerHTML += projectHtml;
}

// Current projects data
const currentProjects = [
    {
        name: "Nextjs, SupaBase, Stripe",
        description: "This site showcases the development of the Spice Island Indonesia website, an online platform for authentic Indonesian cuisine. The site, built using Next.js, was crafted with the assistance of AI technologies, including GPT-4 for content generation and Midjourney for image creation. This project exemplifies the innovative use of AI in crafting engaging and user-friendly digital experiences.",
        image: "assets/css/images/yossie_menu_thumb.jpg",
        link: "https://nextjs-yossie-menu.vercel.app/"
    },
    {
        name: "Open Ai API, LangChain, Nextjs, SupaBase, Tailwind",
        description: "Currently paused due to free hosting limitations.  Leveraging cutting-edge AI technology, I developed an innovative app that efficiently summarizes and interprets complex PDF documents, particularly legal texts and contracts. This tool enables users to ask specific questions about the content, showcasing my ability to blend AI with user-friendly design to solve practical challenges in professional settings.",
        image: "assets/css/images/chat-clause.png",
        link: "https://document-summariser-eight.vercel.app/"
    },
    {
        name: "Next.js, Tailwind CSS, Vercel AI SDK",
        description: "AI Telephony is a cutting-edge platform that revolutionizes communication by integrating AI with telephony services. This project showcases my ability to work with advanced AI technologies and modern web frameworks. It features real-time speech-to-text conversion, AI-powered responses, and natural language processing capabilities, demonstrating the potential of AI in enhancing everyday communication tools.",
        image: "assets/css/images/ai-telephony-thumb.png",
        link: "https://ai-telephony.vercel.app/"
    },
    {
        name: "Next.js, Tailwind CSS, OpenAI API",
        description: "AI Investor is an innovative platform that leverages artificial intelligence to provide personalized investment advice and market insights. This project demonstrates my expertise in creating sophisticated AI-driven applications. It features a user-friendly interface for querying investment-related information, showcasing the integration of complex AI models with intuitive web design to deliver valuable financial guidance.",
        image: "assets/css/images/ai-investor-thumb.png",
        link: "https://aii-nvestor.vercel.app/"
    }
];

// Populate current projects
const currentProjectsContainer = document.getElementById('current-projects');
currentProjects.forEach(project => renderProject(project, currentProjectsContainer));

// Live industry production sites
const liveSites = [
    {
        name: "Travel Republic - Next.js GraphQL",
        image: "assets/css/images/travel_republic.jpg",
        link: "https://www.travelrepublic.co.uk/"
    },
    {
        name: "The Calibration People - SiteCore",
        image: "assets/css/images/theCalibrationPeople.jpg",
        link: "https://theCalibrationPeople.Pilkington.com"
    }
];

// Populate live industry production sites
const liveSitesContainer = document.getElementById('live-sites');
liveSites.forEach(site => renderProject(site, liveSitesContainer));

// Live industry code examples
const liveCodeExamples = [
    {
        name: "404 page with dynamic links - JavaScript",
        image: "assets/css/images/404.jpg",
        link: "https://www.pilkington.com/nl-nl/nl/news-insights/dfgfdg",
        linkText: "View Example"
    },
    {
        name: "Shopping cart front end and API - JavaScript - Auth required",
        image: "assets/css/images/MyPilkington.jpg",
        link: "#",
        linkText: "View Example"
    },
    {
        name: "Bing Search API - C# . NET",
        image: "assets/css/images/PilkingtonSearch.jpg",
        link: "https://www.pilkington.com/en-gb/uk/site-tools/search?q=glass",
        linkText: "View Example"
    }
];

// Populate live industry code examples
const liveCodeContainer = document.getElementById('live-code');
liveCodeExamples.forEach(example => renderProject(example, liveCodeContainer));

// Demo projects
const demoProjects = [
    {
        name: "Rotating Building JavaScript and Svg",
        image: "assets/css/images/thomas.jpg",
        link: "https://barooahn.github.io/thomas/",
        linkText: "View Project"
    },
    {
        name: "Wikipedia viewer - JavaScript",
        image: "assets/css/images/wikipedia.jpg",
        link: "https://codepen.io/barooahn/full/NNELzW",
        linkText: "View Project"
    },
    {
        name: "Random Quotes - JavaScript",
        image: "assets/css/images/quotes.jpg",
        link: "https://codepen.io/barooahn/full/GZwoeV",
        linkText: "View Project"
    },
    {
        name: "Tic-Tac-Toe Javascript",
        image: "assets/css/images/tic-tac-toe.jpg",
        link: "https://codepen.io/barooahn/full/xVMozo",
        linkText: "View Project"
    },
    {
        name: "Simon Game - Javascript",
        image: "assets/css/images/SimonGame.jpg",
        link: "https://codepen.io/barooahn/full/aNXgKr",
        linkText: "View Project"
    },
    {
        name: "Drum Machine - React",
        image: "assets/css/images/DrumMachine.jpg",
        link: "https://codepen.io/barooahn/full/pqodOX",
        linkText: "View Project"
    },
    {
        name: "Weather - JavaScript Ajax",
        image: "assets/css/images/WeatherCodePen.jpg",
        link: "https://codepen.io/barooahn/full/rPYbNg",
        linkText: "View Project"
    },
    {
        name: "Calculator - JavaScript",
        image: "assets/css/images/calculator.jpg",
        link: "https://codepen.io/barooahn/full/MyLmQm",
        linkText: "View Project"
    },
    {
        name: "Pomodoro Clock - JavaScript",
        image: "assets/css/images/popodoro.jpg",
        link: "https://codepen.io/barooahn/full/wGNmGg",
        linkText: "View Project"
    }
];

// Populate demo projects
const demoProjectsContainer = document.getElementById('demo-projects');
demoProjects.forEach(project => renderProject(project, demoProjectsContainer));

// D3 projects
const d3Projects = [
    {
        name: "GDP 1945 - 2017 - USA - Bar Chart",
        image: "assets/css/images/d3BarChart.jpg",
        link: "https://codepen.io/barooahn/full/PXGdaZ",
        linkText: "View Project"
    },
    {
        name: "USA - Adults Percent Under 25 year old with a degree - Choropleth Map",
        image: "assets/css/images/d3ChoroplethMap.jpg",
        link: "https://codepen.io/barooahn/full/jXBKYm",
        linkText: "View Project"
    },
    {
        name: "Monthly Global Land Surface Temperature - Heat Map",
        image: "assets/css/images/d3HeatMap.jpg",
        link: "https://codepen.io/barooahn/full/bOgxvG",
        linkText: "View Project"
    },
    {
        name: "Highest Grossing Movies... Tree Map",
        image: "assets/css/images/d3TreeMap.jpg",
        link: "https://codepen.io/barooahn/full/qLreeo",
        linkText: "View Project"
    },
    {
        name: "35 Fastest Finders - Doping Allegations - Scatter Graph",
        image: "assets/css/images/d3scatterPlot.jpg",
        link: "https://codepen.io/barooahn/full/MZbRJJ",
        linkText: "View Project"
    }
];

// Populate D3 projects
const d3ProjectsContainer = document.getElementById('d3-projects');
d3Projects.forEach(project => renderProject(project, d3ProjectsContainer));

// Miscellaneous projects
const miscProjects = [
    {
        name: "Adobe Premiere - ChicIndah Promo",
        type: "video",
        source: "assets/css/images/chicIndahWebsiteVideo.mp4"
    },
    {
        name: "Adobe Premiere - eCommerceNorthWest Promo",
        type: "video",
        source: "assets/css/images/eCommerce_business.mp4"
    },
    {
        name: "49 Page Guide On Ecommerce - Adobe In Design",
        type: "image",
        image: "assets/css/images/facebook_page.jpg",
        link: "assets/css/images/eCommerceNorthWest_guide.pdf",
        linkText: "View PDF"
    },
    {
        name: "Graphic design Logos - Illustrator",
        type: "image",
        image: "assets/css/images/euroMechLogo.jpg"
    },
    {
        name: "Graphic design Posters - Photoshop & Illustrator",
        type: "image",
        image: "assets/css/images/VinPosters.jpg"
    },
    {
        name: "Graphic design Logos - Illustrator",
        type: "image",
        image: "assets/css/images/LogosForBart.svg"
    }
];

// Populate miscellaneous projects
const miscProjectsContainer = document.getElementById('misc-projects');
miscProjects.forEach(project => {
    if (project.type === 'video') {
        const videoHtml = `
            <div class="bg-white dark:bg-gray-750 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <video class="w-full h-64 object-cover" controls>
                    <source src="${project.source}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${project.name}</h3>
                </div>
            </div>
        `;
        miscProjectsContainer.innerHTML += videoHtml;
    } else {
        renderProject(project, miscProjectsContainer);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in effect
const fadeElems = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElems.forEach(elem => {
    appearOnScroll.observe(elem);
});

// Typing animation for main heading
const typingText = document.getElementById('typing-text');
const text = typingText.textContent;
typingText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation when the element is in view
const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriter();
            typingObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

typingObserver.observe(typingText);

// Floating animation for skill cloud
const skillCloud = document.querySelector('.float-animation');
let floatY = 0;
let floatDirection = 1;

function floatAnimation() {
    floatY += 0.1 * floatDirection;
    if (floatY > 10 || floatY < -10) {
        floatDirection *= -1;
    }
    skillCloud.style.transform = `translateY(${floatY}px)`;
    requestAnimationFrame(floatAnimation);
}

floatAnimation();

// Add hover effect to buttons
const buttons = document.querySelectorAll('.button-hover');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});


document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});