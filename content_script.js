

$( document ).on("click", "#log-work-submit", function() {
  var datetime = moment($('#log-work-date-logged-date-picker').val());

  if(moment().isBefore(datetime)) {
      $('<div class="error">Date started cannot be set in future</div>').insertAfter($('#log-work-date-logged-icon'));
      return false;
  }



  // if(confirm('Are you sure date is not in the past?')) {
  //   return true;
  // }
  // else {
  // return false;
    
  // }

});

// function getFrameName(frame) {
// 	var frames = parent.frames, 
// 	l = frames.length, 
// 	name = null;

// 	for (var x=0; x<l; x++) {
// 		if (frames[x] === frame) {
// 			name = frames[x].name;
// 		}
// 	}

// 	return name;
// }

// function getTemplateName(htmlSource) {
// 	var templateFilePatt = new RegExp("\\/[a-zA-Z_0-9\\-]+\\.(xsl|ftl)\s*");
// 	var matches = templateFilePatt.exec(document.documentElement.outerHTML);
//  	if(matches) {
//  		return matches[0];
//  	}
//  	else {
//  		return null;
//  	}
// }

// function getDomXML(htmlSource) {
//     var matches = htmlSource.match( /<rootnode[\s\S]*?<\/rootnode>/gm );   
//     if(matches) {
//         // http://stackoverflow.com/questions/8519070/stop-textarea-from-decoding-html-entities
//         matches[0] = matches[0].replace(/&/g, "&amp;")
//         //matches[0] = matches[0].replace(/</g, "&lt;")
//         return matches[0];
//     }
//     else {
//         return null;
//     }
// }

// function getModelFTL(htmlSource) {
//     var matches = htmlSource.match( /Page map data[\s\S]*/gm );   
//     if(matches) {
//         // http://stackoverflow.com/questions/8519070/stop-textarea-from-decoding-html-entities
//         matches[0] = matches[0].replace(/&/g, "&amp;")
//         //matches[0] = matches[0].replace(/</g, "&lt;")
//         return matches[0];
//     }
//     else {
//         return null;
//     }
// }

// function getJSFileNames(htmlSource) {
//     var matches = htmlSource.match( /src=".*\.js"/gm );   
//     if(matches) {
//         return matches;
//     }
//     else {
//         return null;
//     }
// }

// function getCSSFileNames(htmlSource) {
//     var matches = htmlSource.match( /href=".*\.css"/gm );   
//     if(matches) {
//         return matches;
//     }
//     else {
//         return null;
//     }
// }

// var isFrameNameEnabled = true;

// var mainContainer = $('<div id="top-banner" class="panel panel-success"><div class="panel-heading"></div><div class="panel-body"></div></div>');

// var buttonContainer = $('<div class="row"><div>');

// var closeBtn = $('<div class="col-md-1"><button type="button" class="btn btn-warning btn-sm">close</button></div>'); 
// closeBtn.click(function() {
//     detailContainer.hide();
// });
// buttonContainer.append(closeBtn);

// var detailContainer = $('<div class="row"><div>');

// var displayTextarea = $("<textarea style='overflow: scroll;margin-left:20px' cols='150' rows='30'></textarea>");

// detailContainer.append(displayTextarea).hide();

// mainContainer.append(buttonContainer).append(detailContainer);

// var titleContainer = mainContainer.find(".panel-heading");
// var contentContainer = mainContainer.find(".panel-body");

// var topBanner = mainContainer.find("#content");


// if(isFrameNameEnabled) {
// 	var htmlSource = document.documentElement.outerHTML;

// 	var frameName = getFrameName(self);
// 	// if(frameName) {
// 		titleContainer.html('frame: <b>' + getFrameName(self) + '</b>');
// 	// }

//     var templateFileName = getTemplateName(htmlSource);
//     if(templateFileName) {
// 		titleContainer.html(titleContainer.html() + '&nbsp;template:<b>' + templateFileName + '</b>');  
// 		if(templateFileName.indexOf('xsl') > -1) {
// 			var templateBtn = $('<div class="col-md-1"><button type="button" class="btn btn-primary btn-sm">DOM</button></div>'); 
// 			buttonContainer.append(templateBtn);

// 	        var domXML = getDomXML(htmlSource);


// 	        templateBtn.click(function() {
// 	            displayTextarea.val('');
// 	            if(domXML) {
// 	                displayTextarea.val(domXML);
// 	            }
// 	            detailContainer.show();
// 	        });
//         }
//         if(templateFileName.indexOf('ftl') > -1) {
// 			var ftlBtn = $('<div class="col-md-1"><button type="button" class="btn btn-primary btn-sm">MODEL</button></div>'); 
// 			buttonContainer.append(ftlBtn);

// 	        var modelFTL = getModelFTL(htmlSource);


// 	        ftlBtn.click(function() {
// 	            displayTextarea.val('');
// 	            if(modelFTL) {
// 	                displayTextarea.val(modelFTL);
// 	            }
// 	            detailContainer.show();
// 	        });
//         }
//     }

//     var jsFileNames = getJSFileNames(htmlSource);
//     if(jsFileNames) {
//         var jsBtn = $('<div class="col-md-1"><button type="button" class="btn btn-primary btn-sm">JS</button></div>'); 
//         buttonContainer.append(jsBtn);

//         jsBtn.click(function() {
//             displayTextarea.val('');
//             $.each(jsFileNames, function(i, value) {
//                 displayTextarea.val(displayTextarea.val() + '\n' + value);
//             });
//             detailContainer.show();
//         });
//     }

//     var cssFileNames = getCSSFileNames(htmlSource);
//     if(cssFileNames) {
//         var cssBtn = $('<div class="col-md-1"><button type="button" class="btn btn-primary btn-sm">CSS</button></div>'); 
//         buttonContainer.append(cssBtn);

//         cssBtn.click(function() {
//             displayTextarea.val('');
//             $.each(cssFileNames, function(i, value) {
//                 displayTextarea.val(displayTextarea.val() + '\n' + value);
//             });
//             detailContainer.show();
//         });
//     }

// 	$('body').before(mainContainer);
// }

// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		$('input[name="j_username"]').val();
//         $('input[name="j_password"]').val();
// 		if(request.frameName === 'disable') {
// 			isFrameNameEnabled = true;
// 			var frames = parent.frames, 
// 			l = frames.length, 
// 			name = null;

// 			for (var x=0; x<l; x++) {
// 				$('#top-banner', frames[x].document).show();
// 			}

//             $('#top-banner').hide();			
// 		}
// 		else {
// 			isFrameNameEnabled = false;
// 			var frames = parent.frames, 
// 			l = frames.length, 
// 			name = null;

// 			for (var x=0; x<l; x++) {
// 				$('#top-banner', frames[x].document).hide();
// 			}	

//             $('#top-banner').hide();
// 		}
// 	}
// );

// $('input[name="j_username"]').val('system');
// $('input[name="j_password"]').val('M00nb0y');

