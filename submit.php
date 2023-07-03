<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $no_hp = $_POST['no_hp'];
    $message = $_POST['message'];
    // Format data yang akan ditulis ke file teks
    $data = "Nama: $nama\nEmail: $email\nNo HP: $no_hp\nPesan: $message\n\n";
    
    // Nama dan path file teks
    $file = 'kontak_data.txt';
    
    // Tulis data ke file teks (mode 'a' untuk menambahkan data)
    file_put_contents($file, $data, FILE_APPEND);
    
    echo 'Data telah berhasil disimpan.';
} else {
    echo 'Metode permintaan tidak valid.';
}
?>