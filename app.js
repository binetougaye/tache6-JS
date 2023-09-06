let mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet"];
// Retirer la dernière valeur du tableau
console.log(mois);
mois.pop();
// Afficher les valeurs du tableau avec document.write
document.write([mois]);
// Afficher la valeur aout à la fin du tablau
mois.push(["aout"]);
// Remplacer la valeur 'fevrier' par "fevrier"
mois[1] = "février";
// Afficher le nombre de valeur du tableau avec la méthode document write
document.write(mois.length);
// Afficher la troisième valeur du tableau
document.write(mois[2]);
