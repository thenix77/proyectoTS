export interface usersModel{
    id?:                number,
    nombre:             string,
    apellidos:          string,
    dni:                string,
    password:           string,
    rolid:              number,
    active?:            boolean,
    created?:           Date,
    updated?:           Date 

}