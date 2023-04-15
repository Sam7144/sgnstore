(function jvxPixelWrapper(){

    var isDebug = false;
    var existingData = ["14064016","14064020","14064078","14064149"];
    var existingGroups = {"group7":["UserVisited"],"group4":["APPAREL","FOOTWEAR","EQUIPMENT"],"group6":["GIRLS","BOYS","WOMEN","MEN"],"group1":["14064016","14064020","14064078","14064149"]};
    var domain = "generic";
    var pixelParams = {"col":"Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football,Soccer/Football","sugProducts":"''","pxType":"2","cat":"APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL,APPAREL","px":"6591cbc3bde6a0","gdpr_consent":"${GDPR_CONSENT_294}","prodID":"1008592327,1014391293,1014391267,1014391287,1014391262,1014367877,1014391279,1014391259,1014391278,1014367851,1014391265,1008592558,1012617349,1012617376,1012617333,1012617395,1012617305,1012617346,14064029,14064030,14064149,14064078,14064020,14064016","brand":"Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike,Nike","group":"BOYS,GIRLS,BOYS,BOYS,BOYS,BOYS,BOYS,BOYS,BOYS,BOYS,BOYS,BOYS,BOYS,GIRLS,BOYS,BOYS,BOYS,BOYS,BOYS,BOYS,BOYS,GIRLS,BOYS,GIRLS,BOYS,GIRLS,BOYS,GIRLS,BOYS,GIRLS,BOYS,GIRLS","gdpr":"${GDPR}"};
    var gdprParams = "&gdpr=${GDPR}&";
    var addnlPixelData = function getRetargetingData() {
	// refer to help link for more options
	var response = {};

	//response["65a3b85143c4e2"] = (typeof pixelParams.cat !== "undefined" && pixelParams.cat !== "undefined" && pixelParams.cat.length>0 && pixelParams.cat.length>0 && pixelParams.cat.trim() !== "undefined" && pixelParams.cat.trim() !== "undefined" && pixelParams.cat.trim() !== "" && pixelParams.cat.trim() !== "") ? [pixelParams.cat] : ["cat_na"];
	//response["6591cbc3bde6a0"] = (typeof pixelParams.prodID !== "undefined" && pixelParams.prodID !== "undefined" && pixelParams.prodID.length>0 && pixelParams.prodID.length>0 && pixelParams.prodID.trim() !== "undefined" && pixelParams.prodID.trim() !== "undefined" && pixelParams.prodID.trim() !== "" && pixelParams.prodID.trim() !== "") ? [pixelParams.prodID] : ["product_na"];
	//response["25a3bc73b3ab07"] = (typeof pixelParams.sugProducts !== "undefined" && pixelParams.sugProducts !== "undefined" && pixelParams.sugProducts.length>0 && pixelParams.sugProducts.length>0 && pixelParams.sugProducts.trim() !== "undefined" && pixelParams.sugProducts.trim() !== "undefined" && pixelParams.sugProducts.trim() !== "" && pixelParams.sugProducts.trim() !== "") ? [pixelParams.sugProducts] : ["sugProducts_na"];
	//response["35a576a87e5998"] = (typeof pixelParams.group !== "undefined" && pixelParams.group !== "undefined" && pixelParams.group.length>0 && pixelParams.group.length>0 && pixelParams.group.trim() !== "undefined" && pixelParams.group.trim() !== "undefined" && pixelParams.group.trim() !== "" && pixelParams.group.trim() !== "") ? [pixelParams.group] : ["TopProducts_na"];
	
	
	
	if(typeof pixelParams.cat !== "undefined" && pixelParams.cat !== "undefined" && pixelParams.cat.length>0 && pixelParams.cat.length>0 && pixelParams.cat.trim() !== "undefined" && pixelParams.cat.trim() !== "undefined" && pixelParams.cat.trim() !== "" && pixelParams.cat.trim() !== ""){
		response["65a3b85143c4e2"] = [pixelParams.cat]
	}
	
	if(typeof pixelParams.prodID !== "undefined" && pixelParams.prodID !== "undefined" && pixelParams.prodID.length>0 && pixelParams.prodID.length>0 && pixelParams.prodID.trim() !== "undefined" && pixelParams.prodID.trim() !== "undefined" && pixelParams.prodID.trim() !== "" && pixelParams.prodID.trim() !== ""){
		response["6591cbc3bde6a0"] = [pixelParams.prodID]
	}
	
	if(typeof pixelParams.sugProducts !== "undefined" && pixelParams.sugProducts !== "undefined" && pixelParams.sugProducts.length>0 && pixelParams.sugProducts.length>0 && pixelParams.sugProducts.trim() !== "undefined" && pixelParams.sugProducts.trim() !== "undefined" && pixelParams.sugProducts.trim() !== "" && pixelParams.sugProducts.trim() !== ""){
		response["25a3bc73b3ab07"] = [pixelParams.sugProducts]
	}
	
	if(typeof pixelParams.group !== "undefined" && pixelParams.group !== "undefined" && pixelParams.group.length>0 && pixelParams.group.length>0 && pixelParams.group.trim() !== "undefined" && pixelParams.group.trim() !== "undefined" && pixelParams.group.trim() !== "" && pixelParams.group.trim() !== ""){
		response["35a576a87e5998"] = [pixelParams.group]
	}
	var pageurl = window.location.href;
	if(pageurl.indexOf("www.nike.com")>-1){
		response["75ea8421c3c4d0"] = ["UserVisited"]
	}
	return response;
};
    var partnerSyncPixels = {};
    var us_privacy_string = "";

    function getParamValue(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function firePixel(pixelId, pixelVals) {
        var pixelURL = "https://pxl.jivox.com/tags/re/pxrc.php?c=1&px=" + pixelId + "" + gdprParams + us_privacy_string; // basic URL
        if (domain === "ecom") {
            var pxrcParams = {}, attr;
            for (attr in pixelParams) {
                pxrcParams[attr] = pixelParams[attr];
            }
            for (attr in pixelVals) {
                pxrcParams[attr] = pixelVals[attr];
            }
            for (attr in pxrcParams) {
                pixelURL += "&" + attr + "=" + pxrcParams[attr];
            }
        } else {
            pixelURL += "&cData=" + pixelVals.join(); // add derived params to the basic URL
        }

        pixelURL += "&r=" + Math.random(); // add a random no so that we are not cached

        var appendNode = document.body ? document.body : document.getElementsByTagName("head")[0];
        var scriptEl = document.createElement("script");
        scriptEl.src = pixelURL;
        appendNode.appendChild(scriptEl);
    }

    function fireMultiPixel(pixelValObj) {
        var uniqueId = Math.floor(Math.random() * (10000)),
            pixelObj = JSON.stringify(pixelValObj);

        /*********** iFrame Form POST *****************/
        if (pixelParams.pxType == null || pixelParams.pxType == "1") {
            var jvxFrame = document.createElement('iframe');
            jvxFrame.style.width = '0px';
            jvxFrame.style.height= '0px';
            jvxFrame.style.display = 'none';
            jvxFrame.id = "jvxFrame" + uniqueId;

            var jvxForm = document.createElement('form');
            jvxForm.id = "jvxForm" + uniqueId;
            jvxForm.method = "post";
            jvxForm.action = "https://pxl.jivox.com/tags/re/pxrc.php?"+ gdprParams + us_privacy_string;

            var jvxFormField1 = document.createElement('input');
            jvxFormField1.name = "c" ;
            jvxFormField1.type = 'text';
            jvxFormField1.value = "1";
            jvxForm.appendChild(jvxFormField1);

            var jvxFormField4 = document.createElement('input');
            jvxFormField4.name = "px" ;
            jvxFormField4.type = 'text';
            jvxFormField4.value = pixelParams.px;
            jvxForm.appendChild(jvxFormField4);


            var jvxFormField2 = document.createElement('input');
            jvxFormField2.name = "cMultiData" ;
            jvxFormField2.type = 'text';
            jvxFormField2.value = pixelObj;
            jvxFormField2.type = 'text';
            jvxForm.appendChild(jvxFormField2);

            var jvxFormField3 = document.createElement("input");
            jvxFormField3.type = 'submit';
            jvxForm.appendChild(jvxFormField3);

            var appendNode = document.body ? document.body : document.getElementsByTagName("head")[0];
            appendNode.appendChild(jvxFrame);

            var jvxHtml = "<html><head></head><body></body></html>";
            jvxFrame.contentWindow.document.open('text/html', 'replace');
            jvxFrame.contentWindow.document.write(jvxHtml);
            jvxFrame.contentWindow.document.close();

            jvxFrame.contentWindow.document.body.appendChild(jvxForm);

            /***************************** End ***************************/
            jvxForm.submit();
        } else if (pixelParams.pxType == "2") {

            /* COM: Since iFrame form post is adding new entry to browser history, Ajax call is being used to stop it. */
            /* These changes has to be param driven and by default form post approach has to be executed. */

            /************* Ajax call *************/
            var fData = "c=1&px=" + pixelParams.px + "&cMultiData=" + pixelObj + gdprParams + us_privacy_string;
            var xmlhttp = new XMLHttpRequest();
            if ("withCredentials" in xmlhttp) {
                // for Chrome, Firefox, Opera
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status == 200 || xmlhttp.status == 304) {
                            debugLog("post successfull");
                        } else {
                            debugLog("post failed!");
                        }
                    }
                }

                xmlhttp.open("POST", "https://pxl.jivox.com/tags/re/pxrc.php", true);
                xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xmlhttp.withCredentials = true;
                xmlhttp.send(fData);
            } else {
                // for IE < 10
                var xdr = new XDomainRequest();
                xdr.onerror = function(){debugLog("IE get failed!"); };
                xdr.ontimeout = function(){debugLog("IE get failed!");};
                xdr.onload = function() {
                    debugLog("IE get successfull!");
                };

                xdr.open("GET", "https://pxl.jivox.com/tags/re/pxrc.php"+"?"+fData);
                xdr.send();
            }

            /************* End *****************/
        }
    }

    function firePartnerSyncCookiePixel(){
        for (var key in partnerSyncPixels){
            debugLog("PartnerSyncCookiePixel : "+key+" :"+ partnerSyncPixels[key]);
            var imgEl = document.createElement('img');
            var URL = partnerSyncPixels[key];
            if(URL.indexOf("?") == -1){
                URL += "?r=" + Math.random();
            }else{
                URL += "&r=" + Math.random();
            }
            imgEl.src = URL;
        }
    }

    function debugLog(val) {
        if (isDebug) {
            console.log(val);
        }
    }

    if(window.Prototype) {
      if(window.Prototype.Version && parseFloat(window.Prototype.Version) < 1.7) {
            var _json_stringify = JSON.stringify;
            JSON.stringify = function(value) {
                var _array_tojson = Array.prototype.toJSON;
                delete Array.prototype.toJSON;
                var r=_json_stringify(value);
                Array.prototype.toJSON = _array_tojson;
                return r;
            };
      }
    }
    var data = addnlPixelData();
    if (domain === 'ecom') {
        firePixel("6591cbc3bde6a0", data);
    } else {
        if (Object.prototype.toString.call(data) === '[object Array]') {
            firePixel("6591cbc3bde6a0", data);
        } else	if (Object.prototype.toString.call(data) === '[object Object]' ) {
            fireMultiPixel(data);
        }
        if(Object.prototype.toString.call(partnerSyncPixels) === '[object Object]'){
            firePartnerSyncCookiePixel();
        }
    }

})();
