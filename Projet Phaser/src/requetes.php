<?php
try {
    $dsn = 'mysql:host=mysql-aixploration.alwaysdata.net;dbname=aixploration_sql';
    $pdo = new PDO($dsn, '292885', 'aixploration2023');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}
if (isset($_POST['clueID'])) {
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
} else if (isset($_POST['floor'])) {
    $req = $pdo->prepare('SELECT * FROM SCORE WHERE ETAGE = ? ORDER BY score');
    $req->execute(array($_POST['floor']));

    // Récupération des résultats sous forme de tableau associatif
    $rows = array();

    while ($donnees = $req->fetch()) {
        $rows[] = $donnees;
    }

    // Renvoi des résultats sous forme de chaîne de caractères JSON
    echo json_encode($rows);

    // Fermeture de la connexion
    $req->closeCursor();

} else if (isset($_POST['room'])) {
    $req = $pdo->prepare('SELECT * FROM QUESTION where SALLE = ?');
    $req->execute(array($_POST['room']));

    // Récupération des résultats sous forme de tableau associatif
    $rows = array();

    while ($donnees = $req->fetch()) {
        $rows[] = $donnees;
    }

    // Renvoi des résultats sous forme de chaîne de caractères JSON
    echo json_encode($rows);

    // Fermeture de la connexion
    $req->closeCursor();

} else if (isset($_POST['levelPrefix']) && isset($_POST['score']) && isset($_POST['pseudo'])) {
    $req = $pdo->prepare('SELECT ID_JOUEUR as pseudo, SCORE FROM SCORE WHERE etage = ? ORDER BY SCORE DESC LIMIT 1');
    $req->execute(array($_POST['levelPrefix']));
    $score_max = $req->fetch();

    $req = $pdo->prepare('SELECT COUNT(*) AS nb_scores FROM SCORE WHERE ETAGE = ?');
    $req->execute(array($_POST['levelPrefix']));
    $nb_scores = $req->fetch();
    if ($nb_scores['nb_scores'] < 10) {
        $req = $pdo->prepare('DELETE FROM SCORE WHERE ID_JOUEUR = ? AND ETAGE = ? AND SCORE > ?');
        $req->execute(array($_POST['pseudo'], $_POST['levelPrefix'], $_POST['score']));

        $req = $pdo->prepare('INSERT INTO SCORE VALUES (?, ?, ?)');
        $req->execute(array($_POST['pseudo'], $_POST['score'], $_POST['levelPrefix']));
    } else if ($score_max['SCORE'] > $_POST['score']) {
        $req = $pdo->prepare('DELETE FROM SCORE WHERE ID_JOUEUR = ? AND ETAGE = ?');
        $req->execute(array($score_max['pseudo'], $_POST['levelPrefix']));

        $req = $pdo->prepare('INSERT INTO SCORE VALUES (?, ?, ?)');
        $req->execute(array($_POST['pseudo'], $_POST['score'], $_POST['levelPrefix']));
    }

    // Fermeture de la connexion
    $req->closeCursor();
}
?>