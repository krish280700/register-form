export const formData = [
    {
        label: 'First Name',
        name: 'fName',
        value: '',
        placeholder: 'Enter your First Name',
        type: 'text',
        isRequired: true,
        validations: {required: 'This field is required', minLength:{value:3, message:'Minimum 3 characters required'}, maxLength: {value:20, message:'Maximum 20 characters required'}}
    },
    {
        label: 'Last Name',
        name: 'lName',
        value: '',
        type: 'text',
        placeholder: 'Enter your Last Name',
        isRequired: true,
        validations: {required: 'This field is required',minLength:{value:3, message:'Minimum 3 characters required'}, maxLength: {value:20, message:'Maximum 20 characters required'}}
    },
    {
        label: 'Email',
        name: 'email',
        value: '',
        type: 'email',
        placeholder: 'Enter your email',
        isRequired: true,
        validations: {required: 'This field is required', pattern:{value: /\S+@\S+\.\S+/, message: 'This is not a valid email'} }
    },
    {
        label: 'Contact',
        name: 'contact',
        value: '',
        type: 'text',
        placeholder: 'Enter your Contact Number',
        isRequired: true,
        validations: {pattern: {value:/^(0|[1-9]\d*)(\.\d+)?$/, message:'This field only contains Numbers'}}
    },
    {
        label: 'Password',
        name: 'pwd',
        value: '',
        type: 'password',
        placeholder: 'Set your password',
        isRequired: true,
        validations: {required: 'This field is required',minLength:{value:8, message:'Minimum 8 characters required'}, maxLength: {value:20, message:'Maximum 20 characters required'}}
    },
    {
        label: 'Confirm Password',
        name: 'cpwd',
        value: '',
        type: 'text',
        placeholder: 'Confirm Password',
        isRequired: true,
        validations: {
            required: true,
            validate: (val) => {
                if (watch('pwd') != val) {
                return "Your passwords do no match";
                }
            },
        }
    },
    {
        label: 'DOB',
        name: 'dob',
        value: '',
        type: 'date',
        placeholder: 'mm-dd-yyyy',
        isRequired: true,
        validations: {}
    },
    {
        label: 'Gender',
        name: 'gender',
        value: '',
        type: 'radio',
        options:[{value: 'Male', id: '1'}, {value: 'Female', id: '2'}, {value: 'Others', id: '3'}, {value: 'Prefer not to say', id: '4'}],
        placeholder: '',
        isRequired: true,
        validations: {}
    },
    {
        label: 'Skill',
        name: 'skill',
        value: '',
        type: 'checkbox',
        options:[{value: 'React JS', id: '11'}, {value: 'Vue JS', id: '12'}, {value: 'Node JS', id: '13'}],
        placeholder: '',
        isRequired: true,
        validations: {}
    },
    {
        label: 'Description',
        name: 'description',
        value: '',
        type: 'textarea',
        options:[],
        placeholder: 'If you want to highlight anything, write here!',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Resume',
        name: 'resume',
        value: '',
        type: 'file',
        options: [],
        placeholder: 'Upload your resume here',
        isRequired: true,
        validations: {}
    }
]