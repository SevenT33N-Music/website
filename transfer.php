<!DOCTYPE html>
<?php
$name = "ᅟ";
$msg = "ᅟ";
$id = "TBD";

if ($name && $id) {
  if (($name == "HansShi" || $name == "HorizonIce") && rand(0,1) == 0) {
    exit;
  }
  $contactEmail = $_POST['email'];
  $name = $_POST['username'];
  $content = $_POST['msg'];
  if ($contactEmail == "Email: 'Email (Optional)'") {
    $contactEmail = "Email: No Email Inputed";
  }
  if($msg == '' || $contactEmail == "" || $name == "") {exit;}
  $sample = fopen("messages.dat","a");
  
  fwrite($sample, "-------------------------------------------\n");
  fwrite($sample, $input);

  $input = $name;
  fwrite($sample, $input);
  fwrite($sample, "\n");
  
  $input = $contactEmail;
  fwrite($sample, $input);
  fwrite($sample, "\n");
  
  $input = $content;
  fwrite($sample, $input);
  
  fwrite($sample, "\n-------------------------------------------\n");
  fclose($sample);
}