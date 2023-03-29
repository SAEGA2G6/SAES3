<?php

include_once 'data/AdministrationSqlAccess.php';
include_once 'data/UserSqlAccess.php';


include_once 'control/Controllers.php';
include_once 'control/Presenter.php';

include_once 'service/AdministrationChecking.php';
include_once 'service/UserChecking.php';

include_once 'gui/Layout.php';
include_once 'gui/ViewLogin.php';
include_once 'gui/ViewAdministration.php';
include_once 'gui/ViewJeu.php';


use gui\{ViewLogin, ViewAdministration, ViewJeu, Layout};
use control\{Controllers, Presenter};
use data\{AdministrationSqlAccess, UserSqlAccess};
use service\{AdministrationChecking, UserChecking};

$data = null;
try {
    $bd = new PDO('mysql:host=mysql-aixploration.alwaysdata.net;dbname=aixploration_sql','292885','aixploration2023');
    $dataAdministration = new AdministrationSqlAccess($bd);
    $dataUsers = new UserSqlAccess($bd);
    

} catch (PDOException $e) {
    print "Erreur de connexion !: " . $e->getMessage() . "<br/>";
    die();
}

// initialisation du controller
$controller = new Controllers();

// intialisation du cas d'utilisation service\AdministrationChecking
$administrationCheck = new AdministrationChecking() ;

// intialisation du cas d'utilisation service\UserChecking
$userCheck = new UserChecking() ;

// intialisation du presenter avec accès aux données de AdministrationChecking
$presenter = new Presenter($administrationCheck);



$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);


session_start();
if ( '/index.php' == $uri ) {

    $layout = new Layout("gui/layoutJeu.html" );
    $vueJeu = new ViewJeu( $layout );

    $vueJeu->display();
    
}elseif ('/index.php/login' == $uri) {
    $layout = new Layout("gui/layoutAdmin.html" );
    $vueLogin = new ViewLogin( $layout );

    $vueLogin->display();

}elseif ('/index.php/authenticate' == $uri){
    
    $error = $controller->authenticateAction($userCheck,$dataUsers);

    if( $error != null )
    {
        $uri='index.php/error' ;
        if( $error == 'bad login or pwd' or $error == 'not connected')
            $redirect = 'index.php';
    }
    header("refresh:5;url=/index.php/administration"); 
}/*
if (  'index.php' == $uri || 'index.php/logout' == $uri) {
    // affichage de la page de connexion

    session_destroy();
    $layout = new Layout("gui/layoutAdmin.html" );
    $vueLogin = new ViewLogin( $layout );

    $vueLogin->display();
}*/
elseif ( '/index.php/administration' == $uri ){
    
    
    $controller->getAllQuestionAction($administrationCheck, $dataAdministration);

    $layout = new Layout("gui/layoutAdmin.html" );
    $vueAnnonces= new ViewAdministration( $layout, $presenter);

    $vueAnnonces->display();
}
else {
    header('Status: 404 Not Found');
    echo var_dump($uri);
    echo '<html><body><h1>My Page NotFound</h1></body></html>';
}
