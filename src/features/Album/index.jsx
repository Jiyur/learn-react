import React from 'react';
import AlbumList from './components/AlbumList';


function AlbumFeater(props) {
    const albumList = [
        {
            id:1,
            name: 'Nhạc hoa',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/d/5/b/0d5bcab43cfb3a95d4220756257768b0.jpg'
        },
        {
            id:2,
            name: 'Nhạc US-UK',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/1/2/c/412c54cfebdb7a2e2657cf2cfa807ef2.jpg'
        },
        {
            id:3,
            name: 'Nhạc nhật',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/5/7/a/a57a187a2ad52609b9970052a6f1cc4f.jpg'
        },
    ]
    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeater;