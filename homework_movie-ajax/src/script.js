
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
        console.log('movie', movie)
        console.log(data)
        
        if (data.Response === "True"){  // data.Respone är en sträng. True är en sträng. Så Boolean kollar om båda strings matchar varandra. Om inte så visar den 'No movie found'.

        result =`
        <img src="${data.Poster}"/>`
       
        resultTitle = `
        <h2>Title: ${data.Title}</h2> 
        <p>Plot: ${data.Plot}</p>     
        <p>Director: ${data.Director}</p>
        <p>Relese Date: ${data.Relesed}</p>
        `
       ;

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
