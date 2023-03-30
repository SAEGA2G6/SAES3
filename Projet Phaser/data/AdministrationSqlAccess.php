<?php

namespace data;

use service\AdministrationAccessInterface;
include_once "service/AdministrationAccessInterface.php";

use domain\{User,Question};
include_once "domain/User.php";
include_once "domain/Question.php";
class AdministrationSqlAccess implements AdministrationAccessInterface
{
    protected $dataAccess = null;

    public function __construct($dataAccess)
    {
        $this->dataAccess = $dataAccess;
    }

    public function __destruc()
    {
        $this->dataAccess = null;
    }

 
    public function getAllAdministration()
    {
        $result = $this->dataAccess->query('SELECT * FROM QUESTION');
        $administration = array();

        while ($row = $result->fetch()) {
            $currentQuestion = new Question($row['ID_QUESTION'], $row['Parcour'], $row['salle'], $row['Enoncer'], $row['BonneReponse'], $row['Reponse1'], $row['Reponse2'], $row['Reponse3'], $row['Reponse4']);
            $administration[] = $currentQuestion;
        }

        $result->closeCursor();

        return $administration;
    }

    public function createQuestion($question){
        $query = $this->dataAccess->prepare('INSERT INTO QUESTION (ID_QUESTION, Parcour, salle, Enoncer, BonneReponse, Reponse1, Reponse2, Reponse3, Reponse4) VALUES (:ID_QUESTION, :Parcour, :salle, :Enoncer, :BonneReponse, :Reponse1, :Reponse2, :Reponse3, :Reponse4)');
        $query->execute(['ID_QUESTION' => $question->getID(), 'Parcour' => $question->getParcour(), 'salle'=> $question->getSalle(), 'Enoncer'=> $question->getEnoncer(), 'BonneReponse'=> $question->getBonneReponse(), 'Reponse1'=> $question->getReponse1(), 'Reponse2'=> $question->getReponse2(), 'Reponse3'=> $question->getReponse3(), 'Reponse4'=> $question->getReponse4()]);
    }

}