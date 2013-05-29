<?php get_header(); ?>

	
<div id="content-wrapper">
 	<div id="content">
    <div id="blog-left">
        
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        
			<div class="shadow">
          		<div class="articles">
            		<div class="bloghead"> <h6><?php the_title()?></h6> </div>
            		<div class="date"><?php the_time('M jS, Y') ?> </div>
            		<!--<div class="author">By: <?php the_author_posts_link(); ?>  </div>-->
	               	 <?php the_post_thumbnail(); ?> 
		                
		                <?php the_content()?>
		                
		                 <?php comments_template(); ?>
		          
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