
use dbsensor;

create table tiposensores(
    id              INT             auto_increment;
    nombre          varchar(100)    not null,
    descripcion     varchar(100)    ,
    created         DATETIME        DEFAULT getdate(),
    updated         DATETIME        ,
    CONSTRAINT pk_tiposensor primary key (id)
);

create table sensores(
    id              int             auto_increment,
    nombre          VARCHAR(100)    not null,
    descripcion     text            ,
    created         DATETIME        default now(),
    updated         DATETIME        ,
    sensorId        INT             not null
    CONSTRAINT pk_sensor PRIMARY key (id),
    CONSTRAINT fk_sensor_tiposensor FOREIGN KEY (sensorId)
                    REFERENCES tiposensores(id)
);

create table tiposhields(
    id              INT             auto_increment,
    nombre          varchar(100)    not null,
    created         DATETIME        default now(),
    updated         DATETIME        ,
    CONSTRAINT pk_tiposhield PRIMARY key (id),
);

create table shields(
    id              INT             auto_increment,
    nombre          varchar(100)    not null,
    descripcion     text            ,
    tiposhieldId    int             not null,
    imagen          varchar(100)    default 'noimage.jpg',
    pines           varchar(100)    default 'noimage.jpg'
    CONSTRAINT pk_shield PRIMARY key (id), 
    CONSTRAINT fk_shield_tiposhield FOREIGN key (tiposhieldId)
                REFERENCES tiposhields(id)
);