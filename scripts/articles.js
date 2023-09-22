function openMetadata() {
    document.getElementById("dropMetadata").classList.toggle("show");
    const scrollButtonDiv = document.getElementById('buttonHighlightedDiv');
    const scrollButton = document.getElementById('goToHighlighted');
    scrollButton.textContent= 'Hello';
    scrollButtonDiv.style.display = scrollButtonDiv.style.display === "none" ? "block" : "none";
    scrollButton.addEventListener('click', scrollToNextHighlighted);

  };
function openDocumentsList() {
  document.getElementById("dropDocuments").classList.toggle("show");
};

// Define a variable to keep track of whether loadMetadata has been executed for a list_item
let executedMetadata =new Set();

$(document).ready(
function loadDocumentsData() {

  // Fetch JSON data
  fetch("articlesJson.json")
      .then((response) => response.json())
      .then((data) => {
          const titleDropdown = document.getElementById("dropDocuments");
          
          // Populate the dropdown options based on JSON data
          data.articles.forEach((article) => {
              const title = article.title;
              const file = article.url;
              var list_item = document.createElement('li');
              list_item.innerHTML = title;
              list_item.addEventListener('click', function() {
              loadUrl(file, list_item); // Pass the file URL to the loadUrl function
              });
              function loadUrl(file) {
                $.ajax({
                  method: 'GET',
                  url: file,
                  success: function(d) {
                    $('#article').html(d);

                    if (!executedMetadata.has(list_item)) {
                        loadMetadata();
                        executedMetadata.add(list_item); // Add list_item to the set to mark it as executed
                    };
                    
                    highlightMetadata();
                    

                  },
                  error: function() {
                    alert('Could not load file '+ file)
                  }
                });
              };
              
              titleDropdown.appendChild(list_item);
          });
      })
      .catch((error) => {
          console.error("Error fetching JSON data:", error);
      });});


function loadMetadata(){
    
    var article_section =document.getElementById('article');
    var collection = article_section.getElementsByTagName('span');
    const metadata = document.getElementById("dropMetadata");
    var set_span = new Set();
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].className != 'firstLetter'){
        set_span.add(collection[i].className);}
      };
    
    set_span.forEach((label) => {
        var metadata_label = document.createElement('label');
        metadata_label.classList.add('container');
        metadata_label.innerHTML = label;
        var input = document.createElement('input');
        input.setAttribute('id', 'show'+label);
        input.setAttribute('type', 'checkbox');
        var span_outside_input = document.createElement('span');
        span_outside_input.classList.add('checkmark');
        metadata_label.appendChild(input)
        metadata_label.appendChild(span_outside_input)
        //metadata_label.innerHTML = label+"<input type=\"checkbox\"><span class=\"checkmark\"></span>"; 
        //input.setAttribute("id", "show"+label);
        metadata.appendChild(metadata_label);
    });

    
};


function highlightMetadata(){
    const checkboxes = document.querySelectorAll(".container input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            const className = this.parentElement.textContent.trim(); // Get the class name from the label text

            // Toggle the highlight class on corresponding span elements
            const spans = document.querySelectorAll(`#article span.${className}`);
            spans.forEach((span) => {
                span.classList.toggle('highlight', this.checked);
            });
        });
    });
};



// Initialize the counter for highlighted items
let highlightedCount = 0;
// Function to scroll to the next highlighted element
function scrollToNextHighlighted() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedCount_tot = highlightedElements.length;
    document.getElementById('goToHighlighted').textContent = `Scroll to next highlighted (${highlightedCount_tot})`;
}



    // Add an element to display the highlighted count
    const countElement = document.createElement('div');
    countElement.id = 'highlightedCount';
    countElement.textContent = `Highlighted Items: ${highlightedCount}`;
    document.body.appendChild(countElement);

    // Call the updateHighlightedCount function to initialize the count
    //updateHighlightedCount();







