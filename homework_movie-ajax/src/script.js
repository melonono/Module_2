
// $.ajax({url:'http://www.omdbapi.com/?apikey=ec932271&t=Jurassic Park'}).done((movies) => {
//   console.log(movies)
  
//   // function displayMovie (movie){
//   //   let title = document.createElement('div');

//   //   displayMovie.appendChild(movie);
//   // }

//   // return displayMovie;

// });


$(document).ready(function(){
  $('#movieForm').submit(function(event){
    event.preventDefault()

    let movie = $('#movie').val()
    let url = ' http://www.omdbapi.com/?apikey=ec932271'

    let result = ""

    $.ajax({
      method: 'GET',
      url:url+"&t="+movie,
      success:function(data){
        console.log(data)

        result = `

        <img src="${data.Poster}"/>`

        $("#result").html(result)
      }
    })
  })
})