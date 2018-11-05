export class Film {
    id: number;
    name: string;
    description: string;
    youtubeId: string;
    rating: number;

    constructor(id: number, name: string, description: string, youtubeId: string, rating: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.youtubeId = youtubeId;
        this.rating = rating
    }
}


