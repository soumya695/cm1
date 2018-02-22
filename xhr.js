function fn(){

				var obj={
					
                    xhr:new XMLHttpRequest(),
                    fn:function(){
                        //len=0
			alert("sdj")
                        
                        obj.xhr.onreadystatechange=obj.info;
                        obj.xhr.open("GET","https://assets.cricketgateway.com/worldt20/scoring/cg_771047496_summary.json",true);
                        obj.xhr.send();
                    },
                    info:function(){

                        arr1=[]; arr2=[];
                        if(obj.xhr.readyState==4 && obj.xhr.status==200)
                        {

                        	var res=obj.xhr.responseText;
                        	
                        	var data = JSON.parse(res);
                        	console.log(data[0][0]['LiveScore_SCore_1_TestMatchResult'])
                        	data=data[0][0]['LiveScore_SCore_1_TestMatchResult']
                        	
               					arr1.push(data.Comp_TeamA_Name)
                        		arr1.push(data.Comp_TeamA_Score)
                        		arr2.push(data.Comp_TeamB_Name)
                        		arr2.push(data.Comp_TeamB_Score)
                        	
                        	//div.innerHTML=arr;
                        	

                      
                     document.getElementById("div1").innerHTML = arr1;
                     document.getElementById("div2").innerHTML = arr2;
                        }
            }
          
          
           obj.fn();
}
}
