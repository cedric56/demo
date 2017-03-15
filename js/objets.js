var Case =
{
    init: function (x,y)
    {
        this.x = x;
        this.y = y;
    },

    init:function(x,y, estGrisee, personnage, arme)
    {
        this.x = x;
        this.y = y;
        this.estGrisee = estGrisee;
        this.personnage = personnage;
        this.arme = arme;
    }
}

var Personnage =
{
    init:function(nom, degats, arme, hasProtection, url)
    {
        this.nom = nom;
        this.hasProtection = hasProtection;
        this.degats = degats;
        this.url = url;
        this.arme = arme;
    },
    
    attaquer:function()
    {
        if(!!this.arme)
        {
            return this.arme.degats;
        }
        return 10;
    },
    
    seProteger:function()
    {
        this.hasProtection = true;
    },
    ajouterArme : function(arme)
    {
        this.arme = arme;
        this.changer();
    },
    ajouterDegats:function(degats)
    {        
        if(this.hasProtection)
        {
            this.degats -= degats * 50 / 100;
            this.hasProtection = false;
        }
        else
        {
            this.degats -= degats;
        }
        this.changer();
    },
    publish : function() 
    {
        if (typeof this.onPublish === "function") {
            setTimeout(this.onPublish, 1);
        }

        return this.me;
    },
    obtenirUrl: function()
    {
        if(!!this.arme)
        {
            return "url(" + this.arme.url +"), url(" + this.url + ")";
        }
 
        return "url(" + this.url + ")";
    },
    changer:function()
    {
        if (typeof this.onChanger === "function") {
            setTimeout(this.onChanger, 1);
        }

        return this.me;
    },
    decrire:function()
    {
        return 	"Joueur : " + this.nom + " Santé : " + this.degats + " Arme : " + this.arme.nom + " " + this.arme.degats + " de puissance";
	
    }
}

var Arme = 
    {
        init:function(nom, degats, url) {
        this.nom = nom;
            this.degats = degats;
            this.url = url;
    },
        
            
            
            
    }