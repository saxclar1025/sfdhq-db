console.log("js loaded");

$(document).ready(()=>{
  $("button").click(e=>{
    $.post("/api/users/5b43abdb77d037140ce3b6e6",
      {
        update: {hourlyRate: 15}
      },
      function(user){
      console.log(user);
    });
  });
});