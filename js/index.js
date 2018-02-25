  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            hoten: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Hãy điền họ và tên của bạn'
                    }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'Hãy điền địa email của bạn'
                    },
                    emailAddress: {
                        message: 'Hãy điền địa chỉ email của bạn'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Hãy điền số điện thoại của bạn'
                    },

                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Hãy điền ngày sinh của bạn'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            University: {
                validators: {
                    notEmpty: {
                        message: 'Hãy chọn trường đại học của bạn'
                    }
                }
            },
            linhvuc: {
                validators: {
                    notEmpty: {
                        message: 'Hãy chọn lĩnh vực bạn quan tâm'
                    }
                }
            },
            totnghiep: {
                validators: {
                    notEmpty: {
                        message: 'Hãy chọn năm tốt nghiệp của bạn'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Hãy nhập ngành học của bạn'

                    }
                }
            },
            doanhnghiep: {
                validators: {
                    notEmpty: {
                        message: 'Hãy nhập tên doanh nghiệp bạn muốn làm việc trong tương lai'

                    }
                }
            }

            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
