$(document).ready(function () {
  const header = $("header");

  // Make the header sticky on scroll
  $(window).scroll(function () {
    header.toggleClass("sticky", $(this).scrollTop() > 0);
  });

  // Function to display search results
  function displaySearchResults(perfumes) {
    const resultsContainer = $("<div>").addClass("row");

    // Loop through each product and create a card for it
    perfumes.forEach((product) => {
      const productCard = `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-between align-items-center">
                <div class="price">${product.price}</div>
                <a href="./perfumes/${product._id}" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      `;
      resultsContainer.append(productCard);
    });

    // Replace existing content inside the search results container with new results
    $(".search-results-container").empty().append(resultsContainer);
  }
});
