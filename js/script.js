// Header Function show an hide menu -----------------------//
	function showMenu(){
		document.getElementById('close').className ="show";
		document.getElementById('navbar').className ="show-nav-con scrollbar nav-con";
		document.getElementById('menu').className ="hide";
		document.getElementById('stop').className ="overflow";
	};

	function hideMenu(){
		document.getElementById('close').className ="hide";
		document.getElementById('navbar').className ="hide-nav-con scrollbar nav-con";
		document.getElementById('menu').className ="show";
		document.getElementById('stop').className ="";
	};

// Search Tab show an hide function ------------------------------------//
	function showSearchTab(){
		document.getElementById('search-tab').className ="search-tab show-pos";
	};
	function hideSearchTab(){
		document.getElementById('search-tab').className ="search-tab hide-pos";
	};