<?php
namespace control;

class Controllers
{
    public function  authenticateAction($userCheck, $dataUsers){

        // Si l'utilisateur n'a pas de session ouverte
        if( !isset($_SESSION['login']) ) {

            // Si la page d'origine est le formulaire de connexion ou de création de compte
            if( isset($_POST['login']) && isset($_POST['password']) )
            {
                if( !$userCheck->authenticate($_POST['login'], $_POST['password'], $dataUsers) )
                {
                    // retourne une erreur si le compte n'est pas enregistré
                    $error = 'bad login or pwd';
                    echo $error;
                    return $error;

                }
                // Enregistrement des informations de session après une authentification réussie
                else {
                    $_SESSION['login'] = $_POST['login'] ;
                    echo 'on est la';
                    header("Location: https://localhost/index.php/administration");
                    die();
                }
            }
            else{
                // retourne une erreur si la personne ne passe pas par le forumlaire de création ou de connexion
                $error = 'not connected';
                echo $error;
                return $error;
            }

        }

    }

    public function getAllQuestionAction($administrationCheck, $dataAdministration){
        $administrationCheck->getAllAdministration($dataAdministration);
    }

    public function createQuestionAction($question, $administrationCheck, $dataAdministration){
        $administrationCheck->createQuestion($dataAdministration, $question);
    }

    public function deleteQuestionAction($id, $administrationCheck, $dataAdministration){
        $administrationCheck->deleteQuestion($dataAdministration, $id);
    }
}