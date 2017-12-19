<?php
/**
*
*
* @package QOD_Starter_Theme
*/
get_header(); ?>

<div id="primary" class="content-area">
  <main id="main" class="site-main">
    <section>
      <header>
        <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
      </header>

      <?php if( is_user_logged_in() && current_user_can( 'edit_posts' ) ): ?>


      <div class="quote-submission-wrapper">
        <form name="quoteForm" id="quote-submission-form">
          <div>
            <label for="quote-author">Author of Quote</label>
            <input type="text" name="quote_author" id="quote-author">
          </div>

          <div>
            <label for="quote-content">Quote</label>
            <textarea type="text" name="quote_content" id="quote-content" cols="20" rows="3"></textarea>
          </div>

          <div>
            <label for="quote-source">Where did you find this quote?</label>
            <input type="text" name="quote_source" id="quote-source">
          </div>

          <div>
            <label for="quote-source-url">Provide a url source of the quote?</label>
            <input type="text" name="quote_source_url" id="quote-source-url">
          </div>

          <input id="submit-quote-button" type="submit" value="Submit Quote">

        </form>
        <p class="submit-success-message" style="display:none;"><?php echo "hello"?></p>

      </div>

<?php else: ?>

<p>None shall post!<p>

<p> <?php echo sprintf( '<a href="%1s">%2s</a>', esc_url( wp_login_url() ), 'Click her to login.'); ?></p>

<?php endif; ?>

    </section>
  </main>
</div>
<?php get_footer(); ?>


