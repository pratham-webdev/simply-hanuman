const scriptures = [
    {
        id:1,
        devanagri:`बाल समय रवि भक्षी लियो तब, तीनहुं लोक भयो अंधियारों I<br>
        ताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो I<br>
        देवन आनि करी बिनती तब, छाड़ी दियो रवि कष्ट निवारो I<br>
        को नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो I<br>`,
        meaning:``,
    },
    {
        id:2,
        devanagri:`बालि की त्रास कपीस बसैं गिरि, जात महाप्रभु पंथ निहारो I<br>
        चौंकि महामुनि साप दियो तब , चाहिए कौन बिचार बिचारो I<br>
        कैद्विज रूप लिवाय महाप्रभु, सो तुम दास के सोक निवारो I<br>`,
        meaning:``,
    },
    {
        id:3,
        devanagri:`अंगद के संग लेन गए सिय, खोज कपीस यह बैन उचारो I<br>
        जीवत ना बचिहौ हम सो जु , बिना सुधि लाये इहाँ पगु धारो I<br>
        हेरी थके तट सिन्धु सबे तब , लाए सिया-सुधि प्राण उबारो I<br>`,
        meaning:``,
    },
    {
        id:4,
        devanagri:`रावण त्रास दई सिय को सब , राक्षसी सों कही सोक निवारो I<br>
        ताहि समय हनुमान महाप्रभु , जाए महा रजनीचर मरो I<br>
        चाहत सीय असोक सों आगि सु , दै प्रभुमुद्रिका सोक निवारो I<br>`,
        meaning:``,
    },
    {
        id:5,
        devanagri:`बान लाग्यो उर लछिमन के तब , प्राण तजे सूत रावन मारो I<br>
        लै गृह बैद्य सुषेन समेत , तबै गिरि द्रोण सु बीर उपारो I<br>
        आनि सजीवन हाथ दिए तब , लछिमन के तुम प्रान उबारो I<br>`,
        meaning:``,
    },
    {
        id:6,
        devanagri:`रावन जुध अजान कियो तब , नाग कि फाँस सबै सिर डारो I<br>
        श्रीरघुनाथ समेत सबै दल , मोह भयो यह संकट भारो I<br>
        आनि खगेस तबै हनुमान जु , बंधन काटि सुत्रास निवारो I<br>`,
        meaning:``,
    },
    {
        id:7,
        devanagri:`बंधू समेत जबै अहिरावन, लै रघुनाथ पताल सिधारो I<br>
        देबिन्हीं पूजि भलि विधि सों बलि , देउ सबै मिलि मन्त्र विचारो I<br>
        जाये सहाए भयो तब ही , अहिरावन सैन्य समेत संहारो I<br>`,
        meaning:``,
    },
    {
        id:8,
        devanagri:`काज किये बड़ देवन के तुम , बीर महाप्रभु देखि बिचारो I<br>
        कौन सो संकट मोर गरीब को , जो तुमसे नहिं जात है टारो I<br>
        बेगि हरो हनुमान महाप्रभु , जो कछु संकट होए हमारो I<br>`,
        meaning:``,
    }
]

const scripturesHtml = `<div class="container">
    <h1 class="pt-5 pb-3 text-center">संकटमोचन</h1>
    <div class="row">
    ${createScriptures()}
    </div>
</div>`;

function scripturesCard(el){
    return `<div class="col-12 pb-4">
    <div class="scripture-card">
    <h3>${el.devanagri}</h3>
    </div>
    </div>`
}

function createScriptures(){
    let tempArr = scriptures.map(scripturesCard);
    return tempArr.join("");
}

$(`#sankatmochan-scriptures`).append(scripturesHtml);