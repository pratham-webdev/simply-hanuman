const aarti = [
    {
        id:1,
        devanagri:`आरती कीजै हनुमान लला की । दुष्ट दलन रघुनाथ कला की।।`,
    },
    {
        id:2,
        devanagri:`जाके बल से गिरिवर कांपे । रोग दोष जाके निकट न झांके।।`,
    },
    {
        id:3,
        devanagri:`अंजनि पुत्र महाबलदायी । सन्तन के प्रभु सदा सहाई।।`,
    },
    {
        id:4,
        devanagri:`दे बीरा रघुनाथ पठाए । लंका जारि सिया सुध लाए।।`,
    },
    {
        id:5,
        devanagri:`लंका सो कोट समुद्र सी खाई । जात पवनसुत बार न लाई ।।`,
    },
    {
        id:6,
        devanagri:`लंका जारि असुर संहारे । सियारामजी के काज संवारे ।।`,
    },
    {
        id:7,
        devanagri:`लक्ष्मण मूर्छित पड़े सकारे । आणि संजीवन प्राण उबारे ।।`,
    },
    {
        id:8,
        devanagri:`पैठी पताल तोरि जमकारे । अहिरावण की भुजा उखारे ।।`,
    },
    {
        id:9,
        devanagri:`बाएं भुजा असुर दल मारे । दाहिने भुजा संतजन तारे ।।`,
    },
    {
        id:10,
        devanagri:`सुर-नर-मुनि जन आरती उतारे । जै जै जै हनुमान उचारे ।।`,
    },
    {
        id:11,
        devanagri:`कंचन थार कपूर लौ छाई । आरती करत अंजना माई ।।`,
    },
    {
        id:12,
        devanagri:`जो हनुमानजी की आरती गावै । बसि बैकुंठ परमपद पावै ।।`,
    },
    {
        id:13,
        devanagri:`लंकविध्वंस किए रघुराई । तुलसीदास प्रभु कीरति गाई ।।`,
    },
]


const aartiHtml = `<div class="container">
    <h1 class="pt-5 pb-3 text-center">दोहा</h1>
    <div class="row">
    ${createAarti()}
    </div>
</div>`;

function aartiCard(el){
    return `<div class="col-12 pb-4">
    <div class="scripture-card">
    <h3>${el.devanagri}</h3>
    </div>
    </div>`
}

function createAarti(){
    let tempArr = aarti.map(aartiCard);
    return tempArr.join("");
}


$(`#aarti`).append(aartiHtml);