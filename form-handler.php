<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);
    
    try {
        // SMTP ayarları
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Gmail veya başka bir SMTP sunucusu
        $mail->SMTPAuth = true;
        $mail->Username = 'sizin@gmail.com'; // SMTP kullanıcı adınız
        $mail->Password = 'şifreniz';        // SMTP şifreniz
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        
        // Alıcı ve gönderici bilgileri
        $mail->setFrom('form@siteniz.com', 'İletişim Formu');
        $mail->addAddress('sizin@emailadresiniz.com');
        
        // Form verileri
        $telefon = $_POST['telefon'];
        $email = $_POST['email'];
        $mesaj = $_POST['mesaj'];
        
        // E-posta içeriği
        $mail->isHTML(false);
        $mail->Subject = 'Yeni İletişim Formu Mesajı';
        $mail->Body = "Telefon: $telefon\nE-posta: $email\nMesaj: $mesaj";
        
        $mail->send();
        header("Location: tesekkurler.html");
    } catch (Exception $e) {
        echo "E-posta gönderilemedi. Hata: {$mail->ErrorInfo}";
    }
}
?>