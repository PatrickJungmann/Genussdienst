const jsondb = {
  produkte: [
    {
      name: 'Genuss Burger Spezial',
      beschreibung: 'mit Rindfleisch & Bacon',
      kategorie: 'Hauptgericht',
      preis: 12.50,
      url: 'burger',
      bild: '/Bilder/Produkte/burger.jpg',
      extras: [
        {
          text: "extra Käse (+0,50 €) ",
          preis: 0.50,
        },
        {
          text: "extra scharf (+0,25 €) ",
          preis: 0.25,
        }
      ]
    },
    {
      name: 'Cheeseburger',
      beschreibung: 'mit Rindfleisch & Käse',
      kategorie: 'Hauptgericht',
      preis: 12.50,
      url: 'cheeseburger',
      bild: '/Bilder/Produkte/cheeseburger.jpg',
      extras: [
        {
          text: "extra Käse (+0,50 €) ",
          preis: 0.50,
        },
        {
          text: "extra scharf (+0,25 €) ",
          preis: 0.25,
        }
      ]
    },
    {
      name: 'Pommes',
      beschreibung: 'mit Dip nach Wahl',
      kategorie: 'Hauptgericht',
      preis: 3.50,
      url: 'pommes',
      bild: '/Bilder/Produkte/pommes.jpg',
      extras: [
        {
          text: "Ketchup (Gratis)",
          preis: 0.00,
        },
        {
          text: "Mayonaise (Gratis)",
          preis: 0.00,
        },
        {
          text: "BBQ (+0,50 €)",
          preis: 0.50,
        },
        {
          text: "Süß-Sauer (+0,50 €)",
          preis: 0.50,
        },
        {
          text: "Mango-Sauce (+0,50 €)",
          preis: 0.50,
        },
        {
          text: "Käsesoße überbacken (+1,00 €) ",
          preis: 1.00,
        },
        {
          text: "Jalapenos (+0,50 €) ",
          preis: 0.50,
        }
      ]
    },
    {
      name: 'Süßkartoffel Pommes',
      beschreibung: 'mit Dip nach Wahl',
      kategorie: 'Hauptgericht',
      preis: 3.50,
      url: 'süßkartoffel-pommmes',
      bild: '/Bilder/Produkte/süßkartoffel-pommes.jpg',
      extras: [
        {
          text: "Ketchup (Gratis)",
          preis: 0.00,
        },
        {
          text: "Mayonaise (Gratis)",
          preis: 0.00,
        },
        {
          text: "BBQ (+0,50 €)",
          preis: 0.50,
        },
        {
          text: "Süß-Sauer (+0,50 €)",
          preis: 0.50,
        },
        {
          text: "Mango-Sauce (+0,50 €)",
          preis: 0.50,
        },
        {
          text: "Käsesoße überbacken (+1,00 €) ",
          preis: 1.00,
        },
        {
          text: "Jalapenos (+0,50 €) ",
          preis: 0.50,
        }
      ]
    },
    {
      name: 'Spaghetti Bolognese',
      beschreibung: 'mit Rindfleich',
      kategorie: 'Hauptgericht',
      preis: 8.50,
      url: 'bolognese',
      bild: '/Bilder/Produkte/bolognese.jpg',
      extras: [
        {
          text: "Glutenfrei (+2,00 €) ",
          preis: 2.00,
        },
        {
          text: "extra Käse (+0,50 €) ",
          preis: 0.50,
        }
      ]
    },
    {
      name: 'Lasagne',
      beschreibung: 'mit Rindfleich',
      kategorie: 'Hauptgericht',
      preis: 12.50,
      url: 'lasagne',
      bild: '/Bilder/Produkte/lasagne.jpg',
      extras: [
        {
          text: "Glutenfrei (+2,00 €) ",
          preis: 2.00,
        },
        {
          text: "extra Käse (+0,50 €) ",
          preis: 0.50,
        }
      ]
    },
    {
      name: 'Pizza Genuss Speciale',
      beschreibung: 'mit Schinken & Salami',
      kategorie: 'Hauptgericht',
      preis: 8.00,
      url: 'pizza-genuss',
      bild: '/Bilder/Produkte/pizza-genuss.jpg',
      extras: [
        {
          text: "mit Champignons (+0,50 €) ",
          preis: 0.50,
        },
        {
          text: "extra Käse (+0,50 €) ",
          preis: 0.50,
        }
      ]
    },
    {
      name: 'Pizza Salami',
      beschreibung: 'mit Rindfleisch Salami',
      kategorie: 'Hauptgericht',
      preis: 8.00,
      url: 'pizza-salami',
      bild: '/Bilder/Produkte/pizza-salami.jpg',
      extras: [
        {
          text: "mit Champignons (+0,50 €) ",
          preis: 0.50,
        },
        {
          text: "extra Käse (+0,50 €) ",
          preis: 0.50,
        }
      ]
    },
    {
      name: 'Wiener Schnitzel',
      beschreibung: 'mit Kalbsfleisch',
      kategorie: 'Hauptgericht',
      preis: 20.00,
      url: 'schnitzel',
      bild: '/Bilder/Produkte/schnitzel.jpg',
      extras: [
        {
          text: "kleine Portion Pommes (+1,50 €) ",
          preis: 1.50,
        },
        {
          text: "kleine Portion Kartoffelsalat (+1,50 €) ",
          preis: 1.50,
        },
        {
          text: "extra Zitrone (Gratis) ",
          preis: 0.00,
        }
      ]
    },
    {
      name: 'Seelachsfilet',
      beschreibung: 'mit Spinat-Sahne Soße',
      kategorie: 'Hauptgericht',
      preis: 16.50,
      url: 'lachsfilet',
      bild: '/Bilder/Produkte/lachsfilet.jpg',
      extras: [
        {
          text: "kleine Portion Nudeln (+1,50 €) ",
          preis: 1.50,
        },
        {
          text: "kleine Portion Reis (+1,50 €) ",
          preis: 1.50,
        },
      ]
    },
    {
      name: 'Falafel',
      beschreibung: 'mit Hummus',
      kategorie: 'Hauptgericht',
      preis: 8.00,
      url: 'falafel',
      bild: '/Bilder/Produkte/falaffel.jpg',
      extras: [
        {
          text: "kleine Portion Pommes (+1,50 €) ",
          preis: 1.50,
        },
        {
          text: "extra scharf (+0,25 €) ",
          preis: 0.25,
        }
      ]
    },
    {
      name: 'Lahmacun',
      beschreibung: 'mit Rindfleisch',
      kategorie: 'Hauptgericht',
      preis: 7.00,
      url: 'lahmacun',
      bild: '/Bilder/Produkte/lahmacun.jpg',
      extras: [
        {
          text: "Knoblauch-Kräuter Dip (+0,30 €) ",
          preis: 0.30,
        },
        {
          text: "extra scharf (+0,25 €) ",
          preis: 0.25,
        }
      ]
    },
    {
      name: 'Coca Cola',
      beschreibung: 'mit Koffein',
      kategorie: 'Getränke',
      preis: 1.50,
      url: 'cola',
      bild: '/Bilder/Produkte/cola.jpg',
      extras: [
        {
          text: "extra kalt (+0,10 €) ",
          preis: 0.10,
        }
      ]
    },
    {
      name: 'Red Bull',
      beschreibung: 'mit Koffein',
      kategorie: 'Getränke',
      preis: 2.50,
      url: 'redbull',
      bild: '/Bilder/Produkte/redbull.jpg',
      extras: [
        {
          text: "extra kalt (+0,10 €) ",
          preis: 0.10,
        }
      ]
    },
    {
      name: 'Erdbeer Eis',
      beschreibung: 'mit Sahne',
      kategorie: 'Nachspeise',
      preis: 2.50,
      url: 'erdbeereis',
      bild: '/Bilder/Produkte/eis.jpg',
      extras: [
        {
          text: "Schokoladensoße (+0,75 €) ",
          preis: 0.75,
        },
        {
          text: "extra Erdbeeren (+0,50 €) ",
          preis: 0.50,
        }
      ]
    },
    {
      name: 'Schokoladen Cupcake',
      beschreibung: 'mit Schoko Topping',
      kategorie: 'Nachspeise',
      preis: 3.50,
      url: 'muffin',
      bild: '/Bilder/Produkte/muffin.jpg',
      extras: [
        {
          text: "Streusel (+0,20 €) ",
          preis: 0.20,
        },
        {
          text: "Glutenfrei (+1,00 €) ",
          preis: 1.00,
        }
      ]
    },
  ]
}
export default jsondb;