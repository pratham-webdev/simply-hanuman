const finalDoha = [
    {
        id:1,
        devanagri:`लाल देह लाली लसे , अरु धरि लाल लंगूर I<br>
        वज्र देह दानव दलन , जय जय जय कपि सूर II<br>`,
        meaning:``,
    }
]


const finalDohasHtml = `<div class="container">
    <h1 class="pt-5 pb-3 text-center">दोहा</h1>
    <div class="row">
    ${createFinalDoha()}
    </div>
</div>`;

function finalDohasCard(el){
    return `<div class="col-12 pb-4">
    <div class="scripture-card">
    <h3>${el.devanagri}</h3>
    </div>
    </div>`
}

function createFinalDoha(){
    let tempArr = finalDoha.map(finalDohasCard);
    return tempArr.join("");
}


$(`#sankatmochan-final-doha`).append(finalDohasHtml);