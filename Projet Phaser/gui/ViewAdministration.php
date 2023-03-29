<?php
namespace gui;
include_once "View.php";


class ViewAdministration extends View{
    public function __construct($layout, $presenter)
    {
        parent::__construct($layout);       

        $this->content = $presenter->getAllAdministrationHTML();

        $this->content .=  '<button onclick="afficheEditeur()">crée une nouvelle question</button><br><div id="newQ"></div>
                            <button onclick="supprimerQuestion()"> supprimer la question sélectionné</button><br><div id="delete"></div>
                            <button onclick="updateQuestion()"> modifier la question sélectionné</button><br><div id="update"></div>
                            <script src="/gui/js/Administration.js"></script>';
    }
}
