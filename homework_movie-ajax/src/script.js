
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
    let resultTitle =""

    $.ajax({
      method: 'GET',
      url:url+"&t="+movie,
      success:function(data){
        console.log(data)
        
        if (data.Response = true){  //
        result =`
        <img src="${data.Poster}"/>`
       
        resultTitle = `
        <h2>${data.Title}</h2>      
        `;

        $("#result").html(result)
        $("#resultTitle").html(resultTitle)

        } else {                  // 
          document.write('<h2>No movie found</h2>');
        }
        return data.Response;
      }
    })
  })
});


