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
        //echo var_dump($administration);
        $this->administrationTxt = array();
        foreach ($administration as $question){
            $this->administrationTxt[] = [ 'id' => $question->getId(), 'parcours' => $question->getParcours(), 'salle' => $question->getSalle(), 'enonce' => $question->getEnonce(), 'bonneReponse' => $question->getBonneReponse(), 'reponse1' => $question->getReponse1(), 'reponse2' => $question->getReponse2(), 'reponse3' => $question->getReponse3(), 'reponse4' => $question->getReponse4()];
        }
    }

    public function createQuestion($data, $question){
        $data->createQuestion($question);
    }

    public function deleteQuestion($data, $id){
        $data->deleteQuestion($id);
    }

    public function updateQuestion($data,$question){
        $data->updateQuestion($question);
    }
}