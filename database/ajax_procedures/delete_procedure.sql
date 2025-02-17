BEGIN
  DELETE FROM COM_REG
  WHERE COMPLAINT_PK = :P3_COMPLAINT_PK;

  apex_json.open_object;
  apex_json.write('response', 'SUCCESS');
  apex_json.close_object;
  
  EXCEPTION
      WHEN OTHERS THEN
          apex_json.open_object;
          apex_json.write('response', 'FAILED');
          apex_json.close_object;
END;