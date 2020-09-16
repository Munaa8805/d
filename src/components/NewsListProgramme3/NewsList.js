import React from 'react';

import classes from './NewsList.css';
import NewsItem from './NewsItem/NewsItem';
const tv={
    date:["2019.12.9","2019.12.10","2019.12.11","2019.12.12","2019.12.13","2019.12.15","2019.12.16"],
    day:["Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба","Ням"],        
    list:[ [   
           ["9:00-10:00","10:00-10:40","10:40-12:40"],
           ["Амьдрал үргэлж сайхнаарай","Нар гарнаа","Цаг алт"]
          ],
          [   
            ["9:00-10:00","10:00-10:40","10:40-12:40"],
            ["Амьдрал үргэлж сайхнаарай","Нар гарнаа","Цаг алт"]
           ],
           [   
           ["9:00-10:00","10:00-10:40","10:40-12:40"],
           ["Амьдрал үргэлж сайхнаарай","Нар гарнаа","Цаг алт"]
          ],
          [   
            ["9:00-10:00","10:00-10:40","10:40-12:40"],
            ["Амьдрал үргэлж сайхнаарай","Нар гарнаа","Цаг алт"]
           ],
           [   
            ["9:00-10:00","10:00-10:40","10:40-12:40"],
            ["Амьдрал үргэлж сайхнаарай","Нар гарнаа","Цаг алт"]
           ],
           [   
            ["9:00-10:00","10:00-10:40","10:40-12:40"],
            ["Амьдрал үргэлж сайхнаарай","Нар гарнаа","Цаг алт"]
           ],
    [
            ["9:00-10:00","10:00-10:40","10:40-12:40"] ,
            ["Амьдрал sd","Нар гарнаа","Цаг алт"]
        ]
    ]
}



const NewsList = props => {
    return (
        <div className={classes.container}>
            <NewsItem
            
                imgUrl={'http://www.mnb.mn/images/mini/tv.png'}
                newsTitle={'Даваа гариг'}
                newsProg={tv}

            />
           
        </div>
    );
};

export default NewsList;
