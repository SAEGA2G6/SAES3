<?php
namespace service;
class AdministrationChecking
{
    protected $administrationTxt;

    public function getAdministrationTxt()
    {
        return $this->administrationTxt;
    }


    public function getAllAdministration($data)
    {
        $administration = $data->getAllAdministration();

        $this->administrationTxt = array();
        foreach ($administration as $question){
            $this->administrationTxt[] = [ 'id' => $question->getId(), 'parcour' => $question->getParcour(), 'salle' => $question->getSalle(), 'enoncer' => $question->getEnoncer(), 'bonneReponse' => $question->getBonneReponse, 'reponse1' => $question->getReponse1, 'reponse2' => $question->getReponse2, 'reponse3' => $question->getReponse3, 'reponse4' => $question->getReponse4 ];
        }
    }
}