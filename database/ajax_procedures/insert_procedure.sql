BEGIN
INSERT INTO COM_REG(
   COMPLAINT_DESC,
   COMPLAINT_DATE,
   COMPLAINT_TYPE,
   COMPLAINT_STATUS,
   REMARKS,
   STUDENT_ID,
   STUDENT_NAME,
   STUDENT_DEPARTMENT,
   STUDENT_SAMESTER,
   STUDENT_SECTION,
   STUDENT_REMARKS
)
VALUES(:P3_COMPLAINT_DESC,
       :P3_COMPLAINT_DATE,
       :P3_COMPLAINT_TYPE,
       :P3_COMPLAINT_STATUS,
       :P3_REMARKS,
       :P3_STUDENT_ID,
       :P3_STUDENT_NAME,
       :P3_STUDENT_DEPARTMENT,
       :P3_STUDENT_SAMESTER,
       :P3_STUDENT_SECTION,
       :P3_STUDENT_REMARKS

);

apex_json.open_object;
apex_json.write('response', 'SUCCESS');
apex_json.close_object;
  
EXCEPTION
    WHEN OTHERS THEN
        apex_json.open_object;
        apex_json.write('response', 'FAILED');
        apex_json.write('error_message', SQLERRM);
        apex_json.close_object;
END;