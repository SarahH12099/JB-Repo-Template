$(document).ready(function() {
  document.getElementById("descriptionbtn").classList.add('active');
  $("#featuressection").hide();
  $("#changelogsection").hide();
  $('button[id="descriptionbtn"]').click(function() {
    $("#featuressection").hide();
    document.getElementById("featuresbtn").classList.remove('active');
    $("#changelogsection").hide();
    document.getElementById("changelogbtn").classList.remove('active');
    $("#descriptionsection").show();
  });
  $('button[id="featuresbtn"]').click(function() {
    $("#descriptionsection").hide();
    document.getElementById("descriptionbtn").classList.remove('active');
    $("#changelogsection").hide();
    document.getElementById("changelogbtn").classList.remove('active');
    $("#featuressection").show();
  });
  $('button[id="changelogbtn"]').click(function() {
    $("#descriptionsection").hide();
    document.getElementById("descriptionbtn").classList.remove('active');
    $("#featuressection").hide();
    document.getElementById("featuresbtn").classList.remove('active');
    $("#changelogsection").show();
  });
});