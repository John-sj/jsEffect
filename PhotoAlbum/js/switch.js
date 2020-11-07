window.onload = function(){
	//1.get event source
	const imgObj = document.getElementById("mainImage");
	const imgLis = document.getElementsByTagName('li');

	for (let i = 0;i<imgLis.length;i++){
		//2. bind event
		imgLis[i].onmouseover = function(){
			//3.event drive
			//clear all li's className
			for (let j = 0;j<imgLis.length;j++){
				imgLis[j].className=''
			}
			//change path
			imgObj.setAttribute('src',`img/${i+1}.jpg`);
			//actived
			imgLis[i].className = 'active'
		}
	}
}