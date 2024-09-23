var comVogal = "Alexandre";
var semVogal = "";  // Variável para armazenar a string sem vogais

for (var c = 0; c < comVogal.length; c++) {
    // Se a letra não for uma vogal, ela é adicionada à nova string
    if (!"aeiouAEIOU".includes(comVogal[c])) {
        semVogal += comVogal[c];
    }
}

console.log(semVogal);  // Saída: "tst"
