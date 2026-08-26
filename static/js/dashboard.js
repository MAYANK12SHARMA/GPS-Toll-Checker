document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MAP VARIABLES
    ====================================================== */

    let map = null;

    let marker = null;

    let currentLatitude = null;

    let currentLongitude = null;


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const mapElement =
        document.getElementById("map");

    const latitudeElement =
        document.getElementById("latitude");

    const longitudeElement =
        document.getElementById("longitude");

    const centerVehicleButton =
        document.getElementById("centerVehicle");

    const viewLocationButton =
        document.getElementById("viewLocation");

    const passwordToggle =
        document.getElementById("passwordToggle");

    const passwordInput =
        document.getElementById("password");


    /* =====================================================
       DEFAULT LOCATION
       
       Used when browser GPS is unavailable/denied.
    ====================================================== */

    const DEFAULT_LATITUDE = 27.4924;

    const DEFAULT_LONGITUDE = 77.6737;


    /* =====================================================
       UPDATE COORDINATES
    ====================================================== */

    function updateCoordinates(latitude, longitude) {

        if (latitudeElement) {

            latitudeElement.textContent =
                Number(latitude).toFixed(6);

        }


        if (longitudeElement) {

            longitudeElement.textContent =
                Number(longitude).toFixed(6);

        }

    }


    /* =====================================================
       GOLD MAP MARKER
    ====================================================== */

    function createGoldLocationIcon() {

        return L.divIcon({

            className:
                "gold-marker-wrapper",

            html:
                `
                <div class="gold-location-marker"></div>
                `,

            iconSize: [
                28,
                28
            ],

            iconAnchor: [
                14,
                14
            ],

            popupAnchor: [
                0,
                -16
            ]

        });

    }


    /* =====================================================
       INITIALIZE MAP
    ====================================================== */

    function initializeMap(
        latitude,
        longitude
    ) {

        if (!mapElement) {

            return;

        }


        /* =================================================
           UPDATE EXISTING MAP
        ================================================== */

        if (map !== null) {

            map.setView(
                [
                    latitude,
                    longitude
                ],
                14
            );


            if (marker) {

                marker.setLatLng(
                    [
                        latitude,
                        longitude
                    ]
                );

            }


            return;

        }


        /* =================================================
           CREATE MAP
        ================================================== */

        map = L.map(
            "map",
            {
                zoomControl: false,

                attributionControl: true
            }
        ).setView(
            [
                latitude,
                longitude
            ],
            14
        );


        /* =================================================
           NORMAL MAP
        ================================================== */

        const normalMap =
            L.tileLayer(
                "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                {

                    maxZoom: 19,

                    attribution:
                        "&copy; OpenStreetMap contributors"

                }
            );


        /* =================================================
           SATELLITE MAP
        ================================================== */

        const satelliteMap =
            L.tileLayer(
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                {

                    maxZoom: 19,

                    attribution:
                        "Tiles &copy; Esri"

                }
            );


        /* =================================================
           DEFAULT MAP
        ================================================== */

        normalMap.addTo(map);


        /* =================================================
           MAP LAYER CONTROL
        ================================================== */

        const baseMaps = {

            "Map":
                normalMap,

            "Satellite":
                satelliteMap

        };


        L.control.layers(
            baseMaps,
            null,
            {
                position: "topright",

                collapsed: true
            }
        ).addTo(map);


        /* =================================================
           ZOOM CONTROL
        ================================================== */

        L.control.zoom({

            position: "topright"

        }).addTo(map);


        /* =================================================
           GOLD MARKER
        ================================================== */

        marker =
            L.marker(
                [
                    latitude,
                    longitude
                ],
                {

                    icon:
                        createGoldLocationIcon()

                }
            ).addTo(map);


        /* =================================================
           MARKER POPUP
        ================================================== */

        marker.bindPopup(

            `
            <div class="location-popup">

                <strong>
                    Current Vehicle Location
                </strong>

                <br><br>

                <span>
                    Latitude:
                    ${Number(latitude).toFixed(6)}
                </span>

                <br>

                <span>
                    Longitude:
                    ${Number(longitude).toFixed(6)}
                </span>

            </div>
            `

        );


        /* =================================================
           LOCATION SEARCH
        ================================================== */

        if (
            typeof GeoSearch !== "undefined" &&
            GeoSearch.OpenStreetMapProvider
        ) {

            const provider =
                new GeoSearch.OpenStreetMapProvider();


            const searchControl =
                new GeoSearch.GeoSearchControl({

                    provider:
                        provider,

                    style:
                        "bar",

                    showMarker:
                        true,

                    retainZoomLevel:
                        false,

                    animateZoom:
                        true,

                    autoClose:
                        true,

                    searchLabel:
                        "Search location..."

                });


            map.addControl(
                searchControl
            );

        }


        /* =================================================
           FIX MAP SIZE
        ================================================== */

        setTimeout(
            function () {

                if (map) {

                    map.invalidateSize();

                }

            },
            300
        );

    }


    /* =====================================================
       GPS SUCCESS
    ====================================================== */

    function locationSuccess(position) {

        if (
            !position ||
            !position.coords
        ) {

            locationError();

            return;

        }


        currentLatitude =
            position.coords.latitude;


        currentLongitude =
            position.coords.longitude;


        updateCoordinates(
            currentLatitude,
            currentLongitude
        );


        initializeMap(
            currentLatitude,
            currentLongitude
        );

    }


    /* =====================================================
       GPS ERROR
    ====================================================== */

    function locationError(error) {

        console.warn(
            "GPS location unavailable:",
            error
        );


        currentLatitude =
            DEFAULT_LATITUDE;


        currentLongitude =
            DEFAULT_LONGITUDE;


        updateCoordinates(
            currentLatitude,
            currentLongitude
        );


        initializeMap(
            currentLatitude,
            currentLongitude
        );

    }


    /* =====================================================
       GET CURRENT LOCATION
    ====================================================== */

    function getCurrentLocation() {

        if (
            !navigator.geolocation
        ) {

            locationError({

                message:
                    "Geolocation is not supported."

            });

            return;

        }


        navigator.geolocation.getCurrentPosition(

            function (position) {

                locationSuccess(
                    position
                );

            },

            function (error) {

                locationError(
                    error
                );

            },

            {

                enableHighAccuracy:
                    true,

                timeout:
                    10000,

                maximumAge:
                    0

            }

        );

    }


    /* =====================================================
       CENTER VEHICLE
    ====================================================== */

    if (centerVehicleButton) {

        centerVehicleButton.addEventListener(
            "click",
            function () {

                if (
                    map &&
                    currentLatitude !== null &&
                    currentLongitude !== null
                ) {

                    map.setView(

                        [
                            currentLatitude,
                            currentLongitude
                        ],

                        16,

                        {
                            animate: true
                        }

                    );


                    if (marker) {

                        marker.openPopup();

                    }

                } else {

                    getCurrentLocation();

                }

            }
        );

    }


    /* =====================================================
       VIEW LOCATION
    ====================================================== */

    if (viewLocationButton) {

        viewLocationButton.addEventListener(
            "click",
            function () {

                if (
                    map &&
                    currentLatitude !== null &&
                    currentLongitude !== null
                ) {

                    map.setView(

                        [
                            currentLatitude,
                            currentLongitude
                        ],

                        16,

                        {
                            animate: true
                        }

                    );


                    if (marker) {

                        marker.openPopup();

                    }


                    mapElement.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "center"

                    });

                }

            }
        );

    }


    /* =====================================================
       PASSWORD SHOW / HIDE
    ====================================================== */

    if (
        passwordToggle &&
        passwordInput
    ) {

        passwordToggle.addEventListener(
            "click",
            function () {

                if (
                    passwordInput.type ===
                    "password"
                ) {

                    passwordInput.type =
                        "text";


                    passwordToggle.innerHTML =
                        '<i class="fa-regular fa-eye-slash"></i>';


                    passwordToggle.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    passwordInput.type =
                        "password";


                    passwordToggle.innerHTML =
                        '<i class="fa-regular fa-eye"></i>';


                    passwordToggle.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );

    }


    /* =====================================================
       WINDOW RESIZE
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (map) {

                setTimeout(
                    function () {

                        map.invalidateSize();

                    },
                    100
                );

            }

        }
    );


    /* =====================================================
       START GPS
    ====================================================== */

    if (mapElement) {

        getCurrentLocation();

    }

});