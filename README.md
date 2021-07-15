# frontend-dorayakishop
Repositori ini berisi frontend untuk tugas simulasi API toko dorayaki dalam rangka seleksi asisten Lab Programming ITB 2021. Repositori ini dibuat oleh Hizkia Raditya / 13519087. Repositori ini menggunakan javascript, react, dan bootstrap untuk untuk styling frontend.

# Components
Ada 6 komponen utama frontend yang dibuat untuk memenuhi spesifikasi tugas. Untuk source code setiap component ada di src/components

1. Dapat melakukan pengurangan/penambahan toko. : createtoko.component
2. Dapat melakukan pengurangan/penambahan stok sebuah varian dorayaki pada suatu toko. : editstok.component
3. Dapat menambahkan varian dorayaki. : createdorayaki.component
4. Dapat memindahkan stok dorayaki dari satu toko ke toko lainnya. : movestok.component
5. Dapat melihat stok dorayaki pada suatu toko. : stoklist.component
6. Navbar

# Cara Menjalankan
Untuk menjalankan komponen frontend dengan sesuai, backend server juga harus dijalankan. Backend server dapat diambil dari link berikut: https://github.com/HizRadit07/backend-dorayakishop

note: pastikan node package manager (npm) sudah diinstall di mesin anda, untuk instalasi npm ada di link berikut: https://nodejs.org/en/

Langkah-langkah menjalankan frontend app:

1. Clone dan masuk ke repositori
2. Jalankan `npm install` di terminal
3. Jalankan backend server, jika benar akan terlihat seperti berikut: 
      
        Server is running on port: 5000
        (node:14832) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future        version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient     constructor.
        (Use `node --trace-warnings ...` to show where the warning was created)
        MongoDB database connection established successfully
4. Kembali ke repositori ini, lalu jalankan `npm start`
5. Aplikasi dapat digunakan sesuai kebutuhan
