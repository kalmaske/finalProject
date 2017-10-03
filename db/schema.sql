
### Schema
DROP DATABASE media_db;
CREATE DATABASE media_db;
USE media_db;

-- imported database from listings.csv

SELECT * FROM media_db.artTable;
SELECT * FROM media_db.writingTable;
SELECT * FROM media_db.photosTable;
SELECT * FROM media_db.vidoesTable;
SELECT * FROM media_db.musicTable;
