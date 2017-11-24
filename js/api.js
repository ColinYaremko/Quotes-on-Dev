(function($) {
  
    /* New Quote Generator */
    $('#new-quote-button').on('click', function(event) {
      event.preventDefault();
  
      $('#quote-title').empty();
      $('#quote-content').empty();
      $('.source').empty();
      
      $.ajax({
         method: 'GET',
         url: api_vars.root_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1',
      
      }).done(function(data) {
          
            var post = data.shift();  
            history.pushState(null, null, post.slug);
            $('#quote-title').text(post.title.rendered).prepend('&mdash;');
            $('#quote-content').html(post.content.rendered);
            
            if (data._qod_quote_source) {
              // $('.comma').text(', ');
              $('.source').html('<a href="' + post._qod_quote_source_url + '">' + post._qod_quote_source + '</a>');
            }
  
        }).fail(function() {
          return 'Your request can not be processed.';
        })
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
  })(jQuery);
  
  // success: function () {
    
  //          }