document.addEventListener("DOMContentLoaded", function() {
    const charactersSection = document.getElementById("characters");
    const gallerySection = document.getElementById("gallery");
    const aboutSection = document.getElementById("about");
    
  
    // Sembunyikan semua konten kecuali karakter saat halaman dimuat
    charactersSection.style.display = "none";
    gallerySection.style.display = "none";
    aboutSection.style.display = "none";
  
    // Fungsi untuk menampilkan konten yang sesuai saat tautan menu diklik
    function showSection(sectionId) {
      if (sectionId === "characters") {
        charactersSection.style.display = "block";
        gallerySection.style.display = "none";
        aboutSection.style.display = "none";
        main
      } else if (sectionId === "gallery") {
        charactersSection.style.display = "none";
        gallerySection.style.display = "block";
        aboutSection.style.display = "none";
      } else if (sectionId === "about") {
        charactersSection.style.display = "none";
        gallerySection.style.display = "none";
        aboutSection.style.display = "block";
      }
    }
  
    // Tambahkan event listener untuk tautan menu
    const menuLinks = document.querySelectorAll("nav ul li a");
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Menghentikan perilaku default dari tautan
  
        const sectionId = link.getAttribute("href").substring(1); // Dapatkan ID bagian dari atribut href
        showSection(sectionId); // Panggil fungsi untuk menampilkan konten yang sesuai
      });
    });
  });
  