'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Something else");
	    
	    $(".jumbotron p").toggleClass("active");	

	    

	});
    $("a.thumbnail").click(projectClick);
    
    function projectClick(e) {
      console.log("Project clicked");
      e.preventDefault();

      var projectTitle = $(this).find("p").text();
      var jumbotronHeader = $(".jumbotron h1");
      jumbotronHeader.text(projectTitle);
      
     // var containingProject = $(this).closest(".project");
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");



      var containingProject = $(this).closest(".project");
      var description = $(containingProject).find(".project-description");
      if (description.length == 0) {
      	 
         $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
      	 
      } else {

         $(description).fadeToggle();
      }

      //$(this).css("background-color", "#7fff00");
    }
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$('#submitBtn').click(updateProject);

	function updateProject(e){
		var projectID = $('#project').val();
		$(projectID).animate({
			width: $('#width').val()
		});

		var newText = $("#description").val();
		$(projectID + " .project-description").text(newText);
	}
}