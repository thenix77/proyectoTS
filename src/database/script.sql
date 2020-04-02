-- Creacion de labase de datos dbsensor
use dbsensor;

create table tiposhields
(
    id              INT             auto_increment,
    nombre          varchar(100)    not null,
    created         DATETIME        default now(),
    updated         DATETIME        ,
    CONSTRAINT pk_tiposhield PRIMARY key  (id) 
);

create table shields
(
    id              INT             auto_increment,
    nombre          varchar(100)    not null,
    descripcion     text            ,
    tiposhieldId    int             not null,
    imagen          varchar(100)    default 'noimage.jpg',
    pines           varchar(100)    default 'noimage.jpg',
    active          boolean         default 1,
    CONSTRAINT pk_shield PRIMARY key(id), 
    CONSTRAINT fk_shield_tiposhield FOREIGN key(tiposhieldId)
            REFERENCES tiposhields(id)
);


create table sensors(
    id              int             auto_increment,
    nombre          VARCHAR(100)    not null,
    descripcion     text            ,
    created         DATETIME        default now(),
    updated         DATETIME        ,
    active          boolean         default 1,
    CONSTRAINT pk_sensor PRIMARY key (id)
);

create table rols(
    id              int             auto_increment,
    nombre          varchar(100)    not null,
    craated         DATETIME        default now(),
    updated         DATETIME        ,
    constraint pk_roles PRIMARY key(id)  
);

create table users(
    id              INT                 auto_increment,
    nombre          varchar(100)        not null,
    apellidos       varchar(100)        not null,
    dni             char(8)             not null    unique,
    password        blob                not null,
    rolid           int                 ,
    active          boolean             default 1,
    CONSTRAINT pk_usuarios PRIMARY key(id),
    constraint fk_usuarios_roles FOREIGN key (rolid) 
                REFERENCES rols(id)
);

create table projects
(
    id              int                 auto_increment,
    nombre          varchar(100)        not null,
    descripcion     text                ,
    userid          int                 ,
    active          boolean             DEFAULT 1,
    created         DATETIME            DEFAULT now(),
    updated         DATETIME            ,
    constraint pk_proyecto primary key(id),
    CONSTRAINT uq_proyecto unique (nombre),
    constraint fk_proyecto_users foreign key (userid) references users(id)
);

create table projectshield(
    id              int                 auto_increment,
    projectid       int                 ,
    shieldid        int                 ,
    created         datetime                DEFAULT now(),
    constraint pk_projectshield  primary key (id),
    constraint fk_project_project foreign key (projectid) references projects(id),
    constraint fk_project_shield  foreign key (shieldid) references shields(id) 
);

create table projectsensors(
    id                      int                 auto_increment,
    projectshieldid         int                 not null,
    sensorid                INT                 ,
    descripcion             text                ,
    active                  boolean             default 1,
    created                 DATETIME            DEFAULT now(),
    updated                 DATETIME            ,
    constraint pk_projectsensor primary key (id),
    constraint fk_proy_shields foreign key (projectshieldid) REFERENCES shields(id),
    constraint fk_proy_sensor foreign key (sensorid) references sensors(id)
); 