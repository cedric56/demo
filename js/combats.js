

function proposerAction(attaquant, victime)
{    
    var details = "Personnage : " + attaquant.nom + " vous disposez de " + attaquant.degats + " points.\nSouhaitez vous attaquer (OK) ou vous défendre (ANNULER) ?";
    
    
    if(true === confirm(details))
    {
        victime.ajouterDegats(attaquant.attaquer());
    }
    else
    {
        attaquant.seProteger();
    }
}

function combat(personnage)
{
    var attaquant = personnages.find(function(pers)
                    {
        return pers.nom === personnage.nom;
    });
    var adversaire = personnages.find(function(pers)
                    {
        return pers.nom !== personnage.nom;
    });
    
    
    while(attaquant.degats > 0 || adversaire.degats > 0)
    {
        proposerAction(attaquant, adversaire);
        
        if(adversaire.degats <= 0)
        {
            break;
        }
        
        proposerAction(adversaire, attaquant);
    }
    
    if(adversaire.degats <= 0)
    {
         adversaire.publish();
    }
    else
    {
        attaquant.publish();
    }
}