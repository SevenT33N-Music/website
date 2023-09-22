<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Cache-Control" content="no-transform,no-siteapp,no-cache,no-store,must-revalidate,max-age=0" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <meta name="description" content="Contact SevenT33N Music" />
    <meta name="keywords" content="php,js,replit" />
    <meta name="author" content="SevenT33N Music" />
    <meta name="robots" content="index,follow" />
    <meta name="renderer" content="webkit" />
    <meta name="force-rendering" content="webkit" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="google" content="notranslate" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,viewport-fit=cover">
    <meta name="HandheldFriendly" content="true" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="format detection" content="telephone=no,email=no,adress=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-touch-fullscreen" content="yes" />
    <title>Contact Form</title>
    <!--
    <link rel="stylesheet" href="style.css" type="text/css"/>
    <link rel="stylesheet" href="ripple.css" type="text/css" />
    -->
  </head>
  <body>
    <div class="bg">
      <!-- style="display:none;" -->
      <input id="userEmailInput" autocomplete="off" style="display: none;"/> <!-- Keep User Inputed Value Without gmail added -->
      <div id="msgBox"></div>
      <div>
        <input value='Name' onFocus="value = value == defaultValue ? '' : value;" onBlur="value = value == '' ? defaultValue : value;"  id="inputName" type="text" autocomplete="off" style="width: 50%;"/>
        <br>
        <input value='Gmail (Optional)' oninput="addDataToStaticInput(event)" onFocus="value = value == defaultValue ? '' : value;" onBlur="value = value == '' ? defaultValue : value;"  id="inputEmail" type="text" autocomplete="off" style="width: 50%;"/>
        <span>@gmail.com</span>
        <br>
        <input value='What Do You Want To Say?' onFocus="value = value == defaultValue ? '' : value;" onBlur="value = value == '' ? defaultValue : value;"  id="inputMessage" type="text" autocomplete="off" style="width: 50%;"/>
        <button id="sub" class="waves-effect waves-light" onclick="send();">Send</button>
      </div>
    </div>
    <script>
      function addDataToStaticInput(event) {
        let text = event.data;
        if (text == null || text == "null") {
          var currentData = userEmailInput.value;
          text = currentData.slice(0, -1);
          userEmailInput.value = text;
        } else {
          userEmailInput.value += text;
        }
      }
    </script>
    <script>
      function backToWebsite() {
        window.location.href = "https://sevent33nmusic.sevent33n.repl.co/";
      }
      if (document.documentMode) {
        alert("Your browser is out of date!\nUpdate your browser to view this website correctly.");
        window.open('','_self').close();
      }
      inputMessage.addEventListener("keyup", function(event) {
			  if (event.key === 'Enter') {
          sub.click();
		    }
	    });
      function send() {
        let content = inputMessage.value;
        let name = inputName.value;
        let email = inputEmail.value;
        var userNameData = "Name: '" + name + "'";
        var emailData = "Email: '" + email + "'";
        var userInputData = " What They Said: '" + content + "'";
        if(content == 'What Do You Want To Say?' || name == "Name" || content.trim().length == 0) return;
        if(content.length > 280) {
          alert('Your message is too long! ')
          return;
        }
        let concat = document.createElement('form');
        concat.action = 'transfer.php';
        concat.method = 'POST';
        concat.target = 'message';
        concat.enctype = 'multipart/form-data';
        inputMessage.focus();
        inputMessage.value = '';
        let time = Math.floor(new Date().getTime());
        concat.innerHTML += '<input style="display: none;" value="' + userNameData + '" name="username">'
        concat.innerHTML += '<input style="display: none;" value="' + emailData + '" name="email">'
        concat.innerHTML += '<input style="display: none;" value="' + userInputData + '" name="msg">'
        document.body.append(concat);
        concat.submit();
      }
    </script>
    <iframe name="name" style="display:none;"></iframe>
    <iframe name="message" style="display:none;"></iframe>
    <br>
    <div class="returnToWebsite">
      <button onclick="backToWebsite()">return To Website</button>
    </div>
  </body>
</html>