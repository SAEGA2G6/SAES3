<?php

namespace domain;
class Question
{
    protected $id;
    protected $parcour;
    protected $salle;
    protected $enoncer;
    protected $bonneReponse;
    protected $reponse1;
    protected $reponse2;
    protected $reponse3;
    protected $reponse4;

    public function __construct($id, $parcour, $salle, $enoncer, $bonneReponse, $reponse1, $reponse2, $reponse3, $reponse4)
    {
        $this->id = $id;
        $this->parcour = $parcour;
        $this->salle = $salle;
        $this->enoncer = $enoncer;
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

    public function getParcour()
    {
        return $this->parcour;
    }

    public function getSalle()
    {
        return $this->salle;
    }

    public function getEnoncer()
    {
        return $this->enoncer;
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