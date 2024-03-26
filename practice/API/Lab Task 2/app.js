// Function to fetch and display stories
function displayStories() {
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories/",
    method: "GET",
    dataType: "json",
    success: function (data) {
      var storiesList = $("#list");

      $.each(data, function (index, movie) {
        if (movie.content.startsWith("/")) {
          storiesList.prepend(
            `
            <div class="m-5 col-2">
            <img class = "img-thumbnail mb-3 picture" src="https://image.tmdb.org/t/p/original${movie.content}"/>
            <div class="d-flex flex-column ">
            <button class="btn btn-info btn-sm mr-2 btn-edit mb-2" data-id="${movie.id}">Edit</button>
            <button class="btn btn-danger btn-sm mr-2 btn-del mb-2" data-id="${movie.id}">Delete</button>  
            <h3 class="w-100 m-auto text-center">${movie.title}</h3>
            </div>
            </div>
            <hr />
            `
          );
        }
      });
    },
    error: function (error) {
      console.error("Error fetching stories:", error);
    },
  });
}
function displayMovies() {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/popular?api_key=8533c97633dcd0a07e096efb5b01fec8&language=en-US&page=2",
    method: "GET",
    dataType: "json",
    success: function (data) {
      var storiesList = $("#list");
      storiesList.empty();

      $.each(data.results, function (index, movie) {
        console.log(movie);
        storiesList.append(
          `
            <div class="m-5 col-2">
              <img class = "img-thumbnail mb-3 picture" src="https://image.tmdb.org/t/p/original${movie.poster_path}"/>
              <div class="d-flex flex-column ">
              
              <h3 class="w-100 m-auto text-center">${movie.original_title}</h3>
              </div>
            </div>
          <hr />
            `
        );
      });
    },
    error: function (error) {
      console.error("Error fetching stories:", error);
    },
  });
}

// Function to delete a movie
function deletemovie() {
  let movieId = $(this).attr("data-id");
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories/" + movieId,
    method: "DELETE",
    success: function () {
      displayMovies();
      displayStories(); // Refresh the list after deleting a movie
    },
    error: function (error) {
      console.error("Error deleting movie:", error);
    },
  });
}
function handleFormSubmission(event) {
  event.preventDefault();
  let movieId = $("#createBtn").attr("data-id");
  var title = $("#createTitle").val();
  var content = $("#createContent").val();
  if (movieId) {
    console.log("hello");
    $.ajax({
      url: "https://usmanlive.com/wp-json/api/stories/" + movieId,
      method: "PUT",

      data: { title, content },
      success: function () {
        displayMovies();
        displayStories(); // Refresh the list after creating a new movie
      },
      error: function (error) {
        console.error("Error creating movie:", error);
      },
    });
  } else {
    console.log("hello2");
    $.ajax({
      url: "https://usmanlive.com/wp-json/api/stories",
      method: "POST",
      data: { title, content },
      success: function () {
        console.log("I am in the uni");
        displayMovies(); // Refresh the list after creating a new movie
        displayStories(); // Refresh the list after creating a new movie
      },
      error: function (error) {
        console.error("Error creating movie:", error);
      },
    });
  }
}
function editBtnClicked(event) {
  event.preventDefault();
  let movieId = $(this).attr("data-id");
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories/" + movieId,
    method: "GET",
    success: function (data) {
      console.log(data);
      $("#clearBtn").show();
      $("#createTitle").val(data.title);
      $("#createContent").val(data.content);
      $("#createBtn").html("Update");
      $("#createBtn").attr("data-id", data.id);
    },
    error: function (error) {
      console.error("Error deleting movie:", error);
    },
  });
}
$(document).ready(function () {
  // Initial display of stories

  displayMovies();
  $(document).on("click", ".btn-del", deletemovie);
  $(document).on("click", ".btn-edit", editBtnClicked);
  // Create Form Submission
  $("#createForm").submit(handleFormSubmission);
  $("#clearBtn").on("click", function (e) {
    e.preventDefault();
    $("#clearBtn").hide();
    $("#createBtn").removeAttr("data-id");
    $("#createBtn").html("Create");
    $("#createTitle").val("");
    $("#createContent").val("");
  });
});
