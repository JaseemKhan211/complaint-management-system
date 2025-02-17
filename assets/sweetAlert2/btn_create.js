Swal.fire({
    title: "Do You Want to Proceed?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes Proceed",
    cancelButtonText: "Cancel"
}).then((result) => {
    if (result.isConfirmed) {
        apex.server.process(
            "Insert Process - Complaint Register",
            {
                pageItems: "#P3_COMPLAINT_DESC, #P3_COMPLAINT_DATE, #P3_COMPLAINT_TYPE, #P3_COMPLAINT_STATUS, #P3_REMARKS, #P3_STUDENT_ID, #P3_STUDENT_NAME, #P3_STUDENT_DEPARTMENT, #P3_STUDENT_SAMESTER, #P3_STUDENT_SECTION, #P3_STUDENT_REMARKS"
            },
            {
                success: function(pData){
                    console.log("Insert failed. " + pData.error_message);
                    if (pData.response == "SUCCESS") {
                        Swal.fire({
                            title: "Complaint Register!",
                            text: "Your complaint has been successfully registered. We will address it within the next 5 days and work on resolving it as soon as possible.",
                            icon: "success"
                        }).then(() => {
                            apex.navigation.redirect("f?p=&APP_ID.:2:&APP_SESSION.::NO:RP::");
                        });
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    apex.message.alert("AJAX Error: " + textStatus + " - " + errorThrown);
                }
            }
        );
    }
});