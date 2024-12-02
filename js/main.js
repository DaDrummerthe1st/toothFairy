$(document).ready(function () {
    // $('html').css("background-color", "yellow"); // works!
    // $("#results").css("background-color", "red");
    // cards
    var toothbrushes = [
        ['resources/pictures/pics_of_brushes/bild (1).png','5-pack Bamsetandborstar', 63, '0-3 år', 'Bamsetandborste som får ditt barn att vilja gå o lägga sig!'],
        ['resources/pictures/pics_of_brushes/bild (2).png','3-pack Colgate Kids', 49, '3-7 år', 'Prisvärt set om 3 manuella tandborstar'],
        ['resources/pictures/pics_of_brushes/bild (3).png','Quip Electric Toothbrush', 187, '0-10 år (beroende på tandborsthuvud)', 'Tandborstarnas Rolls Royce med häftigt motiv, play-as-u-brush och PlaqueOff-teknik! Kanske den bästa tandborsten för barn, som någonsin tillverkats'],
        ['resources/pictures/pics_of_brushes/bild (4).png','Foreo ISSA 6-pack', 43, '3-10 år', 'Mycket prisvärt set med 6 attraktiva tandborstar'],
        ['resources/pictures/pics_of_brushes/bild (5).png','Bamsetandborste', 18, '0-3 år', 'Lila Bamsetandborste med både motiv och antibactisoft-teknik'],
        ['resources/pictures/pics_of_brushes/bild (6).png','Crayola Marker Electric', 135, '0-3 år', 'En underhållande eltandborste som spelar en melodi samtidigt som du effektivt och mycket skonsamt gör rent dina barns tänder'],
        ['resources/pictures/pics_of_brushes/bild (7).png','Bamsetandborste 0-3 år', 19, '5-10 år', 'En Bamsetandborste som gör andra barn avundsjuka!'],
        ['resources/pictures/pics_of_brushes/bild (8).png','TP Kids 0-3 år', 14, '3-5 år', 'En personlig och prisvärd tandborste för de minsta']
    ];

    for (let i = 0; i < 9; i++) {
        console.log("har körts " + i + " gånger");
        let card = $(`
                <div class="card" style="width: 18rem;">
                    <span class="tooltip">${toothbrushes[i][4]}</span>
                    <img class="card-img-top" src="${toothbrushes[i][0]}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${toothbrushes[i][1]}</h5>
                    <div class="price_like">
                        <h4 class="card-price">${toothbrushes[i][2]} Kr</h4>
                        <span class="material-icons heart">favorite</span>
                    </div>
                    <p class="card-text">${toothbrushes[i][3]}</p>
                    <a href="#" class="btn btn-primary">Lägg i varukorg</a>
                    </div>
                </div>
            `);

        $(card).appendTo("#results");
    }
});