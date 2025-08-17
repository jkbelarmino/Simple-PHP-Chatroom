<?php
$chatFile = "chat.txt";
if (file_exists($chatFile)) {
  echo nl2br(file_get_contents($chatFile));
}
?>
