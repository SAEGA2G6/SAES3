<?php

namespace gui;
include_once "View.php";


class ViewLogin extends View{
    public function __construct($layout)
    {
        parent::__construct($layout);


        $this->content = '<form method="POST" action="authenticate">
        <p>Connectez Vous!</p>
        <input name="login" placeholder="Login">
        <input name="password" placeholder="Mot de Passe">
        <button type="submit">Connexion</button>
        </form>';

    }
}