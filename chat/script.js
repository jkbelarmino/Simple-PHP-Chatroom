$(document).ready(function () {
  let username = "";

  // Initialize username from localStorage
  const storedName = localStorage.getItem("chatUsername");
  if (storedName && storedName.trim() !== "") {
    username = storedName;
    toggleChatUI(true);
  }

  // Set username
  $("#set-username").on("click", function () {
    const inputName = $("#username").val().trim();
    if (/^[a-zA-Z0-9_]{3,20}$/.test(inputName)) {
      username = inputName;
      localStorage.setItem("chatUsername", username);
      toggleChatUI(true);
    } else {
      alert("Invalid username. Use 3–20 letters, numbers, or underscores.");
    }
  });

  // Send message
  $("#send").on("click", function () {
    const message = $("#message").val().trim();
    if (message !== "") {
      $.post("write.php", { username, message }, function () {
        $("#message").val("");
        setTimeout(loadChat, 300);
      });
    } else {
      alert("Please enter a message.");
    }
  });

  // Clear chat
  $("#clear-chat").on("click", function () {
    if (confirm("Are you sure you want to delete all messages?")) {
      $.post("clear.php", function () {
        loadChat();
      });
    }
  });

  // Change username
  $("#change-username").on("click", function () {
    if (confirm("Are you sure you want to change your username?")) {
      localStorage.removeItem("chatUsername");
      username = "";
      toggleChatUI(false);
      $("#username").val("").focus();
    }
  });

  // Load chat every 2 seconds
  setInterval(loadChat, 2000);
  loadChat();

  // Helper: toggle UI sections
  function toggleChatUI(isLoggedIn) {
    $("#username-section").toggle(!isLoggedIn);
    $("#message-section").toggle(isLoggedIn);
  }

  // Load chat messages
  function loadChat() {
    $.get("chat.php", function (data) {
      $("#chat-box").html(data);
      $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
    });
  }
});
