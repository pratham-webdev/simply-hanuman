const finalDoha = [
    {
        id:1,
        devanagri:`पवनतनय संकट हरन मंगल मूरति रूप।
        राम लखन सीता सहित हृदय बसहु सुर भूप॥`,
        romanized:`pavantanaya sankata harana mangala mūrati rūpa।
        rāma lakhan sītā sahita hridaya basahu sura bhūpa॥`,
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
    <h5 class="pt-4">${el.romanized}</h5>
    </div>
    </div>`
}

function createFinalDoha(){
    let tempArr = finalDoha.map(finalDohasCard);
    return tempArr.join("");
}


$(`#final-doha`).append(finalDohasHtml);