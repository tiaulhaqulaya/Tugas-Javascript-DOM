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

    // Menambahkan atau menghapus efek coret
    teksTugas.classList.toggle("selesai");

    // Jika checkbox dicentang
    if (checkbox.checked) {
        tugasSelesai++;
    } else {
        tugasSelesai--;
    }

    // Memperbarui angka Selesai
    perbaruiSelesai();
    perbaruiBelumSelesai();
    });


    // TOMBOL HAPUS remove() digunakan untuk menghapus tugas dari halaman.
    btnHapus.addEventListener("click", function() {
    if (checkbox.checked) {
        tugasSelesai--;
    }
    totalTugas--;
    tugasBaru.remove();
    perbaruiTotal();
    perbaruiSelesai();
    perbaruiBelumSelesai();
    });

    // MEMASUKKAN ELEMEN KE DALAM <li>
    tugasBaru.appendChild(checkbox);
    tugasBaru.appendChild(teksTugas);
    tugasBaru.appendChild(btnHapus);


    // MEMASUKKAN <li> KE DALAM <ul>
    daftarTugas.appendChild(tugasBaru);
    totalTugas++;
    perbaruiTotal();
    perbaruiBelumSelesai();
    inputTugas.value = "";

  
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

// SELEKSI ELEMEN STATISTIK
const jumlahTotal = document.getElementById("jumlah-total");
const jumlahSelesai = document.getElementById("jumlah-selesai");
const jumlahBelumSelesai = document.getElementById("jumlah-belum-selesai");

// Menyimpan jumlah seluruh tugas
let totalTugas = 0;
// FUNGSI MEMPERBARUI TOTAL TUGAS
function perbaruiTotal() {
    jumlahTotal.innerText = totalTugas;
}

// Menyimpan jumlah seluruh tugas selesai
let tugasSelesai = 0;
// FUNGSI MEMPERBARUI TUGAS SELESAI
function perbaruiSelesai() {
    jumlahSelesai.innerText = tugasSelesai;
}

// FUNGSI MEMPERBARUI TUGAS BELUM SELESAI
function perbaruiBelumSelesai() {
    jumlahBelumSelesai.innerText = totalTugas - tugasSelesai;
}