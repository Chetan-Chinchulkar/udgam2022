if (window.matchMedia("(max-width: 767px)").matches) {
    const hamberger_overlay = document.getElementById("hamberger-overlay");
    const sphere = document.getElementById("sphere");
    let open = false;

    const change = () => {
        function disableScroll() {
            // Get the current page scroll position
            scrollTop = 
              window.pageYOffset || document.documentElement.scrollTop;
            scrollLeft = 
              window.pageXOffset || document.documentElement.scrollLeft,
  
                // if any scroll is attempted,
                // set this to the previous value
                window.onscroll = function() {
                    window.scrollTo(scrollLeft, scrollTop);
                };
        }
        function enableScroll() {
            window.onscroll = function() {};
        }

        if (!open) {
            console.log(hamberger_overlay.classList);
            hamberger_overlay.classList.remove("close");
            
            hamberger_overlay.classList.add("open");
            // hamberger_overlay.display = 'block';
            disableScroll()
        } else {
            // hamberger_overlay.display = 'none';
            console.log(hamberger_overlay.classList);
            hamberger_overlay.classList.remove("open");
            hamberger_overlay.classList.add("close");
            enableScroll();
        }
        open = !open;
    };
    
    sphere.addEventListener("click", change);
}
