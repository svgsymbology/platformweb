function getStyle(index, className) {
    var cssText = "";
    var classes = document.styleSheets[index].rules || document.styleSheets[index].cssRules;
    for (var x = 0; x < classes.length; x++) {
        if (classes[x].selectorText == className) {
            cssText += classes[x].cssText || classes[x].style.cssText;
        }
    }
    return cssText;
}

$(document).ready(function () {
    if (window.matchMedia("(pointer: coarse)").matches) {
//                   console.log('MOBILE');
        var title = $("#page-title");
        if (title != null) {
            console.log(title);
            if (title.hasClass("blue")) {
                title.removeClass("blue");
                title.addClass("blueMobile");
            }
        }
        var detail = $("#page-detail");
        if (detail != null) {
//                        console.log(detail);
            detail.removeClass("blue");
            detail.addClass("blueMobile");
        }
        $(".blue").each(function () {
            if ("TD" == jQuery(this).prop("tagName") || "SPAN" == jQuery(this).prop("tagName") || "LABEL" == jQuery(this).prop("tagName")) {
//                            console.log(jQuery(this).prop("tagName") + " -b- " + jQuery(this).attr("id"));
                jQuery(this).removeClass("blue");
                jQuery(this).addClass("blueMobile");
            }
        });
        $(".boldblue").each(function () {
            if ("TD" == jQuery(this).prop("tagName") || "SPAN" == jQuery(this).prop("tagName") || "LABEL" == jQuery(this).prop("tagName")) {
//                            console.log(jQuery(this).prop("tagName") + " -b- " + jQuery(this).attr("id"));
                jQuery(this).removeClass("boldblue");
                jQuery(this).addClass("boldblueMobile");
            }
        });
        $(".boldSmallBlue").each(function () {
//                        console.log(jQuery(this).prop("tagName") + " -b- " + jQuery(this).attr("id"));
            if ("TD" == jQuery(this).prop("tagName") || "SPAN" == jQuery(this).prop("tagName") || "LABEL" == jQuery(this).prop("tagName")) {
                jQuery(this).removeClass("boldSmallBlue");
                jQuery(this).addClass("boldSmallBlueMobile");
            }
        });
    } else {
        var detail = $("#page-detail");
        if (detail != null) {
//                        console.log(detail);
            detail.removeClass("blue");
            detail.addClass("blueMobile");
        }
        $(".blue").each(function () {
//                            console.log(jQuery(this).prop("tagName") + " -b- " + jQuery(this).attr("id"));                        
            if ("TD" == jQuery(this).prop("tagName") || "SPAN" == jQuery(this).prop("tagName") || "LABEL" == jQuery(this).prop("tagName")) {
                jQuery(this).removeClass("blue");
                jQuery(this).addClass("blueMobile");
            }
        });
        $(".boldblue").each(function () {
//                            console.log(jQuery(this).prop("tagName") + " -b- " + jQuery(this).attr("id"));                        
            if ("TD" == jQuery(this).prop("tagName") || "SPAN" == jQuery(this).prop("tagName") || "LABEL" == jQuery(this).prop("tagName")) {
                jQuery(this).removeClass("boldblue");
                jQuery(this).addClass("boldblueMobile");
            }
        });
        $(".boldSmallBlue").each(function () {
//                            console.log(jQuery(this).prop("tagName") + " -b- " + jQuery(this).attr("id"));                        
            if ("TD" == jQuery(this).prop("tagName") || "SPAN" == jQuery(this).prop("tagName") || "LABEL" == jQuery(this).prop("tagName")) {
                jQuery(this).removeClass("boldSmallBlue");
                jQuery(this).addClass("boldSmallBlueMobile");
            }
        });
    }
});

function toggleMainHeader() {
    PF('generalLayout').toggle('north');
}

function toggleMainNavigator() {
    PF('generalLayout').toggle('west');
}

function toggleMain() {
    PF('generalLayout').toggle('north');
    PF('generalLayout').toggle('west');
}