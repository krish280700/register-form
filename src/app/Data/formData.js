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
        label: 'Country',
        name: 'country',
        value: '',
        type: 'select',
        dependents:['state'],
        isMultiSelect: false,
        formType: ['Add', 'Edit'],
        options:[],
        placeholder: 'Select your country',
        isRequired: false,
        validations: {}
    },
    {
        label: 'State',
        name: 'state',
        value: '',
        type: 'select',
        isDependent: true,
        dependents: ['city'],
        isMultiSelect: false,
        formType: ['Add', 'Edit'],
        options:[],
        placeholder: 'Select your state',
        isRequired: false,
        validations: {}
    },
    {
        label: 'City',
        name: 'city',
        value: '',
        type: 'select',
        isDependent: true,
        dependents: ['city'],
        isMultiSelect: false,
        formType: ['Add', 'Edit'],
        options:[],
        placeholder: 'Select your city',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Area',
        name: 'area',
        value: '',
        type: 'select',
        isMultiSelect: false,
        isDependent: true,
        dependents: ['postal'],
        formType: ['Add', 'Edit'],
        options:[],
        placeholder: 'Select your area',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Postal Code',
        name: 'postal',
        value: '',
        type: 'select',
        isMultiSelect: false,
        isDependent: true,
        dependents: ['city'],
        formType: ['Add', 'Edit'],
        options:[],
        placeholder: 'Enter your postal code',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Radius',
        name: 'radius',
        value: '',
        type: 'select',
        isMultiSelect: false,
        isDependent: false,
        dependents: [],
        formType: ['Add', 'Edit'],
        options:[{id: '1', name:'25', value: '25'}, {id: '2', name:'50', value: '50'}, {id: '3', name:'75', value: '75'}, {id: '4', name:'100+', value: '100+'}],
        placeholder: 'Select radius that you can provide service',
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
        label: 'Skill',
        name: 'skill',
        value: '',
        type: 'select',
        isDynamicCreate: true,
        isMultiSelect: true,
        formType: ['Add', 'Edit'],
        options:[{label: 'Biriyani', value: 'Biriyani'},{label: 'Chettinadu', value: 'Chettinadu'},{label: 'Hyderabadi', value: 'Hyderabadi'},{label: 'South Indian', value: 'South Indian'}],
        placeholder: 'Select your skill',
        isRequired: false,
        validations: {}
    },
    {
        label: 'Bio',
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