<?php

namespace gui;
include_once "View.php";


class ViewLogin extends View{
    public function __construct($layout)
    {
        parent::__construct($layout);


        $this->content = '<form method="POST" action="authenticate">
        <p>Connectez Vous!</p>
        <input type="text" name="login" placeholder="Login">
        <input type="password" name="password" placeholder="Mot de Passe">
        <button type="submit">Connexion</button>
        </form>';

    }
}