import React from 'react';
import classes from './SurveyDetails.css';
import SurveyItem from '../SurveyItem/SurveyItem';

const SurveyDetails = (props) => {
    const survey = [
        {
            surveyId: '1',
            subject: 'Казинотой холбоотой санал асуулга',
            image: 'https://news.mn/wp-content/uploads/2020/01/News153.jpg',
            status: 'closed',
            openDate: '2020.01.15',
            closeDate: '2020.01.20',
            totalCount: '35',
            linkToNews: '',
            questions: [
                {
                    question: 'Хэн нь казино тоглосон гишүүн бэ?',
                    totalCount: '35',
                    choices: [
                        { choice: 'Д.Тогтохсүрэн', count: '13' },
                        { choice: 'Д.Эрдэнэбат', count: '10' },
                        { choice: 'Д.Лүндээжанцан', count: '5' },
                        { choice: 'Хэн нь ч биш', count: '7' }
                    ]
                },
                {
                    question: 'Хэн нь казино тоглосон гишүүн бэ?',
                    totalCount: '35',
                    choices: [
                        { choice: 'Д.Тогтохсүрэн', count: '13' },
                        { choice: 'Д.Эрдэнэбат', count: '10' },
                        { choice: 'Д.Лүндээжанцан', count: '5' },
                        { choice: 'Хэн нь ч биш', count: '7' }
                    ]
                }
            ]
        },
        {
            surveyId: '1',
            subject: 'Казинотой холбоотой санал асуулга',
            image: 'https://news.mn/wp-content/uploads/2020/01/News153.jpg',
            status: 'open',
            openDate: '2020.01.20',
            closeDate: '2020.01.25',
            totalCount: '1478366',
            linkToNews: 'https://ikon.mn/ca/177',
            questions: [
                {
                    question: 'Хэн нь казино тоглосон гишүүн бэ?',
                    totalCount: '35',
                    choices: [
                        { choice: 'Д.ТогтохсүрэнД.ТогтохсүрэнД.ТогтохсүрэнД.ТогтохсүрэнД.Тогтохсүрэн', count: '13' },
                        { choice: 'Д.Эрдэнэбат', count: '10' },
                        { choice: 'Д.Лүндээжанцан', count: '5' },
                        { choice: 'Хэн нь ч биш', count: '7' }
                    ]
                },
                {
                    question: 'Хэн нь казино тоглосон гишүүн бэ?',
                    totalCount: '1478366',
                    choices: [
                        { choice: 'Д.Тогтохсүрэн', count: '1300000' },
                        { choice: 'Д.Эрдэнэбат', count: '100000' },
                        { choice: 'Д.Лүндээжанцан', count: '500' },
                        { choice: 'Хэн нь ч биш', count: '77866' }
                    ]
                }
            ]
        }
    ];

    return (
        <div className={classes.container}>
            <SurveyItem data={survey[props.id]}/>
        </div>
    );
}

export default SurveyDetails;
