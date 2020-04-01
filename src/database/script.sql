
use DBSensor;
create table sensor(
    id              int             auto_increment,
    nombre          VARCHAR(100)    not null,
    valor           int             not null,
    created         DATETIME        default now(),
    updated         DATETIME        ,
    CONSTRAINT pk_sensor PRIMARY key (id)
);