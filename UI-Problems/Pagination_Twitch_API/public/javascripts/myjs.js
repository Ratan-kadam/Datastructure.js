/*Module 1 start - */
var module1 = (function() {
        function pin(data) {
            var outerDiv = document.createElement('div');
            var leftBox = document.createElement('div');
            var rightBox = document.createElement('div');
            outerDiv.appendChild(leftBox);
            outerDiv.appendChild(rightBox);

            outerDiv.setAttribute("class", "outerBox");
            leftBox.setAttribute("class", "leftBox");
            rightBox.setAttribute("class", "rightBox");

            var image = document.createElement("img");

            if (data.channel.profile_banner) {
                image.src = data.channel.profile_banner;
            } else {
                image.src = "/images/noImage.png";
            }

            leftBox.appendChild(image);

            var Game_header = document.createElement('div');
            if (data && data.game) {
                Game_header.innerHTML = data.game;
            } else {
                Game_header.innerHTML = "Game Name Not available";
            }

            Game_header.setAttribute("class", "gameHeader");
            rightBox.appendChild(Game_header);

            var span1 = document.createElement('div');
            span1.innerHTML = data.channel.display_name + "-" + data.channel.followers + ":viewers";
            rightBox.appendChild(span1);

            var span2 = document.createElement('span');
            span2.innerHTML = "Id: " + data._id + " views:" + data.channel.views + " status:" + data.channel.status + " updated at :" + data.channel.updated_at;
            rightBox.appendChild(span2);

            return outerDiv;
        }

        this.getNewPin = function(data) {
            var newPin = new pin(data);
            return newPin;
        };

        /* API exposing */

        return {
            getPin: this.getNewPin
        }

    })();

    /************************* module1 completed *************************************/

    /* element cached  */
    cache = {};
    cache.mysearchbox = document.getElementsByClassName("searchbox")[0];
    cache.previous = ""; // inital blank
    var curr_data;
    var offset = 0; // initial

    function getPrevData() {
        window.history.back();
    }

function getNextData1() {
    window.history.forward();
    //alert("line after history forward");
    var prev=window.location.href;
    setTimeout(function(){
        if(window.location.href == prev){
            dorest();
        }else{
            console.log("next history available, picking the deatils from browser histroy");
        }
    },200);

    function dorest(){
        var query = cache.mysearchbox.value;

        if(query.length ==0){
            alert("Enter Search Query first");
            return;
        }


        if( curr_data && ((offset / 10) >= (Math.floor(curr_data._total / 10) + 1))){
            alert("This is Last page !");
            return;
        }

        if (cache.previous !== query) {
            offset = 0;
            cache.previous = query; //  updating the cache
        }

        var xmlhttp = new XMLHttpRequest();

        /* for every click manipulate the URL (offset) to get the next data */
        var url = "https://api.twitch.tv/kraken/search/streams?q=" + query + "&limit=" + 10 + "&offset=" + offset;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var myArr = JSON.parse(xmlhttp.responseText);
                var ResultDiv = document.getElementsByClassName("result")[0];
                curr_data = myArr;
                offset = offset + 10; // getting next 10 records
                updateUI();  // updating the UI
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    /* checking if the query is changed .. if so reset the offset */

}

    function updateUI() {
        var ResultDiv = document.getElementsByClassName("result")[0];
        var totalRecords = document.getElementsByClassName("total")[0];
        totalRecords.innerHTML="Total:" + curr_data._total;
        ResultDiv.innerHTML = ""; // clearing the dom

        for (var i = 0; i < curr_data.streams.length; i++) {
            var mynewpin = module1.getPin(curr_data.streams[i]); // getting new object pin
            ResultDiv.appendChild(mynewpin);
        }

        var obj = {};
        obj.currResultHtml = ResultDiv.innerHTML;
        var total = offset / 10 + "/" + (Math.floor(curr_data._total / 10) + 1);
        obj.total = total; // saving the current page / number of pages so at popstate we can restore it
        obj.totalrecords=curr_data._total;

        /* maintaining Browser history */

        window.history.pushState(obj, null, "page" + offset / 10 + "_OutOf_" + (Math.floor(curr_data._total / 10) + 1));
        document.getElementById("pagenum").innerHTML = total;

    }

   /* popstate event to get the previous page data */

    window.addEventListener("popstate", function(e) {
        var Result = document.getElementsByClassName("result")[0];
        var totalrecords=document.getElementsByClassName("total")[0];
        var pageNum = document.getElementById("pagenum");


        if (e.state && e.state.currResultHtml) {
            Result.innerHTML = e.state.currResultHtml;
            pageNum.innerHTML = e.state.total;
            totalrecords.innerHTML= "Total:" + e.state.totalrecords;
        } else {
            console.log("must be routed to first page ..keeping the same result to avoid  blank result");
        }

    });

/***************************** End of myjs file ***********************************************/
