use DBSensor;

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


insert into sensor(nombre,valor,created) values('temp1',25,'2020-02-10 14:20:00');
insert into sensor(nombre,valor,created) values('temp1',26,'2020-02-10 14:22:00');
insert into sensor(nombre,valor,created) values('temp1',25,'2020-02-10 14:23:00');
insert into sensor(nombre,valor,created) values('temp1',27,'2020-02-10 14:25:00');
insert into sensor(nombre,valor,created) values('temp1',25,'2020-02-10 14:20:00');
insert into sensor(nombre,valor,created) values('temp2',25,'2020-02-10 14:21:00');
insert into sensor(nombre,valor,created) values('temp2',24,'2020-02-10 14:25:00');
insert into sensor(nombre,valor,created) values('temp1',25,'2020-02-10 14:27:00');


insert into tiposhields(nombre) values ('arduino');
insert into tiposhields(nombre) values ('node MCU');
insert into tiposhields(nombre) values ('esp8266');
insert into tiposhields(nombre) values ('raspberry');

insert into shields(nombre,tiposhieldid) values ('minipro', 1,'minipro.jpg','minipro.jpg');
insert into shields(nombre,tiposhieldid) values ('nano', 1,'nano.jpg','nano.jpg');
insert into shields(nombre,tiposhieldid) values ('uno', 1,'uno.jpg','uno.jpg');
insert into shields(nombre,tiposhieldid) values ('leonardo', 1,'leonardo.jpg','leonardo.jpg');
insert into shields(nombre,tiposhieldid) values ('mega', 1,'leonardo.jpg','leonardo.jpg');
insert into shields(nombre,tiposhieldid) values ('esp32', 2,'esp32.jpg','esp32.jpg');
insert into shields(nombre,tiposhieldid) values ('esp8266', 2 , 'esp8266.jpg','esp8266.jpg');
insert into shields(nombre,tiposhieldid) values (' zero', 4 ,'zero.jpg','zero.jpg');
insert into shields(nombre,tiposhieldid) values (' I', 4 ,'i.jpg','i.jpg');
insert into shields(nombre,tiposhieldid) values (' II', 4,'ii.jpg','ii.jpg');
insert into shields(nombre,tiposhieldid) values (' III', 4 ,'iii.jpg','iii.jpg');
insert into shields(nombre,tiposhieldid) values (' IV', 4, 'iv.jpg','iv.jpg');


