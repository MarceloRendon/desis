CREATE TABLE region (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE ciudad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    region_id INT,
    FOREIGN KEY (region_id) REFERENCES region(id)
);

CREATE TABLE comuna (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    ciudad_id INT,
    FOREIGN KEY (ciudad_id) REFERENCES ciudad(id)
);

CREATE TABLE candidato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE votos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_apellido VARCHAR(255) NOT NULL,
    alias VARCHAR(50) NOT NULL,
    rut VARCHAR(12) NOT NULL,
    email VARCHAR(255) NOT NULL,
    region INT,
    comuna INT,
    candidato INT,
    como_se_entero VARCHAR(255) NOT NULL,
    fecha_voto TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (rut),
    FOREIGN KEY (region) REFERENCES region(id),
    FOREIGN KEY (comuna) REFERENCES comuna(id),
    FOREIGN KEY (candidato) REFERENCES candidato(id)
);

-- Datos de ejemplo para la tabla region
INSERT INTO region (nombre) VALUES
    ('Región Metropolitana'),
    ('Región de Valparaíso'),
    ('Región del Libertador General Bernardo O''Higgins'),
    ('Región de Coquimbo'),
    ('Región de la Araucanía');

-- Datos de ejemplo para la tabla ciudad
INSERT INTO ciudad (nombre, region_id) VALUES
    ('Santiago', 1),
    ('Valparaíso', 2),
    ('Rancagua', 3),
    ('La Serena', 4),
    ('Temuco', 5);

-- Datos de ejemplo para la tabla comuna
INSERT INTO comuna (nombre, ciudad_id) VALUES
    ('Las Condes', 1),
    ('Providencia', 1),
    ('Viña del Mar', 2),
    ('Valdivia', 5),
    ('La Reina', 1);

-- Datos de ejemplo para la tabla candidato
INSERT INTO candidato (nombre) VALUES
    ('Candidato 1'),
    ('Candidato 2'),
    ('Candidato 3');