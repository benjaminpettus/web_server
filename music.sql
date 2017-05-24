DROP DATABASE IF EXISTS music;
CREATE DATABASE music;

\c music;

CREATE TABLE albums (
  ID SERIAL PRIMARY KEY,
  artist_id INTEGER,
  title VARCHAR,
  year INTEGER
);

INSERT INTO albums (artist_id, title, year)
  VALUES (1, 'Voodoo', 2000);

CREATE TABLE artists (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  genre VARCHAR
);

INSERT INTO artists (name, genre)
  VALUES ('D''Angelo', 'Neo-Soul');

CREATE TABLE songs (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  album_id INTEGER,
  length INTEGER,
  track_no INTEGER
);

INSERT INTO songs (title, album_id, length, track_no)
  VALUES ('Playa Playa', 1, 426, 1);
