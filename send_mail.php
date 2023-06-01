<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  
  // Récupération des données du formulaire
  $nom = $_POST['nom'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  // Configuration de l'e-mail
  $destinataire = 'bastiendubile@gmail.com';
  $sujet = 'Message depuis le Portfolio';
  $contenu = "Nom: $nom\n";
  $contenu .= "Adresse e-mail: $email\n\n";
  $contenu .= "Message:\n$message\n";
  $headers = "From: $nom <$email>\r\nReply-To: $email";
  
  // Envoi de l'e-mail
  if(mail($destinataire, $sujet, $contenu, $headers)) {
    echo "Votre message a été envoyé avec succès.";
  } else {
    echo "Une erreur est survenue lors de l'envoi du message. Vérifier vos informations";
  }
}
?>
