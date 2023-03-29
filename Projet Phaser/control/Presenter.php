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
            foreach( $this->administrationCheck->getAdministrationTxt()as $question ) {
                $content .=  '<div> <input type="checkbox" class="checkbox" id="'.$question['id'].'">';
                $content .=  '<p> id question : <div>'. $question['id'].'</div></p>';
                $content .=  '<p>parcour : '. $question['parcour'].'</p>';
                $content .=  '<p>salle : '. $question['salle'].'</p>';
                $content .=  '<p>enoncer : "'. $question['enoncer'].'"</p>';
                $content .=  '<p>bonne reponse : '. $question['bonneReponse'].'</p>';
                $content .=  '<p>reponse 1 : "'. $question['reponse1'].'"</p>';
                $content .=  '<p>reponse 2 : "'. $question['reponse2'].'"</p>';
                $content .=  '<p>reponse 3 : "'. $question['reponse3'].'"</p>';                    
                $content .=  '<p>reponse 4 : "'. $question['reponse4'].'"</p></div><br><br>';   
            }    
        }else {
            $content .=  'pas de correspondance <br><br>';   
        } 
        return $content;
    }
}