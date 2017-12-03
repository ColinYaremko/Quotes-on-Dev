(function( $ ) {
  var $content = $('.hentry');
  
  // var $form = $('#quote-submission-form');
  $('#new-quote-button').on('click', function(e){
    e.preventDefault();
  
     $content.empty();
     $.ajax({
        method: 'GET',
        url: api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1' 
      })
     .done( function(data) {
      var slug = data[0].slug;
      
      
      //console.log(data);
      var quoteContent = data[0].excerpt.rendered,
      authorName = data[0].title.rendered,
      quoteSource = data[0]._qod_quote_source,
      quoteUrl = data[0]._qod_quote_source_url;
  
      var content = '';
      content += '<div class="entry-content"><p>' + quoteContent + '</p></div>';
      content += '<div class="author-source-container">' + '<div class="entry-meta"><h2 class="entry-title">&mdash; ' +  authorName + '</h2></div>';
      content += '<a href="' + quoteUrl + '">';
      content += quoteSource + '</a>' + '</div>';
      
      $('.hentry').append(content);
      
      history.pushState(null,null,slug)

     });
  });

  /*Submit a Quote */
  $('#submit-quote-button').on('click', function(event) {
    event.preventDefault();

      // Variables being called in ajax
    var quoteAuthor = $('#quote-author').val();
    var quoteContent = $('#quote-content').val();
    var quoteSource = $('#quote-source').val();
    var quoteSourceUrl = $("#quote-source-url").val();
    $.ajax({
       method: 'POST',
       url: api_vars.root_url + 'wp/v2/posts',
       data: {
         "title":quoteAuthor,
         "content": quoteContent,
         "status": 'publish',
         "_qod_quote_source": quoteSource, 
         "_qod_quote_source_url": quoteSourceUrl
      },
      
      beforeSend: function(xhr) {
        xhr.setRequestHeader( 'X-WP-Nonce', api_vars.nonce );
      }

    }).done( function() {

      //  alert('Success!');
    }).always(function() {
      $("#quote-submission-form").trigger("reset");
    })
  });
  

})( jQuery );
