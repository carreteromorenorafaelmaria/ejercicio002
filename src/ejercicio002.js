  
/*
Insertamos un documento en la colección col003
tendremos que hacer previamente un:
 use bd
 para posicionarlos o usar una base de datos concreta
*/
db.col003.insertOne({ 
    "nombre": "Top Gun", // Entre comillas es string
    "director": "Tony Scott",
    "anoestreno": 1986  // Sin comillas es numérico
})
db.col003.insertOne({ 
    "nombre": "Blade Runner", // Entre comillas es string
    "director": "Ridley Scott",
    "anoestreno": 1982  // Sin comillas es numérico
})
db.col003.insertOne({ 
    "nombre": "Back to the Future", // Entre comillas es string
    "director": "Robert Zemeckis",
    "anoestreno": 1985  // Sin comillas es numérico
})
db.col003.insertOne({ 
    "nombre": "The Karate Kid", // Entre comillas es string
    "director": "John G. Avildsen",
    "anoestreno": 1984  // Sin comillas es numérico
})
db.col003.insertOne({ 
    "nombre": "Ghostbusters", // Entre comillas es string
    "director": "Ivan Reitman",
    "anoestreno": 1984  // Sin comillas es numérico
})

db.col003.insertOne({ 
    "nombre": "Scarface", // Entre comillas es string
    "director": "Brian De Palma",
    "anoestreno": 1983  // Sin comillas es numérico
})

db.peliculas.find ({"director": "Tony Scott"})
db.peliculas.find ({"director": "Ridley Scott"})
db.peliculas.find ({"director": "Robert Zemeckis"})
db.peliculas.find ({"director": "John G. Avildsen"})
db.peliculas.find ({"director": "Ivan Reitman"})
db.peliculas.find ({"director": "Brian De Palma"})

db.peliculas.find ({"anoestreno" $gte 1984}) //Se van a mostrar peliculas cuyo año de estreno sea mayor a 1984 o igual
db.peliculas.find ({"anoestreno" $lte 1983}) // Y aquí se van a mostrar peliculas cuyo año de estreno sea menor a 1983 o igual

