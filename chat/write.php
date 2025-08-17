file_put_contents("debug.txt", print_r($_POST, true));

<?php
if (isset($_POST['username']) && isset($_POST['message'])) {
  $username = htmlspecialchars(trim($_POST['username']));
  $message = htmlspecialchars(trim($_POST['message']));
  $entry = "[" . date("H:i") . "] " . $username . ": " . $message . "\n";
  file_put_contents("chat.txt", $entry, FILE_APPEND);
}
?>
