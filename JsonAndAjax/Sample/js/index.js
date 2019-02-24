    var btn = $('#btn').bind('click',renderHTML);
    var animalContainer = document.getElementById('animal-info');
    $('#animal-info').css('background','green');
    var clickCount = 0;
    var jsonDATA = '';
    loadJSON();
    
    function loadJSON(){
            try{
                var ourRequest = new XMLHttpRequest();
                ourRequest.open('GET','http://127.0.0.1:5500/JsonAndAjax/Sample/js/jsondata.json');
                ourRequest.onload = function(){
                    jsonDATA = JSON.parse(ourRequest.responseText);
                };
                ourRequest.onerror = function(){
                    console.log(ourRequest.err);
                };
                ourRequest.send();
            }
            catch(err){
                console.log(err);
            }
        }
    function renderHTML(){
            try{
                    var htmlString = '';
                    if(clickCount == 0){
                        for(i=0; i < jsonDATA.length; i++){
                            htmlString += "<p>" + jsonDATA[i].name + " is a " +jsonDATA[i].species  +"</p>";
                    }
                }
                    if(clickCount == 1){
                        for(i=0; i < jsonDATA.length; i++){
                            htmlString += "<p>" + jsonDATA[i].foods.likes + " is a " +jsonDATA[i].foods.dislikes +"</p>";
                    }
                }
                    if(clickCount == 2){
                        $('#animal-info').hide();
                    }
                clickCount++;
                animalContainer.insertAdjacentHTML('beforeend',htmlString);
                }
            catch(err){
                console.log(err);
            }
        }
    

