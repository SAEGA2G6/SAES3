<?php
namespace control;
class Presenter
{
    protected $administrationCheck;

    public function __construct($administrationCheck)
    {
        $this->administrationCheck = $administrationCheck;
    }



    public function getAllAdministrationHTML()
    {
        $content = null;
        if( $this->administrationCheck->getAdministrationTxt() != null )
        {
            $content .=  '<div class= "scrollbox">';
            foreach( $this->administrationCheck->getAdministrationTxt()as $question ) {
                $content .=  '<div class= "questionBox">';
                $content .=  '<div> <input type="checkbox" class="checkbox" id="'.$question['id'].'">';
                $content .=  '<p>ID question : <div>'. $question['id'].'</div></p>';
                $content .=  '<p>Parcours : '. $question['parcours'].'</p>';
                $content .=  '<p>Salle : '. $question['salle'].'</p>';
                $content .=  '<p>Énoncé : "'. $question['enonce'].'"</p>';
                $content .=  '<p>Bonne reponse : '. $question['bonneReponse'].'</p>';
                $content .=  '<p>Réponse 1 : "'. $question['reponse1'].'"</p>';
                $content .=  '<p>Réponse 2 : "'. $question['reponse2'].'"</p>';
                $content .=  '<p>Réponse 3 : "'. $question['reponse3'].'"</p>';                    
                $content .=  '<p>Réponse 4 : "'. $question['reponse4'].'"</p></div><br><br>';   
                $content .=  '</div>';
            }    
            $content .=  '</div>';
        }else {
            $content .=  'Pas de correspondance <br><br>';   
        } 
        return $content;
    }
}