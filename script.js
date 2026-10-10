// Ambil nama tamu dari URL
window.addEventListener('DOMContentLoaded', () => {
    const parameterUrl = new URLSearchParams(window.location.search);
    const namaSapaan = parameterUrl.get('to');
    if (namaSapaan) {
        const targetElement = document.getElementById('tamu-nama');
        if (targetElement) targetElement.textContent = decodeURIComponent(namaSapaan);
    }
});

const audioPlayer = document.getElementById('bg-music');

// Buka Undangan & Mulai Musik Otomatis
function bukaUndangan() {
    document.getElementById('cover').style.transform = 'translateY(-100vh)';
    document.getElementById('main-content').style.display = 'block';
    
    // Putar lagu langsung
    if (audioPlayer) {
        audioPlayer.volume = 0.8;
        audioPlayer.play().catch(err => {
            console.log("Audio tidak bisa diputar otomatis, periksa pengaturan browser.");
        });
    }

    setTimeout(() => {
        document.getElementById('cover').style.display = 'none';
    }, 1000);
}

// Galeri Terpisah
function bukaGaleriPage() {
    document.getElementById('galeri-page').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Kunci scroll halaman utama
}

function tutupGaleriPage() {
    document.getElementById('galeri-page').style.display = 'none';
    document.body.style.overflow = 'auto'; // Buka kembali scroll halaman utama
}
