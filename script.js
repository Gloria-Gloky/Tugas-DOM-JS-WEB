document.getElementById("tombol1").onclick = function() {
    var table = document.getElementById("patricia");
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table"; 
        this.textContent = "Tutup"; 
    } else {
        table.style.display = "none";
        this.textContent = "Lihat Detil";
    }
}

document.getElementById("tombol2").onclick = function() {
    var table = document.getElementById("sri");
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table"; 
        this.textContent = "Tutup"; 
    } else {
        table.style.display = "none";
        this.textContent = "Lihat Detil";
    }
}

document.getElementById("tombol3").onclick = function() {
    var table = document.getElementById("lan");
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table"; 
        this.textContent = "Tutup"; 
    } else {
        table.style.display = "none";
        this.textContent = "Lihat Detil";
    }
}