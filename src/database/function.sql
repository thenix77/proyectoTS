USE `dbsensor`;
DROP function IF EXISTS `f_dni`;

DELIMITER $$
USE `dbsensor`$$
CREATE FUNCTION `f_dni` (
	dni		varchar(8)
)
RETURNS varchar(8) DETERMINISTIC 
BEGIN
	
    
    IF `dni` REGEXP '^[0-9]{8}' THEN
		RETURN dni;
	else
		return "";
    end if;
END$$
DELIMITER $$
-- ******************************************
USE `dbsensor`;
DROP function IF EXISTS `f_password`;

DELIMITER $$
USE `dbsensor`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `f_password`(
	password		varchar(100)
) RETURNS varchar(100) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
	BEGIN
	 IF `password` REGEXP '^[A-Za-z0-9\s]+${100}' THEN
		RETURN password;
	 else
		return "";
	 end if;
END$$

DELIMITER ;



