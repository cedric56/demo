function creerTableau()
{    
    var cases = new Array();
    var tBodyElt = document.createElement("tbody");
    var index = 0;
    
    for(var x = 0; x < 10; x++)
    {
        var tRELt = document.createElement("tr");

        for(var y = 0; y < 10; y++)
        {                    
            var casePlateau = Object.create(Case);
            casePlateau.init(x,y);
            cases.push(casePlateau);

            var tDELt = document.createElement("td");                    
            tRELt.appendChild(tDELt);

            var obj = {
                handleEvent: function() {                            
                    this.td.style.background = "black";
                },
                td: tDELt
            };

            tDELt.addEventListener("click", obj, false);
            index++;                    
        }
        tBodyElt.appendChild(tRELt);
    }
    tableau.appendChild(tBodyElt);
    return cases;
}

function ajouterObjets(cases, personnages, armes)
{
    var casesGrisees = determinerCasesGrisees(cases);
    casesGrisees.forEach(function(caseGrisee)
    {      
        caseGrisee.estGrisee = true;
        tableau.rows[caseGrisee.x].cells[caseGrisee.y].style.background = "black";
    });
    
    var casesDisponibles = cases.filter(function(caseGrisee)
                                       {
        return !caseGrisee.estGrisee;
    });        
    
    var casesArmees = determinerCasesArmees(casesDisponibles);
    var i = 0;
    casesArmees.forEach(function(caseArmee)
    {
        caseArmee.arme = armes[i];
        appliquerImage(caseArmee.x, caseArmee.y, "url(" + armes[i].url + ")");
        i++;
    });
    
    casesDisponibles = cases.filter(function(caseGrisee)
    {
        return !caseGrisee.estGrisee && caseGrisee.arme == null;
    }); 
    
    var casesPersonnages = determinerCasesPersonnages(casesDisponibles);
    i = 0;
    casesPersonnages.forEach(function(casePersonnage)
    {
        if(i === 0)
        {
            casePersonnage.estCourant = true;
        }
        casePersonnage.personnage = personnages[i];
        appliquerImage(casePersonnage.x, casePersonnage.y, personnages[i].obtenirUrl());
        i++;
    });
}