function determinerJoueur(cases)
{
    return cases.find(function(c)
    {
        return c.estCourant;
    });
}

function determinerJoueurSuivant(cases)
{
    return cases.find(function(c)
    {
        return !c.estCourant && !!c.personnage;
    });
}

function determinerCasesPersonnages(cases)
{
    //Le placement des deux joueurs est lui aussi aléatoire sur la carte au chargement de la partie. 
    var casesPersonnages = [
        cases[Math.floor(Math.random() * cases.length)],
        cases[Math.floor(Math.random() * cases.length)]
    ];
    
    while((casesPersonnages[0].x === casesPersonnages[1].x && casesPersonnages[0].y ===  casesPersonnages[1].y) ||
                  (casesPersonnages[0].x ===  casesPersonnages[1].x + 1 && casesPersonnages[0].y ===  casesPersonnages[1].y) ||
                  (casesPersonnages[0].x ===  casesPersonnages[1].x - 1 && casesPersonnages[0].y ===  casesPersonnages[1].y) ||
                  (casesPersonnages[0].x ===  casesPersonnages[1].x && casesPersonnages[0].y ===  casesPersonnages[1].y + 1) ||
                  (casesPersonnages[0].x ===  casesPersonnages[1].x && casesPersonnages[0].y ===  casesPersonnages[1].y - 1))
    {
        //Ils ne doivent pas se toucher.
        casesPersonnages = [
            cases[Math.floor(Math.random() * cases.length)],
            cases[Math.floor(Math.random() * cases.length)]
        ];
    }
    
    return casesPersonnages;
}

function determinerCasesArmees(cases)
{
    return [
        cases[Math.floor(Math.random() * cases.length)],
        cases[Math.floor(Math.random() * cases.length)],
        cases[Math.floor(Math.random() * cases.length)],
        cases[Math.floor(Math.random() * cases.length)],
    ];
}

function determinerCasesGrisees(cases) {
  return  [
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)],
      cases[Math.floor(Math.random() * cases.length)]
  ];    
}