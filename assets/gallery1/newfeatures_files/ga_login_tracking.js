if (window.jQuery) {
jQuery(document).ready(function($) {
    var pathName = window.location.pathname;
	$('body').on('click','#utility-login, a[href="https://www.demandforced3.com/businessportal/index.jsp"]', function() {
		ga('send', 'event',  'Login', 'Login Intent', pathName);
	});
});
}