document.addEventListener("DOMContentLoaded", function() {
    // ---------------- NAVBAR ----------------
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu-link");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav-menu_visible");

            // Mejora de accesibilidad: indica si el menú está expandido o no.
            const isVisible = navMenu.classList.contains("nav-menu_visible");
            navToggle.setAttribute("aria-expanded", isVisible);
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("nav-menu_visible");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // ---------------- MODAL DE IMÁGENES ----------------
    const modal = document.getElementById("modalImg");
    const modalImg = document.getElementById("modalImgContent");
    const closeModal = document.getElementById("closeModal");

    if (modal && modalImg && closeModal) {
        document.querySelectorAll(".portafolio-item img").forEach(img => {
            img.addEventListener("click", () => {
                modalImg.src = img.src;
                modal.style.display = "flex";
            });
        });

        const closeModalHandler = () => {
            modal.style.display = "none";
        };

        closeModal.addEventListener("click", closeModalHandler);
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModalHandler();
            }
        });

        // Cerrar modal con la tecla "Escape"
        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && modal.style.display === "flex") {
                closeModalHandler();
            }
        });
    }
});
