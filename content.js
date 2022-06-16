let cat = '/catimages/aristocat.png'
const catDirectory = ['https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif','https://c.tenor.com/NjbLQCvQoC8AAAAC/bongo-cat.gif','https://media.giphy.com/media/C23cMUqoZdqMg/giphy.gif', 'https://media.giphy.com/media/11c7UUfN4eoHF6/giphy.gif','https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif','https://media.giphy.com/media/dRcMsUUrnR8He/giphy.gif', 'https://media.giphy.com/media/TDuVkwOLm51xQ1lroM/giphy.gif', 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif','https://media.giphy.com/media/xT77XHUkpCtKbmtuH6/giphy.gif','https://media.giphy.com/media/tT0wtdSJvE0Rq/giphy.gif','https://media.giphy.com/media/9DmxwRzCqIdBm/giphy.gif','https://media.giphy.com/media/12d71hRlD9T2Cc/giphy.gif']


const randomCatUrl = (array)=>{
    for(let i = 0; i <= array.length; i++) {
        const randomIndex = Math.floor(Math.random()*array.length)
        let gifUrl = array[randomIndex];
        return gifUrl;
    }
}

const div1 = document.createElement("span");
const div2 = document.createElement("span");
const div3 = document.createElement("span");
const div4 = document.createElement("span");
const div5 = document.createElement("span");
const div6 = document.createElement("span");

div1.innerHTML=`<img src='${randomCatUrl(catDirectory)}' height=200px>`;
div2.innerHTML=`<img src='${randomCatUrl(catDirectory)}' height=200px>`;
div3.innerHTML=`<img src='${randomCatUrl(catDirectory)}' height=200px>`;
div4.innerHTML=`<img src='${randomCatUrl(catDirectory)}' height=200px>`;
div5.innerHTML=`<img src='${randomCatUrl(catDirectory)}' height=200px>`;
document.body.prepend(div1, div2, div3,div4,div5);
