const dohas = [
    {
        id:1,
        devanagri:`श्री गुरु चरन सरोज रज, निज मनु मुकुर सूधारि।<br>
        बरनऊं रघुबर बिमल जसु, जो दायकु फल चारि॥`,
        romanized:`shrī guru charan saroj ruj, nij man mukuru sudhari।<br>
        baranau raghuber bimal jasu, jo dayaku phal chari॥`,
        meaning:``,
    },
    {
        id:2,
        devanagri:`बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।<br>
        बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस विकार॥`,
        romanized:`budhiheen tanu janike, sumirau pavan-kumar।<br>
        bal budhi vidya dehu mohi, harahu kales vikaar॥`,
        meaning:``,
    },
]


const dohasHtml = `<div class="container">
    <h1 class="pt-3 pb-3 text-center">दोहा</h1>
    <div class="row">
    ${createDohas()}
    </div>
</div>`;

function dohasCards(el){
    return `<div class="col-12 pb-4">
    <div class="scripture-card">
    <h3>${el.devanagri}</h3>
    <h5 class="pt-4">${el.romanized}</h5>
    </div>
    </div>`
}

function createDohas(){
    let tempArr = dohas.map(dohasCards);
    return tempArr.join("");
}



$(`#dohas`).append(dohasHtml);