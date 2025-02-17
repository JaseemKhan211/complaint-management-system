FUNCTION user_auth_fun(
    p_username IN VARCHAR2,
    p_password IN VARCHAR2) RETURN BOOLEAN IS l_count NUMBER;
RESULT BOOLEAN;

BEGIN
    SELECT COUNT(*) INTO l_count FROM SYUSR_PUBLIC
    WHERE USRID = p_username
    AND PASSWORD = p_password;

    IF l_count > 0 THEN
        RESULT := TRUE;
    ELSE
        RESULT := FALSE;
    END IF;
    RETURN RESULT;
END user_auth_fun;