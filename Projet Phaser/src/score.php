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

$req = $pdo->prepare('SELECT MAX(SCORE) FROM SCORE WHERE ETAGE = ?');
$req->execute(array($_POST['levelPrefix']));
$score_max = $req->fetch();

$req = $pdo->prepare('SELECT COUNT(*) FROM SCORE WHERE ETAGE = ?');
$req->execute(array($_POST['levelPrefix']));
$nb_scores = $req->fetch();
//TODO: regler la condition
if($nb_scores < 10 && $donnees > $_POST['score']){
    $req = $pdo->prepare('INSERT INTO SCORE VALUES (?, ?, ?)');
    $req->execute(array($_POST['pseudo'], $_POST['score'], $_POST['levelPrefix']));
}


// Fermeture de la connexion
$req->closeCursor();
?>