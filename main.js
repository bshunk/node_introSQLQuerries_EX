// 1. Query all of the entries in the Genre table
//   answer: 'SELECT * FROM genre'

// 2. Using the INSERT statement, add one of your favorite artists to the Artist table.
//    answer: INSERT INTO artist (artistId, artistName, yearEstablished)
//            VALUES (29, 'Rebelution', 1999)

// 3. Using the INSERT statement, add one, or more, albums by your artist to the Album table.
//    answer: INSERT INTO album (albumId, title, releaseDate, albumLength, label, artistId, genreId)
//    VALUES (25, 'Bright Side Of Life', 2009, 3456, '87 Music', 29, 1)

// 4. Using the INSERT statement, add some songs that are on that album to the Song table.
//    answer: INSERT INTO song (songId, title, songLength, releaseDate, genreId, artistId, albumId)
//    VALUES (23, 'Moonlight', 123, '2009', 1, 29, 25)

// 5. Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the 
//    LEFT JOIN keyword sequence to connect the tables, and the WHERE keyword to filter the results to the album and artist you added. 
//    Here is some more info on joins that might help.

//    Reminder: Direction of join matters. Try the following statements and see the difference in results.
//    (SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;)
//    (SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;)

//    ANSWER: SELECT s.title AS "Song", al.Title AS "Album", ar.artistName AS "Band"
//    SELECT s.title AS "Song", al.Title AS "Album", ar.artistName AS "Band"
//    FROM artist ar
//    JOIN album al ON al.ArtistId = ar.ArtistId
//    LEFT JOIN SONG s ON al.AlbumId = s.albumId
//    WHERE ar.artistName = 'Rebelution'

// 6. Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY 
//    keyword sequence.

//    answer: SELECT count(songId), a.title
//            FROM song s
//            LEFT JOIN album a ON s.albumId = a.albumId
//            GROUP BY s.albumId


