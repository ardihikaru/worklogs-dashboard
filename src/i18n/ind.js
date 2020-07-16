// Source: https://github.com/ronadi/ra-language-indonesian
import indonesianMessages from "ra-language-indonesian"

export default {
    simple: {
        action: {
            close: 'Tutup',
            resetViews: 'Réinitialiser des vues',
        },
        'switch-language-str': 'Indonesia to English',
        'logout-button': 'Keluar',
    },
    ...indonesianMessages,
    resources: {
        users: {
            name: 'Data Pengguna |||| Data Pengguna',
            fields: {
                name: 'Nama Lengkap',
                username: 'Nama Pengguna',
                email: 'Email',
            },
        },
        worklogs: {
            name: 'Sejarah Pekerjaan |||| Sejarah Pekerjaan',
            fields: {
                task: 'Pekerjaan',
                description: 'Keterangan',
                work_hours: 'Total jam kerja',
                work_datetime: 'Waktu mulai kerja',
            },
        },
    },
    user: {
        list: {
            search: 'Cari',
        },
        edit: {
            title: 'Nama Pengguna "%{title}"',
        },
    },
    worklogs: {
        list: {
            search: 'Cari',
        },
        edit: {
            title: 'Pekerjaan "%{title}"',
        },
    },
};
