// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog5")
                .setLeft("1.5238095238095237em")
                .setTop("1.5238095238095237em")
                .setWidth("77.56190476190476em")
                .setHeight("47.84761904761905em")
                .setCaption("3/1/2023 Ver 0.012 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tinyurl.com/elpad1")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#708090"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label168")
                .setLeft("12.321428571428571em")
                .setTop("0em")
                .setWidth("10.928571428571429em")
                .setHeight("1.25em")
                .setCaption("El Padrino Food Trailer ")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "http://mobile1.onlinewebshop.net/forum/viewtopic.php?id=30&t_id=58&page="
                        ],
                        "method" : "open----_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "28px",
                        "text-shadow" : "1px 1px 1px #FF0000"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label169")
                .setLeft("21.071428571428573em")
                .setTop("2.2857142857142856em")
                .setCaption("Directions from Google maps")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "https://www.google.com/maps/dir//4140+Eichman+Rd,+Poteet,+TX+78065/@29.1505773,-98.6976433,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x865c53b4c6ab256f:0x846cbee6107cc191!2m2!1d-98.627603!2d29.1505955"
                        ],
                        "method" : "open----_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "14px",
                        "font-style" : "italic"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label170")
                .setLeft("35.357142857142854em")
                .setTop("2.2857142857142856em")
                .setCaption("Payment exceped")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "https://lh3.googleusercontent.com/p/AF1QipM3T3pxvX5rFFdL5sjIiC0fzcJJCPFHbPVeQSk_=s1360-w1360-h1020"
                        ],
                        "method" : "open----_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "14px",
                        "font-style" : "italic"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label175")
                .setLeft("0.25em")
                .setTop("1.1em")
                .setWidth("10.45em")
                .setHeight("0.65em")
                .setCaption("BURGERS COMBOS ")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "20px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label176")
                .setLeft("0.38095238095238093em")
                .setTop("3.4285714285714284em")
                .setCaption("(ALL COMBOS INCLUDE FRIES & SODA)")
                .setCustomStyle({
                    "KEY" : {
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block34")
                .setLeft("0.38095238095238093em")
                .setTop("4.723809523809524em")
                .setWidth("30.93em")
                .setHeight("23.695238095238096em")
                .setCustomStyle({
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label199")
                .setLeft("0em")
                .setTop("2.5em")
                .setWidth("8.8125em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("2. PIZZA BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput130")
                .setLeft("6em")
                .setTop("9.3125em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(9.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput131")
                .setLeft("3.0625em")
                .setTop("0.5625em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(9.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label200")
                .setLeft("0em")
                .setTop("0.5625em")
                .setWidth("10.6875em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("1. MEXICAN BURGER ")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput132")
                .setLeft("3em")
                .setTop("2.5em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(10.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder",
                        "text-decoration" : "blink"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput133")
                .setLeft("11.5em")
                .setTop("12.4375em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(8.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput134")
                .setLeft("4.3125em")
                .setTop("16em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(9.5)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label201")
                .setLeft("0em")
                .setTop("5.9em")
                .setWidth("10.125em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("4. CHEESE BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput135")
                .setLeft("3.0625em")
                .setTop("4.2em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(7.75)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput136")
                .setLeft("3.0625em")
                .setTop("5.9em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(8.75)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label202")
                .setLeft("0em")
                .setTop("7.7em")
                .setWidth("13.1875em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("5. DOUBLE MEAT BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput137")
                .setLeft("6em")
                .setTop("7.6em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(9.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label203")
                .setLeft("0em")
                .setTop("4.2em")
                .setWidth("10.6875em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("3. REGULAR BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput138")
                .setLeft("6em")
                .setTop("11em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(9.5)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label204")
                .setLeft("0em")
                .setTop("9.3125em")
                .setWidth("13.875em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("6. BACON CHEESE BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label205")
                .setLeft("-0.0625em")
                .setTop("11.1875em")
                .setWidth("13.0625em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("7. CHILI CHEESE BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label206")
                .setLeft("0em")
                .setTop("12.8em")
                .setWidth("19.4375em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("8. HOT CHEETOS & CHEESE & BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label207")
                .setLeft("0em")
                .setTop("14.3125em")
                .setWidth("10.6875em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("9. HAWAIIAN BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label208")
                .setLeft("0em")
                .setTop("16em")
                .setWidth("12em")
                .setHeight("1.25em")
                .setZIndex(0)
                .setCaption("10. BBQ. CHOP BURGER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label209")
                .setLeft("0.6857142857142857em")
                .setTop("22em")
                .setWidth("20.266666666666666em")
                .setHeight("1.2190476190476192em")
                .setCaption("CHEESE .75 cents, SUBS ON FRIES 2.75")
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput142")
                .setLeft("3.0625em")
                .setTop("14.25em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(10.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image142")
                .setTips("Click to see me spin")
                .setLeft("19.733333333333334em")
                .setTop("0.6857142857142857em")
                .setWidth("8.685714285714285em")
                .setHeight("7.161904761904762em")
                .setZIndex(1003)
                .setPosition("relative")
                .setSrc("{/}img/food.clp.png")
                .onClick([
                    {
                        "desc" : "Action 2",
                        "type" : "control",
                        "target" : "xui_ui_image142",
                        "args" : [
                            "rotateAlert"
                        ],
                        "method" : "animate",
                        "event" : 1,
                        "onOK" : 1
                    },
                    {
                        "desc" : "Action 3",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Try a hamburger",
                            "Hungry ??",
                            200,
                            5000
                        ],
                        "method" : "message"
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "border-radius" : "11px 11px 11px 11px"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block40")
                .setLeft("31.61904761904762em")
                .setTop("4.723809523809524em")
                .setWidth("43.50476190476191em")
                .setHeight("11.961904761904762em")
                .setCustomStyle({
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label222")
                .setTips(" Click to view picture")
                .setLeft("0.45em")
                .setTop("0.45em")
                .setZIndex(1002)
                .setCaption("QUESADILLAS")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "https://lh3.googleusercontent.com/p/AF1QipMbwZiYb0mnmRfI56RgYjMdST20Q3dudkDusMSc=s1360-w1360-h1020"
                        ],
                        "method" : "open----_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "20px",
                        "font-weight" : "bolder",
                        "font-style" : "italic"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label223")
                .setLeft("8.6875em")
                .setTop("3.0625em")
                .setWidth("21.866666666666667em")
                .setCaption("(ORDERS COME WITH BORRACHO BEANS)")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput149")
                .setLeft("1.8125em")
                .setTop("0.5625em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(9.5)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput151")
                .setLeft("21.8125em")
                .setTop("0.5625em")
                .setWidth("12.375em")
                .setZIndex(0)
                .setLabelSize("8em")
                .setType("currency")
                .setValue(7.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label225")
                .setTips("Clivk to view picture")
                .setLeft("16.65em")
                .setTop("0.45em")
                .setZIndex(1005)
                .setCaption(" 5 MINI TACOS")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "https://lh3.googleusercontent.com/p/AF1QipOo6fr8m-IixBQ6PJk1ZlbmnY2uBWPqYp2wbreg=s1360-w1360-h1020"
                        ],
                        "method" : "open----_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "20px",
                        "font-weight" : "bolder",
                        "font-style" : "italic"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label226")
                .setLeft("20.5625em")
                .setTop("4.3125em")
                .setCaption("3. PULLED PORK")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label227")
                .setLeft("11.1875em")
                .setTop("6.1875em")
                .setCaption("2. PASTOR")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label232")
                .setLeft("10.5625em")
                .setTop("4.3125em")
                .setWidth("5.180952380952381em")
                .setHeight("1.2190476190476192em")
                .setCaption("1. ASADA")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label233")
                .setLeft("20em")
                .setTop("6.125em")
                .setWidth("10.971428571428572em")
                .setCaption("4. GRILLED CHICKEN")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image139")
                .setTips("Click to see larger")
                .setLeft("1.4476190476190476em")
                .setTop("3.7333333333333334em")
                .setWidth("8.685714285714285em")
                .setHeight("7.161904761904762em")
                .setZIndex(1003)
                .setPosition("relative")
                .setSrc("http://tiny.cc/elpad1")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "http://tiny.cc/elpad1"
                        ],
                        "method" : "open----_blank",
                        "event" : 1
                    },
                    {
                        "desc" : "Action 2",
                        "type" : "control",
                        "target" : "xui_ui_image4",
                        "args" : [
                            "zoomAlert",
                            function(){
                                u && u( "okData", arguments, l.okFlag )
                            }
                        ],
                        "method" : "animate",
                        "onOK" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "border-radius" : "11px 11px 11px 11px"
                    }
                })
            );
            
            host.xui_ui_block40.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label54")
                .setLeft("12.114285714285714em")
                .setTop("9.82857142857143em")
                .setCaption("ADD HOT CHEETOS TO ANY QUESADILLA 75 CENTS")
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block52")
                .setLeft("31.61904761904762em")
                .setTop("16.914285714285715em")
                .setWidth("43.50476190476191em")
                .setHeight("11.961904761904762em")
                .setCustomStyle({
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label297")
                .setLeft("7.95em")
                .setTop("-0.05em")
                .setCaption("SPECIALTY FRIES")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "20px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label298")
                .setLeft("9.25em")
                .setTop("1.4em")
                .setCaption("1. HOT CHEETOS & CHEESE FRIES")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px",
                        "font-weight" : "normal"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label299")
                .setLeft("9.3125em")
                .setTop("2.9em")
                .setCaption(" \t  2. BACON & CHEESE FRIES")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label300")
                .setLeft("9.3125em")
                .setTop("4.48em")
                .setCaption("3. CHILI & CHEESE FRIES")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label301")
                .setLeft("9.3125em")
                .setTop("6.23em")
                .setCaption("4. PULLPORK & CHEESE FRIES")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label302")
                .setLeft("10em")
                .setTop("7.875em")
                .setCaption("LARGE ORDER")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2174")
                .setLeft("9.9375em")
                .setTop("7.625em")
                .setWidth("12.375em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(9.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2348")
                .setLeft("18.5em")
                .setTop("0.98em")
                .setWidth("12.375em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(0)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2358")
                .setLeft("14.8em")
                .setTop("2.7em")
                .setWidth("12.375em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(0)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2359")
                .setLeft("14.8125em")
                .setTop("4.3125em")
                .setWidth("12.375em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(0)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2360")
                .setLeft("16.8125em")
                .setTop("6.11em")
                .setWidth("12.375em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(0)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image164")
                .setLeft("2.2095238095238097em")
                .setTop("2.9714285714285715em")
                .setWidth("6.247619047619048em")
                .setHeight("6.552380952380952em")
                .setSrc("{/}img/French-Fries.png")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_image164",
                        "args" : [
                            "rotateAlert"
                        ],
                        "method" : "animate",
                        "event" : 1,
                        "onOK" : 1
                    },
                    {
                        "desc" : "Action 2",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "HOT CHEETOS & CHEESE FRIES\n",
                            "Hungry Try some SPECIALTY FRIES"
                        ],
                        "method" : "message"
                    },
                    "_xui_ui_image164_onclick"
                ])
            );
            
            host.xui_ui_block52.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1054")
                .setLeft("25em")
                .setTop("0.008em")
                .setWidth("9.371428571428572em")
                .setHeight("1.2190476190476192em")
                .setCaption("Stand alone order")
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block72")
                .setLeft("31.61904761904762em")
                .setTop("29.1em")
                .setWidth("43.50476190476191em")
                .setHeight("13.104761904761904em")
                .setCustomStyle({
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label463")
                .setLeft("0.15em")
                .setTop("0em")
                .setCaption("HOTDOG COMBOS")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "20px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label464")
                .setLeft("0.22857142857142856em")
                .setTop("2.5904761904761906em")
                .setCaption("1. REGULAR HOTDOG")
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label465")
                .setLeft("0.22857142857142856em")
                .setTop("4.6em")
                .setCaption("2. BACON WRAP HOTDOG HOTDOG")
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput277")
                .setLeft("1.75em")
                .setTop("1.75em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(6.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput278")
                .setLeft("6.8125em")
                .setTop("3.6875em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(6.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label466")
                .setLeft("0.22857142857142856em")
                .setTop("6.704761904761905em")
                .setCaption("3. HOT CHEETOS & CHEESE")
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label467")
                .setLeft("0.22857142857142856em")
                .setTop("9.066666666666666em")
                .setCaption("4. CHILI & CHEESE HOTDOG")
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput279")
                .setLeft("3.6875em")
                .setTop("5.4em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(6.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput280")
                .setLeft("3.6875em")
                .setTop("7.4375em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(6.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label468")
                .setLeft("17.95em")
                .setTop("0em")
                .setCaption("HOURS NOW OPEN")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "20px",
                        "font-weight" : "bolder",
                        "text-decoration" : "underline"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label469")
                .setLeft("22.4375em")
                .setTop("1.8125em")
                .setWidth("11.0625em")
                .setCaption("THURS 6 PM TO 11PM")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label470")
                .setLeft("23.125em")
                .setTop("3.125em")
                .setCaption("FRI 7 PM TO 11PM")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label471")
                .setLeft("23.125em")
                .setTop("4.4375em")
                .setHeight("1.2190476190476192em")
                .setCaption("SAT 5 PM TO 11PM")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label472")
                .setLeft("7.542857142857143em")
                .setTop("11.352380952380953em")
                .setHeight("1.2190476190476192em")
                .setCaption("FOR PHONE IN ORDERS PLEASE CALL")
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label473")
                .setLeft("26.742857142857144em")
                .setTop("11.352380952380953em")
                .setHeight("1.2190476190476192em")
                .setCaption("(210) 315-5218")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block72.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label967")
                .setLeft("23.125em")
                .setTop("5.875em")
                .setHeight("1.2190476190476192em")
                .setCaption("SUN 5 PM TO 11PM")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block81")
                .setLeft("0.4em")
                .setTop("28.6em")
                .setWidth("31em")
                .setHeight("13.5em")
                .setCustomStyle({
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_block81.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label530")
                .setLeft("0.45em")
                .setTop("0.45em")
                .setCaption("KIDS MEAL COMBO")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "20px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block81.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label531")
                .setLeft("0.6857142857142857em")
                .setTop("2.5em")
                .setCaption("(WITH JUICE & FRIES) WITH HAMBURGER OR HOT DOG)")
            );
            
            host.xui_ui_block81.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput308")
                .setLeft("4.875em")
                .setTop("0.3125em")
                .setWidth("12.375em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(6.5)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block81.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label532")
                .setTips("Click to view picture")
                .setLeft("0.45em")
                .setTop("3.35em")
                .setZIndex(1002)
                .setCaption("HOT WINGS ONLY ")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "https://lh3.googleusercontent.com/p/AF1QipP5FmQq5fEyLUZ9KCcCspFNAeb2bjoDkb1ma5zP=s1360-w1360-h1020"
                        ],
                        "method" : "open----_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "20px",
                        "font-weight" : "bolder",
                        "font-style" : "italic"
                    }
                })
            );
            
            host.xui_ui_block81.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label533")
                .setLeft("0.6857142857142857em")
                .setTop("6.9em")
                .setCaption("ORDER OF 10 PIECES")
            );
            
            host.xui_ui_block81.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput309")
                .setLeft("4.25em")
                .setTop("4.0625em")
                .setWidth("12.876190476190477em")
                .setZIndex(0)
                .setLabelSize("8em")
                .setType("currency")
                .setValue(10.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_block81.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label534")
                .setLeft("0.45em")
                .setTop("6.35em")
                .setCaption("TORTAS ONLY W/FRIES")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#2E8B57",
                        "font-size" : "20px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_block81.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput310")
                .setLeft("7.3125em")
                .setTop("7.8125em")
                .setWidth("12.876190476190477em")
                .setLabelSize("8em")
                .setType("currency")
                .setValue(8.99)
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label_lst_updt")
                .setLeft("0em")
                .setTop("43em")
                .setWidth("9.6em")
                .setCaption("Last Update 3/4/23")
                .setFontSize("8")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#708090"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image150")
                .setTips("Click to see me spin")
                .setLeft("52.95238095238095em")
                .setTop("35.2em")
                .setWidth("4.876190476190477em")
                .setHeight("4.876190476190477em")
                .setZIndex(1003)
                .setPosition("relative")
                .setSrc("{/}img/hotdog.combo.png")
                .onClick([
                    {
                        "desc" : "Action 2",
                        "type" : "control",
                        "target" : "xui_ui_image150",
                        "args" : [
                            "rotateAlert"
                        ],
                        "method" : "animate",
                        "event" : 1,
                        "onOK" : 1
                    },
                    {
                        "desc" : "Action 3",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Try a yummy hotdog !!",
                            "Hungry ??",
                            200,
                            5000
                        ],
                        "method" : "message"
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "border-radius" : "11px 11px 11px 11px"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label153")
                .setLeft("23.4375em")
                .setTop("35.125em")
                .setWidth("14.4375em")
                .setHeight("1.3125em")
                .setCaption("Thank you for your Business")
                .onClick([
                    "_xui_ui_label153_onclick"
                ])
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#0000FF",
                        "font-size" : "16px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label480")
                .setLeft("44.642857142857146em")
                .setTop("2.357142857142857em")
                .setCaption("See more pictures")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "url",
                        "args" : [
                            "https://www.google.com/maps/uv?pb=!1s0x865c53b4c6ab256f%3A0x846cbee6107cc191!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPnSRilv1wUhXAT4BGAyQnkxL0ODRhmZouQf4bJ%3Dw434-h292-n-k-no!5sEl%20Padrino%20Food%20Trailer%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMwcXEqU5IuMeHDOG7GQ_dSAE-yF1Sekby0Er7N&hl=en&sa=X&ved=2ahUKEwjI0PK-6ML9AhV1kIkEHRyDCygQ7ZgBKAB6BAgdEAI"
                        ],
                        "method" : "open----_blank",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "14px",
                        "font-style" : "italic"
                    }
                })
            );
            
            host.xui_ui_dialog5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label540")
                .setLeft("69.71428571428571em")
                .setTop("42.819047619047616em")
                .setWidth("5.79047619047619em")
                .setCaption("Web Admin")
                .setFontSize("8")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "sjgetty@gmail.com",
                            "Hi I'm Clark",
                            200,
                            5000
                        ],
                        "method" : "message",
                        "event" : 1
                    }
                ])
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#708090"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox3")
                .setClassName("xui-css-abv")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        autoDestroy:true,
        /**
         * Fired when image is clicked
         * @method onClick [xui.UI.Image event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
        */
        _xui_ui_image164_onclick:function(profile, e, src){
            var ns = this, uictrl = profile.boxing();
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Label event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {String} src , Element.xui id or Dom Element
        */
        _xui_ui_label153_onclick:function(profile, e, src){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});