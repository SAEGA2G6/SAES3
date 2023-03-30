function afficheEditeur(){
let maDiv = document.getElementById('newQ')
let monForm = document.createElement('form')
monForm.action = 'ajouteQuestion'
monForm.method = "POST"

let idQuestion = document.createElement('p')
idQuestion.innerHTML = 'id question : sera généré automatiquement'

let parcour = document.createElement('p')
parcour.innerHTML = 'parcour : '
let inputParcour = document.createElement('input')
inputParcour.type = 'text'
inputParcour.name = 'Parcour'
parcour.append(inputParcour)
monForm.append(parcour)

let salle = document.createElement('p')
salle.innerHTML = 'salle : '
let inputSalle = document.createElement('input')
inputSalle.type = 'text'
inputSalle.placeholder = 'au format [étage]_r[numSalle]'
inputSalle.name = 'salle'
salle.append(inputSalle)
monForm.append(salle)

let enoncer = document.createElement('p')
enoncer.innerHTML = 'enoncer : '
let inputEnoncer = document.createElement('input')
inputEnoncer.type = 'text'
inputEnoncer.name = 'Enoncer'
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
selectBonneReponse.name = "BonneReponse"
bonneReponse.append(selectBonneReponse)
monForm.append(bonneReponse)

let reponse1 = document.createElement('p')
reponse1.innerHTML = 'reponse 1 : '
let inputReponse1 = document.createElement('input')
inputReponse1.type = 'text'
inputReponse1.name = 'Reponse1'
reponse1.append(inputReponse1)
monForm.append(reponse1)

let reponse2 = document.createElement('p')
reponse2.innerHTML = 'reponse 2 : '
let inputReponse2 = document.createElement('input')
inputReponse2.type = 'text'
inputReponse2.name = 'Reponse2'
reponse2.append(inputReponse2)
monForm.append(reponse2)

let reponse3 = document.createElement('p')
reponse3.innerHTML = 'reponse 3 : '
let inputReponse3 = document.createElement('input')
inputReponse3.type = 'text'
inputReponse3.name = 'Reponse3'
reponse3.append(inputReponse3)
monForm.append(reponse3)

let reponse4 = document.createElement('p')
reponse4.innerHTML = 'reponse 4 : '
let inputReponse4 = document.createElement('input')
inputReponse4.type = 'text'
inputReponse4.name = 'Reponse4'
reponse4.append(inputReponse4)
monForm.append(reponse4)

let submit = document.createElement('p')
let inputSubmit = document.createElement('input')
inputSubmit.type = "submit"
submit.append(inputSubmit)
monForm.append(submit)

maDiv.append(monForm)
}

function supprimerQuestion(){
    checkedCheckboxe= []
    checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach(element => {
        if(element.checked)
            checkedCheckboxe.push(element)
    });
    if (checkedCheckboxe.length < 1){
        alert('pas de question sélectionné')
    }
    if (checkedCheckboxe.length > 1){
        alert('trop de question sélectionné')
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "deleteQuestion", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
      }
    };
    xhr.open("POST", "deleteQuestion", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("ID=" + checkedCheckboxe[0].id);

    setTimeout(function(){
        location.reload(true)
    }, 2000);
    

}

function updateQuestion(){
    checkedCheckboxes = []
    checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach(element => {
        if(element.checked)
            checkedCheckboxes.push(element)
    });
    if (checkedCheckboxes.length < 1){
        alert('pas de question sélectionné')
    }
    if (checkedCheckboxes.length > 1){
        alert('trop de question sélectionné')
    }
    currentQuestion = checkedCheckboxes[0].parentNode

    
    let parcour = currentQuestion.childNodes.item(1)
    let inputParcour = document.createElement('input')
    inputParcour.type = 'text'
    alert(parcour.childNodes.item(0))
    /*let maDiv = parcour.children[0]
    inputParcour.innerHTML = maDiv.innerHTML
    parcour.removeChild(maDiv)
    parcour.append(inputParcour)*/
    
    
    /*alert(currentQuestion)
    alert(currentQuestion.childNodes)
    currentQuestion.childNodes.forEach(element => {
        alert(element.value)
    });*/

}