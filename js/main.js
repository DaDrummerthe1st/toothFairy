$(document).ready(function () {
    // $('html').css("background-color", "yellow"); // works!
    // $("#results").css("background-color", "red");
    // cards
    var toothbrushes = ['Oral-B Pro-Flex',
        'Colgate 360° Advanced',
        'Philips Sonicare DiamondClean',
        'Quip Electric Toothbrush',
        'Foreo ISSA 3',
        'Waterpik Sonic-Fusion',
        'GUM Crayola Marker Toothbrush',
        'Radius Source Toothbrush',
        'Dr. Plotka’s Mouthwatchers'];

    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            let card = $(`
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="resources/pictures/PineTools.com_files/row-${i}-column-${j}.png" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${toothbrushes[i*j]}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Lägg i varukorg</a>
                    <a href="#" class="btn btn-primary">Som prenumeration</a>
                    </div>
                </div>
            `);

            $(card).appendTo("#results");
        }
    }
});