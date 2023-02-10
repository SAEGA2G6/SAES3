<?php
echo'<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta description="Serious Game présentant le BUT Informatique d\'Aix-En-Provence !">
    <title>Aix\'ploration - À la découverte du BUT Informatique !</title>
</head>
<body>
    <header>

    </header>';
if ($_POST['login']=='admin'){
    if ($_POST['password']=='passwordAdministrator'){
        // on se connecte à notre base
        $db = new mysqli("mysql-aixploration.alwaysdata.net", "292885", "aixploration2023", "aixploration_sql");
 
        // lancement de la requête
        $sql = 'SELECT * FROM QUESTION';
     
        // on lance la requête (mysql_query) et on impose un message d'erreur si la requête ne se passe pas bien (or die)
        $res = mysqli_query($db, $sql) or die('Erreur SQL !<br />'.$sql.'<br />'.mysqli_error($db));
     
     
        //$res = mysqli_query($db, $sql);
        if(mysqli_num_rows($res) !==0) {
            while ($data = mysqli_fetch_object($res)) {
                echo '<div><p> id question : '. $data->ID_QUESTION.'</p>';
                echo '<p>parcour : '. $data->Parcour.'</p>';
                echo '<p>salle : '. $data->salle.'</p>';
                echo '<p>enoncer : "'. $data->Enoncer.'"</p>';
                echo '<p>bonne reponse : '. $data->BonneReponse.'</p>';
                echo '<p>reponse 1 : "'. $data->Reponse1.'"</p>';
                echo '<p>reponse 2 : "'. $data->Reponse2.'"</p>';
                echo '<p>reponse 3 : "'. $data->Reponse3.'"</p>';
                echo '<p>reponse 4 : "'. $data->Reponse4.'"</p></div>';
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

        echo '<button onclick="afficheEditeur()">crée une nouvelle question</button><br><div id="newQ"></div>';
        echo '<script src="Adminstration.js"></script>
        <footer>
        <a href="/mentionslegales.html">Mentions légales</a><p> . </p><a href="/index.html"> le jeu</a>
        </footer>
        </body></html>';
    }
    else{
        echo '<p>mauvais mot de passe</p><br>';
        echo '<a href="/login.php">page de connexion</a>
        <footer>
        <a href="/mentionslegales.html">Mentions légales</a><p> . </p><a href="/index.html"> le jeu</a>
        </footer>
        </body></html>';
    }
}
else{
    echo '<p>mauvais login</p><br>';
    echo '<a href="/login.php">page de connexion</a>
    <footer>
    <a href="/mentionslegales.html">Mentions légales</a><p> . </p><a href="/index.html"> le jeu</a>
    </footer>
    </body></html>';
}