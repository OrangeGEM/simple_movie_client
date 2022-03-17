export interface MovieInterface {
    id: number,
    title: string,
    posterUrl: string,
    year: string,
    duration: string,
    rating: string
    cast: Array<string>;
    urls: Array<string>;
}