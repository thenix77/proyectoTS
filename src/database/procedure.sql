USE `dbsensor`;
DROP procedure IF EXISTS `p_login`;

DELIMITER $$
USE `dbsensor`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `p_login`(
	in		xdni			varchar(8),
    in		xpassword	varchar(100)
)
    DETERMINISTIC
BEGIN
 
	set xdni = f_dni(xdni);
    set xpassword = f_password(xpassword);
    
    select * from users where dni = xdni and password = AES_ENCRYPT(xpassword,'bicholin');
END$$

DELIMITER ;