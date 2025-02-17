Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to delete this complaint.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
    if(result.isConfirmed){
        apex.server.process(
            "Delete Process - Complaint Register",
            {
                pageItems: "#P3_COMPLAINT_PK"
            },
            {
                success: function(pData){
                    if(pData.response == "SUCCESS"){
                        apex.navigation.redirect("f?p=&APP_ID.:2:&APP_SESSION.::NO:RP::");
                    }else{
                        clearMessages();
                        apex.message.showError({
                            type:       "error",
                            location:   "page",
                            pageItem:   "#P3_COMPLAINT_PK",
                            message:    apex.message.showPageSuccess('Alert'),
                            unsafe:     false
                        });
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    apex.message.alert("Error");
                }
            }
        );
    }
});