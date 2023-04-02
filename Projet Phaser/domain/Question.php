<?php

namespace domain;
class Question
{
    protected $id;
    protected $parcours;
    protected $salle;
    protected $enonce;
    protected $bonneReponse;
    protected $reponse1;
    protected $reponse2;
    protected $reponse3;
    protected $reponse4;

    public function __construct($id, $parcours, $salle, $enonce, $bonneReponse, $reponse1, $reponse2, $reponse3, $reponse4)
    {
        $this->id = $id;
        $this->parcours = $parcours;
        $this->salle = $salle;
        $this->enonce = $enonce;
        $this->bonneReponse = $bonneReponse;
        $this->reponse1 = $reponse1;
        $this->reponse2 = $reponse2;
        $this->reponse3 = $reponse3;
        $this->reponse4 = $reponse4;
    }

    public function getID()
    {
        return $this->id;
    }

    public function getParcours()
    {
        return $this->parcours;
    }

    public function getSalle()
    {
        return $this->salle;
    }

    public function getEnonce()
    {
        return $this->enonce;
    }

    public function getBonneReponse()
    {
        return $this->bonneReponse;
    }

    public function getReponse1()
    {
        return $this->reponse1;
    }

    public function getReponse2()
    {
        return $this->reponse2;
    }

    public function getReponse3()
    {
        return $this->reponse3;
    }

    public function getReponse4()
    {
        return $this->reponse4;
    }
}