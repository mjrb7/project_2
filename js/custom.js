$(document).ready(function() {
    $('#analyze-bet-btn-submit').click(function() {
      playerTeamName = document.getElementById('playerTeamNameEntry').value; // Direct assignment
      $('#playerTeamNameDisplay').text(playerTeamName); // Directly set the text
    });

    var validator = $('#analyzeForm').validate();
    $('#playerTeamNameEntry').rules({
        name: {
            required: true,
            minlength: 2,
            lettersonly: true
        },

        messages: {
            name: {
              required: 'Please enter your name',
              minlength: 'Your name must be at least 2 characters long',
              lettersonly: 'Your name must contain only letters'
            }
          }
    });
});
