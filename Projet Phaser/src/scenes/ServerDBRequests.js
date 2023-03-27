class ServerDBRequests {
    static sendRequest() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "src/mysql.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            // Traitez la réponse ici
            console.log("on est dans la requete");
            var response = xhr.responseText;
          }
        };
        xhr.open("POST", "src/mysql.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("query=INSERT INTO SCORE VALUES (0,'AEHNT',100)");
      }
}