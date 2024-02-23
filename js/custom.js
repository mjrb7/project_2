$(document).ready(function() {
    $('#analyze-bet-btn-submit').click(function() {
      playerTeamName = document.getElementById('playerTeamNameEntry').value; // Direct assignment
      console.log(playerTeamName); // Verify the assignment
      $('#playerTeamNameDisplay').text(playerTeamName); // Directly set the text
    });
  });