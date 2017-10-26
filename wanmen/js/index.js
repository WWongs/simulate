var ulLists = document.getElementsByClassName("ulList");
var menus = document.getElementsByClassName("menu");
var contain = document.getElementsByClassName("contain")[0];
var picUl = document.getElementById("picUl");
var picUllis = picUl.getElementsByTagName("li");
var app = document.getElementById("APP");

var menuListLength = ulLists.length;


var picSql = [
{"cid":0,"path":"url(img/1.png)"},
{"cid":1,"path":"url(img/2.png)"},
{"cid":2,"path":"url(img/3.png)"},
{"cid":3,"path":"url(img/4.png)"},
{"cid":4,"path":"url(img/5.png)"},
{"cid":5,"path":"url(img/6.png)"},
{"cid":6,"path":"url(img/7.png)"},
{"cid":7,"path":"url(img/8.png)"}
];
picSql.getPath = function(cid){
	for(let i = 0 ; i < picSql.length; i++){
		if(cid == picSql[i].cid){
			return picSql[i].path;
		}
	}
};


app.onmouseenter = function(){
	var appPic = document.getElementsByClassName("appPic")[0];
	appPic.style.display = 'block';
};
app.onmouseleave = function(){
	var appPic = document.getElementsByClassName("appPic")[0];
	appPic.style.display = 'none';
};

function showMenu(){
	for(let i =0 ; i < menuListLength; i++){
		ulLists[i].onmouseenter = function(){
           for(let j=0; j<menuListLength; j++){
           	menus[j].style.display = 'none';
           	ulLists[j].style.backgroundColor = '';
           }
           menus[i].style.display = 'block';
           ulLists[i].style.backgroundColor = '#7C7C7C';
		};

		menus[i].onmouseleave = function(){
			menus[i].style.display = 'none';
			ulLists[i].style.backgroundColor = '';
		};		
	}

}
showMenu();
// changePic();


var timer1 = '';
var timer2 = '';
var index = 0;
// autoChangePic(index);
floatPic();
autoChangePic()
function floatPic(){
	for(let i =0 ; i < picUllis.length; i++){
		
		picUllis[i].onmouseenter = function(){
			index = i;
			clearInterval(timer1);
			changePic(i);
		};
		picUllis[i].onmouseleave = function(){
            autoChangePic();
		};
	}
}

function changePic(cid){   
    for(let j =0 ; j < picUllis.length; j++){
    	picUllis[j].className = "";
    }
    picUllis[cid].className = "liHover";
    setTimeout(function(){
      contain.style.backgroundImage = picSql.getPath(cid);

 //    var num = 200;
	// 	var step = 2;
						
	// 	timer2 = setInterval(function(){
	// 	num -= step;
	// 	if(num<=0){
	// 	num = 0;
	// 	clearInterval(timer2);
	// }
	// 	contain.style.opacity = num / 200;
	//  },1);   
    }, 200);
    
}


function autoChangePic(){
	timer1 = setInterval(function(){
		index ++;
		if(index >= picUllis.length) {
		index = 0;
	}
		changePic(index);
	},6000);
}