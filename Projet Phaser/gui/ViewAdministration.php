<?php
namespace gui;
include_once "View.php";


class ViewAdministration extends View{
    public function __construct($layout, $presenter)
    {
        parent::__construct($layout);       

        $this->content = $presenter->getAllAdministrationHTML();

        $this->content .=  '<button onclick="afficheEditeur()">Créer une nouvelle question</button><br><div id="newQ"></div>
                            <button onclick="supprimerQuestion()">Supprimer la question sélectionnée</button><br><div id="delete"></div>
                            <button onclick="updateQuestion()">Modifier la question sélectionnée</button><br><div id="update"></div>
                            <script src="/gui/js/Administration.js"></script>';
    }
}
