// Fungsi untuk menampilkan modal
function showDetail(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('bookModal').style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('bookModal').style.display = "none";
}

// Menutup modal jika user klik di luar kotak putih
window.onclick = function(event) {
    let modal = document.getElementById('bookModal');
    if (event.target == modal) {
        modal.style.display = "nozne";
    }
}