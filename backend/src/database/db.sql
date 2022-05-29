CREATE TABLE Local (
  idLocal integer primary key,
  codLocal varchar(3),
  descripcion varchar (150),
  dimensionL varchar(10),
  categoria varchar(30),
  estatus character(1)
);


CREATE TABLE AreaComun (
  idArea integer PRIMARY KEY,
  codArea varchar (3) UNIQUE,
  descripcion varchar (150),
  dimensionA varchar(10),
  tipoA character(20),
  estatus character(1)
);


CREATE TABLE if not exists Cliente (
  idCliente integer PRIMARY KEY,
  nombre varchar (30),
  apellido varchar (30),
  telefono varchar (15),
  cedula varchar (8),
  fechaDeNac varchar (10),
  dirección varchar (50),
  idUsuario integer,
  estatus character(1),
  FOREIGN KEY (idUsuario)
  REFERENCES Usuario(idUsuario)
);

CREATE TABLE if not exists Usuario (
  idUsuario integer PRIMARY KEY ,
  correo varchar (50),
  contrasena varchar (50),
  estatus character(1)
);

CREATE TABLE FechaDeR (
  idFechaR integer  PRIMARY KEY ,
  fecha date NOT NULL,
  estatus character(1) NOT NULL 
);

CREATE TABLE Reservacion (
  idReserva integer PRIMARY KEY,
  codReserva varchar(3),
  idCliente integer,
  idArea integer,
  costo float (10),
  descripcionR varchar(150),
  idFechaR integer,
  estatus character(1),
  FOREIGN KEY (idCliente)
  REFERENCES Cliente(idCliente),
  FOREIGN KEY (idArea)
  REFERENCES AreaComun(idArea),
  FOREIGN KEY (idFechaR)
  REFERENCES FechaDeR(idFechaR)	
);



/*
CREATE TABLE "TipoLocal" (
  "idTipo" integer,
  "categoria" varchar (50),
  "estatus" character(1),
  PRIMARY KEY ("idTipo")
);
*/


CREATE TABLE "Alquier" (
  "idAlquiler" integer,
  "codAlquiler" Tipo,
  "fecha" date,
  "idUsuario" integer,
  "mesesG" int (2),
  "estatus" character(1),
  PRIMARY KEY ("idAlquiler")
);
















select * from usuario;

select * from CLiente;

select * from AreaComun;

select * from reservacion;

Select COUNT(fechaDeR.fecha)
FROM reservacion,FechaDeR
WHERE reservacion.idreserva=fechaDeR.idReserva
AND reservacion.estatus='A' 
AND fechader.estatus='A';



CREATE TABLE FechaDeR (
  idFechaR integer  PRIMARY KEY ,
  fecha date NOT NULL,
  idReserva integer,
  estatus character(1) NOT NULL,
  FOREIGN KEY (idReserva)
  REFERENCES Reservacion(idReserva)
);


select AreaComun.precio 
from areacomun, reservacion 
WHERE AreaComun.idArea=Reservacion.idArea 
AND AreaComun.estatus='A' 
AND Reservacion.estatus='A';

CREATE TABLE Reservacion (
  idReserva integer PRIMARY KEY,
  codReserva varchar(3) UNIQUE,
  idCliente integer,
  idArea integer,
  costo integer ,
  descripcionR varchar(150),
  estatus character(1),
  FOREIGN KEY (idCliente)
  REFERENCES Cliente(idCliente),
  FOREIGN KEY (idArea)
  REFERENCES AreaComun(idArea)
);

INSERT INTO reservacion ('costo','fecha')
SELECT AreaComun.precio*(COUNT(fechader.fecha))
FROM AreaComun,FechaDeR, Reservacion
WHERE AreaComun.idArea=Reservacion.idArea
AND reservacion.idreserva=fechaDeR.idReserva;

INSERT INTO FechaDer(fecha,idreserva,estatus)
values ('10-05-2022','1','A')

INSERT INTO Reservacion(codReserva,idarea,costo,descripcionR,estatus)
values ('R01','1','100',
'fiesta de 15 año con duracion de 1 dia 24horas , 100 invitado','A');

"codReserva":"R1",
"descripcionR":
"fiesta de 15 año con duracion de 1 dia 24 horas , 100 invitado"

select cedula
from cliente,reservacion
where cliente.idcliente=reservacion.idcliente
AND 

