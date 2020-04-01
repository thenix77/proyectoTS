use dbsensor;

insert into tiposensores(nombre) values ('temperatura');
insert into tiposensores(nombre) values ('movimiento');
insert into tiposensores(nombre) values ('brujula');
insert into tiposensores(nombre) values ('acelorometro');
insert into tiposensores(nombre) values ('gas');
insert into tiposensores(nombre) values ('tiempo');
insert into tiposensores(nombre) values ('pantalla');
insert into tiposensores(nombre) values ('convertidor');
insert into tiposensores(nombre) values ('ultrasonico');
insert into tiposensores(nombre) values ('colores');
insert into tiposensores(nombre) values ('motor DC');
insert into tiposensores(nombre) values ('motor DA');
insert into tiposensores(nombre) values ('motor PaP');
insert into tiposensores(nombre) values ('motor Servo');
insert into tiposensores(nombre) values ('humedad');
insert into tiposensores(nombre) values ('vibracion');
insert into tiposensores(nombre) values ('medicion');
insert into tiposensores(nombre) values ('memoria');
insert into tiposensores(nombre) values ('cardio');
insert into tiposensores(nombre) values ('radio frecuencia');
insert into tiposensores(nombre) values ('bluetooth');
insert into tiposensores(nombre) values ('gps');
insert into tiposensores(nombre) values ('shield');
insert into tiposensores(nombre) values ('wireless');
insert into tiposensores(nombre) values ('ethernet');


insert into tiposhields(nombre) values ('arduino');
insert into tiposhields(nombre) values ('node MCU');
insert into tiposhields(nombre) values ('esp8266');
insert into tiposhields(nombre) values ('raspberry');

insert into shields(nombre,tiposhieldId,imagen,pines) values ('minipro', 1,'minipro.jpg','minipro.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values ('nano', 1,'nano.jpg','nano.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values ('uno', 1,'uno.jpg','uno.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values ('leonardo', 1,'leonardo.jpg','leonardo.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values ('mega', 1,'leonardo.jpg','leonardo.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values ('esp32', 2,'esp32.jpg','esp32.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values ('esp8266', 2 , 'esp8266.jpg','esp8266.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values (' zero', 4 ,'zero.jpg','zero.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values (' I', 4 ,'i.jpg','i.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values (' II', 4,'ii.jpg','ii.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values (' III', 4 ,'iii.jpg','iii.jpg');
insert into shields(nombre,tiposhieldid,imagen,pines) values (' IV', 4, 'iv.jpg','iv.jpg');

insert into roles(nombre) values ('admin');
insert into roles(nombre) values ('usuario');
insert into roles(nombre) values ('invitado')

insert into usuarios(nombre,apellidos,dni,password,rolid) values ('admin','admin','99999999',AES_ENCRYPT('123456789','bicholin'),1);
insert into usuarios(nombre,apellidos,dni,password,rolid) values ('guillermo','cabana','10671906',AES_ENCRYPT('1234nix','bicholin'),2);
