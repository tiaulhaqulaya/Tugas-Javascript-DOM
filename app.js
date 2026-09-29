console.log("Bismillah Praktikum Dimulai");
// AKTIVITAS 1: DOM SELECTION / SELEKSI ELEMEN
// Mengambil elemen HTML kemudian menyimpannya ke dalam variabel JavaScript.

// 1. Mengambil elemen input tugas
const inputTugas = document.getElementById("input-tugas");

// 2. Mengambil tombol Tambah
const btnTambah = document.getElementById("btn-tambah");

// 3. Mengambil daftar tugas
const daftarTugas = document.getElementById("daftar-tugas");


// AKTIVITAS 2: FUNGSI MENAMBAHKAN TUGAS

// Fungsi ini digunakan untuk:
// 1. Mengambil isi input
// 2. Mengecek apakah input kosong
// 3. Membuat elemen <li> baru
// 4. Menambahkan checkbox
// 5. Menambahkan teks tugas
// 6. Menambahkan tombol hapus
// 7. Memasukkan tugas ke dalam <ul>


function tambahTugas() {
    // Mengambil isi input tugas trim() digunakan untuk menghilangkan spasi di awal dan akhir teks
    const isiTugas = inputTugas.value.trim();
    // VALIDASI INPUT Jika input kosong, tugas tidak boleh ditambahkan.
    if (isiTugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    // MEMBUAT ELEMEN TUGAS BARU
    // createElement digunakan untuk membuat elemen HTML baru melalui JavaScript.
    const tugasBaru = document.createElement("li");

    // Memberikan class pada <li>
    tugasBaru.className = "item-tugas";

    // MEMBUAT CHECKBOX
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    // MEMBUAT TEKS TUGAS
    const teksTugas = document.createElement("span");
    teksTugas.innerText = isiTugas;


    // MEMBUAT TOMBOL HAPUS
    const btnHapus = document.createElement("button");
    btnHapus.innerText = "Hapus";
    btnHapus.className = "btn-hapus"


    // CHECKBOX: MENANDAI TUGAS SELESAI
    // Jika checkbox dicentang, class "selesai" akan ditambahkan.
    // Jika checkbox dilepas, class "selesai" akan dihapus kembali.
    checkbox.addEventListener("change", function() {
        teksTugas.classList.toggle("selesai");
    });


    // TOMBOL HAPUS remove() digunakan untuk menghapus tugas dari halaman.
    btnHapus.addEventListener("click", function() {
        tugasBaru.remove();
    });

    // MEMASUKKAN ELEMEN KE DALAM <li>
    tugasBaru.appendChild(checkbox);
    tugasBaru.appendChild(teksTugas);
    tugasBaru.appendChild(btnHapus);


    // MEMASUKKAN <li> KE DALAM <ul>
    daftarTugas.appendChild(tugasBaru);

  
    // MENGOSONGKAN INPUT
    // Setelah tugas berhasil ditambahkan, input dikosongkan kembali.
    inputTugas.value = "";

}


// AKTIVITAS 3: EVENT TOMBOL TAMBAH
// Ketika tombol Tambah diklik, jalankan fungsi tambahTugas().
btnTambah.addEventListener("click", function() {
    tambahTugas();
});


// AKTIVITAS 4: MENAMBAHKAN TUGAS DENGAN ENTER
// Pengguna juga dapat menambahkan tugas dengan menekan tombol Enter pada keyboard.
inputTugas.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        tambahTugas();
    }
});