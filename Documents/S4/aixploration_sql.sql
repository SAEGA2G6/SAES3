-- phpMyAdmin SQL Dump
-- version 5.1.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql-aixploration.alwaysdata.net
-- Generation Time: Apr 03, 2023 at 10:00 AM
-- Server version: 10.6.11-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aixploration_sql`
--

-- --------------------------------------------------------

--
-- Table structure for table `INDICE`
--

CREATE TABLE `INDICE` (
  `ID_INDICE` varchar(200) NOT NULL,
  `CONTENU` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `INDICE`
--

INSERT INTO `INDICE` (`ID_INDICE`, `CONTENU`) VALUES
('', NULL),
('e1_r1_1', ' En BUT Informatique, il existe 4 parcours différents : \r\n- Le Parcours A : “Réalisation d’applications : conception, développement validation”\r\n- Le Parcours B : “Déploiement d’applications communicantes et sécurisées”\r\n- Le Parcours C : “Administration, gestion et exploitation des données”\r\n- Le Parcours D : “Intégration d’applications et management du système d’information”.'),
('e1_r1_2', 'A l’IUT d’Aix-En-Provence, il y a 2 choix de parcours disponibles. \rLe parcours A : “Réalisation d’applications : conception, développement validation”, basé sur la programmation et les intelligences artificielles.\rLe parcours B : “Déploiement d’applications communicantes et sécurisées”, basé sur la réseau et la cryptographie.'),
('e1_r1_3', 'Dans un BUT Informatique, il est nécessaire de choisir un parcours en fin de première année, c\'est-à-dire à la fin du second semestre. Il est important de le choisir en connaissance de cause, car il va orienter votre cursus pour les années suivantes et déterminer les enseignements et les stages auxquels vous aurez accès. Il est donc recommandé de bien réfléchir à vos aspirations professionnelles et à vos centres d\'intérêts avant de faire votre choix.'),
('e1_r2_1', 'Une SAE (Situation d’Apprentissage d\'Évaluation) est un dispositif pédagogique qui permet aux étudiants de mettre en pratique les connaissances acquises en milieu professionnel. Elle consiste en un projet, plus ou moins gros, réalisé par des groupes d’étudiants (allant de 2 à 6 étudiants), et se terminant généralement par la rédaction d’un dossier, le rendu de divers livrables et par une soutenance de fin de projet.'),
('e1_r2_2', 'Les objectifs d\'une Situation d\'Apprentissage d\'Évaluation (SAE) sont principalement de permettre aux étudiants de mettre en pratique les connaissances acquises et d\'évaluer leurs compétences. Elle a également pour objectif de développer de nouvelles compétences et de s\'adapter aux exigences de l\'environnement professionnel.\r\nLa SAE peut également avoir pour objectif de découvrir le monde du travail et de développer des relations professionnelles. Elle peut être un moyen pour les étudiants de se familiariser avec les métiers et les secteurs d\'activité qui les intéressent.\r\nEnfin, la SAE peut également avoir pour objectif d\'encourager l\'entrepreneuriat et l\'innovation chez les étudiants en leur donnant la possibilité de mettre en œuvre leur créativité et leur esprit de décision. Elle peut être un tremplin pour le développement de leur propre projet professionnel.'),
('e1_r2_3', 'Les sujets des Situations d\'Apprentissage d\'Évaluation (SAE) peuvent porter sur tous types de sujets, et peuvent être très variés. Ils peuvent aller de l\'étude de l\'économie d\'une ville à la programmation de divers jeux, en passant par des projets de recherche ou de développement dans des domaines très différents.'),
('e1_r3_1', 'La cryptographie est la technique d’écriture qui consiste à chiffrer un message de manière à le rendre illisible pour toute personne ne disposant pas de la clé de chiffrement. Elle a été inventée dans l’Antiquité pour transmettre des messages de manières sécurisée et est aujourd’hui largement utilisée dans de nombreux domaines, tel que la sécurité de l’information, la vie privée, la monnaie électronique, etc…'),
('e1_r3_2', 'Il existe 3 grands principes en cryptographie :\r\nLe hachage avec ou sans clé, étant une technique qui consiste à transformer un message en chaîne de caractère de longueur fixe, appelée “hash”, qui permet de vérifier l’intégrité d’un message ou d’un document électronique.\r\nLa signature numérique, qui est une technique qui permet de vérifier l’authenticité et l’intégrité d’un message ou d’un document électronique en utilisant une clé de chiffrement.\r\nLe chiffrement, qui est une technique consistant à transformer un message en un code secret qui ne peut être lu que par une personne disposant de la clé de chiffrement.'),
('e1_r3_3', 'Une clé de cryptage est un mot de passe utilisé pour crypter ou décrypter un message ou un document électronique. Elle est également utilisée en conjonction avec un algorithme de chiffrement, qui permet de transformer le message en un code secret qui ne peut être lu que par une personne disposant de la clé de déchiffrement correspondante.'),
('e1_r4_1', 'L\'Intelligence Artificielle (IA) est un domaine de l’informatique qui vise à créer des machines capables d’imiter une forme d’intelligence humaine. Elle consiste à mettre en œuvre un certain nombre de techniques visant à permettre aux machines de résoudre des problèmes et de prendre des décisions de manière autonome, comme le ferait un être humain.'),
('e1_r4_2', 'Il existe deux types d’intelligence artificielle : \nL’IA faible visant à automatiser des tâches simples et répétitives, comme la reconnaissance de la parole, la traduction automatique ou la reconnaissance de caractères.\rL’IA forte visant à créer des machines capables de raisonnement et de prise de décision complexe, comme le ferait un humain.'),
('e1_r4_3', 'Le machine learning est une sous-catégorie de l’IA et est une technique d’apprentissage automatique qui repose sur l’analyse de données et qui permet aux machines de s’adapter et d’améliorer leurs performances de manière autonome.'),
('e1_r5_1', 'La méthode agile est une méthode caractérisée par une approche itérative et incrémentale, qui permet de s’adapter rapidement aux changements de contexte et aux demandes des utilisateurs. Elle se concentre donc sur la flexibilité et l’adaptabilité. Cette méthode se base sur la collaboration et la communication en continu avec les parties prenantes, ainsi que sur la transparence et la visibilité des avancées du projet.'),
('e1_r5_2', 'La méthode agile possède de nombreux avantages, comme par exemple : \r\n- Elle permet de livrer des résultats concrets plus rapidement, en privilégiant la livraison fréquente de résultats concrets et opérationnels.\r\n- Elle permet une meilleure adaptation aux changements de l’environnement de projet, en se basant sur une approche itérative et incrémentale.\r\n- Elle encourage la communication et la collaboration au sein de l’équipe de projet, en mettant l’accent sur la collaboration et la communication en continu avec les parties prenantes.'),
('e1_r5_3', 'Le Product Owner (PO) est un responsable de la vision du produit et de la priorisation des fonctionnalités du produit dans une équipe agile. Il a un rôle clé dans la définition de la stratégie de développement et de l’orientation du produit, et doit être en mesure de définir clairement des objectifs et les priorités du projet.'),
('e2_r0_1', 'Bonjour, moi c’est Elisée et je suis une membre du Bureau des étudiants (BDE).\r\nUn BDE est une organisation étudiante qui est gérée par des étudiants, pour les étudiants. \r\nSon objectif principal est de représenter les intérêts et les préoccupations des étudiants auprès de l\'administration de l\'établissement scolaire.\r\nLe BDE est souvent responsable de l\'organisation d\'événements étudiants, tels que des soirées, des activités sportives et culturelles, des tournois E-sport et des campagnes de sensibilisation. Ces événements visent à favoriser l\'intégration sociale des étudiants, à renforcer les liens entre les différentes filières et à créer un sentiment de communauté.\r\nLe BDE met aussi à disposition un coin de relaxation avec des canapés et une télévision avec des consoles comme la Nintendo Switch et la PS4 avec des jeux comme Smash Bros, Mario Kart ou Fifa 23.\r\n'),
('e2_r1_1', 'A data structure is a way of storing and organizing data in a computer. It can be used to store a wide variety of data types, such as numbers, texts, images, and more. There are many different types of data structures, such as arrays, linked lists, queues, stacks, trees, and graphs, each with its own advantages and disadvantages.'),
('e2_r1_2', 'An algorithm is a set of steps that solve a specific problem. It can be written in a variety of programming languages, and can be used to solve a wide range of problems, from simple calculations to complex simulations. An algorithm is characterized by its efficiency, which refers to the amount of time and space it takes to solve a problem.'),
('e2_r1_3', 'An operating system is software that manages and controls the hardware and software resources of a computer. It is responsible for managing the hardware and software resources of a computer, such as the processor, memory, storage, and input/output devices. It also provides a user interface and a set of tools for interacting with the computer. Some examples of operating systems include Windows, macOS, Linux, and Android.'),
('e2_r2_1', 'En programmation, il existe deux types d\'algorithmes : itératifs et récursifs. Un algorithme itératif utilise une boucle pour effectuer une tâche plusieurs fois. Cela permet de répéter une série d\'instructions jusqu\'à ce qu\'une condition soit remplie. Par exemple, une boucle \"for\" permet de répéter un certain nombre de fois une instruction. En revanche, un algorithme récursif utilise une fonction qui s\'appelle elle-même pour résoudre un problème. Cela permet de diviser un problème complexe en sous-problèmes plus simples, qui peuvent être résolus indépendamment et qui seront assemblés pour donner la solution finale.'),
('e2_r2_2', 'Une structure de données est une manière de stocker et de manipuler des données de manière efficace. Il existe de nombreux types de structures de données, comme les tableaux, les listes, les files d\'attente, les piles, les arbres, les graphes, etc. Chaque type de structure de données a ses propres avantages et inconvénients, et est adapté à des types de données et à des opérations différentes. Par exemple, une liste est adaptée pour insérer et supprimer des éléments rapidement, tandis qu\'un arbre est adapté pour rechercher rapidement un élément spécifique.'),
('e2_r2_3', 'En programmation, il existe deux paradigmes principaux : orienté objet et procédural. Un langage de programmation orienté objet permet de définir des classes et des objets, qui sont des structures de données complexes composées de plusieurs champs de données (appelées \"attributs\") et de fonctions (appelées \"méthodes\"). Les objets peuvent être créés à partir de classes, et peuvent être modifiés et manipulés en utilisant les méthodes de la classe. Un langage de programmation procédural, en revanche, se concentre sur l\'exécution de séquences d\'instructions, et ne permet pas de définir des classes et des objets. Les langages de programmation orienté objet sont généralement plus complexes à apprendre que les langages de programmation procéduraux, mais permettent de créer des programmes plus structurés et modulaires.'),
('e2_r3_1', 'Un portfolio est un document qui présente les compétences et les réalisations d\'un individu de manière structurée. Il peut être utilisé dans de nombreux contextes, comme lors d\'un entretien d\'embauche, d\'une demande de stage ou de bourse, ou encore pour mettre en avant son parcours professionnel ou ses projets personnels.'),
('e2_r3_2', 'L\'objectif principal d\'un portfolio est de présenter de manière claire et structurée les compétences et les réalisations d\'un individu. Il doit permettre de mettre en avant ses atouts et ses points forts de manière à convaincre un employeur, un partenaire ou un jury.'),
('e2_r3_3', 'Un portfolio peut inclure différents types d\'éléments, tels que le CV, les lettres de recommandation, les travaux réalisés (rapports, projets, etc.), les projets personnels ou encore les certifications et diplômes obtenus. Il est important de choisir les éléments les plus pertinents et les plus significatifs pour mettre en valeur son profil et ses compétences.'),
('e2_r4_1', 'La principale responsabilité du manager d\'une équipe de projet informatique est de motiver et de diriger l\'équipe pour atteindre les objectifs du projet. Cela implique de définir les tâches et les responsabilités de chaque membre de l\'équipe, de les encadrer et de les soutenir dans leur travail, mais aussi de les challenger pour qu\'ils progressent et s\'épanouissent. Le manager doit également être en mesure de gérer les budgets et les délais du projet et de communiquer efficacement avec les différentes parties prenantes (client, fournisseurs, etc.).'),
('e2_r4_2', 'Les outils de gestion de projet les plus couramment utilisés dans l\'informatique sont Trello, Asana et Jira. Ces outils permettent de planifier, de suivre et de coordonner les tâches du projet de manière simple et efficace. Ils permettent également de partager des documents et de communiquer avec l\'équipe de manière transparente. Néanmoins,  Il existe de nombreux outils sur le marché, chacun ayant ses propres fonctionnalités et ses avantages. Ainsi, il est important de prendre le temps de choisir l\'outil qui convient le mieux à ses besoins et à ses objectifs.'),
('e2_r4_3', 'La meilleure façon de gérer les conflits au sein d\'une équipe de projet informatique est d\'identifier les causes du conflit, d\'écouter les points de vue de chaque partie et de trouver une solution qui convienne à tous. Il est important de ne pas ignorer le conflit et de ne pas imposer une solution autoritaire, car cela pourrait nuire à la motivation et à la coopération au sein de l\'équipe. En discutant ouvertement et en respectant les opinions de chacun, il est possible de trouver une solution qui tienne compte de tous les enjeux et de préserver la dynamique de l\'équipe.'),
('e2_r5_1', 'L\'automatisation de la chaîne de production en informatique permet d\'optimiser les processus de production en utilisant des technologies de pointe et en automatisant certaines tâches répétitives. Cela permet de gagner du temps et d\'augmenter la productivité, en augmentant la vitesse de production, la qualité et en réduisant les coûts de production.'),
('e2_r5_2', 'L\'automatisation de flux de travail consiste à utiliser des logiciels pour automatiser les tâches répétitives et les processus d\'affaires. Elle permet de gagner en efficacité et en productivité. L\'automatisation des processus quant à elle permet de mettre en place des processus automatisés, cela permet de réduire les erreurs, de gagner en rapidité, et de rendre les processus plus flexibles.'),
('e2_r5_3', 'Les tâches répétitives comme la manipulation de matières premières, les opérations de montage et de démontage sont souvent automatisées pour augmenter la productivité, réduire les coûts et améliorer la qualité. L\'utilisation de robots industriels, systèmes de contrôle automatisés et logiciels de surveillance et de gestion de la production permet d\'automatiser efficacement ces tâches répétitives. Les tâches répétitives sont plus efficaces lorsqu\'elles sont automatisées car elles sont généralement fastidieuses et peuvent être source d\'erreur humaine.'),
('e2_r6_1', 'La virtualisation de réseau (NFV) est une technique qui permet de remplacer les équipements de réseau physique par des solutions logicielles. Cela permet de virtualiser les fonctions de réseau telles que les commutateurs, les routeurs, et les pare-feux, et de les exécuter sur des serveurs génériques. La virtualisation de réseau permet d\'offrir des services de réseau plus flexibles, plus évolutifs et plus économiques.'),
('e2_r6_2', 'La virtualisation de poste de travail (VDI) est une technique qui permet de remplacer les ordinateurs physiques par des ordinateurs virtuels. Cela permet de fournir une expérience utilisateur stable et cohérente, quel que soit l\'appareil utilisé pour se connecter.La virtualisation de poste de travail permet également de gérer les ordinateurs de manière centralisée, de sécuriser les données et de réduire les coûts de gestion et d\'entretien des ordinateurs. Elle permet également de faciliter l\'accès aux données et aux applications pour les employés qui se déplacent ou qui travaillent à distance.'),
('e2_r6_3', 'La virtualisation de conteneurs est une technique qui permet de virtualiser les applications et leurs dépendances, de les empaqueter ensemble dans un conteneur, et de les déployer sur n\'importe quelle plateforme. Cela permet d\'éviter les problèmes de compatibilité entre les différentes versions des dépendances et facilite le déploiement et la gestion des applications. Les technologies de virtualisation de conteneurs les plus populaires sont Docker et Kubernetes.'),
('rc_r1_1', 'Un développeur informatique est souvent désigné comme un responsable de la programmation, c\'est-à-dire de la production de lignes de code, il rédige et suit un cahier des charges précisant les spécificités techniques à suivre pour créer le programme voulu. Afin de concevoir des programmes informatiques “sur mesure”, il participe en amont à l’analyse des besoins des utilisateurs, puis à la phase d’essai.'),
('rc_r1_2', 'Le développeur est un pro des langages informatiques ! \rIl en existe de nombreux tel que : C++, Python, JavaScript, Java, C#. \rLa plupart de ces langages sont étudiés au sein de notre établissement !'),
('rc_r1_3', 'Il faut savoir qu’il existe divers types de développeur. Même s’ils ont des langages de programmation en commun, chacun d’entre eux maîtrise aussi des langages informatiques propres. \r\nLes différents types de développeurs sont : Développeur Web, Développeur Mobile, DevOps, Développeur Back-end, Développeur Front-end, Développeur Full Stack, …'),
('rc_r2_1', 'Une base de données est un ensemble d\'informations qui est organisée de manière à être facilement accessible, gérée et mise à jour. Elle est utilisée par les organisations comme méthode de stockage, de gestion et de récupération de l\'information. Les données sont organisées en lignes, colonnes et tableaux et sont indexées pour faciliter la recherche d\'informations. Les données sont mises à jour, complétées ou encore supprimées au fur et à mesure que de nouvelles informations sont ajoutées.'),
('rc_r2_2', 'SQL ou « Structured Query Language » est un langage de programmation permettant de manipuler les données et les systèmes de bases de données relationnelles. Ce langage permet principalement de communiquer avec les bases de données afin de gérer les données qu’elles contiennent.'),
('rc_r2_3', 'L’administrateur base de données ou database administrator est un gestionnaire chargé de l’organisation d’un important volume de données appartenant à l’entreprise. Son rôle principal est d’administrer la base de données, en assurant sa maintenance et en développant des structures permettant de traiter et d’analyser ces données en les rendant accessibles en interne.'),
('rc_r3_1', 'L\'architecture de réseau est l\'organisation d\'équipements de transmission, de logiciels, de protocoles de communication et d\'infrastructure filaire ou radioélectrique permettant la transmission des données entre les différents composants. L’architecture réseau est la sphère comprenant le réseau informatique complet d’une organisation.'),
('rc_r3_2', 'Une adresse IP (Internet Protocol) est un numéro d\'identification qui est attribué de façon permanente ou provisoire à chaque périphérique relié à un réseau informatique qui utilise l\'Internet Protocol. L\'adresse IP est à la base du système d\'acheminement (le routage) des paquets de données sur Internet. Cela s’écrit sous la forme : 10.203.9.27 avec ces nombres allant de 0 à 255.'),
('rc_r3_3', 'L\'administrateur réseau veille au bon fonctionnement des systèmes de télécommunications grâce auxquels les différents sites ou bureaux d\'une entreprise échangent des informations. Il intervient en cas de problème technique mais peut aussi s’occuper de l’installation du réseau en lui-même.'),
('rc_r4_1', 'L\'architecte système ou architecte des systèmes d’information conçoit l’organisation des systèmes informatiques d’une entreprise pour en organiser la bonne circulation de l’information. À la fois informaticien et chef de projet, il fait la liaison entre la direction et les besoins des équipes techniques. L’architecte système n’a jamais terminé son œuvre, il doit la faire évoluer au fil des innovations techniques.'),
('rc_r4_2', 'Il se charge de la faisabilité des interactions des composants et des interfaces, dans les limites des moyens techniques et financiers à sa disposition. Grâce à son métier, il connaît parfaitement tous les protocoles réseau en usage. L’architecte système choisit les outils informatiques les plus pertinents à l’activité, estime les interactions et teste leur efficacité. Il encadre les développeurs et intégrateurs employés par l’entreprise.'),
('rc_r4_3', 'Son domaine d\'intervention ne compte pas seulement le hardware central et les logiciels, mais également les serveurs et les connexions avec l’extérieur. La cybersécurité fait partie de son périmètre. L\'architecte système est aussi appelé : ingénieur système, architecte solution, architecte SOA, chef de projet SOA, ingénieur infrastructure technique.');

-- --------------------------------------------------------

--
-- Table structure for table `QUESTION`
--

CREATE TABLE `QUESTION` (
  `ID_QUESTION` int(11) NOT NULL,
  `Parcours` varchar(1) DEFAULT NULL,
  `salle` varchar(100) DEFAULT NULL,
  `Enonce` varchar(200) DEFAULT NULL,
  `BonneReponse` int(11) DEFAULT NULL,
  `Reponse1` varchar(200) DEFAULT NULL,
  `Reponse2` varchar(200) DEFAULT NULL,
  `Reponse3` varchar(200) DEFAULT NULL,
  `Reponse4` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `QUESTION`
--

INSERT INTO `QUESTION` (`ID_QUESTION`, `Parcours`, `salle`, `Enonce`, `BonneReponse`, `Reponse1`, `Reponse2`, `Reponse3`, `Reponse4`) VALUES
(1, NULL, 'rc_r1', 'En quoi consiste le métier de développeur ?', 2, 'Il apporte un diagnostic à la panne ou aux difficultés rencontrées par l\'utilisateur.', 'Il produit des lignes de code en suivant un cahier des charges établi.', 'Il élabore et déploie une stratégie de communication en direction des parties prenantes d’un projet.', ''),
(2, NULL, 'rc_r1', 'Quel est l’intrus parmi ces “langages de programmation” ?', 3, 'Java', 'C++', 'Boa', 'Javascript'),
(3, NULL, 'rc_r1', 'Lequel de ces métiers n’est pas un type de développeur ?', 1, 'Développeur Mathématiques', 'Développeur Web', 'DevOps', 'Développeur Full Stack'),
(4, NULL, 'rc_r2', 'Qu’est ce qu’une base de données ?', 1, 'Un ensemble d\'informations qui est organisée de manière à être facilement accessible, gérée et mise à jour.', 'Un ensemble d\'appareils informatiques interconnectés qui peuvent échanger des données et partager des ressources entre eux.', 'Une représentation du monde reposant sur un fondement défini.', ''),
(5, NULL, 'rc_r2', 'Lequel de ses langages est utilisé en gestion de base de données ?', 4, 'C++', 'Javascript', 'HTML', 'SQL'),
(6, NULL, 'rc_r2', 'En quoi consiste le métier d’administrateur de base de données ?', 1, 'Se charge de l’organisation d’un important volume de données appartenant à une entreprise.', 'Garantir les bons échanges d’une communauté sur un site.', 'Veille au bon fonctionnement  des systèmes de télécommunications de l’entreprise.', ''),
(7, NULL, 'rc_r3', 'Qu’est ce qu’une architecture réseau ?', 3, 'Modèle conceptuel d’un système qui décrit ses propriétés externes et internes.', 'Ensemble de réseau mondiaux interconnectés.', 'Une organisation d’équipements de transmission, de logiciel et de protocoles de communication permettant la transmission de données entre différents composants.', ''),
(8, NULL, 'rc_r3', 'Qu’est ce qu’une adresse IP ?', 1, 'Internet Protocol, désigne un numéro d’identification attribué à un périphérique relié à un réseau informatique.', 'Internet Port, désigne la localisation d’un ordinateur connecté à un réseau.', 'Identity Protocol, désigne le mot de passe à rentrer pour se connecter à une box Internet.', ''),
(9, NULL, 'rc_r3', 'En quoi consiste le métier d’administrateur réseau ?', 2, 'Réalise l’ensemble des fonctionnalités techniques d’un site ou d’une application web.', 'Assure la maintenance et le bon fonctionnement d’une infrastructure réseau au sein d’une entreprise.', 'Garant du bon fonctionnement des équipements électroniques dans une entreprise.', ''),
(10, NULL, 'rc_r4', 'En quoi consiste le métier d’architecte système ?', 2, 'Gérer un ensemble de réseaux mondiaux interconnectés.', 'Concevoir l’organisation des systèmes informatiques d’une entreprise pour en organiser la bonne circulation de l’information.', 'Gérer un ensemble de pages web et des ressources inter reliées entre elles par des liens hypertextes.', ''),
(11, NULL, 'rc_r4', 'Quels sont les outils indispensables d’un architecte système ?', 3, 'Java et Visual Studio Code', 'Python et Spyder', 'L’architecte système choisit les outils informatiques les plus pertinents à l’activité.', ''),
(12, NULL, 'rc_r4', 'Quel est le domaine d’intervention d’un architecte système ?', 1, 'Hardware, logiciels et serveurs extérieurs de l’entreprise.', 'Produit ou service délivré par l’entreprise.', 'Economie et notoriété de l’entreprise.', ''),
(13, NULL, 'e1_r1', 'Combien y a t’il de parcours différents en BUT informatique ?', 3, '2', '3', '4', '5'),
(14, NULL, 'e1_r1', 'Combien de ces parcours sont disponibles à l’IUT d’Aix-En-Provence ?', 2, '1', '2', '3', '4'),
(15, NULL, 'e1_r1', 'A quel moment du cursus faut-il choisir un parcours, dans un BUT Informatique ?', 1, 'En fin de première année.', 'En milieu de deuxième année.', 'A la fin du 1er Semestre', ''),
(16, NULL, 'e1_r4', 'Qu’est ce qu’une IA ?', 1, 'Consiste à mettre en œuvre un certain nombre de techniques visant à permettre aux machines d\'imiter une forme d\'intelligence réelle.', 'Ensemble de techniques informatiques qui facilitent le travail de secrétariat.', 'Un algorithme résolvant un problème en calculant des solutions d’instances plus petites du même problème.', ''),
(17, NULL, 'e1_r4', 'Quels sont les différents types d’IA ?', 3, 'Apache et Nginx.', 'IA privée et IA publique.', 'IA faible et IA forte.', ''),
(18, NULL, 'e1_r4', 'Qu’est ce que le “machine learning” ?', 1, 'Sous-catégorie de l’IA qui permet aux machines d’apprendre sans avoir été programmées à cet effet. Elle évolue par elle-même.', 'Une technique de production rapide afin d’optimiser un temps de réalisation.', 'Une méthode pour obtenir de nouvelles aptitudes et améliorer ses connaissances dans un domaine précis.', ''),
(19, NULL, 'e1_r3', 'Qu’est ce que la cryptographie ?', 2, 'Désigne la manière dont est présenté un logiciel écran pour l’utilisateur.', 'Technique d’écriture où un message chiffré est écrit à l’aide de clés de chiffrement.', 'Actifs numériques visuels qui reposent sur la technologie des blockchain.', ''),
(20, NULL, 'e1_r3', 'Quels sont les grands principes de la cryptographie ?', 2, 'La responsabilisation, coresponsabilité et privacy.', 'Le hachage avec ou sans clé, la signature numérique et le chiffrement.', 'Algorithme, machine, langage et information.', ''),
(21, NULL, 'e1_r3', 'Qu\'est-ce qu\'une clé de chifrement?', 1, 'Un mot de passe utilisé pour chiffrer ou déchiffrer un message.', 'Un algorithme utilisé pour chiffrer ou déchiffrer un message.', 'Un fichier utilisé pour chiffrer ou déchiffrer un message.', ''),
(22, NULL, 'e1_r5', 'Qu’est ce que la méthode agile ?', 1, 'Une méthode de gestion de projet qui se concentre sur la flexibilité et l\'adaptabilité.', 'Une méthode de développement de logiciels qui se concentre sur la planification et le contrôle de la qualité.', 'Une méthode de gestion de la production qui se concentre sur l\'efficacité et la rapidité.', ''),
(23, NULL, 'e1_r5', 'Quels sont les avantages de la méthode agile?', 4, 'Elle permet une meilleure adaptation aux changements de l\'environnement de projet.', 'Elle encourage la communication et la collaboration au sein de l\'équipe de projet.', 'Elle permet de livrer des résultats concrets plus rapidement.', 'Toutes les réponses sont correctes'),
(24, NULL, 'e1_r5', 'Quel est le rôle du Product Owner dans une équipe agile ?', 3, 'Assurer le suivi du projet et produire des rapports de progrès.', 'Faciliter la communication et la collaboration au sein de l\'équipe de projet.', 'Responsable de la vision du produit et de la priorisation des fonctionnalités du produit, gérer le budget et les ressources de l\'équipe de projet.', ''),
(25, NULL, 'e1_r2', 'Qu’est ce qu’une SAE (Situation d’Apprentissage d\'Évaluation) ?', 3, 'Une entreprise qui s\'engage à aider les autres entreprises à développer leurs activités.', 'Un établissement d\'enseignement supérieur qui forme les étudiants aux métiers de l\'aide à l\'entreprise.', 'Un dispositif pédagogique qui permet aux étudiants de mettre en pratique les connaissances acquises en milieu professionnel.', ''),
(26, NULL, 'e1_r2', 'Quels sont les objectifs d’une SAE ?', 4, 'Former les étudiants aux métiers de l\'aide à l\'entreprise.', 'Permettre aux étudiants de mettre en pratique les connaissances acquises en milieu professionnel et d\'évaluer leurs compétences.', 'Encourager l\'entrepreneuriat et l\'innovation chez les étudiants', 'Toutes les réponses sont correctes'),
(27, NULL, 'e1_r2', 'Sur quoi portent les sujets des SAE ?', 2, 'Des projets de programmation uniquement.', 'Cela porte sur tous types de sujets, de l’étude de l’économie d’une ville à la programmation de divers jeux.', 'Sur des matières scientifiques telles que les mathématiques.', ''),
(28, NULL, 'e2_r1', 'What is a data structure?', 1, 'A way of storing and organizing data in a computer.', 'A type of computer network that connects devices within a limited area.', 'A software application used for creating and editing text documents.\r\n', NULL),
(29, NULL, 'e2_r1', 'What is an algorithm?', 1, 'A set of steps that solve a specific problem.', 'A type of computer virus that replicates itself and spreads to other computers.', 'A type of computer memory that stores data temporarily while a computer is running.', NULL),
(30, NULL, 'e2_r1', 'What is an operating system ?', 2, 'A type of computer software used for creating and editing images.', 'Software that manages and controls the hardware and software resources of a computer.', 'A type of computer hardware used for storing and accessing digital data.', NULL),
(31, NULL, 'e2_r2', 'Quelle est la différence entre un algorithme itératif et un algorithme récursif ?', 1, 'Un algorithme itératif utilise une boucle pour effectuer une tâche plusieurs fois, tandis qu\'un algorithme récursif utilise une fonction qui s\'appelle elle-même pour résoudre un problème.', 'Un algorithme itératif est plus rapide qu\'un algorithme récursif.', 'Un algorithme itératif est plus facile à mettre en œuvre qu\'un algorithme récursif.', NULL),
(32, NULL, 'e2_r2', 'Qu\'est-ce qu\'une structure de données ?', 3, 'Un logiciel permettant de visualiser des données de manière graphique.', 'Un type de variable utilisée en programmation.', 'Une manière de stocker et de manipuler des données de manière efficace.', NULL),
(33, NULL, 'e2_r2', 'Quelle est la différence entre un langage de programmation orienté objet et un langage de programmation procédural ? ', 2, 'Les programmes orientés objet sont plus flexibles que les programmes procéduraux.', 'Les programmes orientés objet se concentrent sur les données, tandis que les programmes procéduraux se concentrent sur les actions à effectuer sur ces données.', 'Les programmes orientés objet sont plus simples que les programmes procéduraux.', NULL),
(34, NULL, 'e2_r3', 'Qu\'est-ce qu\'un portfolio ?', 1, 'Un document présentant les compétences et réalisations d\'un individu.', 'Un fichier informatique qui regroupe tous les documents d\'un projet.', 'Un outil de gestion de projet qui permet de suivre l\'avancement des tâches.', NULL),
(35, NULL, 'e2_r3', 'Quel est l\'objectif principal d\'un portfolio ? ', 3, 'Présenter les compétences et réalisations d\'un individu de manière concise et synthétique.', 'Présenter les compétences et réalisations d\'un individu de manière originale et créative.', 'Présenter les compétences et réalisations d\'un individu de manière claire et structurée.', NULL),
(36, NULL, 'e2_r3', 'Quels éléments peuvent être inclus dans un portfolio ?', 1, 'CV, lettres de recommandation, travaux réalisés, projets personnels.', 'Liste de courses, photos de vacances, recettes de cuisine.', 'Statistiques de fréquentation, bilan financier, plan de communication.', NULL),
(37, NULL, 'e2_r4', 'Quelle est la principale responsabilité du manager d\'une équipe de projet informatique ?', 2, 'Assurer le développement technique des membres de l\'équipe.', 'Motiver et diriger l\'équipe pour atteindre les objectifs du projet.', 'Gérer les budgets et les délais du projet.', NULL),
(38, NULL, 'e2_r4', 'Quels sont les outils de gestion de projet les plus couramment utilisés dans l\'informatique ? ', 3, 'Le tableau blanc et le papier.', 'Microsoft Excel et Microsoft Word.', 'Trello, Asana et Jira.', NULL),
(39, NULL, 'e2_r4', 'Quelle est la meilleure façon de gérer les conflits au sein d\'une équipe de projet informatique ? ', 2, 'Ignorer le conflit et espérer qu\'il se résolve de lui-même.', 'Identifier les causes du conflit, écouter les points de vue de chaque partie et trouver une solution qui convienne à tous.', 'Régler le conflit de manière autoritaire et imposer une solution.', NULL),
(40, NULL, 'e2_r5', 'Qu\'est-ce qui est communément considéré comme étant l\'avantage le plus important de l\'automatisation de la chaîne de production en informatique?', 1, 'La productivité.', 'La flexibilité.', ' La réduction des coûts.', 'La réduction des erreurs humaines.'),
(41, NULL, 'e2_r5', 'Quels sont les deux types d\'automatisation les plus couramment utilisés dans les entreprises ?', 4, 'Automatisation des données et automatisation des déploiements.', 'Automatisation des tâches et automatisation des systèmes.', 'Automatisation des machines et automatisation des robots.', 'Automatisation de flux de travail et automatisation des processus.'),
(42, NULL, 'e2_r5', 'Dans quel domaine l\'automatisation de la chaîne de production est-elle particulièrement efficace?', 2, 'Dans les processus décisionnels.', 'Dans les tâches répétitives.', 'Dans la gestion des ressources humaines.\r\n', 'Dans la recherche et le développement.'),
(43, NULL, 'e2_r6', 'Qu\'est-ce que la virtualisation ?', 1, 'Une technique qui permet de partager les ressources matérielles d\'un ordinateur ou d\'un réseau.', 'Une technique qui permet de stocker des données sur un support virtuel.', 'Une technique qui permet de créer des réseaux virtuels.', 'Une technique qui permet de crypter les données.'),
(44, NULL, 'e2_r6', 'Qu\'est-ce que la virtualisation de poste de travail (VDI) ?', 3, 'Une technique qui permet de crypter les données.\r\n\r\n', 'Une technique qui permet de stocker des données sur un support virtuel. ', 'Une technique qui permet de virtualiser les postes de travail pour offrir une expérience utilisateur stable.', 'Une technique qui permet de partager les ressources matérielles d\'un ordinateur ou d\'un réseau.'),
(45, '', 'e2_r6', 'Qu\'est-ce que la virtualisation de conteneurs (Docker, Kubernetes) ?', 2, 'Une technique qui permet de stocker des données sur un support virtuel.', 'Une technique qui permet de virtualiser les applications pour les rendre plus flexibles et plus faciles à déployer.', 'Une technique qui permet de crypter les données.', 'Une technique qui permet de partager les ressources matérielles d\'un ordinateur ou d\'un réseau.');

-- --------------------------------------------------------

--
-- Table structure for table `SCORE`
--

CREATE TABLE `SCORE` (
  `ID_JOUEUR` varchar(10) NOT NULL,
  `SCORE` int(11) DEFAULT NULL,
  `etage` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `SCORE`
--

INSERT INTO `SCORE` (`ID_JOUEUR`, `SCORE`, `etage`) VALUES
('22032023', 86, 'rc'),
('a', 488, 'e1'),
('aaa ', 326, 'rc'),
('Eliott', 270, 'rc'),
('Elisée', 319, 'e1'),
('Elisée', 319, 'e2'),
('FIveMa', 608, 'e1'),
('Robinet', 50, 'rc'),
('slt', 101, 'rc'),
('test_22_1', 110, 'rc'),
('test_2903', 113, 'rc'),
('thorfinn', 373, 'rc'),
('tibo', 134, 'rc'),
('YOHANN', 335, 'rc');

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `Login` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `USERS`
--

INSERT INTO `USERS` (`Login`, `Password`) VALUES
('admin', 'passwordAdmin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `INDICE`
--
ALTER TABLE `INDICE`
  ADD PRIMARY KEY (`ID_INDICE`);

--
-- Indexes for table `QUESTION`
--
ALTER TABLE `QUESTION`
  ADD PRIMARY KEY (`ID_QUESTION`);

--
-- Indexes for table `SCORE`
--
ALTER TABLE `SCORE`
  ADD PRIMARY KEY (`ID_JOUEUR`,`etage`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `QUESTION`
--
ALTER TABLE `QUESTION`
  MODIFY `ID_QUESTION` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
