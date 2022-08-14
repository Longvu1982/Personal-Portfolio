const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// handle click navbar button
const navBtn = $('.navbar-btn')
const navLists = $('.navbar-list')

navBtn.addEventListener('click', ()=>{
    navLists.classList.toggle('active')
    navBtn.querySelector('i').classList.toggle('fa-x')
    navBtn.querySelector('i').classList.toggle('fa-bars')
    console.log('clicked')
})

// theme change
const themeBtn = $('.navbar-theme-btn')

themeBtn.addEventListener('click', () => {
    themeBtn.querySelector('i').classList.toggle('fa-moon')
    themeBtn.querySelector('i').classList.toggle('fa-sun')
    $('body').classList.toggle('light-mode')
})

// render about
const aboutList = [
    {
        heading: 'Education',
        dsc: 'Senior student at Hanoi University of Science and Technology with CPA 3.32/4',
        img: './img/about/school.jpg'
    },
    {
        heading: 'Programming',
        dsc: 'I have one year of experience in coding with HTML, CSS and Javascript',
        img: './img/about/code.jpg'
    },
    {
        heading: 'Habits',
        dsc: 'I love drawing and sketching things with my tablet in my spare time',
        img: './img/about/draw.jpg'
    },
    {
        heading: 'Other Projects',
        dsc: 'Beside web developing, i also learn basic Unity and C# to make games',
        img: './img/about/game.jpg'
    }
]

$('.about-desciptions').innerHTML = aboutList.map(aboutItem => {
    return`<div class="about-description">
        <div class="description-img">
            <img src="${aboutItem.img}" alt="">
        </div>
        <div class="description-details">
            <h2>${aboutItem.heading}</h2>
            <p>${aboutItem.dsc}</p>
        </div>
    </div>`
}).join('')



// render skills logo

const skills = [
    {
        img: './img/skills/html.png',
        dsc: 'Html'
    },
    {
        img: './img/skills/css.png',
        dsc: 'Css'
    },
    {
        img: './img/skills/js.png',
        dsc: 'JavaScript'
    },
    {
        img: './img/skills/git.png',
        dsc: 'Git'
    },
    {
        img: './img/skills/figma.png',
        dsc: 'Figma'
    },
    {
        img: './img/skills/ets.png',
        dsc: 'Toeic 775'
    }
]

$('.skill-details-comp').innerHTML = skills.map(skill => {
    return`
    <div class="skill-detail-component">
        <div class="skill-logo">
            <img src="${skill.img}" alt="" srcset="">
        </div>
        <p>${skill.dsc}</p>
</div>
    `
}).join('')

// render portfolio and filter
const filters = ['UI/UX', 'Web App', 'All']

    //render filter btns
$('.portfolio-filter').innerHTML = filters.map(filter => {
    return`
        <div class="portfolio-filter-btn">${filter}</div>
    `
}).join('')

   

const projects = [
    {
        filter: 'ui/ux',
        name: 'First Website',
        dsc: ['Very first website clone','Fully responsive'],
        img:'./img/projects/first.png',
        repo:'https://github.com/Longvu1982/first-website',
        link:'https://longvu1982.github.io/first-website/',
    },
    {
        filter: 'ui/ux',
        name: 'Shopping Website',
        dsc: ['Shoppee clone UI only','Fully responsive'],
        img:'./img/projects/shopping.png',
        repo:'https://github.com/Longvu1982/Shopping-Website',
        link:'https://longvu1982.github.io/Shopping-Website/',
    },
    {
        filter: 'ui/ux',
        name: 'Moon Cake',
        dsc: ['Simple but fun project','Draw with CSS'],
        img:'./img/projects/moon.png',
        repo:'https://github.com/Longvu1982/Mooncake',
        link:'https://longvu1982.github.io/Mooncake/',
    },
    {
        filter: 'web app',
        name: 'Music Player',
        dsc: ['Minimal design','Working basic functions'],
        img:'./img/projects/music.png',
        repo:'https://github.com/Longvu1982/Mini-music-player',
        link:'https://longvu1982.github.io/Mini-music-player/',
    },
    {
        filter: 'web app',
        name: 'Digital Clock',
        dsc: ['Working 3D clock','3D view with mouse'],
        img:'./img/projects/clock.png',
        repo:'https://github.com/Longvu1982/Digital-Clock',
        link:'https://longvu1982.github.io/Digital-Clock/',
    },
    {
        filter: 'web app',
        name: 'Weather Web',
        dsc: ['Working weather app','Fully Responsive'],
        img:'./img/projects/weather.png',
        repo:'https://github.com/Longvu1982/The-basic-weather-website',
        link:'https://longvu1982.github.io/The-basic-weather-website/',
    },
]

 // click
 const projectContainer = $('.portfolio-projects')
 const filterBtns = $$('.portfolio-filter-btn')
 filterBtns[0].classList.add('active')
 

 let filtered = projects.filter(element => element.filter == 'ui/ux')
 renderProject()
 let projectImgs = $$('.project-img')
 if(filterBtns) {
     filterBtns.forEach(btn => {
         btn.addEventListener('click', ()=> {
             if($('.portfolio-filter-btn.active')){
                 $('.portfolio-filter-btn.active').classList.remove('active')
             }
             btn.classList.add('active')
             console.log(btn.innerText.toLowerCase())
 
             // check filter and render
 
             filtered = projects.filter(project => project.filter == btn.innerText.toLowerCase())
 
             // if click all render all
 
             if( btn.innerText.toLowerCase()=='all' ) filtered = projects
             renderProject()
             projectImgs = $$('.project-img')
             console.log(projectImgs)
             if(projectImgs) {
                projectImgs.forEach(img => {
                   img.addEventListener('touchstart', ()=> {
                       console.log('touch')
                       img.querySelector('.project-overlay').style.transform = 'translateY(0px)'
                       setTimeout(()=>{
                           img.querySelector('.project-overlay').style.transform = 'translateY(100%)'
                       },1500)
                   })
                })
               }
         })
     })
 }
 
 // filtered = projects.filter(project => project.filter == $('.portfolio-filter-btn.active').innerText.toLowerCase())
 function renderProject(){
     projectContainer.innerHTML = filtered.map(element => {
         return`
         <div class="portfolio-project">
             <div class="project-img" style="background-image:url(${element.img}) ;">
                <div class="project-overlay">
                    <a target="_blank" href="${element.repo}"><i class="fa-solid fa-link"></i></a>
                    <a target="_blank" href="${element.link}"><i class="fa-solid fa-eye"></i></a>
                </div>
             </div>
             <div class="project-info">
                 <h2>${element.name}</h2>
                 <p>${element.dsc[0]}</p>
                 <p>${element.dsc[1]}</p>
             </div>
         </div>
         `
     }).join('')
     
 }
 
//hover for touch devices

 if(projectImgs) {
 projectImgs.forEach(img => {
    img.addEventListener('touchstart', ()=> {
        img.querySelector('.project-overlay').style.transform = 'translateY(0px)'
        setTimeout(()=>{
            img.querySelector('.project-overlay').style.transform = 'translateY(100%)'
        },2500)
    })
 })
}

//social button
const socialBtn = $('.expand-btn')
const socialSection = $('.social-section')

socialBtn.addEventListener('click', ()=>{
    socialBtn.style.display = 'none'
    socialSection.style.transform = 'translateX(0px)'
})

document.addEventListener('click', (e)=>{
    
    if(e.target.closest('.social-section') || e.target.closest('.expand-btn') ) {
        
    }
    else {
        socialBtn.style.display = 'flex'
        socialSection.style.transform = 'translateX(-120px)'
    }
})