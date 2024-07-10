import Swal from 'sweetalert2'
import imagePath from '@/assets/images/chat-bg.png'
import chatBgBlack from '@/assets/images/chat-bg-black.png'

export const saBasic = (() => {
    Swal.fire({
        title: "Any fool can use a computer",
        confirmButtonColor: "#3085d6",
        showCloseButton: !0,
        closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
        customClass: {
            closeButton: 'btn btn-sm btn-icon btn-danger',
        },
    })
});

export const titleWithText = (() => {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
    });
});

export const successMessage = (() => {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
});

export const modalWithTitle = (() => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
})

export const modalWithLongContent = (() => {
    Swal.fire({
        imageUrl: "https://placeholder.pics/svg/300x1500",
        imageHeight: 1500,
        imageAlt: "A tall image"
    });
});

export const warningWithConfirm = (() => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
});

export const bypassAlertCancel = (() => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
});

export const messageWithCustomHeader = (() => {
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: new URL("/src/assets/images/logo-small.png", import.meta.url),
        imageHeight: 40,
        confirmButtonClass: "btn btn-sm btn-primary",
        animation: !1,
        showCloseButton: !0,
        closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
        customClass: {
            closeButton: 'btn btn-sm btn-icon btn-danger',
        },
    })
});

export const saClose = (() => {
    let timerInterval;
    Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
        clearInterval(timerInterval)
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
    })
});

export const customHtmlAlert = (() => {
    Swal.fire({
        title: "<i>HTML</i> <u>example</u>",
        icon: "info",
        html: 'You can use <b>bold text</b>, <a href="#">links</a> and other HTML tags',
        showCloseButton: !0,
        showCancelButton: !0,
        confirmButtonClass: "btn btn-sm btn-success",
        cancelButtonClass: "btn btn-sm btn-danger",
        confirmButtonText: '<i class="fa-light fa-thumbs-up"></i> Great!',
        cancelButtonText: '<i class="fa-light fa-thumbs-down"></i>',
        closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
        customClass: {
            closeButton: 'btn btn-sm btn-icon btn-danger',
        },
    })
});

export const saDialogThreeBtn = (() => {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: !0,
        showCancelButton: !0,
        confirmButtonText: "Save",
        confirmButtonClass: "btn btn-sm btn-success",
        cancelButtonClass: "btn btn-sm btn-danger",
        denyButtonClass: "btn btn-sm btn-info",
        denyButtonText: "Don't save",
        showCloseButton: !0,
        closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
        customClass: {
            closeButton: 'btn btn-sm btn-icon btn-danger',
        },
    }).then(function(t) {
        t.isConfirmed ? Swal.fire({
            title: "Saved!",
            icon: "success",
            confirmButtonClass: "btn btn-sm btn-primary"
        }) : t.isDenied && Swal.fire({
            title: "Changes are not saved",
            icon: "info",
            confirmButtonClass: "btn btn-sm btn-primary"
        })
    })
});

export const saPosition = (() => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: !1,
        timer: 1500,
        showCloseButton: !0,
        closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
        customClass: {
            closeButton: 'btn btn-sm btn-icon btn-danger',
        },
    })
});

export const customPaddingWidthAlert = (() => {
    Swal.fire({
        title: "Custom width, padding, background.",
        width: 600,
        padding: 100,
        confirmButtonClass: "btn btn-sm btn-primary",
        background: `#112143 url(${imagePath})`,
    })
    if(document.querySelector('body').classList.contains('light-theme')) {
        Swal.fire({
            title: "Custom width, padding, background.",
            width: 600,
            padding: 100,
            confirmButtonClass: "btn btn-sm btn-primary",
            buttonsStyling: false,
            background: `#ffffff url(${chatBgBlack})`
        });
    }
    if(document.querySelector('body').classList.contains('dark-theme')) {
        Swal.fire({
            title: "Custom width, padding, background.",
            width: 600,
            padding: 100,
            confirmButtonClass: "btn btn-sm btn-primary",
            buttonsStyling: false,
            background: `#242526 url(${imagePath})`
        });
    }
});

export const ajaxAlert = (() => {
    Swal.fire({
        title: "Submit email to run ajax request",
        input: "email",
        showCancelButton: !0,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: !0,
        confirmButtonClass: "btn btn-sm btn-primary",
        cancelButtonClass: "btn btn-sm btn-danger",
        showCloseButton: !0,
        closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
        customClass: {
            closeButton: 'btn btn-sm btn-icon btn-danger',
            input: 'form-control form-control-sm',
        },
        preConfirm: function(n) {
            return new Promise(function(t, e) {
                setTimeout(function() {
                    "taken@example.com" === n ? e("This email is already taken.") : t()
                }, 2e3)
            })
        },
        allowOutsideClick: !1
    }).then(function(t) {
        Swal.fire({
            icon: "success",
            title: "Ajax request finished!",
            confirmButtonClass: "btn btn-sm btn-primary",
            html: "Submitted email: " + t
        })
    })
});