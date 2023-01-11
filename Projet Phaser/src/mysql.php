<?php
  // Connexion à la base de données
  $host = "mysql-aixploration.alwaysdata.net";
  $user = "292885";
  $password = "aixploration2023";
  $dbname = "aixploration_sql";
  $con = mysqli_connect($host, $user, $password, $dbname);

  // Vérification de la connexion
  if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Récupération de la requête à partir des données POST
  $query = $_POST["query"];


  // Exécution de la requête
  $result = mysqli_query($con, $query);

  // Vérification de l'exécution de la requête
  if (!$result) {
    die("Error executing query: " . mysqli_error($con));
  }

  // Récupération des résultats sous forme de tableau associatif
  $rows = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  // Renvoi des résultats sous forme de chaîne de caractères JSON
  echo json_encode($rows);

  // Fermeture de la connexion
  mysqli_close($con);
?>
