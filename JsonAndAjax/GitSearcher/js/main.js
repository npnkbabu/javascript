$(document).ready(function(){
    $('#searchUser').on('keyup',function(e){
       let userName = e.target.value;

       //make request to github
       $.ajax({
           url:'https://api.github.com/users/'+userName,
           data:{
               client_id:'ef113388f1bfe864b005',
               client_secret:'f21a42b0ef2c7a9de67299b88c88785d389e3e63'
           }----------------------
       }).done(function(user){
        $("#profile").html(`
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
  </div>
  <div class="panel-body">
    <div class="row">
    <div class ="col-md-3">
    <img  class="thumbnail avatar" src="${user.avatar_url}">
    <a class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
    </div>
    <div class ="col-md-9">
    
    </div>
    </div>
  </div>
</div>
        `);
       });
    });
});