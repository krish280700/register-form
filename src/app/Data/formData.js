export const formData = [
    {
        label: 'First Name',
        name: 'fName',
        value: '',
        placeholder: 'Enter your First Name',
        type: 'text',
        isRequired: true,
        formType: ['Add', 'Edit'],
        validations: {required: 'This field is required', minLength:{value:3, message:'Minimum 3 characters required'}, maxLength: {value:20, message:'Maximum 20 characters'}}
    },
    {
        label: 'Last Name',
        name: 'lName',
        value: '',
        type: 'text',
        placeholder: 'Enter your Last Name',
        isRequired: true,
        formType: ['Add', 'Edit'],
        validations: {required: 'This field is required',minLength:{value:3, message:'Minimum 3 characters required'}, maxLength: {value:20, message:'Maximum 20 characters'}}
    },
    {
        label: 'Email',
        name: 'email',
        value: '',
        type: 'email',
        placeholder: 'Enter your email',
        isRequired: true,
        formType: ['Add', 'Edit'],
        validations: {required: 'This field is required', pattern:{value: /\S+@\S+\.\S+/, message: 'This is not a valid email'} }
    },
    {
        label: 'Contact',
        name: 'contact',
        value: '',
        type: 'text',
        placeholder: 'Enter your Contact Number',
        isRequired: true,
        formType: ['Add', 'Edit'],
        validations: {pattern: {value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, message:'This field is invalid'}, maxLength: {value:12, message:'Maximum 12 characters'}}
    },
    {
        label: 'Password',
        name: 'pwd',
        value: '',
        type: 'password',
        placeholder: 'Set your password',
        isRequired: true,
        formType: ['Add'],
        validations: {required: 'This field is required',minLength:{value:8, message:'Minimum 8 characters required'}, maxLength: {value:20, message:'Maximum 20 characters'}}
    },
    {
        label: 'Confirm Password',
        name: 'cpwd',
        value: '',
        type: 'text',
        formType: ['Add'],
        placeholder: 'Confirm Password',
        isRequired: true,
        validations: {
            required: 'This field is required',
            validate: (val, watch) => {
                if (watch.pwd != val) {
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
        formType: ['Add', 'Edit'],
        placeholder: 'mm-dd-yyyy',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Country',
        name: 'country',
        value: '',
        type: 'select',
        isMultiSelect: false,
        formType: ['Add', 'Edit'],
        options:[{id:21, label: 'USA', value: 'USA'},{id:22, label: 'India',  value: 'India'},{id:23, label: 'China',  value: 'China'},{id:24, label: 'Japan',  value: 'Japan'},{id:25, label: 'Europe',  value: 'Europe'},{id:26, label: 'Australia',  value: 'Australia'}],
        placeholder: 'Select your country',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Language',
        name: 'language',
        value: '',
        type: 'select',
        isMultiSelect: true,
        formType: ['Add', 'Edit'],
        options:[{id:31, label: 'English', value: 'English'},{id:32, label: 'Hindi',  value: 'Hindi'},{id:33, label: 'Tamil',  value: 'Tamil'},{id:34, label: 'Telugu',  value: 'Telugu'},{id:35, label: 'Malayalam',  value: 'Malayalam'},{id:36, label: 'Kannadam',  value: 'Kannadam'}],
        placeholder: 'Select your language',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Gender',
        name: 'gender',
        value: '',
        type: 'radio',
        formType: ['Add', 'Edit'],
        options:[{name: 'Male', id: '1', value: 'male'}, {name: 'Female', id: '2', value: 'female'}, {value: 'others', id: '3', name: 'Others'}, {name: 'Prefer not to say', value: 'pnts', id: '4'}],
        placeholder: '',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Skill',
        name: 'skill',
        value: '',
        type: 'checkbox',
        formType: ['Add', 'Edit'],
        options:[{name: 'React JS', id: '11', value: 'reactjs'}, {name: 'Vue JS', id: '12', value: 'vuejs'}, {name: 'Node JS', id: '13', value: 'nodejs'}],
        placeholder: '',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Description',
        name: 'description',
        value: '',
        type: 'textarea',
        formType: ['Add', 'Edit'],
        options:[],
        placeholder: 'If you want to highlight anything, write here!',
        isRequired: false,
        validations: {}
    },
]