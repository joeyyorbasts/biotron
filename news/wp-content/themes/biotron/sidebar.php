<div id="blog-right">
                    
       <div id="right-contain">
             <p>Biotron's mission is focused on improving and producing scientifically validated mineral chelates and complexes that are highly compatible with human physiology. </p>
                        
                       
                        <div class="line"><img src="<?php bloginfo('template_directory'); ?>/images/horiz-line.png" boarder="0" ></div>
                        
                    
                	<div class="block">
                    	<div class="block-title"> ARCHIVE: </div>
                    		
                            <ul class="blocklist">
                                <?php wp_get_archives('type=monthly'); ?>
                        	</ul>
                    </div><!--archive-->
                    
                    
                    	<div class="line"><img src="<?php bloginfo('template_directory'); ?>/images/horiz-line.png" boarder="0" /></div>
                    
                    
                	<div class="block">
                    	<div class="block-title"> CATEGORIES: </div>
                    		
                            <ul class="blocklist">
                                <?php wp_list_categories('title_li='); ?>
                                
                                
                        	</ul>
                    </div>
					<!--categories-->

					<div class="line"><img src="<?php bloginfo('template_directory'); ?>/images/horiz-line.png" boarder="0" /></div>
                    
                    
                	<div class="block">
                    	<div class="block-title"> CATEGORIES: </div>
                    		
                            <ul class="blocklist">
                                	<?php wp_register(); ?>
									<li><?php wp_loginout(); ?></li>
									<li><a href="<?php bloginfo('rss2_url'); ?>">RSS</a></li>
									<li><a href="<?php bloginfo('comments_rss2_url'); ?>">Comment RSS</a></li>
	
									<?php wp_meta(); ?>
                                
                                
                        	</ul>
                    </div>
                    <!--meta-->
                     
       </div><!--right-contain-->
                        
</div><!--blog-right-->
