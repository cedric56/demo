
var compteurAvancement = 3;

function avancerJoueur(caseDepart, personnage, x , y)
{
    var caseArrivee = caseDepart;
    
    if(null == cases.find(function(c)
    {
        //Détection des cases grisées
        return x === c.x && y === c.y && c.estGrisee;        
    }))
    {
        caseArrivee = appliquerCasseArrivee(personnage,x, y); 
        compteurAvancement--;   
        
        var adversaire = cases.find(function(c)
        {
            //Détection de l'adversaire
             return !!c.personnage && 
                 ((x === c.x && y === c.y) ||
                  (x === c.x + 1 && y === c.y) ||
                  (x === c.x - 1 && y === c.y) ||
                  (x === c.x && y === c.y + 1) ||
                  (x === c.x && y === c.y - 1));
        });
        if(!!adversaire)
        {
            appliquerImage(caseDepart.x, caseDepart.y , "none");
            combat(personnage);
        }
    }
    return caseArrivee;
}

function ajouterDirections()
{
    document.addEventListener("keydown", function (e) 
    {
        var compteurDepart = compteurAvancement;
        var caseDepart = determinerJoueur(cases);
        var caseArrivee = caseDepart;
        var personnage = caseDepart.personnage;
        
        caseDepart.personnage = null;
        caseDepart.estCourant = false;            

        if (e.keyCode === 37) 
        {
            if(caseDepart.y > 0)
            {
                caseArrivee = avancerJoueur(caseDepart,personnage, caseDepart.x, caseDepart.y - 1);
            }
        }

        if (e.keyCode === 38) 
        {
            if(caseDepart.x > 0)
            {
                caseArrivee = avancerJoueur(caseDepart,personnage, caseDepart.x - 1, caseDepart.y);
            }
        }

        if (e.keyCode === 39) 
        {
            if(caseDepart.y <9)
            {
                caseArrivee = avancerJoueur(caseDepart,personnage, caseDepart.x, caseDepart.y + 1);
            }
        }

        if (e.keyCode === 40) 
        {             
            if(caseDepart.x < 9)
            {                
                caseArrivee = avancerJoueur(caseDepart,personnage, caseDepart.x + 1, caseDepart.y);
            }
        }               

       caseArrivee.personnage = personnage;
       caseArrivee.estCourant = true;
        
        if(compteurAvancement === 0 || e.keyCode === 13)
        {
            compteurAvancement = 3;

            caseJoueurSuivant = determinerJoueurSuivant(cases);            
            caseJoueurSuivant.estCourant = true;
            caseArrivee.estCourant = false;                        
        }        
        
        if(!!caseDepart.arme && null === caseDepart.personnage)
        {
            appliquerImage(caseDepart.x, caseDepart.y, "url(" + caseDepart.arme.url + ")");
        }
        else if(compteurDepart !== compteurAvancement && e.keyCode !== 13)           
        {
            appliquerImage(caseDepart.x, caseDepart.y, "none");
        }
        
        var tourElt = document.getElementById("tour");
        caseJoueurSuivant = determinerJoueurSuivant(cases); 
        tourElt.innerHTML = "Au tour de " + caseJoueurSuivant.personnage.nom;
        
        var deplacementElt = document.getElementById("deplacements");
        deplacementElt.innerHTML = "Il vous reste " + compteurAvancement + " déplacements";
    });
}


function appliquerImage(x, y, url)
{
    tableau.rows[x].cells[y].style.backgroundPosition = "center center";
    tableau.rows[x].cells[y].style.backgroundRepeat = "no-repeat";
    tableau.rows[x].cells[y].style.backgroundImage = url;
}

function appliquerCasseArrivee(personnage, x, y)
{    
    var caseAvecArme = cases.find(function(cas)
    {
        return !!cas.arme && cas.x === x && cas.y === y;
    });
    if(!!caseAvecArme){           
        //Si un joueur passe sur une case contenant une arme, il laisse son arme actuelle sur place et la remplace par la nouvelle.
        var armeTemp = personnage.arme;
        personnage.ajouterArme(caseAvecArme.arme);  
        caseAvecArme.arme = armeTemp;    
    }
    appliquerImage(x, y, personnage.obtenirUrl());
    
    return cases.find(function(c)
                {
        return x === c.x && y === c.y;
    });   
}