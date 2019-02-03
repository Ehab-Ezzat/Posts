import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts = [
        {
            name: "Ehab",
            text: 'Some Text Here 1',
            img: "../assets/2.jpg",
            video: null,
            date: new Date()
        },
        {
            name: "Abd-Allah",
            text: 'Some Text Here 2',
            img: null,
            video: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4#t=01",
            date: new Date()
        },
        {
            name: "Ahmed",
            text: 'Some Text Here 3',
            img: "../assets/3.jpg",
            video: null,
            date: new Date()
        },
        {
            name: "Mohamed",
            text: 'Some Text Here 4',
            img: null,
            video: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4#t=01",
            date: new Date()
        },
        {
            name: "Mohamed",
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            img: null,
            video: null,
            date: new Date()
        },
    ];

    constructor() {
    }
}
