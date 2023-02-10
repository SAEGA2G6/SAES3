function afficheEditeur(){
let maDiv = document.getElementById('newQ')
let monForm = document.createElement('form')

let idQuestion = document.createElement('p')
idQuestion.innerHTML = 'id question : sera généré automatiquement'

let parcour = document.createElement('p')
parcour.innerHTML = 'parcour : '
let inputParcour = document.createElement('input')
inputParcour.type = 'text'
parcour.append(inputParcour)
monForm.append(parcour)

let salle = document.createElement('p')
salle.innerHTML = 'salle : '
let inputSalle = document.createElement('input')
inputSalle.type = 'text'
inputSalle.placeholder = 'au format [étage]_r[numSalle]'
salle.append(inputSalle)
monForm.append(salle)

let enoncer = document.createElement('p')
enoncer.innerHTML = 'enoncer : '
let inputEnoncer = document.createElement('input')
inputEnoncer.type = 'text'
enoncer.append(inputEnoncer)
monForm.append(enoncer)

let bonneReponse = document.createElement('p')
bonneReponse.innerHTML = 'bonne reponse :'
let selectBonneReponse = document.createElement('select')
let option1BonneReponse = document.createElement('option')
option1BonneReponse.value = "1"
option1BonneReponse.innerHTML = "reponse 1"
selectBonneReponse.append(option1BonneReponse)
let option2BonneReponse = document.createElement('option')
option2BonneReponse.value = "2"
option2BonneReponse.innerHTML = "reponse 2"
selectBonneReponse.append(option2BonneReponse)
let option3BonneReponse = document.createElement('option')
option3BonneReponse.value = "3"
option3BonneReponse.innerHTML = "reponse 3"
selectBonneReponse.append(option3BonneReponse)
let option4BonneReponse = document.createElement('option')
option4BonneReponse.value = "4"
option4BonneReponse.innerHTML = "reponse 4"
selectBonneReponse.append(option4BonneReponse)
bonneReponse.append(selectBonneReponse)
monForm.append(bonneReponse)

let reponse1 = document.createElement('p')
reponse1.innerHTML = 'reponse 1 : '
let inputReponse1 = document.createElement('input')
inputReponse1.type = 'text'
reponse1.append(inputReponse1)
monForm.append(reponse1)

let reponse2 = document.createElement('p')
reponse2.innerHTML = 'reponse 2 : '
let inputReponse2 = document.createElement('input')
inputReponse2.type = 'text'
reponse2.append(inputReponse2)
monForm.append(reponse2)

let reponse3 = document.createElement('p')
reponse3.innerHTML = 'reponse 3 : '
let inputReponse3 = document.createElement('input')
inputReponse3.type = 'text'
reponse3.append(inputReponse3)
monForm.append(reponse3)

let reponse4 = document.createElement('p')
reponse4.innerHTML = 'reponse 4 : '
let inputReponse4 = document.createElement('input')
inputReponse4.type = 'text'
reponse4.append(inputReponse4)
monForm.append(reponse4)

let submit = document.createElement('p')
let inputSubmit = document.createElement('input')
inputSubmit.type = "submit"
inputSubmit.value = "Envoyer"
submit.append(inputSubmit)
monForm.append(submit)

maDiv.append(monForm)
}
