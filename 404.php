<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<section class="error-404 not-found">
				<header class="page-header">
					<h1 class="page-title"><?php echo esc_html( 'Oops! That page can&rsquo;t be found.' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-content">
					<p><?php echo esc_html( 'It looks like nothing was found at this location. Maybe try a search?' ); ?></p>

					<?php get_search_form(); ?>
				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->









	<?php
//Query 5 recent published post in descending order
$args = array( 'numberposts' => '1', 'order' => 'ASC','post_status' => 'publish' );
$recent_posts = wp_get_recent_posts( $args );
//Now lets do something with these posts
foreach( $recent_posts as $recent )
{ ?>
		</br>
		</br>
		</br>
	  <div class="post-title">
		  <hi><?php echo 'Post Title: '.$recent["post_title"];?></h1>
		</div> <!-- post-title-->
    <!--//echo 'Post ID: '.$recent["ID"]; -->
	
		<div class="post-comment">
		<h1><?php echo 'Post Content: '.$recent{"post_content"};?></h1>
		</div> <!--post-comment-->	


	  <div class="post-url">
		  <h3><?php echo 'Post URL: '.get_permalink($recent["ID"]);?></h3>
		</div> <!--post-url-->	
		<div class="post-author">
		  <hi><?php echo 'Post Author '.$recent["post_author"];?></h1>
		</div> <!-- post-author-->
		</br>
		</br>
		</br>

    <?php
    //Do whatever else you please with this WordPress post
}
?>






<?php get_footer(); ?>
