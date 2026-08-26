document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menuToggle");
    const sidebarClose = document.getElementById("sidebarClose");
    const sidebarOverlay = document.getElementById("sidebarOverlay");


    /* =====================================================
       OPEN SIDEBAR
    ====================================================== */

    function openSidebar() {

        if (!sidebar) {
            return;
        }

        sidebar.classList.add("open");

        if (sidebarOverlay) {
            sidebarOverlay.classList.add("active");
        }

        document.body.classList.add("sidebar-open");

    }


    /* =====================================================
       CLOSE SIDEBAR
    ====================================================== */

    function closeSidebar() {

        if (!sidebar) {
            return;
        }

        sidebar.classList.remove("open");

        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("active");
        }

        document.body.classList.remove("sidebar-open");

    }


    /* =====================================================
       MOBILE MENU BUTTON
    ====================================================== */

    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            openSidebar
        );

    }


    /* =====================================================
       SIDEBAR CLOSE BUTTON
    ====================================================== */

    if (sidebarClose) {

        sidebarClose.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =====================================================
       OVERLAY CLICK
    ====================================================== */

    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =====================================================
       NAVIGATION CLICK
    ====================================================== */

    const navItems = document.querySelectorAll(
        ".sidebar .nav-item"
    );


    navItems.forEach(function (item) {

        item.addEventListener(
            "click",
            function () {

                if (window.innerWidth <= 1100) {

                    closeSidebar();

                }

            }
        );

    });


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeSidebar();

            }

        }
    );


    /* =====================================================
       WINDOW RESIZE
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 1100) {

                closeSidebar();

            }

        }
    );


    /* =====================================================
       PREVENT BODY SCROLL WHEN SIDEBAR IS OPEN
    ====================================================== */

    const style = document.createElement("style");

    style.textContent = `

        @media (max-width: 1100px) {

            body.sidebar-open {
                overflow: hidden;
            }

        }

    `;

    document.head.appendChild(style);


    /* =====================================================
       NOTIFICATION BUTTON
    ====================================================== */

    const notificationButton = document.querySelector(
        ".notification-button"
    );


    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            function () {

                /*
                 * Notification functionality can be connected
                 * to Django/API later.
                 *
                 * For now this button remains visual only.
                 */

                console.log("Notifications clicked.");

            }
        );

    }

});