window.onload = function(){
	tab("chooseTab");
	tab("chooseTab1");
	tab("menu_tab");
	function tab(ch1){
		var aBtn = document.getElementById(ch1).getElementsByTagName('input');
		var aDiv = document.getElementById(ch1).getElementsByTagName('div');
		
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index = i;
			aBtn[i].onmouseover = function(){
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className = "";
					aDiv[i].style.display = "none";
				};
				this.className = "tab_active";
				aDiv[this.index].style.display = "block";
			};
		}
	}
}