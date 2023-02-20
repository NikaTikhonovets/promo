import {STATUS} from "@/constants/status";

export const PROFILES = [
    {
        id: 1,
        name: 'Jhon',
        status: STATUS.APPROVED,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\',',
        statistics: [
            {
                color: '#546E7A',
                data: [30, 40, 35, 50, 49, 60, 70, 91]
            },
            {
                color: '#E91E63',
                data: [21, 11, 60, 12, 45, 49, 28, 91]
            },
            {
                color: '#ffaf01',
                data: [65, 40, 35, 50, 49, 60, 70, 91]
            }
        ],
        photo: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    {
        id: 2,
        name: 'Nika',
        status: STATUS.PENDING,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        statistics: [
            {
                color: '#546E7A',
                data: [30, 40, 35, 50, 49, 60, 70, 91]
            },
            {
                color: '#E91E63',
                data: [21, 11, 60, 12, 45, 49, 28, 91]
            },
            {
                color: '#ffaf01',
                data: [65, 40, 35, 50, 49, 60, 70, 91]
            }
        ],
        photo: 'https://xsgames.co/randomusers/avatar.php?g=female',
    },
    {
        id: 3,
        name: 'Keneth Haagen',
        status: STATUS.REJECT,
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        statistics: [
            {
                color: '#546E7A',
                data: [30, 40, 35, 50, 49, 60, 70, 91]
            },
            {
                color: '#E91E63',
                data: [21, 11, 60, 12, 45, 49, 28, 91]
            },
            {
                color: '#ffaf01',
                data: [65, 40, 35, 50, 49, 60, 70, 91]
            }
        ],
        photo: 'https://xsgames.co/randomusers/avatar.php?g=male&3',
    },
    {
        id: 4,
        name: 'Ilona',
        status: STATUS.APPROVED,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
        statistics: [
            {
                color: '#546E7A',
                data: [30, 40, 35, 50, 49, 60, 70, 91]
            },
            {
                color: '#E91E63',
                data: [21, 11, 60, 12, 45, 49, 28, 91]
            },
            {
                color: '#ffaf01',
                data: [65, 40, 35, 50, 49, 60, 70, 91]
            }
        ],
        photo: 'https://xsgames.co/randomusers/avatar.php?g=female&4',
    },
];
