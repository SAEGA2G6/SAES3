<?php

namespace data;

use service\UserAccessInterface;
include_once "service/UserAccessInterface.php";

use domain\User;
include_once "domain/User.php";

class UserSqlAccess implements UserAccessInterface
{
    protected $dataAccess = null;

    public function __construct($dataAccess)
    {
        $this->dataAccess = $dataAccess;
    }

    public function __destruct()
    {
        $this->dataAccess = null;
    }

    public function getUser($login, $password)
    {
        $user = null;
        $query = "SELECT * FROM USERS WHERE Login='" . $login . "' and Password='" . $password . "'";

        
        $result = $this->dataAccess->query($query);

        if ( $row = $result->fetch() )
            $user = new User( $row['Login'] , $row['Password'] );

        $result->closeCursor();

        return $user;
    }
}