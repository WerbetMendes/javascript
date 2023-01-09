let host = "localhost";
let port = "3000";
let resource = "users";
let url = "https://" + host + ":" + port + "/" + resource;
console.log(url)

// Interpolacao utilizando barras com aspas apenas no começo e no final.

/* let monthsOfTheYear = "0 - Jan\
1 - Fev\
2 - Mar\
3 - Abr\
4 - May\
5 - June\
6 - July\
7 - August\
8 - September\
9 - October\
10 - November\
11 - December";
console.log(monthsOfTheYear) */

//Interpolação com as strings na vertical
let monthsOfTheYear = "0 - Jan\n\
1 - fev\n\
2 - March\n\
3 - April\n\
4 - May\n\
5 - June\n\
6 - July\n\
7 - August\n\
8 - September\n\
9 - October\n\
10 - November\n\
11 - December";
console.log(monthsOfTheYear)

//Ao invés de utilizar \n\, também podemos colocar acento grave(um no começo e outro no final). Sem deixar de escrever as strings na vertical.