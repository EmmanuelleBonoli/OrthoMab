DROP DATABASE IF EXISTS OrthoMAB;

CREATE DATABASE OrthoMAB;

USE OrthoMAB;

CREATE TABLE
    user (
        id INT primary key auto_increment NOT NULL,
        lastname VARCHAR(80) NOT NULL,
        firstname VARCHAR(80) NOT NULL,
        email VARCHAR(80) NOT NULL,
        password VARCHAR(250) NOT NULL,
        phone INT NULL,
        birthday DATE NOT NULL,
        adress VARCHAR(250) NOT NULL,
        admin BOOLEAN NOT NULL DEFAULT FALSE
    );


INSERT INTO
    user (
        lastname,
        firstname,
        email,
        password,
        phone,
        birthday,
        adress,
        admin
    )
VALUES (
        "Bonoli",
        "Marie-Annick",
        "marie.bonoli@gmail.com",
        "blablablou",
        0621719055,
        "1986-04-29",
        "14, square Boris Vian 95240 Cormeilles-en-Parisis",
        1
    ), (
        "nom Patient1",
        "prénom Patient1",
        "patient1@gmail.com",
        "blablabli",
        0611111111,
        "1950-01-01",
        "46, rue de la gare 95240 Cormeilles en parisis",
        0
    );

