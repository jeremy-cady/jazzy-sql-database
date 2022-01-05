CREATE TABLE "artists" (
    "id" SERIAL PRIMARY KEY,
    "artist_name" varchar(80) not null,
    "year_born" date
);

CREATE TABLE "songs" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(255),
	"length" VARCHAR(10),
	"released" DATE
);

INSERT INTO "artists" 
	("artist_name", "year_born") 
VALUES
	('Ella Fitzgerald', '4/25/1917'),
	('Dave Brubeck', '12/06/1920'),
	('Miles Davis', '05/26/1926'),
	('Esperanza Spalding', '10/18/1984');
	
INSERT INTO "songs"
	("title", "length", "released")
VALUES
	('Take Five', '5:24', '09/29/1959'),
	('So What', '9:22', '08/17/1959'),
	('Black Gold', '5:17', '02/01/2012');