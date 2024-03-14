<?php

// Fonction pour se connecter à la base de données
function connectDB() {
    $servername = "http://51.20.122.177:8090/";
    $username = "root";
    $password = "";
    $dbname = "web";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

// Fonction pour fermer la connexion à la base de données
function closeDB($conn) {
    $conn->close();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["nom"]) && isset($_POST["email"]) && isset($_POST["password"])) {
        // Traitement du formulaire d'inscription

        $nom = $_POST["nom"];
        $email = $_POST["email"];
        $password = $_POST["password"];

        $conn = connectDB();

        // Utilisez des requêtes préparées pour éviter les attaques par injection SQL
        $stmt = $conn->prepare("INSERT INTO users (nom, email, mot_de_passe) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $nom, $email, $password);
        $stmt->execute();

        $stmt->close();
        closeDB($conn);

        // Redirigez l'utilisateur vers une page de confirmation ou une autre page appropriée
        header("Location: home.html");
        exit();
    } elseif (isset($_POST["email"]) && isset($_POST["password"])) {
        // Traitement du formulaire de connexion

        $email = $_POST["email"];
        $password = $_POST["password"];

        $conn = connectDB();

        // Utilisez des requêtes préparées pour éviter les attaques par injection SQL
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND mot_de_passe = ?");
        $stmt->bind_param("ss", $email, $password);
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // Utilisateur authentifié avec succès
            header("Location: home.html");
            exit();
        } else {
            // Mauvaises informations d'identification
            echo "Identifiants incorrects. Veuillez réessayer.";
        }

        $stmt->close();
        closeDB($conn);
    }
}
?>
