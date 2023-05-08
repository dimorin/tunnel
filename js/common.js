var modal = {
	openModal:function(type){
		switch(type){
			case 'add': $('#addModal').modal('show'); break;
			case 'edit': $('#editModal').modal('show'); break;
			case 'delete': $('#deleteModal').modal('show'); break;
		}
	}
}
var common={	
	calcDate : function (timestamp){
		var time = new Date(timestamp);
		var seconds = time.getSeconds();
		var minutes = time.getMinutes();
		var hours = time.getHours();
		var date = time.getFullYear()+"-";
		if(time.getMonth()<9){
			date += "0"+(time.getMonth()+1)+"-";
		}else{
			date += (time.getMonth()+1)+"-";
		}
		if(time.getDate()<10){
			date += "0"+(time.getDate());
		}else{
			date += (time.getDate());
		}
		
		if(time.getSeconds() < 10){
			seconds = "0"+time.getSeconds();
		}else{
			seconds = time.getSeconds();
		}
		if(time.getMinutes() < 10){
			minutes = "0"+time.getMinutes();
		}else{
			minutes = time.getMinutes();
		}
		if(time.getHours() < 10){
			hours = "0"+time.getHours();
		}else{
			hours = time.getHours();
		}
		
		return date + " " + hours + ":" + minutes + ":" + seconds
	},
	/* onInputKeyUpEvent : function(element){
		if($(element).prop('class') == "searchInput"){
			if(event.keyCode==13){
				getContents();
			}
		}

	}, */
	getDateString : function(myDate){
		var year = myDate.getFullYear();
		var month = (myDate.getMonth() + 1);
		var day = myDate.getDate();
		var hour = myDate.getHours();
		var minute = myDate.getMinutes();
		var second = myDate.getSeconds();
		
		month = (month < 10) ? "0" + String(month) : month;
		day = (day < 10) ? "0" + String(day) : day;
		hour = (hour < 10) ? "0" + String(hour) : hour;
		minute = (minute < 10) ? "0" + String(minute) : minute;
		second = (second < 10) ? "0" + String(second) : second;
		
		return  year + '-' + month + '-' + day + ' ' + hour + ":" + minute + ":" + second;
	},
	today : function() {
		return common.getDateString(new Date());
	},
	lastWeek : function() {
		var d = new Date();
		var dayOfMonth = d.getDate();
		
		d.setDate(dayOfMonth - 7);
		return common.getDateString(d);
	},
	lastMonth : function() {
		var d = new Date();
		var dayOfMonth = d.getDate();
		
		d.setDate(dayOfMonth - 7);
		return common.getDateString(d);
	}
}

Date.prototype.format = function (f) {
    if (!this.valueOf()) return " ";
    var weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];
    var weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function ($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear(); 						// 년 (4자리)
            case "yy": return (d.getFullYear() % 1000).zf(2); 			// 년 (2자리)
            case "MM": return (d.getMonth() + 1).zf(2); 				// 월 (2자리)
            case "dd": return d.getDate().zf(2); 						// 일 (2자리)
            case "KS": return weekKorShortName[d.getDay()]; 			// 요일 (짧은 한글)
            case "KL": return weekKorName[d.getDay()]; 					// 요일 (긴 한글)
            case "ES": return weekEngShortName[d.getDay()]; 			// 요일 (짧은 영어)
            case "EL": return weekEngName[d.getDay()]; 					// 요일 (긴 영어)
            case "HH": return d.getHours().zf(2); 						// 시간 (24시간 기준, 2자리)
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)
            case "mm": return d.getMinutes().zf(2); 					// 분 (2자리)
            case "ss": return d.getSeconds().zf(2); 					// 초 (2자리)
            case "a/p": return d.getHours() < 12 ? "오전" : "오후"; 		// 오전/오후 구분
            default: return $1;
        }
    });
};
String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };



$(function(){
	$(".arrow-sort").on("click", function(event){
        var arrowOrder = ['combo', 'down', 'up'];
        var currentIcon=0;
        var nextIcon=0;
        for(var i=0; i<arrowOrder.length; i++){			          
          if(event.target.className == arrowOrder[i]){
            currentIcon=i;
            nextIcon=i+1;
            if(i==arrowOrder.length-1) nextIcon=0;
          }
        }
        event.target.setAttribute('class', arrowOrder[nextIcon]);			
        $(event.currentTarget).attr('order',nextIcon);        
    });

	$(".tunnel_input.search").on("keyup", function(event){
		if(event.keyCode==13){
			console.log("--- enter--");
			console.log(event.target.value);
			//getContents();
		}
	});	
});

