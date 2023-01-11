<?php
try
{
    $dsn = 'mysql:host=mysql-aixploration.alwaysdata.net;dbname=aixploration_sql';
    $pdo = new PDO($dsn, '292885', 'aixploration2023');
}
catch(Exception $e)
{
    die('Erreur : '.$e->getMessage());
}

$req = $pdo->prepare('SELECT ID_JOUEUR as pseudo, SCORE FROM SCORE WHERE etage = ? ORDER BY SCORE DESC LIMIT 1');
$req->execute(array($_POST['levelPrefix']));
$score_max = $req->fetch();

$req = $pdo->prepare('SELECT COUNT(*) AS nb_scores FROM SCORE WHERE ETAGE = ?');
$req->execute(array($_POST['levelPrefix']));
$nb_scores = $req->fetch();
if($nb_scores['nb_scores'] < 10){
    $req = $pdo->prepare('DELETE FROM SCORE WHERE ID_JOUEUR = ? AND ETAGE = ? AND SCORE > ?');
    $req->execute(array($_POST['pseudo'], $_POST['levelPrefix'], $_POST['score']));

    $req = $pdo->prepare('INSERT INTO SCORE VALUES (?, ?, ?)');
    $req->execute(array($_POST['pseudo'], $_POST['score'], $_POST['levelPrefix']));
}
else if($score_max['SCORE'] > $_POST['score']){
    $req = $pdo->prepare('DELETE FROM SCORE WHERE ID_JOUEUR = ? AND ETAGE = ?');
    $req->execute(array($score_max['pseudo'], $_POST['levelPrefix']));

    $req = $pdo->prepare('INSERT INTO SCORE VALUES (?, ?, ?)');
    $req->execute(array($_POST['pseudo'], $_POST['score'], $_POST['levelPrefix']));
}


// Fermeture de la connexion
$req->closeCursor();
?>