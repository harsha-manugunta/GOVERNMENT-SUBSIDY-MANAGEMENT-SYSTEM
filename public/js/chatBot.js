let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

//INTRO
let intro = ["Hello, I am Agro! Farmer's friend. I am your Digital farming assistant. I am here to guide you through your farming and agricultural needs."];
let helpways = ["I can help on diferent crops, enivironmental condition required for those crops to improve the yield and can do many more things for you! How may I help you today?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

//COCONUT
let coconut = ['For better coconut crop the below environmental condition will help,\ntemperature: 27°C\nmoisture: 100-250mm\nsoil: lateritic red,sandy,alluvial'];
let c_climate = ['Tropical climate is best for growing coconut'];
let csoil = ['Red sandy loam,laterite,alluvial coastal sandy and reclaimed soils with a pH ranging from 5.2 to 8.0 is recommended for better production of coconut'];
let cf = ['Organic Manure of 30 kg green manure should be used'];
let cw = ['once or twice per week in summer months'];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let cdi = ["Most common diseases in coconut are:bot rot stem bleeding,leaf rot"];
let sb = ["the first visible symptom is the withering of the spindle marked with pale color.the spear leaf or spindle turns brown and bends down. on dissecting such affected spindles, rotting of internal tissues could be observed, the tissues show pale pink color with a brown border.a foul smell is emitted by the rotting tissue."];
let cb = ["remove all the affected tissue of the crown region and drenching the crown with Copper oxychloride 0.25%.apply Bordeaux paste and protect it from rain till normal shoot emerges.Spray 0.25% Copper oxychloride or 1 % Bordeaux mixture on the crown of the neighbouring palms as a prophylactic measure before the onset of monsoon"];
let ss = ["the liquid oozing out dries up and turns black.the tissues below the lesions become rotten and turn yellow first and later black."];
let csb = ['chisel out completely the affected tissues and paint the wound with tridemorph 5% or bordeaux paste. apply coaltar after 1-2 days on the treated portion. burn off chiseled pieces.'];
let slr= ['the first symptom is the appearance of water-soaked brown lesions in the spear leaves of root-wilt affected palms.gradually these spots enlarge and coalesce resulting in extensive rotting.'];
let cfr= ['spraying the leaves sequentially with 1% bordeaux mixture,mancozeb 3g and fytolan 5g/litre of water, at quarterly intervals after removing all severely affected leaves reduces further incidences of the disease to a considerable extent.'];





//ARECANUT
let ac = ['cultivation of arecanut is mostly confined to 28º north and south of the equator.It grows well within the temperature range of 14ºC and 36ºC'];
let aw = ['arecanut/betel nut is a water intensive crop which requires about 16-20 litres of water per tree per day.'];
let areca_soil = ['plant outdoor areca palms in rich,slightly acidic soil with good drainage.'];
let ar = ['palm tree roots are no deeper than three feet into the ground.'];
let ls=['Most common diseases are fruit rot,foot rot'];
let sk=['characteristic symptom is rotting and extensive shedding of the immature nuts which lie scattered near the base of the tree.initial symptoms appear as dark green/ yellowish water-soaked lesions on the nut surface near the perianth.']
let ck = ['Remove the infected tissues from the crown and treat the wound/ cut end with 10% Bordeaux paste. Cover the treated bud with protective covering till the normal shoot emerges. '];
let fs=['The leaf lets in outer whorls become yellow and spreads to the whole leaf and the leaves droop down covering the stem'];
let cff=['Phytosanitary measures like cutting and burning of the dead palms along with bole and roots should be followed strictly.'];




const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('hello')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('hi')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('how can you help me')){
        let finalresult = helpways[Math.floor(Math.random() * helpways.length)];
        speech.text = finalresult;
    }
    if(message.includes('best climate for coconut')){
        let finalresult = c_climate[Math.floor(Math.random() * c_climate.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }

    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('bye')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

//COCONUT

    if(message.includes('best soil for coconut')){
        let finalresult = csoil[Math.floor(Math.random() * csoil.length)];
        speech.text = finalresult;
    }
    if(message.includes('best fertilizer for coconut')){
        let finalresult = cf[Math.floor(Math.random() * cf.length)];
        speech.text = finalresult;
    }
    if(message.includes('watering of coconut plant')){
        let finalresult = cw[Math.floor(Math.random() * cw.length)];
        speech.text = finalresult;
    }
    if(message.includes('help me')){
        let finalresult = helpways[Math.floor(Math.random() * helpways.length)];
        speech.text = finalresult;
    }
    if(message.includes('climatic conditions for coconut')){
        let finalresult = coconut[Math.floor(Math.random() * coconut.length)];
        speech.text = finalresult;
    }
    if(message.includes('climatic condition for coconut')){
        let finalresult = coconut[Math.floor(Math.random() * coconut.length)];
        speech.text = finalresult;
    }


    if(message.includes('coconut diseases')){
        let finalresult = cdi[Math.floor(Math.random() * cdi.length)];
        speech.text = finalresult;
    }

    if(message.includes('symptoms of bot rot')){
        let finalresult = sb[Math.floor(Math.random() * sb.length)];
        speech.text = finalresult;
    }

    if(message.includes('cure of bot rot')){
        let finalresult = cb[Math.floor(Math.random() * cb.length)];
        speech.text = finalresult;
    }

    if(message.includes('symptoms of stem bleeding')){
        let finalresult = ss[Math.floor(Math.random() * ss.length)];
        speech.text = finalresult;
    }


    if(message.includes('cure of stem bleeding')){
        let finalresult = csb[Math.floor(Math.random() * csb.length)];
        speech.text = finalresult;
    }

    if(message.includes('symptoms of leaf rot')){
        let finalresult = slr[Math.floor(Math.random() * slr.length)];
        speech.text = finalresult;
    }

    if(message.includes('cure of leaf rot')){
        let finalresult = cfr[Math.floor(Math.random() * cfr.length)];
        speech.text = finalresult;
    }



//ARECANUT

    if(message.includes('best climate for betel nut')){
        let finalresult = ac[Math.floor(Math.random() * ac.length)];
        speech.text = finalresult;
    }
    if(message.includes('water required for betel nut')){
        let finalresult = aw[Math.floor(Math.random() * aw.length)];
        speech.text = finalresult;
    }
    if(message.includes('best soil for betel nut')){
        let finalresult = areca_soil[Math.floor(Math.random() * areca_soil.length)];
        speech.text = finalresult;
    }
    if(message.includes('depth of betel nut palm roots')){
        let finalresult = ar[Math.floor(Math.random() * ar.length)];
        speech.text = finalresult;
    }
    if(message.includes('betel nut diseases')){
        let finalresult = ls[Math.floor(Math.random() * ls.length)];
        speech.text = finalresult;
    }

    if(message.includes('Symptoms of fruit drought')){
        let finalresult = sk[Math.floor(Math.random() * sk.length)];
        speech.text = finalresult;
    }

    if(message.includes('cure of fruit drought')){
        let finalresult = ck[Math.floor(Math.random() * ck.length)];
        speech.text = finalresult;
    }

    if(message.includes('Symptoms of foot rot')){
        let finalresult = fs[Math.floor(Math.random() * fs.length)];
        speech.text = finalresult;
    }
    if(message.includes('cure of foot rot')){
        let finalresult = cff[Math.floor(Math.random() * cff.length)];
        speech.text = finalresult;
    }





    
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})