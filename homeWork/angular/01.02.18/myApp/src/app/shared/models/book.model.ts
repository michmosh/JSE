export interface Book   {
    volumeInfo:VolumeInfo;
    saleInfo?:SalesInfo
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export interface VolumeInfo {
    title: string;
    subtitle?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    imageLinks: ImageLinks;
    language?: string;
}

export interface SalesInfo{
    listPrice?: {
        amount?:number,
        currencyCode?:string,
        symbol?:string
    }
}


export interface RootBookObject {
    items: Array<Book>;
}


