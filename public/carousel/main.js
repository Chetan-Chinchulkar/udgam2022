const paragraphElement = document.getElementById('paragraph');

const pageHeader = document.getElementById('page-header');
const pageBody = document.getElementById('page-body');

const pageImg = document.getElementById('page-img');
const regImg = document.getElementById('reg-img');

const pageRegDead = document.getElementById('reg-dead');
const pageTeam = document.getElementById('team');
const pageEv_date = document.getElementById('ev-date');
const pageReg_link = document.getElementById('reg-link');

const pageReg_Title = document.getElementById('reg-title');

const prevElement = document.getElementById('prev');
const currentElement = document.getElementById('current');
const nextElement = document.getElementById('next');

const eventNameTeamPage = document.getElementById('event-name');

const events_home = [{
    name: 'Event 1',
    date: 'DATEDATEDATE1',
    paragraph: '[Event 1]Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
    reg_link: 'www.youtube.com',
    reg_dead: 'GOOGOGOGOGOGO[event 1]',
    team: 'INDIVISUAL[event 1]',
},
{
    name: 'Event 2',
    date: 'DATEDATEDATE2',
    paragraph: '[Event 2]Throughout the long history of horror movies, there have been memorable moments and iconic scenes that have made viewers\' skin crawl and hearts pound. Many of these moments contain lines of dialogue that remain entrenched in the lore of horror movie history.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
    reg_link: 'www.google.com',
    reg_dead: 'GOOGOGOGOGOGO[event 2]',
    team: 'INDIVISUAL[event 2]',
},
{
    name: 'Event 3',
    date: 'DATEDATEDATE3',
    paragraph: '[Event 3]Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"',
    reg_link: 'www.duckduckgo.com',
    reg_dead: 'GOOGOGOGOGOGO[event 3]',
    team: 'INDIVISUAL[event 3]',
},
{
    name: 'Event 4',
    date: 'DATEDATEDATE4',
    paragraph: '[Event 4]Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"',
    reg_link: 'www.music.youtube.com',
    reg_dead: 'GOOGOGOGOGOGO[event 4]',
    team: 'INDIVISUAL[event 4]',
},
{
    name: 'Event 5',
    date: 'DATEDATEDATE5',
    paragraph: '[Event 5]Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur? <br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore libero quas, perferendis aliquid fugiat maiores dolor praesentium ea suscipit explicabo ut nemo! Quis officiis odit tempora praesentium. Nulla esse accusantium voluptatem. Ad, consectetur?',
    image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"',
    reg_link: 'www.music.youtube.com',
    reg_dead: 'GOOGOGOGOGOGO[event 5]',
    team: 'INDIVISUAL[event 5]',
}
];

const events_page = [
    {
        name: 'Event 1',
        image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        reg_link: 'www.duckduckgo.com',
    },
    {
        name: 'Event 2',
        image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        reg_link: 'www.google.com',
    },
    {
        name: 'Event 3',
        image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        reg_link: 'www.facebook.com',
    },
    {
        name: 'Event 4',
        image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        reg_link: 'www.youtube.com',
    },
    {
        name: 'Event 5',
        image: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        reg_link: 'www.instagram.com',
    },
];

let activePage = 0; // Default

// loadApp();

function loadApp() {
    events_home.map(({
        name,
        date,
        paragraph,
        image,
        reg_link,
        reg_dead,
        team
    }, index) => {
        console.log(index);


        let pageDate =
            `
        <div class="page-date ${activePage !== index ? 'disabled' : ''}">
            <span class="page__date d-flex align-items-end" style="font-size: 25px;font-weight: 300;" >${date}</span>
        </div>
        `;

        let pageName =
            `
        <div class="page-name ${activePage !== index ? 'disabled' : ''}">
            <span class="page__title" >${name}</span>
        </div>
        `;

        pageHeader.innerHTML += pageName + pageDate;
        let pageImage = `
            <div class="page-image ${activePage !== index ? 'disabled' : ''}">
                <img src="${image}" class="img-fluid" alt="Image" height="1000">
            </div>
        
        `;
        pageImg.innerHTML += pageImage;
        
        regImg.innerHTML += pageImage;

    });
    let eventRegisterButton = `<a href = "${events_home[activePage].reg_link}"><button type="button" class="btn btn-primary" style="width: 100%;">REGISTER & PAY</button></a>`;
    paragraphElement.innerHTML = events_home[activePage].paragraph;

    pageTeam.innerHTML = events_home[activePage].team;
    pageEv_date.innerHTML = events_home[activePage].date;
    
    pageRegDead.innerHTML = events_home[activePage].reg_dead;
    pageReg_link.innerHTML = eventRegisterButton;

    let eventTitle = `${events_home[activePage].name}`;
    pageReg_Title.innerHTML = eventTitle;

    prevElement.innerHTML = `${getPrevName(activePage)}`;
    currentElement.innerHTML = `${events_home[activePage].name}`;
    nextElement.innerHTML = `${getnextName(activePage)}`;
}

function load_event_page(){
    events_home.map(({
        name,
        image,
        reg_link,
    }, index) => {  
        let pageName =
            `
            <span class="page-name ${activePage !== index ? 'disabled' : ''}" style="float:none">${name}</span>
            `;
            document.getElementById('reg-title').innerHTML += pageName;
        
            // <img class="${activePage !== index ? 'disabled' : ''}" id="ProfilePic" height="200" width="400" src ="${image}">
            let pageImage = `
                <div class="page-image ${activePage !== index ? 'disabled' : ''}">
                    <img src="${image}" class="img-fluid" alt="Image" height="1000">
                </div>
            `;
            document.getElementById('page-img').innerHTML += pageImage;

    });
    prevElement.innerHTML = `${getPrevName(activePage)}`;
    currentElement.innerHTML = `${events_home[activePage].name}`;
    nextElement.innerHTML = `${getnextName(activePage)}`;
}

function getPrevName(index) {
    if (index == 0) {
        return events_home[events_home.length - 1].name;
    }
    else {
        return events_home[index - 1].name;
    }
}

function getnextName(index) {
    if (index == events_home.length - 1) {
        return events_home[0].name;
    }
    else {
        return events_home[index + 1].name;
    }
}



function sliderPrev(page) {

    if (activePage === 0) {
        activePage = events_home.length - 1;
    } else {
        activePage--;
    }
    console.log(activePage);
    console.log('prev');
    if(page === 'events'){
        changeSlider(activePage);
    }else if(page === 'reg'){
        changeEventSlider(activePage);
    }        
    changeHeader();
}
function sliderNext(page) {
    if (activePage === events_home.length - 1) {
        activePage = 0;
    } else {
        activePage++;
    }
    console.log(activePage);
    console.log('next');
    // changeHeader();
    if(page === 'events'){
        changeSlider(activePage);
    }else if(page === 'reg'){
        changeEventSlider(activePage);
    }        
    changeHeader(); 
}

function changeHeader() {
    prevElement.innerHTML = `${getPrevName(activePage)}`;
    currentElement.innerHTML = `${events_home[activePage].name}`;
    nextElement.innerHTML = `${getnextName(activePage)}`;
}

function changeEventSlider(index) {
    let id = index;
    let pageName = document.getElementsByClassName('page-name')[id];
    let otherNames = [...document.getElementsByClassName('page-name')];
    let pageImage = document.getElementsByClassName('page-image')[id];
    let otherImages = [...document.getElementsByClassName('page-image')];

    otherNames = otherNames.filter((e, i) => i != next)
    otherImages = otherImages.filter((e, i) => i != next)

    otherNames.map(e => {
        if (!e.classList.contains('disabled')) {
            e.classList.add('disabled');
        }
    });
    otherImages.map(e => {
        if (!e.classList.contains('disabled')) {
            e.classList.add('disabled');
        }
    });

    pageName.classList.remove('disabled');
    pageImage.classList.remove('disabled');
}

function changeSlider(next) {
    let id = next;
    let pageName = document.getElementsByClassName('page-name')[id];
    let pageDate = document.getElementsByClassName('page-date')[id];
    let otherNames = [...document.getElementsByClassName('page-name')];
    let otherDates = [...document.getElementsByClassName('page-date')];

    otherNames = otherNames.filter((e, i) => i != next)
    otherDates = otherDates.filter((e, i) => i != next)

    otherNames.map(e => {
        if (!e.classList.contains('disabled')) {
            e.classList.add('disabled');
        }
    });

    otherDates.map(e => {
        if (!e.classList.contains('disabled')) {
            e.classList.add('disabled');
        }
    });


    pageName.classList.remove('disabled');
    pageDate.classList.remove('disabled');

    let pageImage = `
            <div class="page-image">
                <img src="${events_home[id].image}" class="img-fluid" alt="Image" width="400">
            </div>
        
        `;

    let eventRegisterButton = `<a href = "${events_home[activePage].reg_link}"><button type="button" class="btn btn-primary reg-pay" style="width: 100% !important;">REGISTER & PAY</button></a>`;

    let eventTitle = `<div> ${events_home[id].name} </div>`;

    paragraphElement.textContent = events_home[id].paragraph;
    pageImg.innerHTML = pageImage;
    regImg.innerHTML = pageImage;
    pageRegDead.innerText = events_home[id].reg_dead;
    pageTeam.innerText = events_home[id].team;
    pageEv_date.innerText = events_home[id].date;
    pageReg_link.innerHTML = eventRegisterButton;

    pageReg_Title.innerHTML = eventTitle;
}