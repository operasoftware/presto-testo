<?php
if( isset( $_GET['delay'] ) ){
	sleep( $_GET['delay'] );
}
?>
t.step(function() {
    location.hash = '#bar';
});