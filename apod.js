
$("#hdurl").hide();

//date--> date
// dateTitle--> h2
// title--> h2
// explanation--> p
// hdurl--> img

$("#submit").click(function (event){
    event.preventDefault();
    const date = $("#date").val();
    
    $.ajax({
        // url:"https://api.nasa.gov/planetary/apod?api_key=dhfvOTyEAbEUszxxFC9be1YJUt8t4alLqoCxVM7P&date=${date}",
        url:"https://api.nasa.gov/planetary/apod?api_key=dhfvOTyEAbEUszxxFC9be1YJUt8t4alLqoCxVM7P&date=2008-12-27",
        success: function (response) {
          $("#dateTitle").text(response.date);
          $("#title").text(response.title)
          $("#explanation").text(response.explanation);
          $("#hdurl").attr("src", response.hdurl);
         
          $("#hdurl").show();
          
        },
      });   

      console.log(date);
}
)



