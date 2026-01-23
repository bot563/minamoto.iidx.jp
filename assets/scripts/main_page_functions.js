/*=============================================================
	Main Page Functions
=============================================================*/
window.addEventListener('load', function() {
        const loader = document.getElementById('loader-wrapper');
        
        setTimeout(() => {
            loader.classList.add('fade-out');
            
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1700); 
    });
(function() {
    function strictBlock() {
        const isWideScreen = window.innerWidth > window.innerHeight || window.innerWidth > 1000;
        const ua = navigator.userAgent.toLowerCase();
        const isDesktopUA = !/android|iphone|ipad|ipod|windows phone/i.test(ua);
        if (isWideScreen || isDesktopUA) {
            
            document.documentElement.innerHTML = "";
            
            document.body.style.backgroundColor = "#1a1a2e";
            document.body.style.color = "#ffffff";
            document.body.style.display = "flex";
            document.body.style.flexDirection = "column";
            document.body.style.justifyContent = "center";
            document.body.style.alignItems = "center";
            document.body.style.height = "100vh";
            document.body.style.margin = "0";
            document.body.style.fontFamily = "sans-serif";
            document.body.style.textAlign = "center";
            document.body.style.overflow = "hidden";

            document.body.innerHTML = `
                <div style="font-size: 80px; margin-bottom: 20px;">🚫</div>
                <h1 style="color: #ff4d4d; font-size: 24px; margin-bottom: 10px;">MOBILE ONLY ACCESS</h1>
                <p style="font-size: 1.1rem; font-weight: bold; margin-bottom: 5px;">
                   デスクトップモードは禁止されています
                </p>
                <p style="color: #ccc; padding: 0 30px; font-size: 14px;">
                    デスクトップモードまたは横長画面が検出されました.<br>
                    このサイトは縦向きモードでのみアクセスできます。
「デスクトップサイト」機能は無効にする必要があります。
                </p>
                <button onclick="location.reload()" style="margin-top: 25px; padding: 12px 25px; background: #e94560; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
                    もう一度お試しください
                </button>
            `;
            
            document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive: false });
        }
    }
    strictBlock();
    
    window.addEventListener('resize', strictBlock);
})();

    const rssJsonUrl = 'https://rss.app/feeds/v1.1/ksuxB1NvJj397oGv.json';

    fetch(rssJsonUrl)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('news-list');
            let htmlHTML = '';

            // Looping data berita dari JSON
            data.items.forEach(item => {
                htmlHTML += `
                    <div class="lf-feature">
                        <a class="lf-feature-link" href="${item.url}" target="_blank">
                            <h3 class="lf-feature-title">${item.title}</h3>
                            <span class="lf-feature-source">
                                <i class="fa-solid fa-link"></i> ${item.author || 'Official News'}
                            </span>
                            <img loading="lazy" class="lf-feature-image" src="${item.image}" alt="thumb">
                        </a>
                    </div>
                `;
            });

            container.innerHTML = htmlHTML;
        })
        .catch(err => console.error("Gagal memuat berita:", err));
/*Main Nav Section ================================================*/






document.addEventListener('contextmenu', event => event.preventDefault());

  
  document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83)) {
      return false;
    }
  };
  document.onkeydown = function(e) {
    // Memblokir F12
    if(e.keyCode == 123) { return false; }
    
    // Memblokir Ctrl+Shift+I (Inspect)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
    
    // Memblokir Ctrl+Shift+C (Element Selector)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
    
    // Memblokir Ctrl+Shift+J (Console)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
    
    // Memblokir Ctrl+U (View Source)
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; }
};
setInterval(function() {
    debugger;
}, 100);

/*	on click, show selected tab, hide all actionable tabs */
function tab_selct (nav_id, tab_id) {
	console.log(nav_id);
	console.log(tab_id);
	
	var i;
	var selected_nav = document.getElementById(nav_id);
	console.log("selected nav");
	console.log(selected_nav);
	var current_nav_id = document.getElementsByClassName('nav-item-selected')[0].id;
	var current_nav = document.getElementById(current_nav_id);
	console.log("current nav");
	console.log(current_nav);
	var selected_tab = document.getElementById(tab_id);
	var actionable_tabs = document.getElementsByClassName("tab-actionable");
	
	current_nav.classList.remove("nav-item-selected");
	selected_nav.classList.add("nav-item-selected");
	
	console.log("the selected tab is " + selected_tab);
	for (i = 0; i < actionable_tabs.length; i++) {
		console.log("actionable tab on button select " + actionable_tabs[i]);
	}

	for (i = 0; i < actionable_tabs.length; i++) {
		actionable_tabs[i].style.display = "none";
	}
	
	selected_tab.style.display = "block";
}

/*Main Section ================================================*/

/*Show more anime series by genre
button on click, display more_cards_genre, set fav_item_animeseries bottom margin 10px to match grid, hide button
*/
function more_bygenre_btn() {
  var container = document.getElementById("more_cards_genre");
  var animeSeriesContainer = document.getElementById("fav_item_animeseries");
  var button = document.getElementById("more_bygenre_btn"); 
  
  container.style.display = "flex";
  animeSeriesContainer.style.marginBottom = "10px";
  button.style.display = "none";
}

/*Show more female characters
button on click, display more female div, hide button
*/
function more_female_btn() {
  var container = document.getElementById("more_cards_female");
  var animeSeriesContainer = document.getElementById("fav_item_female_chars");
  var button = document.getElementById("more_female_btn"); 
  
  container.style.display = "flex";
  animeSeriesContainer.style.marginBottom = "10px";
  button.style.display = "none";
}

/*Show more OPs
button on click, display more-video-item-op, hide more_video_items_op_btn
*/
function more_OP_ED_item_op_btn() {
  var i;
  var links = document.getElementsByClassName("more-OP_ED-item-op");
  var btn = document.getElementById("more_OP_ED_item_op_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}
/*Show more EDs*/
function more_OP_ED_item_ed_btn() {
  var i;
  var links = document.getElementsByClassName("more-OP_ED-item-ed");
  var btn = document.getElementById("more_OP_ED_item_ed_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}

/*Links and Follows Section ===================================*/

/*Show more for collections  links
button on click, display more-lf-forcollections, hide more_forcollections_btn
*/
function more_forcollections_btn() {
	var i;
	var links = document.getElementsByClassName("more-lf-forcollections");
	var btn = document.getElementById("more_forcollections_btn");
	for (i = 0; i < links.length; i++) {
	  links[i].style.display = "block";
	}
	btn.style.display = "none";
  }

/*Show more anitube links
button on click, display more-lf-anitube, hide more_anitube_btn
*/
function more_anitube_btn() {
  var i;
  var links = document.getElementsByClassName("more-lf-anitube");
  var btn = document.getElementById("more_anitube_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}

/*Show more Podcasts and Playlists links
button on click, display more-podcast-and-playlists, hide more_podcast_and_playlists_btn
*/
function more_podcast_and_playlists_btn() {
	var i;
	var links = document.getElementsByClassName("more-podcast-and-playlists");
	var btn = document.getElementById("more_podcast_and_playlists_btn");
	for (i = 0; i < links.length; i++) {
	  links[i].style.display = "block";
	}
	btn.style.display = "none";
  }

/*Show more artistfanart links 
button on click, display more-lf-artistfanart, hide more_artistfanart_btn
*/
function more_artistfanart_btn() {
  var i;
  var links = document.getElementsByClassName("more-lf-artistfanart");
  var btn = document.getElementById("more_artistfanart_btn");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "block";
  }
  btn.style.display = "none";
}

/*=============================================================
	Content continuity with screen resizing
=============================================================*/

/* Layout changes with screen resizing ======================= */

/* Small Mobile Single column */
function one_column () {
	console.log("column one start");
	/*	Makes sure all tabs are in the list of actionable tabs
			There are cases where tabs are taken out of list of actionable tabs
			on other screen sizes and not put back on screen resize to one column. 
	*/
	var i; 
	var x = document.getElementsByClassName("tab");
	for (i = 0; i < x.length; i++) {
		x[i].classList.add("tab-actionable");
	}

	/* Hiding about tab on screen resize from larger to small one column layout
		There is a case where on screen resize to smaller layout, about tab remains wrongly displayed.
		I couldn't directly hide about tab on small layout, it caused problems for when wanting to select about tab.
		Solution was to test if another tab was selected before screen shrink (which should be always by design), 
		then hide about.
	*/
	var current_nav_id = document.getElementsByClassName('nav-item-selected')[0].id;
	var tab_about = document.getElementById("tab_about");
	console.log(current_nav_id);
	if (!current_nav_id.includes("about")){
		tab_about.style.display = "none";
	}	
}

/* Medium Tablet Two column */
function two_column () {
	/*	Makes sure about tab is displayed on 2 column resize and not hidden when tab_select runs
			There is a case where selecting a tab, then resizing to medium screen hides about,
			and does not show back on screen resize to 2 column.
	*/
	var tab_about = document.getElementById("tab_about");	
	tab_about.classList.remove("tab-actionable");
	tab_about.style.display = "block";
	
	/*	Makes sure tab_linksandfollows gets put back in to list of actionable tabs 
			There is a case where going from large 3 column back to medium 2 column
			keeps tab_linksandfollows wrongly out of the list of actionable tabs designed 
			for medium 2 column layout. 
	*/
	var tab_linksandfollows = document.getElementById("tab_linksandfollows");
	tab_linksandfollows.classList.add("tab-actionable");

	/*	Case where expanding from small one column layout to medium two column layout
			if tab about was currently selected, then display and change to selected spotlight tab
			to prevent no content displayed on screen resize. 
	*/
	var current_nav_id = document.getElementsByClassName('nav-item-selected')[0].id;
	console.log(current_nav_id);
	if (current_nav_id.includes("about")){
		tab_selct('nav_spotlight', 'tab_spotlight');
	}

	/*	Hide links and follows tab on screen resize from large to medium 
			Case where linksandfollows wrongly stays displayed when screen shrinks. 
			I couldn't directly hide on medium layout, it caused issues when wanting to select linksandfollows.
	*/
	var tab_linksandfollows = document.getElementById("tab_linksandfollows");
	console.log(current_nav_id);
	if (!current_nav_id.includes("links")){
		tab_linksandfollows.style.display = "none";
	}	
}

/* Large Desktop Three column */
function three_column () {
	/*	Makes sure about tab is displayed on 3 column resize and not hidden when tab_select runs
			There is a case where selecting a tab, then resizing to large screen hides about,
			and does not show back on screen resize to 3 column.
	*/
	var tab_about = document.getElementById("tab_about");	
	tab_about.classList.remove("tab-actionable");
	tab_about.style.display = "block";

	/*	Makes sure linksandfollows tab is displayed on 3 column resize and not hidden when tab_select runs
			There is a case where selecting a tab, then resizing to large screen hides linksandfollows,
			and does not show back on screen resize to 3 column.
	*/
	var tab_linksandfollows = document.getElementById("tab_linksandfollows");
	tab_linksandfollows.classList.remove("tab-actionable");
	tab_linksandfollows.style.display = "block";
	
	/*	Case where Linksandfollows tab was selected in medium 2 column layout
			then when expanded to larger three column layout leaving nothing displayed 
	*/
	var current_nav_id = document.getElementsByClassName('nav-item-selected')[0].id;
	console.log(current_nav_id);
	if (current_nav_id.includes("links")){
		tab_selct('nav_spotlight', 'tab_spotlight');
	}
}

//Maintains selected tab content continuity with responsive design
function tab_continuity () {
	// Get width of the window, used innerWidth to match with CSS grids calculations
	var w = window.innerWidth;
	console.log("window width is " + w);

	/*scaling profile banner image by height or width,
		depending on screen size 
	
	if (w < 965) {
		var banner = document.getElementById("profile_banner");
		banner.style.height = "100%";
		banner.style.width = "";
	}
	if ( w > 965) {
		var banner = document.getElementById("profile_banner");
		banner.style.width = "100%";
		banner.style.height = "";
	}
*/
	if (w < 900) {
		console.log("calling column one");
		one_column();
	}
	if (w > 900 && w < 1299) {
		console.log("calling column two");
		two_column();
	}
	if (w > 1300) {
		console.log("calling column three");
		three_column();
	}
}

// Attaching the event listener function to window's resize event

window.addEventListener("resize", tab_continuity);

/*	Calling the function for the first time after page loads
		had to call function after page load because otherwise failed finding divs by ID
		and returned null for elements
*/
window.onload = function afterWebPageLoad() { 
  tab_continuity();
} 
window.onload = function() {
    const alertOverlay = document.getElementById("auto-alert");
    const cityText = document.getElementById("city-greeting");

    // Munculkan popup
    alertOverlay.style.display = "block";

    // Mulai deteksi lokasi
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
          const city = data.city || "Area Unknown";
          cityText.innerHTML = `✨ <b>${city}</b> からお越しのゲスト様 ✨<br><br>オフィシャルスペース へようこそ。`;
      })
    .catch(() => {
    cityText.innerHTML = "✨ オフィシャルスペースへようこそ ✨<br>ご来場ありがとうございます。";
});

};

function dismissAlert() {
    document.getElementById("auto-alert").style.display = "none";
}


// testing matchMedia ========================================================
/*
function tab_continuity() {
	var size_small = window.matchMedia('(min-width:300px) and (max-width: 899px)');
	var size_medium = window.matchMedia('(min-width: 900px)');
	var size_large = window.matchMedia('(min-width: 1300px)');

	var banner = document.getElementById("profile_banner");

  // Check if the media query is true
	if (size_small.matches) {
		console.log("matchMedia function calling column one");
		one_column();

		banner.style.height = "100%";
		banner.style.width = "";
  }
	if (size_medium.matches) {
		console.log("matchMedia function calling column two");
		two_column();

		banner.style.width = "100%";
		banner.style.height = "";
  }
	if (size_large.matches) {
		console.log("matchMedia function calling column three");
		three_column();
		
		banner.style.width = "100%";
		banner.style.height = "";
  }
}

// Register event listener
window.addEventListener("resize", tab_continuity);
// Initial check
tab_continuity();
*/
