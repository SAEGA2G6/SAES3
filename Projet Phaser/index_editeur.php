<?php
    // on se connecte à notre base
        $db = new mysqli("mysql-aixploration.alwaysdata.net", "292885", "aixploration2023", "aixploration_sql");
 
        // lancement de la requête
        $sql = 'SELECT * FROM QUESTION';
 
        // on lance la requête (mysql_query) et on impose un message d'erreur si la requête ne se passe pas bien (or die)
        //$sql = mysqli_query($db, $sql) or die('Erreur SQL !<br />'.$sql.'<br />'.mysqli_error());
 
 
$res = mysqli_query($db, $sql);
                if(mysqli_num_rows($res) !==0) {
                while ($data = mysqli_fetch_object($res)) {
                    //echo '<p>id : '.$data->prenom.' <br /> '.$data->nom.'';
                    echo '<div> id question : '. $data->ID_QUESTION.', parcour : '. $data->Parcour.', salle : '. $data->salle.', enoncer : "'. $data->Enoncer.'", bonne reponse : '. $data->BonneReponse.', reponse 1 : "'. $data->Reponse1.'", reponse 2 : "'. $data->Reponse2.'", reponse 3 : "'. $data->Reponse3.'", reponse 4 : "'. $data->Reponse4.'"</div>';
                    echo '<br>';
                    echo '<br>';     
                }
}else {
echo 'pas de correspondance';
echo '<br>';
echo '<br>';     
 
}  
             
    // on libère l'espace mémoire alloué pour cette interrogation de la base
        mysqli_free_result ($res);
        mysqli_close ($db);
      
?>


