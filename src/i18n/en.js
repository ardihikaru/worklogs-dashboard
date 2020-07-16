import englishMessages from 'ra-language-english';

export const messages = {
    simple: {
        action: {
            close: 'Close',
            resetViews: 'Reset views',
        },
        'switch-language-str': 'English to Indonesia',
        'logout-button': 'Logout',
    },
    ...englishMessages,
    resources: {
        users: {
            name: 'User |||| Users',
            fields: {
                name: 'Fullname',
                username: 'Username',
                email: 'Email',
            },
        },
        worklogs: {
            name: 'Worklogs |||| Worklogs',
            fields: {
                task: 'Task',
                description: 'Description',
                work_hours: 'Work Hours',
                work_datetime: 'Work Datetime',
            },
        },
    },
    user: {
        list: {
            search: 'Search',
        },
        edit: {
            title: 'User "%{title}"',
        },
    },
    worklogs: {
        list: {
            search: 'Search',
        },
        edit: {
            title: 'Task "%{title}"',
        },
    },
};

export default messages;
