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
$req = $pdo->prepare('SELECT * FROM INDICE WHERE ID_INDICE = ?');
$req->execute(array($_POST['clueID']));

// Récupération des résultats sous forme de tableau associatif
$rows = array();

while ($donnees = $req->fetch()) {
    $rows[] = $donnees;
}

// Renvoi des résultats sous forme de chaîne de caractères JSON
echo json_encode($rows);

// Fermeture de la connexion
$req->closeCursor();
?>
