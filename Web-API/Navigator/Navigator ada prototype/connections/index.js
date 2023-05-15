// console.log(navigator.connection)

//  Ini mungkin merujuk pada kecepatan unduh atau kecepatan transfer data dari server ke perangkat Anda. Angka 3.7 mungkin merujuk pada ukuran kecepatan unduh dalam satuan Mbps (megabit per detik).
console.log(navigator.connection.downlink )

//  Ini mungkin merujuk pada jenis koneksi internet yang Anda gunakan. Dalam hal ini, "4g" menunjukkan bahwa Anda terhubung ke jaringan 4G atau LTE.
console.log(navigator.connection.effectiveType )

//  Ini mungkin merujuk pada event listener yang akan dipanggil ketika ada perubahan pada elemen HTML. Dalam hal ini, nilai null menunjukkan bahwa tidak ada event listener yang terpasang.
console.log(navigator.connection.onchange )

//  Ini mungkin merujuk pada round trip time atau waktu yang dibutuhkan untuk paket data untuk pergi dari perangkat Anda ke server dan kembali. Angka 100 mungkin merujuk pada waktu dalam satuan milidetik (ms).
console.log(navigator.connection.rtt )

//  Ini mungkin merujuk pada pengaturan yang menentukan apakah data Anda sedang disimpan atau tidak. Dalam hal ini, nilai false menunjukkan bahwa data tidak sedang disimpan.
console.log(navigator.connection.saveData )
