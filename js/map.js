// When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', initMap);
            
    var overlay;
    DVOverlay.prototype = new google.maps.OverlayView();


    function initMap() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
            zoom: 16,

                    // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(48.623641, 22.298892), // Uzhorod

            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL,
                position: google.maps.ControlPosition.BOTTOM_LEFT
            },

            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },

            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType":"administrative",
                    "elementType":"labels.text.fill",
                    "stylers":[
                        {"color":"#444444"}
                    ]
                },
                {
                    "featureType":"administrative.country",
                    "elementType":"geometry",
                    "stylers":[
                        {"visibility":"off"},
                                {"hue":"#ff0000"},
                                {"saturation":"94"},
                                {"lightness":"88"},
                                {"weight":"3.01"},
                                {"invert_lightness":true}
                    ]
                },
                {
                    "featureType": "landscape",
                    "stylers": [
                        {"saturation": -100},
                        {"lightness": 65},
                        {"visibility": "on"}
                    ]
                },
                {
                    "featureType":"poi",
                    "elementType":"all",
                    "stylers":[
                        {"visibility":"off"}
                    ]
                },
                {
                    "featureType":"road",
                    "elementType":"all",
                    "stylers":[
                        {"saturation":-100},
                        {"lightness":45}
                    ]
                },
                {   "featureType":"road.highway",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "visibility":"simplified"
                                }
                            ]
                        },
                        {
                            "featureType":"road.arterial",
                            "elementType":"labels.icon",
                            "stylers":[
                                {
                                    "visibility":"off"
                                }
                            ]
                        },
                        {
                            "featureType":"transit",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "visibility":"off"
                                }
                            ]
                        },
                        {
                            "featureType":"water",
                            "elementType":"all",
                            "stylers":[
                                {
                                    "color":"#ffffff"
                                },
                                {
                                    "visibility":"on"
                                }
                            ]
                        }
                    ]
                }; //MAP OPTIONS ENDS

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);






















                var image = 'images/marker1.png';
                var image1 = 'images/marker6.png';



                /* POINTS */
                /* 4 shkola */
                var point1 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.626089, 22.296585),
                    map: map, icon:image1,
                    title: 'Point1'
                });

                //click on marker
                point1.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x1.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

/* Oblasna likarnja */
                var point2 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.618795, 22.290741),
                    map: map, icon:image1,

                    title: 'Point2'
                });

                //click on marker
                point2.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x2.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Hotel Bercheni */
                var point3 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624157, 22.297722),
                    map: map, icon:image1,
                    title: 'Point3'
                });

                //click on marker
                point3.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x3.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Monastyr st. Basil */
                var point4 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.620650, 22.303378),
                    map: map, icon:image1,
                    title: 'Point4'
                });

                //click on marker
                point4.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x4.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Voloshyna 1 */
                var point5 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624030, 22.298360),
                    map: map, icon:image1,
                    title: 'Point5'
                });

                //click on marker
                point5.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x5.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Radvanka */
                var point6 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.613460, 22.312290),
                    map: map, icon:image1,
                    title: 'Point6'
                });

                //click on marker
                point6.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x6.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Michael1 */
                var point7 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624522, 22.297038),
                    map: map, icon:image1,
                    title: 'Point7'
                });

                //click on marker
                point7.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x7.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });


                /* Voloshyna-Passash */
                var point8 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623294, 22.299529),
                    map: map, icon:image1,
                    title: 'Point8'
                });

                //click on marker
                point8.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x8.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kapitulna-Zamkova corner */
                var point9 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.621419, 22.304667),
                    map: map, icon:image1,
                    title: 'Point9'
                });

                //click on marker
                point9.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x9.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Katedrala */
                var point10 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.622860, 22.302290),
                    map: map, icon:image1,
                    title: 'Point10'
                });

                //click on marker
                point10.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x10.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Duchnovicha */
                var point11 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623439, 22.301081),
                    map: map, icon:image1,
                    title: 'Point11'
                });

                //click on marker
                point11.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x11.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Budynky pered katedraloju 
                var point12 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.621835, 22.300633),
                    map: map, icon:image1,
                    title: 'Point12'
                });

                //click on marker
                point12.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x12.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });
                */
                /* Zamok - brama */
                var point13 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.621266, 22.306013),
                    map: map, icon:image1,
                    title: 'Point13'
                });

                //click on marker
                point13.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x13.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* SW part of the Castle */
                var point14 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.621590, 22.305470),
                    map: map, icon:image1,
                    title: 'Point14'
                });

                //click on marker
                point14.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x14.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Look on the Castle from North */
                var point15 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.621849, 22.308752),
                    map: map, icon:image1,
                    title: 'Point15'
                });

                //click on marker
                point15.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x15.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* First school */
                var point16 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.622740, 22.296737),
                    map: map, icon:image1,
                    title: 'Point16'
                });

                //click on marker
                point16.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x16.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* St. George church */
                var point17 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623521, 22.299385),
                    map: map, icon:image1,
                    title: 'Point17'
                });

                //click on marker
                point17.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x17.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Old bridge */
                var point18 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.621573, 22.298021),
                    map: map, icon:image1,
                    title: 'Point18'
                });

                //click on marker
                point18.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("poppages/dialog2.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* SBU */
                var point19 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624278, 22.293100),
                    map: map, icon:image1,
                    title: 'Point19'
                });

                //click on marker
                point19.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x19.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Narodna plosha */
                var point20 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.625881, 22.288721),
                    map: map, icon:image1,
                    title: 'Point20'
                });

                //click on marker
                point20.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x20.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* 3 school */
                var point21 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624482, 22.289910),
                    map: map, icon:image1,
                    title: 'Point21'
                });

                //click on marker
                point21.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x21.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* look on Lomonosov street */
                var point22 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.626958, 22.290269),
                    map: map, icon:image1,
                    title: 'Point22'
                });

                //click on marker
                point22.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x22.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Dovzhenko-Majakovski corner */
                var point23 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624786, 22.290680),
                    map: map, icon:image1,
                    title: 'Point23'
                });

                //click on marker
                point23.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x23.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Dovzhenko-Brashajko corner */
                var point24 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624846, 22.292106),
                    map: map, icon:image1,
                    title: 'Point24'
                });

                //click on marker
                point24.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x24.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Orthodox church */
                var point25 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.617507, 22.304359),
                    map: map, icon:image1,
                    title: 'Point25'
                });

                //click on marker
                point25.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x25.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Embankment-Pushkin */
                var point26 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623985, 22.292331),
                    map: map, icon:image1,
                    title: 'Point26'
                });

                //click on marker
                point26.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x26.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Embankment-Pushkin */
                var point26 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623985, 22.292331),
                    map: map, icon:image1,
                    title: 'Point26'
                });

                //click on marker
                point26.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x26.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Petofi */
                var point27 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.619716, 22.296391),
                    map: map, icon:image1,
                    title: 'Point27'
                });

                //click on marker
                point27.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x27.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Zhupanat */
                var point28 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624992, 22.296384),
                    map: map, icon:image1,
                    title: 'Point28'
                });

                //click on marker
                point28.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x28.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pljazh */
                var point29 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.620203, 22.301757),
                    map: map, icon:image1,
                    title: 'Point29'
                });

                //click on marker
                point29.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x29.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Korzo 
                var point30 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.622903, 22.297792),
                    map: map, icon:image1,
                    title: 'Point30'
                });

                //click on marker
                point30.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x30.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                */

                /* Korzo-Duchnovycha corner */
                var point31 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624315, 22.299909),
                    map: map, icon:image1,
                    title: 'Point31'
                });

                //click on marker
                point31.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x31.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Orhtodox synagogue */
                var point32 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.621646, 22.300061),
                    map: map, icon:image1,
                    title: 'Point32'
                });

                //click on marker
                point32.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x32.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Post */
                var point33 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623745, 22.295312),
                    map: map, icon:image1,
                    title: 'Point33'
                });

                //click on marker
                point33.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x33.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Naberezhna 17 */
                var point34 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624144, 22.291009),
                    map: map, icon:image1,
                    title: 'Point34'
                });

                //click on marker
                point34.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x34.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Naberezhna 20 */
                var point35 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623917, 22.287703),
                    map: map, icon:image1,
                    title: 'Point35'
                });

                //click on marker
                point35.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x35.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Stomatology */
                var point36 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623291, 22.295069),
                    map: map, icon:image1,
                    title: 'Point36'
                });

                //click on marker
                point36.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x36.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Medfak */
                var point37 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624254, 22.288370),
                    map: map, icon:image1,
                    title: 'Point37'
                });

                //click on marker
                point37.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x37.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Masaryk bridge */
                var point38 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.622860, 22.286359),
                    map: map, icon:image1,
                    title: 'Point38'
                });

                //click on marker
                point38.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x38.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Luther church */
                var point39 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.625332, 22.296189),
                    map: map, icon:image1,
                    title: 'Point39'
                });

                //click on marker
                point39.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x39.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Airport */
                var point40 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.637687, 22.272474),
                    map: map, icon:image1,
                    title: 'Point40'
                });

                //click on marker
                point40.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x40.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kalvin church */
                var point41 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.625883, 22.304233),
                    map: map, icon:image1,
                    title: 'Point41'
                });

                //click on marker
                point41.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x41.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kyselka */
                var point42 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.624441, 22.303208),
                    map: map, icon:image1,
                    title: 'Point42'
                });

                //click on marker
                point42.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x42.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Gymnasium */
                var point43 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.625293, 22.303003),
                    map: map, icon:image1,
                    title: 'Point43'
                });

                //click on marker
                point43.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x43.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pidhradska 58 */
                var point44 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623131, 22.305231),
                    map: map, icon:image1,
                    title: 'Point44'
                });

                //click on marker
                point44.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x44.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Lisopylka */
                var point45 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.622920, 22.310282),
                    map: map, icon:image1,
                    title: 'Point45'
                });

                //click on marker
                point45.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x45.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kalvaria 
                var point46 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.628889, 22.296378),
                    map: map, icon:image1,
                    title: 'Point46'
                });

                //click on marker
                point46.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x46.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                */

                /* Teatralka 
                var point47 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.622252, 22.298250),
                    map: map, icon:image1,
                    title: 'Point47'
                });

                //click on marker
                point47.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x47.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                */

                /* Avangard */
                var point48 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.623453, 22.276585),
                    map: map, icon:image1,
                    title: 'Point48'
                });

                //click on marker
                point48.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x48.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Svitanok */
                var point49 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.632636, 22.294219),
                    map: map, icon:image1,
                    title: 'Point49'
                });

                //click on marker
                point49.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x49.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Friendship */
                var point50 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.630594, 22.300790),
                    map: map, icon:image1,
                    title: 'Point50'
                });

                //click on marker
                point50.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x50.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Glory Hill */
                var point51 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.629664, 22.294378),
                    map: map, icon:image1,
                    title: 'Point51'
                });

                //click on marker
                point51.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x51.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pool */
                var point52 = new google.maps.Marker({
                    position: new google.maps.LatLng(48.618842, 22.309107),
                    map: map, icon:image1,
                    title: 'Point52'
                });

                //click on marker
                point52.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x52.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Cyril and Methody */
                var point53= new google.maps.Marker({
                    position: new google.maps.LatLng(48.613457, 22.292404),
                    map: map, icon:image1,
                    title: 'Point53'
                });

                //click on marker
                point53.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x53.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Zankovecka street */
                var point54= new google.maps.Marker({
                    position: new google.maps.LatLng(48.612106, 22.282451),
                    map: map, icon:image1,
                    title: 'Point54'
                });

                //click on marker
                point54.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x54.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* 5 school */
                var point55= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621924, 22.292759),
                    map: map, icon:image1,
                    title: 'Point55'
                });

                //click on marker
                point55.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x55.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Nevycke */
                var point56= new google.maps.Marker({
                    position: new google.maps.LatLng(48.680735, 22.409719),
                    map: map, icon:image1,
                    title: 'Point56'
                });

                //click on marker
                point56.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x56.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Vyzvolytel */
                var point57= new google.maps.Marker({
                    position: new google.maps.LatLng(48.650555, 22.265316),
                    map: map, icon:image1,
                    title: 'Point57'
                });

                //click on marker
                point57.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x57.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Hotel Uzhorod */
                var point58= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621145, 22.286536),
                    map: map, icon:image1,
                    title: 'Point58'
                });

                //click on marker
                point58.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x58.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Moscow Embankment */
                var point59= new google.maps.Marker({
                    position: new google.maps.LatLng(48.619216, 22.300238),
                    map: map, icon:image1,
                    title: 'Point59'
                });

                //click on marker
                point59.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x59.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Child Policlinics */
                var point60= new google.maps.Marker({
                    position: new google.maps.LatLng(48.625200, 22.287129),
                    map: map, icon:image1,
                    title: 'Point60'
                });

                //click on marker
                point60.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x60.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Child Hospital */
                var point61= new google.maps.Marker({
                    position: new google.maps.LatLng(48.625632, 22.292130),
                    map: map, icon:image1,
                    title: 'Point61'
                });

                //click on marker
                point61.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x61.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Turist */
                var point62= new google.maps.Marker({
                    position: new google.maps.LatLng(48.626687, 22.294035),
                    map: map, icon:image1,
                    title: 'Point62'
                });

                //click on marker
                point62.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x62.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Gorky park */
                var point63= new google.maps.Marker({
                    position: new google.maps.LatLng(48.618739, 22.308273),
                    map: map, icon:image1,
                    title: 'Point63'
                });

                //click on marker
                point63.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x63.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Child railway */
                var point64= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621154, 22.300629),
                    map: map, icon:image1,
                    title: 'Point64'
                });

                //click on marker
                point64.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x64.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Rafanda */
                var point65= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623778, 22.285855),
                    map: map, icon:image1,
                    title: 'Point65'
                });

                //click on marker
                point65.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x65.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Naberezhna 13 */
                var point66= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623719, 22.293320),
                    map: map, icon:image1,
                    title: 'Point66'
                });

                //click on marker
                point66.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x66.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Prospekt */
                var point67= new google.maps.Marker({
                    position: new google.maps.LatLng(48.619295, 22.288863),
                    map: map, icon:image1,
                    title: 'Point67'
                });

                //click on marker
                point67.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x67.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Hotel Zakarpattya */
                var point68= new google.maps.Marker({
                    position: new google.maps.LatLng(48.611766, 22.292939),
                    map: map, icon:image1,
                    title: 'Point68'
                });

                //click on marker
                point68.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x68.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Ekonomichnyj fak */
                var point69= new google.maps.Marker({
                    position: new google.maps.LatLng(48.625731, 22.287064),
                    map: map, icon:image1,
                    title: 'Point69'
                });

                //click on marker
                point69.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x69.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Dom byta */
                var point70= new google.maps.Marker({
                    position: new google.maps.LatLng(48.618336, 22.298943),
                    map: map, icon:image1,
                    title: 'Point70'
                });

                //click on marker
                point70.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x70.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* BAM */
                var point71= new google.maps.Marker({
                    position: new google.maps.LatLng(48.635637, 22.290620),
                    map: map, icon:image1,
                    title: 'Point71'
                });

                //click on marker
                point71.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x71.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Jurfak */
                var point72= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621105, 22.305103),
                    map: map, icon:image1,
                    title: 'Point72'
                });

                //click on marker
                point72.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x72.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Fencyk */
                var point73= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622640, 22.298111),
                    map: map, icon:image1,
                    title: 'Point73'
                });

                //click on marker
                point73.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x73.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kosmos */
                var point74= new google.maps.Marker({
                    position: new google.maps.LatLng(48.628313, 22.292079),
                    map: map, icon:image1,
                    title: 'Point74'
                });

                //click on marker
                point74.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x74.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Muzeum */
                var point75= new google.maps.Marker({
                    position: new google.maps.LatLng(48.620770, 22.305890),
                    map: map, icon:image1,
                    title: 'Point75'
                });

                //click on marker
                point75.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x75.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Rakoci Karpatart*/
                var point76= new google.maps.Marker({
                    position: new google.maps.LatLng(48.626044, 22.292340),
                    map: map, icon:image1,
                    title: 'Point76'
                });

                //click on marker
                point76.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x76.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Skala*/
                var point77= new google.maps.Marker({
                    position: new google.maps.LatLng(48.628078, 22.289727),
                    map: map, icon:image1,
                    title: 'Point77'
                });

                //click on marker
                point77.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x77.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });


                /* Michael 2*/
                var point78= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624900, 22.297539),
                    map: map, icon:image1,
                    title: 'Point78'
                });

                //click on marker
                point78.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x78.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kazarmy domanynci*/
                var point79= new google.maps.Marker({
                    position: new google.maps.LatLng(48.630192, 22.312545),
                    map: map, icon:image1,
                    title: 'Point79'
                });

                //click on marker
                point79.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x79.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Hudozhka */
                var point80= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621498, 22.301988),
                    map: map, icon:image1,
                    title: 'Point80'
                });

                //click on marker
                point80.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x80.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kozheluzhska bilja mostu */
                var point82= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621505, 22.296902),
                    map: map, icon:image1,
                    title: 'Point82'
                });

                //click on marker
                point82.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x82.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Korjatovycha Kobzar */
                var point83= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624253, 22.298635),
                    map: map, icon:image1,
                    title: 'Point83'
                });

                //click on marker
                point83.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x83.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Divochyj monastyr */
                var point84= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621892, 22.301475),
                    map: map, icon:image1,
                    title: 'Point84'
                });

                //click on marker
                point84.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x84.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kut Korzo - Voloshyna */
                var point85= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623638, 22.298951),
                    map: map, icon:image1,
                    title: 'Point85'
                });

                //click on marker
                point85.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x85.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Malomostecka vid Korjatovycha do Korzo */
                var point86= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623820, 22.298534),
                    map: map, icon:image1,
                    title: 'Point86'
                });

                //click on marker
                point86.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x86.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Zamok-Palac */
                var point87= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621671, 22.306816),
                    map: map, icon:image1,
                    title: 'Point87'
                });

                //click on marker
                point87.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x87.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Castle from N (Pidhr 30) */
                var point88= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621831, 22.308448),
                    map: map, icon:image1,
                    title: 'Point88'
                });

                //click on marker
                point88.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x88.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Castle from N (Pidhr 6) */
                var point89= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622699, 22.306817),
                    map: map, icon:image1,
                    title: 'Point89'
                });

                //click on marker
                point89.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x89.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Castle from Ostrivna */
                var point90= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623568, 22.306290),
                    map: map, icon:image1,
                    title: 'Point90'
                });

                //click on marker
                point90.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x90.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Castle from Ostrivna */
                var point90= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623568, 22.306290),
                    map: map, icon:image1,
                    title: 'Point90'
                });

                //click on marker
                point90.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x90.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pishohidnyj mist SE */
                var point91= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621179, 22.297853),
                    map: map, icon:image1,
                    title: 'Point91'
                });

                //click on marker
                point91.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("poppages/dialog3.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kut Voloshyna - Kapitulna */
                var point92= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622491, 22.300688),
                    map: map, icon:image1,
                    title: 'Point92'
                });

                //click on marker
                point92.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("poppages/dialog3.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Mikve */
                var point93= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623261, 22.296021),
                    map: map, icon:image1,
                    title: 'Point93'
                });

                //click on marker
                point93.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x93.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Provulok Pidhirnyj 12 */
                var point94= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624058, 22.302694),
                    map: map, icon:image1,
                    title: 'Point94'
                });

                //click on marker
                point94.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x94.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Elektrarna */
                var point95= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623126, 22.310517),
                    map: map, icon:image1,
                    title: 'Point95'
                });

                //click on marker
                point95.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x95.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Oblrada only */
                var point96= new google.maps.Marker({
                    position: new google.maps.LatLng(48.626456, 22.288682),
                    map: map, icon:image1,
                    title: 'Point96'
                });

                //click on marker
                point96.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x96.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Sud only */
                var point97= new google.maps.Marker({
                    position: new google.maps.LatLng(48.625417, 22.289294),
                    map: map, icon:image1,
                    title: 'Point97'
                });

                //click on marker
                point97.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x97.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Obshaga only */
                var point98= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624208, 22.292375),
                    map: map, icon:image1,
                    title: 'Point98'
                });

                //click on marker
                point98.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x98.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Financhak only */
                var point99= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624158, 22.291849),
                    map: map, icon:image1,
                    title: 'Point99'
                });

                //click on marker
                point99.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x99.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Dom Slona only */
                var point100= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623896, 22.292956),
                    map: map, icon:image1,
                    title: 'Point100'
                });

                //click on marker
                point100.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x100.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Korona only */
                var point101= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622569, 22.298561),
                    map: map, icon:image1,
                    title: 'Point101'
                });

                //click on marker
                point101.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x101.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Teatr only */
                var point102= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622053, 22.298607),
                    map: map, icon:image1,
                    title: 'Point102'
                });

                //click on marker
                point102.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x102.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kut Korzo-Fencyk */
                var point103= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622895, 22.297770),
                    map: map, icon:image1,
                    title: 'Point103'
                });

                //click on marker
                point103.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x103.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* 9 school only */
                var point104= new google.maps.Marker({
                    position: new google.maps.LatLng(48.619793, 22.297311),
                    map: map, icon:image1,
                    title: 'Point104'
                });

                //click on marker
                point104.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x104.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kut Nabka - Korzo */
                var point105= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622521, 22.297035),
                    map: map, icon:image1,
                    title: 'Point105'
                });

                //click on marker
                point105.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x105.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Ravinat */
                var point106= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622065, 22.299851),
                    map: map, icon:image1,
                    title: 'Point106'
                });

                //click on marker
                point106.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x106.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Bilja Busol Vojazh (Vysoka 6) */
                var point107= new google.maps.Marker({
                    position: new google.maps.LatLng(48.628831, 22.299801),
                    map: map, icon:image1,
                    title: 'Point107'
                });

                //click on marker
                point107.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x107.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Sobranecka 45 */
                var point108= new google.maps.Marker({
                    position: new google.maps.LatLng(48.628325, 22.288492),
                    map: map, icon:image1,
                    title: 'Point108'
                });

                //click on marker
                point108.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x108.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Ceholnanska church */
                var point109= new google.maps.Marker({
                    position: new google.maps.LatLng(48.626741, 22.299362),
                    map: map, icon:image1,
                    title: 'Point109'
                });

                //click on marker
                point109.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x109.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pravosl nabka */
                var point110= new google.maps.Marker({
                    position: new google.maps.LatLng(48.619137, 22.301787),
                    map: map, icon:image1,
                    title: 'Point110'
                });

                //click on marker
                point110.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x110.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Korjatovycha seredyna */
                var point111= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624613, 22.299745),
                    map: map, icon:image1,
                    title: 'Point111'
                });

                //click on marker
                point111.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x111.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Vychid z Luchkaja */
                var point112= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624653, 22.300675),
                    map: map, icon:image1,
                    title: 'Point112'
                });

                //click on marker
                point112.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x112.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Korjatovycha - Fedyncja kut */
                var point113= new google.maps.Marker({
                    position: new google.maps.LatLng(48.625096, 22.301848),
                    map: map, icon:image1,
                    title: 'Point113'
                });

                //click on marker
                point113.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x113.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Zaliznychnyj mist */
                var point114= new google.maps.Marker({
                    position: new google.maps.LatLng(48.617597, 22.307899),
                    map: map, icon:image1,
                    title: 'Point114'
                });

                //click on marker
                point114.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x114.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kut Narodna-Dovzhenka */
                var point115= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624919, 22.289359),
                    map: map, icon:image1,
                    title: 'Point115'
                });

                //click on marker
                point115.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x115.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Bata */
                var point116= new google.maps.Marker({
                    position: new google.maps.LatLng(48.622338, 22.298895),
                    map: map, icon:image1,
                    title: 'Point116'
                });

                //click on marker
                point116.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x116.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Speck */
                var point117= new google.maps.Marker({
                    position: new google.maps.LatLng(48.627964, 22.291690),
                    map: map, icon:image1,
                    title: 'Point117'
                });

                //click on marker
                point117.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x117.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Vokzal */
                var point118= new google.maps.Marker({
                    position: new google.maps.LatLng(48.608790, 22.300473),
                    map: map, icon:image1,
                    title: 'Point118'
                });

                //click on marker
                point118.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x118.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Castle from Shumna */
                var point119= new google.maps.Marker({
                    position: new google.maps.LatLng(48.621681, 22.309031),
                    map: map, icon:image1,
                    title: 'Point119'
                });

                //click on marker
                point119.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x119.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Mlyn */
                var point120= new google.maps.Marker({
                    position: new google.maps.LatLng(48.623954, 22.297198),
                    map: map, icon:image1,
                    title: 'Point120'
                });

                //click on marker
                point120.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x120.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Storozhnycja */
                var point121= new google.maps.Marker({
                    position: new google.maps.LatLng(48.604118, 22.231733),
                    map: map, icon:image1,
                    title: 'Point121'
                });

                //click on marker
                point121.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x121.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Kamjanycja */
                var point122= new google.maps.Marker({
                    position: new google.maps.LatLng(48.689055, 22.402288),
                    map: map, icon:image1,
                    title: 'Point122'
                });

                //click on marker
                point122.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x122.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Onokivci */
                var point123= new google.maps.Marker({
                    position: new google.maps.LatLng(48.651369, 22.342313),
                    map: map, icon:image1,
                    title: 'Point123'
                });

                //click on marker
                point123.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x123.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Synagoga Neofitiv */
                var point124= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624702, 22.297006),
                    map: map, icon:image1,
                    title: 'Point124'
                });

                //click on marker
                point124.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x124.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Northwest part castle */
                var point125= new google.maps.Marker({
                    position: new google.maps.LatLng(48.624702, 22.297006),
                    map: map, icon:image1,
                    title: 'Point125'
                });

                //click on marker
                point125.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x125.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Vjizd na mist zi storony Petefi */
                var point126= new google.maps.Marker({
                    position: new google.maps.LatLng(48.620818, 22.297381),
                    map: map, icon:image1,
                    title: 'Point126'
                });

                //click on marker
                point126.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x126.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Jail */
                var point127= new google.maps.Marker({
                    position: new google.maps.LatLng(48.625427, 22.290382),
                    map: map, icon:image1,
                    title: 'Point127'
                });

                //click on marker
                point127.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x127.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Petefi Look on the West */
                var point128= new google.maps.Marker({
                    position: new google.maps.LatLng(48.619233, 22.297359),
                    map: map, icon:image1,
                    title: 'Point128'
                });

                //click on marker
                point128.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x128.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Petefi za Masarykom */
                var point129= new google.maps.Marker({
                    position: new google.maps.LatLng(48.619469, 22.296007),
                    map: map, icon:image1,
                    title: 'Point129'
                });

                //click on marker
                point129.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x129.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Black Eagle */
                var point130= new google.maps.Marker({
                    position: new google.maps.LatLng(48.620380, 22.296658),
                    map: map, icon:image1,
                    title: 'Point130'
                });

                //click on marker
                point130.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x130.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Opposite to Black Eagle */
                var point131= new google.maps.Marker({
                    position: new google.maps.LatLng(48.620181, 22.297211),
                    map: map, icon:image1,
                    title: 'Point131'
                });

                //click on marker
                point131.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x131.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pohled z kopcu 1 */
                var point132= new google.maps.Marker({
                    position: new google.maps.LatLng(48.628804, 22.296731),
                    map: map, icon:image1,
                    title: 'Point132'
                });

                //click on marker
                point132.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x132.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pohled z kopcu 2 */
                var point133= new google.maps.Marker({
                    position: new google.maps.LatLng(48.629533, 22.300841),
                    map: map, icon:image1,
                    title: 'Point133'
                });

                //click on marker
                point133.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x133.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pohled z kopcu 3 */
                var point134= new google.maps.Marker({
                    position: new google.maps.LatLng(48.627447, 22.300809),
                    map: map, icon:image1,
                    title: 'Point134'
                });

                //click on marker
                point134.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x134.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });

                /* Pohled z kopcu 4 */
                var point135= new google.maps.Marker({
                    position: new google.maps.LatLng(48.630556, 22.296509),
                    map: map, icon:image1,
                    title: 'Point135'
                });

                //click on marker
                point135.addListener('click', function() {
                    //console.log("here");
                    //show popup
                    $("#popup").addClass('show');
                    //close popup
                    $('#popup').on('click','#close_popup', function(e) {
                        $("#popup").removeClass('show');
                    });
                    //load content in popup
                    $('#popup_content').load("points/x135.html", {limit: 25}, 
                        function (responseText, textStatus, XMLHttpRequest) {
                            console.log(XMLHttpRequest)
                        }
                    );
                });




















                

            };

            



