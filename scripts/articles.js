function openMetadata() {
  document.getElementById("dropMetadata").classList.toggle("show");
};
function openDocumentsList() {
  document.getElementById("dropDocuments").classList.toggle("show");
};
function openArticleInfo() {
  document.getElementById("dropInformation").classList.toggle("show");
};
function openIndex() {
  document.getElementById("dropIndex").classList.toggle("show");
};

// JavaScript to handle the sidebar toggle
var sidebar = document.querySelector('.sidebar');
var article_container = document.querySelector('#article_container');
var sidebarToggleButton = document.getElementById('sidebar-toggle-button');
var metadata = document.getElementById("dropMetadata");
var documents = document.getElementById("dropDocuments");
var index = document.getElementById("dropIndex");
var art_info = document.getElementById("dropInformation");

function toggleSidebar(divToShow) {
    all_divs=[documents, metadata, index, art_info]
    if (!sidebar.classList.contains('show')){
    sidebar.classList.add('show')};
    sidebar.classList.toggle('open');
    article_container.classList.toggle('open');
    sidebarToggleButton.classList.toggle('open');

    // Show/hide specified div
    if (Array.isArray(divToShow)) {
      divToShow.forEach(div => {
        div.classList.toggle('show');
      });
      all_divs.forEach(div => {
        if(!divToShow.includes(div)){
          resetElement(div);
        };
      })}
    else {
    // Reset other elements
    resetElement(metadata);
    resetElement(documents);
    resetElement(index);
    resetElement(art_info);
    }};

function resetElement(element) {
    if (element.classList.contains("show")) {
        element.classList.remove("show");
    }
}

sidebarToggleButton.addEventListener('click', toggleSidebar);

//update issue list
$(function loadIssues(){
  // Fetch JSON data
  fetch("articles/articlesJson.json")
      .then((response) => response.json())
      .then((data) => {
          const issue_section = document.getElementById("article");
          // Populate the dropdown options based on JSON data
          
          data.issues.forEach((issue, index) => {
            if (index % 3 === 0) {
              const gridDiv = document.createElement('div');
              gridDiv.classList.add('grid');
              gridDiv.classList.add('grid--center');
              issue_section.appendChild(gridDiv);
            }
            // Create a 'col-30' div for each issue
            const col30Div = document.createElement('div');
            col30Div.classList.add('col-30');
            col30Div.classList.add('mr-2');
            if (issue.cover){
              const cover = issue.cover;
              const title = issue.title;
              const number = issue.number;
              col30Div.classList.add('card');
              col30Div.classList.add("art-deco-image");
              img = document.createElement('img');
              img.setAttribute('src', cover);
              img.setAttribute('style', 'width:100%');
              col30Div.appendChild(img);
              div_container = document.createElement('div');
              div_container.classList.add('container');
              h4 = document.createElement('h4');
              h4.classList.add('p-1');
              col30Div.setAttribute("style", "cursor:pointer;")
              col30Div.addEventListener('click', function() {
                toggleSidebar([documents]);
                loadDocumentsData(issue.issue_articles);
                });
              h4.innerHTML = '<b>'+"Issue"+number+": "+title+'</b>';
              div_container.appendChild(h4);
              col30Div.appendChild(div_container);
            };
            
            // Append the 'col-30' div to the last 'grid' div
            const gridDivs = document.querySelectorAll('.grid');
            gridDivs[gridDivs.length - 1].appendChild(col30Div);

          })})
});


// Define a variable to keep track of whether loadMetadata has been executed for a list_item
let executedMetadata = new Map();
let loadedMetadataContent = new Map();
let loadedArticleInfo = new Map();
let loadedArticleIndex = new Map();


function loadDocumentsData(list_of_articles_dict) {
  const titleDropdown = document.getElementById("dropDocuments");

  // Clear previous articles in the dropdown
  titleDropdown.innerHTML = "";
    
  // Populate the dropdown options based on JSON data
  list_of_articles_dict.forEach((article) => {
      const title = article.title;
      const file = article.url;
      const author = article.author;
      const venue = article.publication_venue;
      const link = article.link;
      var list_item = document.createElement('li');
      list_item.innerHTML = title;
      list_item.addEventListener('click', function() {
    
      loadUrl(file, list_item);} // Pass the file URL to the loadUrl function
      );
      function loadUrl(file) {
        $.ajax({
          method: 'GET',
          url: file,
          success: function(d) {
            $('#article').html(d);
            executedMetadata.set(title, new Set());
            loadedMetadataContent.set(title, new Set());
            loadedArticleInfo.set(title, new Set());
            loadedArticleIndex.set(title, new Set());
            titleKeyArtInfo = loadedArticleInfo.get(title);
            titleKeyMeta = executedMetadata.get(title);
            titleKeyMetaCont = loadedMetadataContent.get(title);
            titleKeyArtIndex = loadedArticleIndex.get(title);

            if(!titleKeyArtInfo.has(list_item)) {
              fillArticleInfo(title, author, venue, link);
              titleKeyArtInfo.add(list_item);
            }

            if(!titleKeyArtIndex.has(list_item)){
              showIndex();
              titleKeyArtIndex.add(list_item);}
            

            if (!titleKeyMeta.has(list_item)) { 
                loadMetadata();
                titleKeyMeta.add(list_item); // Add list_item to the set to mark it as executed
            };

            if (!titleKeyMetaCont.has(list_item)){
                loadMetadataContent();
                titleKeyMetaCont.add(list_item);
            };
            currentLoadedArticle = title;
            
          },
          error: function() {
            alert('Could not load file '+ file)
          }
        });
      };
      
      titleDropdown.appendChild(list_item);
  });
}


function loadMetadata(){
    
    var article_section =document.getElementById('article');
    var collection = article_section.getElementsByTagName('span');
    const metadata = document.getElementById("dropMetadata");
    metadata.innerHTML = ""; // Clear existing metadata before populating new metadata
    var set_span = new Set();
    for (let i = 0; i < collection.length; i++) {
      // Split the class name into an array of individual classes
      const classNames = collection[i].className.split(" ");
      for (let j = 0; j < classNames.length; j++) {
        const className = classNames[j];
    
        // Check if the class name is not 'firstLetter'
        if (className !== 'firstLetter') {
          set_span.add(className);
        }
      }
    }
    
    set_span.forEach((label) => {
        var metadata_label = document.createElement('label');
        metadata_label.classList.add('container');
        metadata_label.innerHTML = label;
        var input = document.createElement('input');
        input.setAttribute('id', 'show'+label);
        input.setAttribute('type', 'checkbox');
        var span_outside_input = document.createElement('span');
        span_outside_input.classList.add('checkmark');
        span_outside_input.classList.add('checkmark_'+label);
        metadata_label.appendChild(input)
        metadata_label.appendChild(span_outside_input)
        //metadata_label.innerHTML = label+"<input type=\"checkbox\"><span class=\"checkmark\"></span>"; 
        //input.setAttribute("id", "show"+label);
        metadata.appendChild(metadata_label);
    })};


function loadMetadataContent(){
  const checkboxes = document.querySelectorAll(".container input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const className = this.parentElement.textContent.trim(); // Get the class name from the label text
        const checked = this.checked;
        handleCheckboxChange(className, checked);
      });
    });
  };

// Array to store created inner containers
var createdInnerContainers = [];
function handleCheckboxChange(className, checked) {
  var metadata_container = document.getElementById('dropMetadata');

  // Find the existing inner container associated with the className
  var inner_container = createdInnerContainers.find(container => container.className === className);


  if (checked) {
    // If the inner container doesn't exist, create a new one
    if (!inner_container) {
      inner_container = document.createElement('div');
      inner_container.setAttribute("id", "content_metadataLabel");
      inner_container.className = className; // Store the className for reference
      createdInnerContainers.push(inner_container);
    }

    const spans = document.querySelectorAll(`#article span.${className}`);
    var selectedElements = []; // Array to store all checked elements;

    var ul = document.createElement('ul');
    spans.forEach((span) => {
      selectedElements.push(span);
      if (span.classList.contains('highlight_'+className)){
        span.classList.remove('highlight_'+className)};
        span.classList.add('highlight_'+className);
    });
    var countEl = {};
    selectedElements.forEach((el) => {
      var text= el.textContent;
      if (!(text in countEl)) {
        countEl[text] = {"value":1, "element":[el]}
      } else {
        countEl[text]["value"]++,
        countEl[text]["element"].push(el) }
    });

    for (let key in countEl) {
      let currentIndex = 0;
      let value = countEl[key];
      var li = document.createElement('li');
      li.innerHTML = key + " "+ "("+ value["value"]+")";
      li.addEventListener('click', function(){
        if (currentIndex < value["value"]){
        if (value["element"][currentIndex].classList.contains('highlight')){
          value["element"][currentIndex].classList.remove('highlight')};
          value["element"][currentIndex].classList.add('highlight');
          if (currentIndex >0){
          value["element"][currentIndex-1].classList.remove('highlight');}
          
          // Scroll the highlighted span into view
          value["element"][currentIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        currentIndex += 1;
        }});
  li.dataset.index = selectedElements.length - 1; // Store the index of the associated span element
  ul.appendChild(li);
    };
  inner_container.appendChild(ul);
  // Append the inner container to the metadata container if it's not already there
  if (!metadata_container.contains(inner_container)) {
    metadata_container.appendChild(inner_container);
  }
  } else {
    // If the inner container exists, remove it
    if (inner_container) {
      inner_container.remove();
      // Remove the inner container from the array
      createdInnerContainers = createdInnerContainers.filter(container => container !== inner_container);
    }
    const spans = document.querySelectorAll(`#article span.${className}`);
    spans.forEach((span) => 
      { if (span.classList.contains('highlight')){
        span.classList.remove('highlight')};
      if (span.classList.contains('highlight_'+className)){
        span.classList.remove('highlight_'+className)
      }});
  }
  };


function fillArticleInfo(title, author, venue, link){
  var divToFill = document.getElementById('dropInformation');
  divToFill.innerHTML = ""; // Clear existing metadata before populating new metadata
  var ul = document.createElement('ul');
  var titleHTML = document.createElement('li');
  titleHTML.innerHTML = '<b>title</b>: <em>'+title+'</em>';
  var authorHTML = document.createElement('li');
  authorHTML.innerHTML = '<b>author</b>: <em>'+author+'</em>';
  var venueHTML = document.createElement('li');
  venueHTML.innerHTML = '<b>venue</b>: <em>'+venue+'</em>';
  var linkHTML = document.createElement('li');
  linkHTML.innerHTML = '<b>link</b>: <a href="'+link+'" target="_blank">'+link+'</a>';
  ul.appendChild(titleHTML);
  ul.appendChild(authorHTML);
  ul.appendChild(venueHTML);
  ul.appendChild(linkHTML);

  var div = document.createElement('div');
  div.appendChild(ul);
  divToFill.appendChild(div)
}

function showIndex(){
  var divToFill = document.getElementById('dropIndex');
  divToFill.innerHTML = ""; // Clear existing metadata before populating new metadata
  if (document.getElementsByClassName('index').length > 0){
  var subtitles = document.getElementsByClassName('index');
  var ul = document.createElement('ul');
  for (var i = 0; i < subtitles.length; i++) {
    var indexEl = document.createElement('li');
    indexEl.innerHTML = '<em>'+subtitles[i].textContent+'</em>';
    indexEl.classList.add("p-1");
    ul.appendChild(indexEl);
    // Use a closure to capture the current value of i
    (function(index) {
      indexEl.addEventListener('click', function() {
        // Scroll the highlighted span into view
        subtitles[index].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      });
    })(i);

  var div = document.createElement('div');
  div.appendChild(ul);
  divToFill.appendChild(div)};
}};

