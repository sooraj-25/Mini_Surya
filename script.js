
// STARS

for(let i=0;i<120;i++){

  const star=document.createElement('div');

  star.classList.add('star');

  star.style.left=Math.random()*100+'%';
  star.style.top=Math.random()*100+'%';

  document.getElementById('stars').appendChild(star);
}

// PETALS

function createPetal(){

  const petal=document.createElement('div');

  petal.classList.add('petal');

  petal.innerHTML='🌹';

  petal.style.left=Math.random()*100+'vw';

  petal.style.fontSize=(18+Math.random()*20)+'px';

  petal.style.animationDuration=(5+Math.random()*5)+'s';

  document.body.appendChild(petal);

  setTimeout(()=>{
    petal.remove();
  },10000);
}

setInterval(createPetal,300);

// LOVE TRAIL

document.addEventListener('mousemove',(e)=>{

  const symbols=['💖','💗','✨','❤️'];

  const love=document.createElement('div');

  love.classList.add('loveTrail');

  love.innerHTML=symbols[Math.floor(Math.random()*symbols.length)];

  love.style.left=e.clientX+'px';
  love.style.top=e.clientY+'px';

  love.style.fontSize=(10+Math.random()*15)+'px';

  document.body.appendChild(love);

  setTimeout(()=>{
    love.style.transform='translateY(-80px) scale(1.5)';
    love.style.opacity='0';
  },10);

  setTimeout(()=>{
    love.remove();
  },1000);

});

// MESSAGE

const message=`Out of all the moments life could have given me,
it gave me you.

Every laugh,
every late-night conversation,
every little moment with you
became my favorite memory.

And somewhere between all those moments,
you became my home.

So today,
I have only one question left to ask...

Will you marry me?

— Forever yours,
Sooraj ❤️`;

let index=0;

// ELEMENTS

const envelope=document.getElementById('envelope');
const envelopeScreen=document.getElementById('envelopeScreen');
const letterScreen=document.getElementById('letterScreen');
const celebration=document.getElementById('celebration');
const typedText=document.getElementById('typedText');
const buttons=document.getElementById('buttons');
const yesBtn=document.getElementById('yesBtn');
const noBtn=document.getElementById('noBtn');
const funnyText=document.getElementById('funnyText');

// OPEN LETTER

envelope.addEventListener('click',()=>{

  envelopeScreen.style.display='none';

  letterScreen.style.display='flex';

  resetLetter();

  typeMessage();
});

// TYPEWRITER

function typeMessage(){

  if(index < message.length){

    typedText.innerHTML += message.charAt(index);

    index++;

    setTimeout(typeMessage,45);

  }else{

    buttons.classList.add('show');
  }
}

// RESET

function resetLetter(){

  index=0;

  typedText.innerHTML='';

  buttons.classList.remove('show');
}

// YES BUTTON

yesBtn.addEventListener('click',()=>{

  letterScreen.style.display='none';

  celebration.style.display='flex';

  const song=document.getElementById('loveSong');

  song.play().catch((err)=>{
    console.log(err);
  });

  createHearts();
});

// NO BUTTON

noBtn.addEventListener('mouseenter',()=>{

  const randomX=Math.random()*200 - 100;

  const randomY=Math.random()*120 - 60;

  noBtn.style.transform=`translate(${randomX}px,${randomY}px)`;

  funnyText.innerHTML='Nice try Shehana 😭❤️';
});

// BACK BUTTONS

document.getElementById('backBtn1').addEventListener('click',()=>{

  letterScreen.style.display='none';

  envelopeScreen.style.display='flex';
});

document.getElementById('backBtn2').addEventListener('click',()=>{

  celebration.style.display='none';

  letterScreen.style.display='flex';
});

// HEARTS

function createHearts(){

  for(let i=0;i<90;i++){

    const heart=document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML='💖';

    heart.style.left=Math.random()*100+'vw';

    heart.style.top='100vh';

    heart.style.fontSize=(20+Math.random()*40)+'px';

    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },4000);
  }
}
