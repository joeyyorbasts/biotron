<?php get_header(); ?>


<div id="content-wrapper">
 	<div id="content">
    	<h1> News </h1>
        <h2> LATEST POSTS </h2>
<div id="blog-left">
        
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        
			<div class="shadow">
          		<div class="articles">
            		<div class="bloghead"> <h5> <a href="<?php the_permalink() ?>"><?php the_title()?> </a></h5> </div>
	               	 <a href="<?php the_permalink() ?>"><?php the_post_thumbnail(); ?> </a>
		                <?php the_excerpt()?>
		          
		                <div class="read-more"><a href="<?php the_permalink() ?>">Read More +</a></div>
		                <div class="comments"><?php comments_popup_link('No Comments »', '(1 Comment)', '% Comments »'); ?></div>
                </div><!--articles-->
				<br clear="all"/>
			</div><!--shadow-->
                
            
            

  		<?php endwhile; else: ?>
		<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
		<?php endif; ?>
		</div><!--blog_left-->
		
		<?php get_sidebar(); ?>
       
		<br clear="all">
    </div><!--content-->
 </div><!--content-wrapper-->



<?php get_footer(); ?>
