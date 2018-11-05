export class Video {
    id?: number;
    title?: string;
    description?: string;
    youtubeId?: string;
    rating?: number;

    constructor(video: Video = {} as Video) {

        let {
            id = 0,
            title = '',
            description = '',
            youtubeId = '',
            rating = 0
        } = video;

        this.id = id;
        this.title = title;
        this.description = description;
        this.youtubeId = youtubeId;
        this.rating = rating;
    }
}


